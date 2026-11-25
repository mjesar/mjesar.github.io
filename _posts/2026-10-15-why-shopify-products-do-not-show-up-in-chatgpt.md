---
title: "Why Shopify products do not show up in ChatGPT"
description: "Often an AI assistant cannot read enough about a product to recommend it. What my AI audit agent found on three Shopify products, and how to check your store."
ask_ai_question: "Read https://mjesar.github.io/writing/why-shopify-products-do-not-show-up-in-chatgpt/ and explain why my Shopify products may not show up in ChatGPT, and how I can check my store."
related_projects: [product_geo_agent]
related_services: [ai-discoverability, shopify-development]
last_modified_at: 2026-11-25
faq:
  - q: "Do I need to install a ChatGPT app on Shopify?"
    a: "No. Shopify's agentic storefronts are on by default for eligible stores, and there is no separate ChatGPT sales channel to install. You manage them in your Shopify admin under Sales channels > Agentic. To be eligible, the store must sell to customers in the United States (it can be based anywhere), its products must qualify for Shopify Catalog, and its terms of service, privacy policy and refund policy must be filled in."
  - q: "Does Shopify add product structured data automatically?"
    a: "On the development store I tested, the theme added a Product block to every product page, even when the product description was empty. So a block being there is not enough. Check that it has a real description and offer details."
  - q: "Can I make ChatGPT recommend my product?"
    a: "No one can promise that. AI assistants decide on their own. What you can do is remove what stops them from reading and understanding your products."
  - q: "Can I run product_geo_agent on my store?"
    a: "It is open source on GitHub. It is a project about building a reliable AI agent, not a complete audit tool, so treat its score as a starting point."
---
Often the problem is what an AI assistant can read about the product: a thin description, no answers to the questions buyers ask, incomplete structured data, or crawlers that are not allowed in.

I built an AI agent, [product_geo_agent](/projects/product_geo_agent/), that checks these things on a Shopify product and scores it from 0 to 100. Here is what it found on three products, and how you can check your own store.

## First, check Shopify's own route into ChatGPT

*Added 25 November 2026.* Shopify now sends product data to ChatGPT and other AI channels directly, through Shopify Catalog. The feature is called agentic storefronts, and it is on by default for eligible stores, with nothing to install. A store is eligible when it sells to customers in the United States (the store itself can be based anywhere), its products qualify for Shopify Catalog, and its terms of service, privacy policy and refund policy are filled in. A buyer who picks a product in ChatGPT is sent to the store's own checkout.

You can see it in your Shopify admin under **Sales channels > Agentic**, with sales, orders and sessions for each AI channel. If your store does not sell to US customers, this route does not apply, and the product page is what AI assistants read.

Either way, the catalog carries the same product details as your store. A thin description is thin there too, so the checks below still matter.

## What an AI assistant needs from a product page

Before anything else, the page has to be reachable. If a store's robots.txt blocks OAI-SearchBot, the crawler OpenAI uses for ChatGPT search, that crawler will not read those pages. [My post on GPTBot and robots.txt](/writing/should-i-block-gptbot-in-robots-txt/) covers which bots do what.

After that, my AI agent looks at seven things. The weights are my own choice, not a published standard:

| What it checks | Points |
|---|---|
| Does the description answer common buyer questions? | 20 |
| Description quality and length | 15 |
| FAQ content (a store FAQ page, or a product FAQ) | 15 |
| Complete `Product` structured data | 15 |
| Is the product named when an AI model is asked for a recommendation? | 15 |
| Clear specs and variants | 10 |
| Image alt text | 10 |

The AI model judges the writing. Plain Ruby code does the math, so the score is the same sum every time for the same judgments.

## Three real audits: 70, 33 and 10 out of 100

These are single runs on a Shopify development store with Shopify's sample snowboard products, recorded on 2 October 2026.

| Product | Score | Where it lost points |
|---|---|---|
| The Complete Snowboard | **70 / 100** | Complete `Product` schema. No FAQ (15) and not recommended by the AI model (15). |
| The Videographer Snowboard | **33 / 100** | `Product` schema present, but the text left out buyer details like sizing and binding compatibility (20). No FAQ (15), not recommended (15). |
| The Out of Stock Snowboard | **10 / 100** | Empty description, so it lost points for that and for unanswered buyer questions. `Product` schema present but incomplete. No FAQ. |

Two honest notes. First, single runs move a little: across five evaluation runs, the complete snowboard scored between 65 and 70, because the model rated its specs "fair" three times and "good" twice. Second, the recommendation check is simple. The agent picks a buyer-style category, asks a Gemini model one general question, and checks whether the product name appears in the answer. In a run on 29 September 2026 the question was "What's a good all mountain snowboard you'd recommend?", and the answer named well-known brands instead. Sample products on a test store were never going to be named, so all three lost those 15 points.

## The fixes that matter most

Going by where these three products lost points:

1. **Put the buyer's questions into the description.** Sizing, materials, compatibility, what is included. This was the biggest single loss for the middle product.
2. **Add FAQ content.** A store FAQ page, or FAQs on the product itself.
3. **Make the structured data complete.** The `Product` block needs a real description and offer details, not just a name.
4. **Write alt text** for product images.
5. **Check robots.txt** so the search crawlers you want can reach your pages.
6. **Check your Shopify Catalog eligibility** under Sales channels > Agentic, if you sell to US customers.

## What nobody can promise

Fixing these does not guarantee that ChatGPT, Perplexity or Google AI will recommend a product. Each assistant decides on its own. The fixes remove what stops them from reading and understanding the product.

## How to check your own store

1. **Open Sales channels > Agentic** in your Shopify admin and check whether your store and products are eligible.
2. **Open `yourstore.com/robots.txt`** and look for AI bot names such as OAI-SearchBot, GPTBot or PerplexityBot, and whether they are disallowed.
3. **Read one product page as a buyer.** Write down five questions a buyer would ask, and check whether the page answers each one in text.
4. **Run the product URL through Google's Rich Results Test** and check that the `Product` data has a description and an offer.
5. **Ask ChatGPT or Perplexity** the question your buyer would ask, and note whether your store appears and how it is described.

If you want this done for you, see [AI discoverability](/services/ai-discoverability/) and a [sample report](/services/ai-discoverability/sample-report/).
