---
layout: project
slug: product_geo_agent
title: product_geo_agent
seo_title: "AI Agent for Shopify GEO and AEO: product_geo_agent"
kind: AI agent for GEO and AEO in Ruby on Rails
description: A Rails command-line AI agent that checks whether AI assistants can find and recommend a Shopify product, scores it 0 to 100 and names the top gaps.
image: /assets/img/og/product_geo_agent.png
stack: Ruby 4.0 · Rails 8.1 · little_ghost · Gemini · Shopify Storefront GraphQL API · PostgreSQL · RSpec
repo: https://github.com/mjesar/product_geo_agent
services: [ai-discoverability, ai-in-rails]
jsonld:
  "@context": https://schema.org
  "@type": SoftwareSourceCode
  name: product_geo_agent
  description: A Ruby on Rails AI agent that scores how discoverable a Shopify product is to AI shopping assistants (GEO and AEO), with deterministic scoring and an eval harness.
  codeRepository: https://github.com/mjesar/product_geo_agent
  programmingLanguage: Ruby
  runtimePlatform: Ruby on Rails
  keywords: AI agent, GEO, AEO, generative engine optimization, Shopify, Gemini, tool calling, evals
  url: https://mjesar.github.io/projects/product_geo_agent/
  image: https://mjesar.github.io/assets/img/og/product_geo_agent.png
  author:
    "@type": Person
    "@id": https://mjesar.github.io/#person
    name: Mohammad Ali Jesar
    url: https://mjesar.github.io/
---

## The problem

Shoppers now ask AI assistants what to buy, and a store owner has no easy way to know whether an assistant would recommend their product, or why not. Most "AI readiness" audits are SEO checklists with an AI label. This agent asks the question that is specific to AI discoverability: would an AI assistant actually recommend this product?

**GEO** (generative engine optimization) is about being understood, quoted and recommended by tools like ChatGPT, Gemini and Perplexity. **AEO** (answer engine optimization) is the same idea aimed at direct answers. Classic SEO is about ranking in a list of links. GEO and AEO are about being the answer.

## What I built

An AI agent is a loop, not a single model call: **Context → Reason → Act → Observe → Repeat → Answer.** This one has five tools and decides which to call:

<figure class="diagram"><img src="/assets/img/projects/product_geo_agent.svg" width="820" height="312" loading="lazy" alt="Diagram of the product_geo_agent loop in six steps: 1. context, one Shopify product, 2. reason, Gemini picks the next tool, 3. act, it calls one of five tools, 4. observe, it reads the tool result, 5. repeat until the checks are done, 6. answer, with the score computed in Ruby, not by the model."></figure>

| Tool | What it checks |
|---|---|
| `get_product_data` | Title, description, images and alt text, variants, SEO fields |
| `check_faq_page` | Whether the store has a FAQ page |
| `check_faq_metafield` | A FAQ on the product itself, only when the FAQ page finds nothing |
| `check_structured_data` | `Product` and `FAQPage` JSON-LD on the live product page |
| `check_ai_citation` | Asks an LLM for a recommendation and checks whether the product comes up |

Three real audits on a sandbox store, one run each:

| Product | Score | What the agent found |
|---|---|---|
| The Complete Snowboard | 70 / 100 | Full description and complete `Product` schema. No FAQ, not recommended by AI. |
| The Videographer Snowboard | 33 / 100 | Schema present, but no sizing or binding details. No FAQ, not recommended. |
| The Out of Stock Snowboard | 10 / 100 | Empty description, incomplete schema, no FAQ. |

These are single runs. Across five eval runs the complete snowboard scored between 65 and 70.

## What I verified

- **RSpec** for the tools, the scoring and the agent wiring, run in CI with RuboCop, Brakeman and bundler-audit.
- **Three real audits** on a sandbox store, shown in the table above.
- **Five eval runs per product** with `bin/eval`, against expectations written by hand beforehand (the 65 to 70 range above).
- **Real runs, not only mocks**: running the real agent is what exposed the framework bug below.

## What broke, and what I learned

**A green test suite sat on top of a broken agent.** Every spec passed while a bug in the agent framework silently stopped my hooks (retry handling and tool-result collection among them) from running on real audits. Mocked tests could not catch it, because mocks assume the connection already works. Only running the real agent did. I traced it to three bugs in the `little_ghost` gem, fixed them, and all three fixes were [merged upstream](/projects/#open-source).

**The model could not add.** In one audit the code calculated 75 points lost, but the model wrote "55". Generating text one word at a time is not arithmetic. I moved all math into Ruby and let the model only describe finished, correct results.

## Approach: key decisions

- **Ruby does the math, the model judges.** The model rates three things as poor, fair or good. Plain Ruby computes the score, so the same facts always give the same number.
- **Five small tools, not one big one.** The point is to watch the agent make real decisions, such as falling back from the FAQ page to the FAQ metafield before concluding there is no FAQ.
- **Specs and evals.** RSpec proves the code runs. A separate eval harness (`bin/eval`) runs the real agent several times per product against expectations written by hand beforehand, and reports drift against a saved baseline.
- **Observability.** A live trace shows every tool call, what it found and how long it took, with a redacted JSON-lines trace for debugging.

## Status

Working end to end, with retry and backoff for Gemini rate limits, usage tracking, a CLI with a live trace, and an eval harness. It is a learning project, not a complete GEO audit. It reads one product at a time and never writes to the store.
