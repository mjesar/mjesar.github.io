---
layout: service
slug: ai-discoverability
title: "Shopify GEO & AEO Audits for AI Search"
description: "Assess Shopify product content, FAQs, structured data and AI-search visibility. Get a practical GEO and AEO audit with prioritized improvements."
image: /assets/img/og/ai-discoverability.png
promise: An audit of how AI shopping assistants see your products, then fixes to the product data, FAQ content and structured data they rely on.
contact_ask: your store address and which products matter most
faq:
  - q: "How long until AI assistants show my products?"
    a: "Nobody can give a fixed date. The fixes go live on your store right away, but each AI assistant re-reads stores on its own schedule, and no store owner or developer controls that."
  - q: "Do you need my theme code?"
    a: "Usually not. The audit reads your public product pages and your store data, and most fixes to product data, FAQ content and metafields are made in the Shopify admin. Theme access is only needed when the structured data comes from the theme and has to change."
  - q: "Can you guarantee my store gets recommended?"
    a: "No, and no one can honestly guarantee that. AI assistants decide what to recommend on their own. What I can do is remove the gaps that make your products hard for them to understand and trust, and show you before and after what changed."
  - q: "Is this the same as SEO?"
    a: "No. SEO is about ranking in a list of search results. GEO and AEO are about being the product an AI assistant names in its answer. Some basics overlap, such as structured data, but AI assistants also need clear details and direct answers to shoppers' questions."
---
## Who it is for

E-commerce brands and store owners (merchants), often the marketing team, who want their products to come up when shoppers ask AI assistants what to buy. Most of this work is on Shopify; the same checks apply to other stores.

## Problems I solve

- "ChatGPT does not recommend my products," even when they are a good match for what the shopper asked.
- Product descriptions are missing the details shoppers ask AI assistants about, such as sizing, materials or what is included.
- Common questions about the product are not answered anywhere an AI assistant can read them.
- The structured data on product pages is missing or incomplete.
- You do not know where your products stand today, or which fixes matter most.

## What you get

1. **An audit** of the products you choose:
   - **Product content:** how complete the title, description, specifications, images and alt text, variants and SEO fields are.
   - **FAQ coverage:** whether a store FAQ page and product-level FAQs answer the questions buyers actually ask.
   - **Structured data:** `Product` and `FAQPage` schema.org data (JSON-LD) on the live product page.
   - **Catalog data quality:** product feed and catalog fields, where relevant to your store.
   - **AI search tests:** a defined set of shopper questions asked to selected AI assistants, recording whether each product is found, cited or recommended.
2. **A written report** with a score per product and the gaps listed by impact.
3. **The fixes**, in order of impact: product content, FAQ content and structured data.
4. **A follow-up assessment:** the same audit and the same questions again, so you can see what changed.

An audit improves the information AI assistants read. It cannot guarantee a citation or a recommendation, because each assistant decides those on its own.

## Evidence

- **[product_geo_agent](/projects/product_geo_agent/)**: an AI agent I built that runs these checks on a Shopify product and scores it from 0 to 100. On a sandbox store it scored a complete product at 70 and a product with an empty description at 10, and named the gaps in each.
- **[Structured data (JSON-LD) apps](/projects/#shopify-apps)** for Shopify and BigCommerce, which I contributed to as part of a team.

## How a project runs

1. **Pick the products.** Usually best sellers or one category, so the first results come quickly.
2. **Audit.** The checks above, on your live store.
3. **Report.** What is missing, what to fix first, and why.
4. **Fix.** Changes in your store admin, metafields and structured data, with your approval.
5. **Re-check.** The same audit again, to show the result of the fixes.
