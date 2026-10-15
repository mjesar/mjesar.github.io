---
layout: service
ask_ai_question: "What AI discoverability (GEO and AEO) services does Mohammad Ali Jesar offer at mjesar.github.io/services/ai-discoverability/, and what do the plans cost?"
slug: ai-discoverability
title: "AI Discoverability (GEO/AEO) for Stores and Brands"
description: "Independent GEO/AEO specialist. I audit and fix what stops ChatGPT, Perplexity and Google AI from finding your store or brand. Plans from $200."
image: /assets/img/og/ai-discoverability.png
role: Independent senior AEO and GEO specialist
promise: "Can ChatGPT find your store? Does it describe your brand correctly? I help online stores and brands get found and described correctly by ChatGPT, Perplexity and Google AI."
summary:
  - "**For:** Shopify, BigCommerce and other online stores, and brands."
  - "**You get:** a written report of what AI tools can and cannot see, plus the fixes."
about: "I work on my own, not as an agency. I have 7+ years as a software engineer, 4+ of them building Shopify and BigCommerce apps, with Ruby on Rails and React or Hotwire."
primary_cta_label: Email me
secondary_cta:
  label: See the plans
  url: "#plans"
contact_ask: your store or brand address and which products matter most
contact_template: ai_contact
# Hidden until filled in with real, dated results from the self-audit.
show_results: false
faq:
  - q: "Can you guarantee ChatGPT will recommend my store?"
    a: "No, and nobody honestly can. AI tools decide on their own, based on each platform's systems, the information available and the buyer's question. I fix what blocks them from finding and reading your store or brand, then show you a before and after check."
  - q: "Is this the same as SEO?"
    a: "Not quite. SEO is about rankings on search engines. Generative engine optimization (GEO) and answer engine optimization (AEO) are about how AI tools read, understand and describe you. They overlap, and none of them guarantees a particular result."
  - q: "Do you only work with Shopify?"
    a: "No. I also work with BigCommerce, other online stores and brands."
  - q: "What do I get in the report?"
    a: "A written report: what AI tools can and cannot see, what is blocking them, and a prioritized list of fixes."
  - q: "Do you change my store, or only report?"
    a: "The Audit is the report only. Fix and Complete include the changes, done with your approval."
  - q: "What do you need from me?"
    a: "View access to Google Search Console and Bing Webmaster Tools, store access (a staff or collaborator account) for fixes, your main products or services, and 5 to 10 questions your customers ask."
  - q: "Do you need access to my Shopify theme code?"
    a: "Not always. Many improvements can be made through the Shopify admin, product content, FAQs or structured data. Theme changes are needed when the issue comes from how your storefront renders content or exposes product information."
  - q: "How long until I see a change?"
    a: "Fixes can go live within days. AI tools discover and update information on their own schedule, so I cannot give a date. The Complete plan includes a re-check of the same buyer questions."
  - q: "Do I have to buy a tool?"
    a: "No. The one-time plans need nothing from you."
  - q: "Can you help a brand that has no online store?"
    a: "Yes. I check how assistants such as ChatGPT, Gemini and Perplexity describe your brand today and which sources they rely on, fix unclear or conflicting facts across your site and profiles, and give you a prioritized list of what is left."
---
## How it works: Audit, Fix, Re-check

1. **Audit.** I check what ChatGPT, Perplexity and Google AI can and cannot see on your store or about your brand. For a store, I start with the products that matter most, usually best sellers or one category.
2. **Fix.** I fix what blocks them: store settings that keep AI tools out, missing product and brand facts, and pages that do not answer buyer questions. Every change is made with your approval.
3. **Re-check.** I ask the same buyer questions again and show you the before and after.

## Plans and pricing {#plans}

{% include ai-plans.html %}

Delivery time starts once I have access to your store.

**Bigger catalogs.** The Fix plan covers up to 50 products. For a larger catalog, I start with your best sellers or one category, and quote the rest after the audit, once I know how many products need the same fix.

**Fiverr or this page?** On [Fiverr](https://www.fiverr.com/mjesar){:target="_blank" rel="noopener"} I offer a lighter audit for Shopify stores only. The Audit here adds the full written report, a 30-minute call, and covers BigCommerce, other stores and brands.

**What happens after you contact me.** I usually reply within a few hours. Then a short call or email to agree the scope, then you give me access to your store, then I start the work.

Questions first? Write to [{{ site.data.ai_contact.email }}]({% include mailto.html contact="ai_contact" %}){:target="_blank" rel="noopener"}.

## Who it is for

Shopify and BigCommerce stores, other online stores, and brands with or without a store. The checks are the same everywhere: can AI tools read your pages, and do they get clear, correct facts about you.

## What is AI discoverability?

SEO helps people find your store on Google. GEO and AEO (generative and answer engine optimization) help AI tools find it, understand it and mention it when buyers ask for a recommendation. I call this AI discoverability.

## Problems I solve

- AI assistants do not mention your products, even when they are a good match.
- They describe your brand wrongly, or name competitors instead.
- Your product pages leave out what buyers ask, like sizing, materials or what is included.
- A store setting blocks AI tools from reading your pages, and nobody knows.
- You do not know where you stand, or which fix matters most.

## What I check

- Whether AI tools are allowed to read your store.
- Whether your product pages answer the questions buyers ask.
- Whether your store gives AI tools clean product facts, like price, brand and availability.
- Whether your brand facts match across your website and profiles.
- What ChatGPT, Perplexity and Google AI say today when buyers ask about products like yours.

<details markdown="1">
<summary>Technical details</summary>

- AI crawler rules in robots.txt
- `Product`, `Offer`, `FAQPage` and `Organization` structured data (schema.org, JSON-LD)
- Product feed and catalog fields
- Image alt text and variant names
- An `llms.txt` file

</details>

## Do I need an AI visibility tracker?

Probably not. Trackers such as Promptwatch, Peec AI, Trakkr and HubSpot AEO ask AI assistants your buyers' questions on a schedule and show whether you are named, cited and described correctly. They measure; they do not fix. Most small stores do not need one: a monthly test of about 10 buyer questions gives most of the same information for free. If you want one, I help you choose it and set it up, you hold the subscription in your own name, and I add no markup. Setup of one tracker is included in Complete. In other plans it is charged hourly.

<details>
<summary>Tools I use, and trackers I can set up</summary>
<div class="grid tool-groups">
{%- for g in site.data.ai_tools %}
<article class="card" id="tools-{{ g.id }}">
<h4>{{ g.name }}</h4>
<p class="muted">{{ g.note }}</p>
<ul>
{%- for t in g.tools %}
<li>{{ t }}</li>
{%- endfor %}
</ul>
</article>
{%- endfor %}
</div>
</details>

## Evidence

- **[product_geo_agent](/projects/product_geo_agent/)**: I built an open-source tool that scores a product's AI readiness from 0 to 100. On a test store it scored a complete product 70 and a product with an empty description 10. [How those scores were made](/writing/why-shopify-products-do-not-show-up-in-chatgpt/).
- **[Shopify and BigCommerce apps](/projects/#shopify-apps)**: I worked on apps that add structured data (JSON-LD) to stores.
- **[This website](https://github.com/mjesar/mjesar.github.io){:target="_blank" rel="noopener"}**: the same practices on my own site, with the source code public on GitHub.
- **[A sample report](/services/ai-discoverability/sample-report/)**: what the written report looks like, on a demo store.

Open source: I also fixed three bugs in [little_ghost](/projects/#open-source), the Ruby agent framework product_geo_agent runs on.
{: .muted}

{% if page.show_results %}
## Results from a real store

[TO FILL after my self-audit]
{% endif %}

## The same practices on this website

This site uses the same approach: structured data for who I am and what I offer, the same facts on every profile, answer-first FAQs, and an `llms.txt` file for AI tools. I am re-testing how AI assistants describe me, and I will publish the before and after.

## Not a fit if

- You want guaranteed rankings or AI recommendations. Nobody can promise that.
- You cannot give me access to your store, or it has no real products yet. I can only fix what I can see.
