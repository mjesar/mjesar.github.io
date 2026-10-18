// Checks the built site in _site/ before it is deployed. Run after a build:
//   bundle exec jekyll build && node --test 'test/*.test.mjs'
// Uses only Node's built-in test runner, so there is nothing to install.
// It catches the mistakes that would otherwise go live quietly: a template that
// produces broken JSON, WebMCP tools that stop working, invalid structured data,
// and facts the site must never show.
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, extname } from "node:path";
import vm from "node:vm";

const SITE = new URL("../_site/", import.meta.url).pathname;
const read = (path) => readFileSync(join(SITE, path), "utf8");

function files(dir = SITE, out = []) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) files(path, out);
    else out.push(path);
  }
  return out;
}

test("the site has been built", () => {
  assert.ok(existsSync(join(SITE, "index.html")), "run `bundle exec jekyll build` first");
});

test("generated JSON files are valid", () => {
  for (const path of ["webmcp.json", ".well-known/services.json"]) {
    assert.doesNotThrow(() => JSON.parse(read(path)), `${path} is not valid JSON`);
  }
});

test("every JSON-LD block on every page parses", () => {
  let blocks = 0;
  for (const path of files().filter((f) => extname(f) === ".html")) {
    const html = readFileSync(path, "utf8");
    for (const [, json] of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
      assert.doesNotThrow(() => JSON.parse(json), `invalid JSON-LD in ${path.replace(SITE, "")}`);
      blocks++;
    }
  }
  assert.ok(blocks > 0, "no JSON-LD found at all");
});

test("text files never show the university name", () => {
  const text = files().filter((f) => [".html", ".txt", ".json", ".md", ".xml"].includes(extname(f)));
  for (const path of text) {
    assert.doesNotMatch(readFileSync(path, "utf8"), /Sindh|Agricultur/i, `found in ${path.replace(SITE, "")}`);
  }
});

// Runs the real assets/js/webmcp.js against the built webmcp.json, with a stand-in for
// the browser's document.modelContext. Returns the tools the script registered.
async function registerTools() {
  const html = read("index.html");
  const slugs = html.match(/data-service-slugs="([^"]*)"/)?.[1];
  assert.ok(slugs, "the webmcp.js script tag is missing from the home page");
  const registered = [];
  const context = {
    document: {
      currentScript: { dataset: { serviceSlugs: slugs } },
      modelContext: { registerTool: async (tool) => { registered.push(tool); } }
    },
    navigator: {},
    location: { origin: "https://mjesar.github.io" },
    fetch: async () => ({ ok: true, json: async () => JSON.parse(read("webmcp.json")) }),
    Promise, JSON, Object
  };
  vm.createContext(context);
  vm.runInContext(read("assets/js/webmcp.js"), context);
  await new Promise((resolve) => setTimeout(resolve, 0));
  return { registered, slugs: slugs.split(",") };
}

test("webmcp.js does nothing in a browser without WebMCP", () => {
  const context = { document: { currentScript: null }, navigator: {}, fetch: () => assert.fail("fetched without WebMCP") };
  vm.createContext(context);
  assert.doesNotThrow(() => vm.runInContext(read("assets/js/webmcp.js"), context));
});

test("all five WebMCP tools register as read-only and return data", async () => {
  const { registered } = await registerTools();
  assert.deepEqual(registered.map((t) => t.name).sort(), [
    "get_ai_discoverability_plans", "get_contact_options", "get_resume_summary",
    "get_service_details", "get_services"
  ]);
  for (const tool of registered) {
    assert.equal(tool.annotations?.readOnlyHint, true, `${tool.name} is not read-only`);
    assert.ok(tool.description && tool.inputSchema, `${tool.name} needs a description and input schema`);
    const input = tool.name === "get_service_details" ? { slug: "ai-in-rails" } : {};
    const result = await tool.execute(input, {});
    assert.equal(result.error, undefined, `${tool.name} returned an error`);
    assert.doesNotThrow(() => JSON.stringify(result));
  }
});

test("get_service_details answers every service in its list and rejects others", async () => {
  const { registered, slugs } = await registerTools();
  const details = registered.find((t) => t.name === "get_service_details");
  for (const slug of slugs) {
    const result = await details.execute({ slug }, {});
    assert.equal(result.slug, slug);
    assert.ok(result.how_to_start?.email_link?.startsWith("mailto:"), `${slug} has no email link`);
  }
  const bad = await details.execute({ slug: "banana" }, {});
  assert.equal(bad.error?.code, "unknown_slug");
  assert.deepEqual(bad.error.valid_slugs, slugs);
});

test("tool data matches the site's facts", async () => {
  const { registered } = await registerTools();
  const run = (name) => registered.find((t) => t.name === name).execute({}, {});
  const resume = await run("get_resume_summary");
  assert.equal(resume.education, "B.S. in Information Technology (Software)");
  assert.ok(resume.work_history.length > 0 && resume.profiles.length > 0);
  const plans = await run("get_ai_discoverability_plans");
  for (const plan of plans.items) {
    assert.ok(plan.price_label.startsWith(`$${plan.price.toLocaleString("en-US")} `),
      `${plan.name}: label "${plan.price_label}" does not match price ${plan.price}`);
  }
});

test("email links and links to other sites open in a new tab", () => {
  const own = ["https://mjesar.github.io", "http://localhost", "http://127.0.0.1"];
  const sameTab = [];
  for (const path of files().filter((p) => extname(p) === ".html")) {
    for (const tag of readFileSync(path, "utf8").match(/<a\b[^>]*>/g) ?? []) {
      const href = tag.match(/\shref="([^"]*)"/)?.[1];
      if (!href) continue;
      const leaves = href.startsWith("mailto:") ||
        (/^https?:\/\//.test(href) && !own.some((o) => href.startsWith(o)));
      if (leaves && !/\starget="_blank"/.test(tag)) sameTab.push(`${path.replace(SITE, "")}: ${href}`);
    }
  }
  assert.deepEqual(sameTab, [], "these links open in the same tab");
});

test("structured FAQ answers match the FAQ text visible on the page", () => {
  const entities = { "&amp;": "&", "&quot;": '"', "&#39;": "'", "&rsquo;": "'", "’": "'" };
  const text = (s) => s.replace(/<[^>]+>/g, " ")
    .replace(/&amp;|&quot;|&#39;|&rsquo;|’/g, (m) => entities[m])
    .replace(/\s+/g, " ").trim();
  const mismatches = [];
  for (const path of files().filter((p) => extname(p) === ".html")) {
    const html = readFileSync(path, "utf8");
    const visible = text(html.replace(/<script[\s\S]*?<\/script>/g, ""));
    for (const [, json] of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
      const data = JSON.parse(json);
      for (const item of data["@graph"] ?? [data]) {
        if (item["@type"] !== "FAQPage") continue;
        for (const q of item.mainEntity) {
          const answer = text(q.acceptedAnswer.text).slice(0, 120);
          if (!visible.includes(text(q.name)) || !visible.includes(answer)) {
            mismatches.push(`${path.replace(SITE, "")}: ${q.name}`);
          }
        }
      }
    }
  }
  assert.deepEqual(mismatches, [], "structured FAQ differs from the visible FAQ");
});
