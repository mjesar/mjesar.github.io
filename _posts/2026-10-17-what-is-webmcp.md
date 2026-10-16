---
title: "What is WebMCP? Websites are starting to give AI agents a menu of actions"
description: "WebMCP lets a website hand AI agents a set of ready-made actions, like search products or add to cart, instead of making them read and click the page. What it means for businesses, and how it works."
ask_ai_question: "What services does Mohammad Ali Jesar offer at mjesar.github.io/services/, and who are they for? How can a client work with him?"
image: /assets/img/og/what-is-webmcp.png
image_alt: "Preview card for the article What is WebMCP? Websites are starting to give AI agents a menu of actions, with a list of example actions: search_products, get_price and add_to_cart. @mjesar, mjesar.github.io"
related_projects: [shop_mcp_server]
related_services: [ai-discoverability, ai-in-rails, shopify-development]
faq:
  - q: "What is WebMCP in simple words?"
    a: "It is a way for a website to tell AI agents which actions it offers, such as search products, check the cart or answer a policy question. The agent can then call those actions directly instead of reading the page and guessing which buttons to click."
  - q: "Does Shopify support WebMCP?"
    a: "Yes. Shopify's developer documentation says it provides WebMCP tools on every Liquid storefront, meaning every store built on a Shopify theme, with tools to search the catalog, show product details, manage the cart, go to checkout, open order history and answer policy and FAQ questions. Eligible checkouts add their own tools, and stores with a custom-built Hydrogen storefront can turn WebMCP on."
  - q: "Can WebMCP tools take actions, like adding to a cart?"
    a: "Yes. Shopify's tools can add items to the cart, change quantities and take the shopper to checkout, and its checkout tools can place the order once the buyer confirms it. Tools that change something should check their inputs and leave important decisions, like paying, to the person."
  - q: "Is WebMCP safe? Can an AI agent buy something without me?"
    a: "A website decides which actions it offers, and the agent can only use those. Reading information is low risk. Actions like adding to a cart need more care: the tool should check what the agent sends, and anything important, like paying, should be confirmed by the person. Shopify's checkout tools, for example, place an order only after the agent shows the buyer the order and the total and gets their permission."
  - q: "Do I need WebMCP on my website?"
    a: "If your store runs on a standard Shopify theme, you already have it. For other websites, not yet: in October 2026 only a few AI agents in Chrome and Edge can use it. Start with the basics first: clear product information and pages that AI tools can read, because WebMCP tools can only share the data you have."
  - q: "How is WebMCP different from showing up in ChatGPT or Google?"
    a: "They solve different problems. ChatGPT, Perplexity and Google Search collect page content with their crawlers, and crawlers do not call WebMCP tools, so showing up in their answers depends on clear, complete information on your pages. WebMCP helps later, once an AI agent is already on your site, working for a shopper."
  - q: "Is WebMCP the same as MCP?"
    a: "It comes from the same idea. MCP (Model Context Protocol) is a standard that lets AI apps use tools running on a server. WebMCP brings those tools into the web page itself, so they run in the visitor's browser. In both, each tool has a name, a description, the input it needs and a function that does the work."
  - q: "Which browsers support WebMCP?"
    a: "In October 2026 it is still experimental. Chrome and Edge are testing it with developers and selected websites. Firefox and Safari do not support it yet."
---
Websites were built for people. An AI agent that wants to shop, compare or book something for you has to use them like a person would: look at the page, read the text, guess which button does what, and click. That is slow, it costs money to run, and it can break when the design changes.

WebMCP changes that. A website can now hand AI agents a short list of ready-made actions, such as "search products", "show this product" or "add to cart". The agent calls the action, and the website answers with exact data. No guessing, no clicking. Developers call these actions tools.

Think of a restaurant. Today an AI agent has to walk into the kitchen and work out what is cooking. With WebMCP, the website hands it a menu.

## It is already happening: Shopify turned it on

WebMCP is still a draft standard, but it is already in real use. Shopify's developer documentation says it [provides WebMCP tools on every Liquid storefront](https://shopify.dev/docs/api/web-mcp), which means every store built on a Shopify theme, such as the default Dawn theme. The documentation describes no setup for merchants.

An AI agent visiting a Shopify store can now:

- search the catalog for products, collections, articles and pages,
- get full product details, including variants, prices and stock,
- show a product with a specific variant selected, for example a color,
- see what is in the cart, add or remove items, or empty it,
- take the shopper to checkout, and on eligible checkouts, fill in the checkout and [place the order once the buyer confirms it](https://shopify.dev/docs/agents/carts-and-checkout/checkout-webmcp),
- open the order history page,
- answer questions about policies, such as returns and shipping.

When a cart request is unclear, for example which size to add, the tool returns options to choose from instead of guessing.

I checked this on my own Shopify test store, which runs Dawn, Shopify's free default theme, with nothing installed. Chrome listed 12 tools, a few more than the documentation describes, including `add_to_cart`, `update_cart_lines` and `get_ucp_profile`. The set is clearly still changing.

One of them shows where this is heading. `get_ucp_profile` returns the store's profile for the Universal Commerce Protocol (UCP), a separate standard for AI agents to shop with a store. On my test store it pointed to the store's own service for AI agents (an MCP server) and listed what it supports: catalog search, cart, checkout, shipping, discounts, buyer consent and orders. Shopify's description says agents can use it to discover how to continue a purchase with the store over UCP. So an agent can start on the web page and then move to the store's own commerce services to finish the job.

The tool descriptions are worth reading, because they are written for the AI model (the AI behind the agent, such as Gemini or GPT), not for people. The one for `add_to_cart` tells the agent that the shopper's request is the permission, so it should add the items without asking again. Adding to a cart is easy to undo. Placing the order is treated very differently, as the next section shows.

Shopify notes one limit: agent support is currently only in Chromium-based browsers, such as Chrome and Edge. Still, every standard Shopify store now offers a set of actions to AI agents, without the merchant lifting a finger. That is a strong sign of where websites are going.

## Why it matters

**For business owners and merchants.** An agent that reads your page can misread a price, miss a variant or give up. An agent that calls your tool gets your real price, stock and policies, straight from your system. It can also do something useful, like put the right product in the cart. Your website starts to serve two kinds of visitors: people, and the AI agents working for them.

**For shoppers and customers.** Asking "any waterproof boots in size 42?" and getting a correct answer, with the right pair already in the cart, is faster than clicking through filters.

**For managers and hiring teams.** This is a new kind of interface to plan for, like mobile sites once were. Teams will need people who can decide which actions to offer, describe them clearly and keep them safe.

**For developers.** A tool is a clear contract. A redesign does not have to break it, because the agent no longer depends on where a button sits. And the website, not the agent, decides what is allowed.

| | Without WebMCP | With WebMCP |
|---|---|---|
| How the agent finds a price | Reads the page and hopes it picked the right number | Calls a tool and gets the exact price |
| When the design changes | The agent can break | The tools still work |
| Taking an action | Clicks buttons and hopes they do what they look like | Calls an action like "add to cart" with checked input |
| Who decides what is allowed | The agent | The website |

## How it works, in one picture

<figure class="diagram"><picture><source media="(max-width: 560px)" srcset="/assets/img/writing/webmcp-how-it-works-narrow.svg" width="420" height="820"><img src="/assets/img/writing/webmcp-how-it-works.svg" width="820" height="600" loading="lazy" alt="Diagram of how WebMCP works, using an example online store open in a browser with an AI agent side panel. 1. The web page registers its tools, such as search_products, get_price and add_to_cart. 2. A shopper asks the agent: any waterproof boots in size 42? 3. The AI model picks the search_products tool and the agent calls it. 4. The page runs the tool with its own code and returns data: 2 boots found. 5. The agent answers: yes, 2 pairs in size 42."></picture></figure>

<details markdown="1">
<summary>Text version of the diagram</summary>

An example online store is open in the browser, with an AI agent in a side panel.

1. **The page registers its tools.** When it loads, the page tells the browser which actions it offers, such as `search_products`, `get_price` and `add_to_cart`. Each tool has a name, a description and a list of the input it needs.
2. **The shopper asks the agent:** "Any waterproof boots in size 42?"
3. **The AI model picks a tool.** It chooses `search_products`, and the agent calls it.
4. **The page returns data.** The tool runs as the page's own code and returns the result: 2 boots found.
5. **The agent answers:** "Yes, 2 pairs in size 42."

The AI model never touches the page directly. It can only ask for a tool by name, and the website's own code does the work.

</details>

In plain steps:

1. **The website offers its tools.** When the page loads, it tells the browser which actions it has. Each action has a name, a plain description of what it does, and a list of the input it needs, such as a search phrase or a size.
2. **A person asks an AI agent.** The agent runs in the browser, for example as a side panel.
3. **The AI model picks an action.** The agent shows the model the question and the list of actions. The model chooses one, the way you would choose a dish from a menu.
4. **The website does the work.** The browser runs the action with the website's own code and sends back the result.
5. **The agent answers.** The model turns the result into a reply.

WebMCP comes from the same idea as MCP (Model Context Protocol), the standard many AI apps use to connect to tools on a server. I built one of those for a store in [shop_mcp_server](/projects/shop_mcp_server/). The difference is where the tools live: an MCP server runs on a server, and WebMCP tools are offered by the web page itself.

## Reading is easy, doing needs care

Some tools only read, like "show product details". Others change something, like "add to cart". Tools that change something need more care:

- **Ask the person for important steps.** Paying, cancelling an order or anything that cannot be undone should be confirmed by the person, not decided by the AI model. Shopify shows both sides. Its `add_to_cart` tool does not ask again, because adding to a cart is easy to undo. Its checkout tool places an order only after the agent shows the buyer the order and the total and gets their permission, and if the total changes, it must ask again. Steps like signing in to Shop Pay or a payment check stay with the buyer on the checkout page.
- **Check the input.** The AI model fills in the details, so the tool should check them: a real product, a sensible quantity.
- **Label what each tool does.** WebMCP lets a website mark tools as read-only, or as having real effects, so agents can be careful with them.
- **Keep the website's own rules.** A tool's description and labels do not give anyone permission to do anything. The tool must apply the same login, permission and business rules as the rest of the website.

## What I built on this website

To learn WebMCP properly, I added it to this website. It offers five read-only tools, so an agent can look things up but never change anything:

| Tool | What an agent gets |
|---|---|
| `get_services` | The four services I offer, who each is for, and the page link |
| `get_service_details` | One service in detail: what is included, who it is for, how to start |
| `get_ai_discoverability_plans` | Every plan with its price, delivery time and what is included |
| `get_contact_options` | My email, links a person can open to write to me, my location and working hours |
| `get_resume_summary` | My role, experience, skills, selected projects and education |

If an agent needs to contact me, the tool gives it a link for the person to open. Nothing is sent by the tool itself.

Every page of this website, including this one, offers these five tools. In a browser with WebMCP turned on, an AI agent can use them right away.

### For developers: how it is built

The script checks that the browser supports WebMCP and stops otherwise, so every other browser is unaffected:

```js
var mc = document.modelContext || navigator.modelContext;
if (!mc || typeof mc.registerTool !== "function") return;
```

Each tool is a plain object: a name, a description for the model, a JSON Schema for its input, and a function to run:

```js
mc.registerTool({
  name: "get_service_details",
  description: "Returns one service in detail: summary, what is included, who it is for, how to start and the page URL. Use a slug from get_services.",
  inputSchema: {
    type: "object",
    properties: { slug: { type: "string", enum: slugs } },
    required: ["slug"]
  },
  execute: withData(function (data, input) { /* find the service */ }),
  annotations: { readOnlyHint: true }
});
```

- The `enum` tells the model the four real services. The browser does not enforce it, so the tool checks the input itself and answers a wrong value with an error listing the valid options, so the model can try again.
- The function returns a plain object. The browser turns it into JSON for the agent. Shopify's tools return the MCP result format instead (`content` plus `structuredContent`). Both work.
- Prices and descriptions are not copied into the JavaScript. Jekyll builds a `webmcp.json` file from the same data files that drive the pages, so the tools and the pages always show the same facts. The tools fetch it only the first time an agent calls one.
- The whole thing is one 4.4 KB JavaScript file and one template, with no package to install. WebMCP is built into the browser.

The API follows the [WebMCP draft](https://webmachinelearning.github.io/webmcp/) from the W3C Web Machine Learning Community Group, dated 15 October 2026. It is not a final standard yet, and it has already changed once: older examples use `navigator.modelContext`, the current draft uses `document.modelContext`, and in Chrome 155 only `document.modelContext` exists.

## What a real test showed

I tested it in Chrome 155 with the [WebMCP testing flag](https://developer.chrome.com/docs/ai/webmcp) turned on, using Google Chrome Labs' [WebMCP extension](https://github.com/GoogleChromeLabs/webmcp-extension) with Gemini as the AI model.

The extension found all five tools. When I asked about the AI discoverability plans, its log showed two calls to the model:

1. **The model picked a tool.** It received my question and the list of tools, and answered only with "call `get_ai_discoverability_plans`" (about 2.4 seconds).
2. **The model wrote the answer.** The tool ran on the page, and the model turned the plan data into a reply (about 7.5 seconds).

These timings come from one test, not a benchmark.

Four things I learned:

- **The description decides.** When I asked the agent to "say hello to me", it ignored a test tool called `say_hello` and simply answered by itself. If a description is vague, the agent may never use the tool.
- **Tools live only as long as the page.** A test tool I added by hand disappeared after a page reload. The website's own tools come back because the page registers them on every load.
- **The page does not need to know which AI is used.** The extension translated my tools into the format Gemini expects. The same page would work with another agent or model.
- **The browser does not check the input for you.** In a second test, I called the tools directly in the browser and sent a service name that does not exist. Chrome passed it straight to my tool, even though the tool's input rules list the valid names. The tool's own check caught it and answered with the correct options. Every tool has to check its own input.

## What it does not do yet

- **Few people can use it today.** WebMCP is experimental. It works in Chrome with a testing flag, or on websites in a trial program (an origin trial) from Chrome 149, and in Edge through the same kind of trial from Edge 150. Firefox and Safari do not support it. The [implementation status page](https://github.com/webmachinelearning/webmcp/blob/main/implementation-status.md) keeps the current list.
- **It does not help with search crawlers.** ChatGPT, Perplexity and Google Search collect page content with their crawlers, and crawlers do not call WebMCP tools. The tools only work for an AI agent acting inside a browser that supports WebMCP. For crawlers, clear page text and structured data (labels search engines read) still matter most. An [llms.txt](/llms.txt) file, a summary written for AI tools, can also help.
- **Tools can only share the data you have.** If a product has a thin description or a missing size, the tool hands that same gap to the agent.

## What to do now

- **If you run a Shopify store on a standard Liquid theme:** you already have WebMCP tools. Hydrogen stores can turn them on. The best thing you can do is make the data behind them good: clear product titles and descriptions, correct variants and stock, and written return and shipping policies. My [AI discoverability](/services/ai-discoverability/) work covers exactly that.
- **If you run another kind of website:** start small. A few read-only tools, like your services, prices and contact options, are a safe first step. Add actions later, with confirmation for anything important.
- **If you are hiring or planning:** expect AI agents to become a normal kind of visitor. Treat the actions you offer them as part of your product.

If you want WebMCP tools on your own website or Rails app, see [AI engineering and integration](/services/ai-in-rails/), or [Shopify and e-commerce development](/services/shopify-development/) for stores.
