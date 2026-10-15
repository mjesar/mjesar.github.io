---
title: "Sample AI Readiness Audit Report"
description: "A sample AI readiness audit report on a demo store, with a prioritized fix list. Illustrative data only."
---
<div class="hero small">
  <div class="wrap">
    <div class="bar" aria-hidden="true"></div>
    <p class="eyebrow"><a href="/services/ai-discoverability/">AI discoverability</a> · Sample</p>
    <h1>Sample AI readiness audit report</h1>
    <p class="lede">What the written report from an Audit looks like. The store and every finding below are made up for illustration. This is not a real client.</p>
  </div>
</div>

<main class="wrap prose" markdown="1">

<div class="callout" markdown="1">
**SAMPLE, illustrative data only.** "Demo Outdoor Co." is a fictional Shopify store. A real report uses your store, your products and your buyer questions.
</div>

## Summary

AI tools can reach the demo store, but they cannot read much of it. Two product pages have no product structured data, sizes and materials are missing from most descriptions, and the return policy is only in an image. The three HIGH fixes below would close most of the gap.

## What AI tools can and cannot see

| Area | What AI tools need | What the demo store shows | Status |
|---|---|---|---|
| Crawler access | AI search bots allowed in robots.txt | Search bots allowed; one old rule blocks a whole collection | Partly |
| Product schema | `Product` data with offer, brand and availability on every product page | Present on 8 of 10 checked products; brand missing on all | Partly |
| Product attributes | Material, size and use stated in text | Material on 3 of 10, size on 4 of 10 | Cannot see |
| FAQ and policy content | Shipping, returns and sizing answered in text | Returns policy is an image; no FAQ page | Cannot see |
| Sitemap and URLs | A sitemap listing products, clean product URLs | Sitemap present; product URLs clean | Can see |

## Prioritized fix list

| Priority | Fix | Why it matters |
|---|---|---|
| HIGH | Remove the robots.txt rule that blocks the `/collections/sale` collection | AI tools cannot read those products at all |
| HIGH | Add material and size to the 10 checked product descriptions | These are the details buyers ask AI assistants about |
| HIGH | Put the returns policy in text, and add an FAQ page | An image cannot be read as a policy |
| MED | Add the missing `Product` structured data to two products, and `brand` to all | Gives AI tools clear, structured facts |
| MED | Add `Organization` structured data with links to the store's profiles | Helps AI tools describe the brand consistently |
| LOW | Write alt text for the main product images | Adds detail where descriptions are thin |

## Buyer questions tested

A real report lists 5 to 10 buyer questions, the AI assistants they were asked in, and whether the store was found, cited or recommended, with how it was described. The Complete plan repeats the same questions after the fixes.

## What happens next

On the Audit plan, you get this report and a 30-minute call to walk through it. On the Fix and Complete plans, I make the changes with your approval. See the [plans and pricing](/services/ai-discoverability/#plans).

</main>
