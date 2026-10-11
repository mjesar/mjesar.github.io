---
layout: service
slug: shopify-development
title: "Shopify and E-commerce Development: Apps, Checkout and Integrations"
description: "Shopify and e-commerce development: custom and public Shopify apps, Checkout UI Extensions, Shopify Functions, BigCommerce apps and Amazon SP-API data sync."
image: /assets/img/og/shopify-development.png
promise: Shopify and BigCommerce apps, checkout customization and integrations that keep products, inventory and orders correct everywhere you sell.
contact_ask: your store or app and what it needs to do
faq:
  - q: "What is the difference between Shopify Functions and Checkout Extensibility?"
    a: "Checkout Extensibility is Shopify's overall way to customize checkout, and Functions are one part of it. Checkout UI Extensions change what the buyer sees, such as extra fields or messages. Shopify Functions change the logic underneath, such as discounts, delivery options and payment options, and run on Shopify's own servers. Many checkout projects need both."
  - q: "Can you migrate our Shopify Scripts to Shopify Functions?"
    a: "Yes. I rebuild each script's discount, shipping or payment logic as a Shopify Function, test it on a development store against how the script behaved, and then switch over."
  - q: "Can you take over a Shopify app someone else built?"
    a: "Yes. I start by reading the code and checking how it uses the Shopify APIs, access scopes and webhooks, then fix or extend it in small, tested changes."
  - q: "How do you keep inventory in sync between systems?"
    a: "With webhooks, so each change is picked up as it happens, and background jobs that retry when an API call fails. Updates are written so that running one twice does no harm, because webhooks and retries can deliver the same change more than once."
---
## Who it is for

Store owners (merchants) on Shopify or BigCommerce, Shopify app companies, and agencies that build for Shopify stores, who want a Shopify developer that has shipped apps to the Shopify App Store.

## Problems I solve

- Your store needs a feature that no existing app provides.
- Your checkout needs custom fields, rules, discounts or delivery and payment options.
- Your discount, shipping or payment logic still lives in Shopify Scripts and needs to move to Shopify Functions.
- You sell wholesale on Shopify Plus and need B2B behavior that the built-in features do not cover.
- Products, inventory or orders get out of sync between your store and other stores, marketplaces or systems.
- Your team spends hours on manual store work that an automated workflow could handle.
- Your Amazon listings fall behind your store, and keeping them up to date is manual work.
- You want AI shopping features that answer from your real catalog.

## What I build

- **Custom and public Shopify apps** with Polaris and App Bridge, on the Admin and Storefront APIs (REST and GraphQL), with webhooks, through to App Store publishing.
- **Checkout customization** with Checkout UI Extensions and Shopify Functions (discounts, delivery and payment customizations), including migrations from Shopify Scripts.
- **Shopify Plus B2B** features for wholesale buyers.
- **Storefront features** with Theme App Extensions and Liquid.
- **BigCommerce apps** on the Catalog, Orders and Checkout APIs.
- **Amazon SP-API integrations** for listings, variants and images.
- **Workflow automation and data sync** for products, inventory and orders, with webhooks and background jobs that retry safely, replacing manual work.
- **AI shopping features** on top of a store's catalog, see [AI engineering](/services/ai-in-rails/).

## Evidence

- **[Five apps on the Shopify App Store](/projects/#shopify-apps)**, three of them also on BigCommerce, which I contributed to as part of a team: structured data and SEO, real-time product, inventory and order sync between stores, country-based redirects, and fake email detection on orders.
- **An Amazon import and sync system** on SP-API that keeps listings, variants and images in step between Amazon and e-commerce stores (client work, not public).
- **4+ years building Shopify and BigCommerce apps** in Rails and React for US clients (MGLogics, 2021 to 2026).
- **[ai_shop_assistant](/projects/ai_shop_assistant/)**: a shopping chat that answers from Shopify's live Catalog API over MCP, with real products, prices and links.

## How a project runs

1. **Understand the gap.** What the store or app needs, and whether a Shopify setting or an existing app already covers it, so you do not pay for code you do not need.
2. **A written plan.** Which APIs, extensions, webhooks and access scopes are involved, and the risks I can see.
3. **Build on a development store.** Small, tested changes you can try before anything touches your live store.
4. **Launch.** Installed on your store, or submitted for App Store review for a public app.
5. **Support after launch.** Fixes and changes as Shopify's APIs and your store evolve.
