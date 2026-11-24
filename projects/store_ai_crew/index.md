---
layout: project
slug: store_ai_crew
title: store_ai_crew
seo_title: "n8n and AI Workflow Automation for Shopify: store_ai_crew"
kind: AI team for a Shopify store, on n8n and Ruby on Rails (in progress)
description: An AI team that finds where a Shopify store is quietly losing sales, drafts the fix and waits for the owner's approval. Self-hosted n8n runs the workflows, Rails agents do the AI work.
image: /assets/img/og/store_ai_crew.png
stack: n8n (self-hosted) · Docker Compose · Shopify Admin API (GraphQL) and webhooks · Cloudflare Tunnel · Slack · Ruby on Rails agents (planned)
repo: https://github.com/mjesar/store_ai_crew
services: [ai-in-rails, shopify-development]
jsonld:
  "@context": https://schema.org
  "@type": SoftwareSourceCode
  name: store_ai_crew
  description: An AI team for a Shopify store that finds where it is losing sales, drafts the fix and waits for the owner's approval. Self-hosted n8n is the workflow backbone; Ruby on Rails agents do the AI work. Built in four phases.
  codeRepository: https://github.com/mjesar/store_ai_crew
  programmingLanguage: Ruby
  keywords: n8n, workflow automation, AI agents, Shopify webhooks, human in the loop, Ruby on Rails, Slack
  url: https://mjesar.github.io/projects/store_ai_crew/
  image: https://mjesar.github.io/assets/img/og/store_ai_crew.png
  author:
    "@type": Person
    "@id": https://mjesar.github.io/#person
    name: Mohammad Ali Jesar
    url: https://mjesar.github.io/
---

<div class="callout"><p><strong>In progress.</strong> Phase 1 of 4, the workflow backbone, is nearly done: Shopify events reach a self-hosted n8n safely and turn into alerts on the owner's phone. It has no AI yet, on purpose. The AI agents come in phases 2 to 4. This page marks what works today and what is planned.</p></div>

## The problem

A small store has no operations team. A product sells out at midnight and stays sold out for three days. A one-star review sits unanswered where every visitor can read it. An AI shopping assistant is asked for a waterproof jacket and cannot find the one the store sells, because the size and returns details are missing.

None of these show up as an error. They are sales the owner never knew were lost.

## The idea

A small crew of AI agents watches for those moments. Each one drafts a fix, such as a reorder email, a reply to the review or a corrected product description. Then it stops and asks. The owner gets a message on their phone and approves or rejects it. Nothing changes in the store without that approval.

Two parts share the work:

- **n8n is the backbone.** It listens for store events, makes sure each one is handled once, retries what fails, waits for the owner and carries out the approved action.
- **Ruby on Rails agents do the thinking.** They read the store data, work out what matters and write the draft.

## What works today

Phase 1 builds the part every later agent depends on: receiving store events reliably.

- **Self-hosted n8n** in Docker Compose, on the latest stable release, with secrets kept out of git.
- **Shopify webhooks over a public HTTPS address**, through a Cloudflare Tunnel, so the same address works on a laptop, a test server and a cloud machine.
- **Signature check.** Every webhook is verified against Shopify's HMAC signature, so a made-up request to the public address is rejected.
- **No duplicate alerts.** Shopify can deliver the same event more than once. Each delivery ID is remembered, so one stock change sends one alert, even after a restart.
- **A useful low-stock alert.** When stock drops below a threshold, n8n looks up the product through the Admin API and sends a Slack message with the product, the quantity left and a link to it in Shopify admin.
- **Failures are seen, not silent.** Outside calls retry, a GraphQL error is treated as a failure, and an error workflow posts every failed run to Slack.
- **Rebuildable from the repo.** The workflows are exported to the repository with a restore script, and a fresh n8n has been rebuilt from them in a rehearsal.

Now in progress: running the stack on a hardened server reached only over a private network (Tailscale), then on a free cloud machine, so alerts keep working with the laptop closed.

## Approach: key decisions

- **No AI in phase 1.** The part that receives events, avoids duplicates and recovers from failures has to be trusted before an agent depends on it.
- **n8n for the plumbing, Rails for the judgment.** Triggers, schedules, retries and approvals are what n8n does well. Reading store data and drafting fixes is application logic, so it lives in tested Rails code.
- **The owner approves every change.** Agents draft; a person decides. The approval step is part of the design from the start, not added later.
- **Security checks first.** The signature is verified before anything else runs, and delivery IDs are only remembered after that check, so nobody can fill the history with fake requests.
- **Free tiers only.** A Shopify development store, self-hosted n8n, a free Slack workspace, a free LLM tier and a free cloud machine, so anyone can run all of it at no cost.

## Roadmap

| Phase | What it adds | Status |
|---|---|---|
| 1. Backbone | Self-hosted n8n, Shopify webhooks, Slack alerts, one low-stock workflow. No AI yet. | Nearly done |
| 2. Ops agent | An agent drafts a supplier reorder or a review reply; the owner approves from the phone. | Planned |
| 3. AI mystery shopper | AI shoppers test the store every night, a second agent drafts fixes, and the same shoppers run again to prove the fix worked. | Planned |
| 4. Proof page | Pass rate over time, cost per run, traces, and two models compared. | Planned |

It reuses my earlier projects: [ai_shop_assistant](/projects/ai_shop_assistant/) for the shopping agent, [product_geo_agent](/projects/product_geo_agent/) for the audit logic and [shop_mcp_server](/projects/shop_mcp_server/) for the store tools. Progress is tracked step by step in the [repo](https://github.com/mjesar/store_ai_crew).
