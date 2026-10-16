// Experimental WebMCP tools (https://webmachinelearning.github.io/webmcp/).
// In browsers that support WebMCP, this registers five read-only tools a browser AI
// agent can call to read this site's services, plans, contact options and resume
// summary. The tools only return data and links for a person to open: they never
// submit a form, send email, open a window or change anything.
// The data is /webmcp.json, generated at build time from _data/, and is fetched from
// this site only when an agent first calls a tool. Other browsers skip all of this.
(function () {
  "use strict";

  var mc = document.modelContext || navigator.modelContext;
  if (!mc || typeof mc.registerTool !== "function") return;

  var script = document.currentScript;
  var slugs = ((script && script.dataset.serviceSlugs) || "").split(",").filter(Boolean);
  var cached = null;

  function load() {
    if (!cached) {
      cached = fetch("/webmcp.json", { credentials: "omit" }).then(function (r) {
        if (!r.ok) throw new Error("HTTP " + r.status);
        return r.json();
      });
      cached.catch(function () { cached = null; });
    }
    return cached;
  }

  function fail(code, message, extra) {
    return { error: Object.assign({ code: code, message: message }, extra || {}) };
  }

  // Runs a tool body against the site data and turns a failed fetch into an error object.
  function withData(body) {
    return function (input) {
      return load().then(function (data) { return body(data, input || {}); }, function () {
        return fail("data_unavailable", "Could not load the site data. Try again, or read the page linked in the source.", { source: location.origin + "/" });
      });
    };
  }

  var noInput = { type: "object", properties: {}, additionalProperties: false };

  var tools = [
    {
      name: "get_services",
      title: "List services",
      description: "Lists the services Mohammad Ali Jesar offers, with a one-line summary, who each is for and the page URL.",
      inputSchema: noInput,
      execute: withData(function (data) {
        return {
          services: data.services.map(function (s) {
            return { slug: s.slug, name: s.name, summary: s.summary, for: s.for, url: s.url };
          })
        };
      })
    },
    {
      name: "get_service_details",
      title: "Get service details",
      description: "Returns one service in detail: summary, what is included, who it is for, how to start and the page URL. Use a slug from get_services.",
      inputSchema: {
        type: "object",
        properties: {
          slug: { type: "string", enum: slugs, description: "The service slug." }
        },
        required: ["slug"],
        additionalProperties: false
      },
      execute: withData(function (data, input) {
        var s = data.services.filter(function (x) { return x.slug === input.slug; })[0];
        if (!s) {
          return fail("unknown_slug", "No service has the slug " + JSON.stringify(input.slug) + ".", {
            valid_slugs: data.services.map(function (x) { return x.slug; })
          });
        }
        return s;
      })
    },
    {
      name: "get_ai_discoverability_plans",
      title: "Get AI discoverability plans",
      description: "Returns every AI discoverability (GEO and AEO) plan with its price in USD, delivery time, what is included, any badge and the page URL.",
      inputSchema: noInput,
      execute: withData(function (data) { return data.plans; })
    },
    {
      name: "get_contact_options",
      title: "Get contact options",
      description: "Returns how to contact Mohammad Ali Jesar: email, prefilled email links for a person to open, location and working hours. Sends nothing.",
      inputSchema: noInput,
      execute: withData(function (data) { return data.contact; })
    },
    {
      name: "get_resume_summary",
      title: "Get resume summary",
      description: "Returns a resume summary for Mohammad Ali Jesar: role, location, years of experience, skills, selected projects and education.",
      inputSchema: noInput,
      execute: withData(function (data) { return data.resume; })
    }
  ];

  tools.forEach(function (tool) {
    tool.annotations = { readOnlyHint: true };
    try {
      Promise.resolve(mc.registerTool(tool)).catch(function () {});
    } catch (e) { /* an older or changed API shape: skip quietly */ }
  });
})();
