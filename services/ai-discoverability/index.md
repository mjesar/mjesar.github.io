---
layout: service
slug: ai-discoverability
title: "Shopify GEO & AEO Audits for AI Search"
description: "Assess Shopify product content, FAQs, structured data and AI-search visibility. Get a practical GEO and AEO audit with prioritized improvements."
image: /assets/img/og/ai-discoverability.png
promise: An audit of how AI shopping assistants see your products, then fixes to the product data, FAQ content and structured data they rely on.
contact_ask: your store address and which products matter most
faq:
  - q: "How long will it take for AI assistants to show my products?"
    a: "There is no guaranteed timeline. Different AI assistants discover and update product information in different ways, and changes to your store may not appear immediately. I can identify and fix technical and content gaps, but I cannot control when a particular assistant updates its information."
  - q: "Do you need access to my Shopify theme code?"
    a: "Not always. Many improvements can be made through the Shopify admin, product content, FAQs or structured data. Theme changes are needed when the issue comes from how your storefront renders content or exposes product information."
  - q: "Can you guarantee that AI assistants will recommend my products?"
    a: "No. AI recommendations depend on each platform's systems, the information available, the shopper's question and other factors outside a store owner's control. I can audit and improve your product information and test defined queries, but I cannot guarantee recommendations or rankings."
  - q: "Are GEO and AEO the same as SEO?"
    a: "They overlap, but they are not the same. SEO helps pages appear in search results. Generative Engine Optimization (GEO) and Answer Engine Optimization (AEO) make information easier for AI-powered search and answer systems to discover, understand and use. None of these approaches guarantees a particular result."
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
