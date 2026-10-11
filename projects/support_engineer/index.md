---
layout: project
slug: support_engineer
title: support_engineer
seo_title: "AI Support Agent in Ruby on Rails: support_engineer"
kind: Production-style AI support agent in Ruby on Rails (in progress)
description: A Rails support agent that investigates customer problems, checks real order data and takes safe actions only with human approval. Built lesson by lesson.
image: /assets/img/og/support_engineer.png
stack: Ruby 4.0 · Rails 8.1 · PostgreSQL · RubyLLM · Groq · RSpec · VCR · MCP and pgvector (planned)
repo: https://github.com/mjesar/support_engineer
services: [ai-in-rails, rails-development]
jsonld:
  "@context": https://schema.org
  "@type": SoftwareSourceCode
  name: support_engineer
  description: A production-style AI support agent in Ruby on Rails that investigates orders, searches company policies and asks a human before it acts. A learning project built in 14 lessons.
  codeRepository: https://github.com/mjesar/support_engineer
  programmingLanguage: Ruby
  runtimePlatform: Ruby on Rails
  keywords: AI agent, customer support, human in the loop, RAG, MCP, evals, Ruby on Rails
  url: https://mjesar.github.io/projects/support_engineer/
  author:
    "@id": https://mjesar.github.io/#person
---

<div class="callout"><p><strong>In progress.</strong> Lessons 1 to 3 of 14 are done: real and planted data, the first LLM call, and four read tools the model chooses between. A hand-written agent loop, an MCP server, policy search, approvals and evals come next. This page marks what works today and what is planned.</p></div>

## The problem

Most AI support demos are chatbots that sound confident and guess. A real case needs more than a fluent answer:

> "My order #1042 has not arrived and it has been two weeks. If it is lost, please send a replacement."

To answer correctly, a system has to look up the order, check the shipment, find the lost-package rule in the shipping policy, decide whether a replacement is allowed, and get a person to approve it before anything changes. Then it has to cite where each fact came from.

## What it will do

<figure class="diagram"><img src="/assets/img/projects/support_engineer.svg" width="820" height="342" loading="lazy" alt="Flow diagram of support_engineer in six steps, with built and planned steps marked: 1. a customer message about an order (built), 2. routing to order data, policy or both (planned), 3. read tools for order, shipment and customer (built), 4. policy search with RAG (planned), 5. a person approves any write (planned), 6. an answer that cites the order and the policy (planned)."></figure>

1. **Route:** decide whether the message needs order data, policy, or both.
2. **Act:** call read tools such as `get_order` and `get_shipment`.
3. **Retrieve:** search policy documents (RAG) for the relevant rule.
4. **Decide:** a replacement or refund is a write action, so it needs approval.
5. **Ask for approval:** a support person sees the proposed action with the evidence.
6. **Execute and audit:** the action runs and is written to an audit log.
7. **Answer:** the reply cites the order status and the policy section.

| Tool | Type | Rule |
|---|---|---|
| `get_order`, `get_shipment`, `get_customer`, `search_orders`, `search_policies` | Read | Automatic |
| `update_address` | Write, low risk | Automatic after a policy check |
| `create_return`, `create_replacement_order` | Write, high risk | Human approval |
| `issue_refund`, `cancel_order` | Write, high risk | Human approval and confirmation |

## What is done

**Lesson 1, data.** The data layer. The importer loads the public Olist e-commerce dataset (about 99,000 orders and 96,000 customers) into six tables, and a seed task plants five fixed scenarios with known answers: a delayed shipment, a lost package, a closed return window, a final-sale item and a duplicate charge. Each scenario will become an eval case.

**Lesson 2, the first LLM call.** A `SupportAgent` built on RubyLLM answers through Groq (`openai/gpt-oss-120b`), with its system prompt in its own template file.

**Lesson 3, read tools.** `get_order`, `get_shipment`, `get_customer` and `search_orders` are plain Ruby services with thin RubyLLM tool wrappers, and the agent may only call those four.

## What I verified

- **Specs** for the services and the tool wrappers, plus one recorded tool-calling run (VCR), so the suite does not call the model API on every run. The API key is filtered out of recordings.
- **Console checks** that the model picks `get_order`, `get_shipment` and `search_orders` for matching questions.
- **CI on every push**: RSpec, RuboCop, Brakeman and bundler-audit.

## Approach: key decisions

- **Real data plus planted scenarios.** Real public data makes the app believable. Planted cases give every eval a known correct answer.
- **Tool logic is plain Ruby.** Services hold the logic and the RubyLLM tools only wrap them, so the planned MCP server and approval screen can reuse the same code.
- **Human approval for anything risky.** Refunds, returns and cancellations never run without a person saying yes.
- **RubyLLM for model calls.** The agent class names its model and its tool allowlist, and providers are set in initializers.

## Roadmap

Three milestones in 14 lessons: a working agent (LLM calls, tool calling, the agent loop, MCP, RAG), quality and safety (routing, hybrid search, approvals, evals, observability), and advanced topics (memory, multi-agent orchestration, deployment). Progress is tracked in the [repo](https://github.com/mjesar/support_engineer#roadmap).
