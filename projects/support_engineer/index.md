---
layout: project
slug: support_engineer
title: support_engineer
seo_title: "AI Support Agent in Ruby on Rails: support_engineer"
kind: Production-style AI support agent in Ruby on Rails (in progress)
description: A Rails support agent that investigates customer problems, checks real order data and takes safe actions only with human approval. Built lesson by lesson.
stack: Ruby 4.0 · Rails 8.1 · PostgreSQL · RubyLLM · official MCP Ruby SDK · pgvector (planned)
repo: https://github.com/mjesar/support_engineer
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

<div class="callout"><p><strong>In progress.</strong> Lesson 1 of 14 is done: a normal Rails app with real and planted data, and no AI yet. This page describes where the project is going, not what works today.</p></div>

## The problem

Most AI support demos are chatbots that sound confident and guess. A real case needs more than a fluent answer:

> "My order #1042 has not arrived and it has been two weeks. If it is lost, please send a replacement."

To answer correctly, a system has to look up the order, check the shipment, find the lost-package rule in the shipping policy, decide whether a replacement is allowed, and get a person to approve it before anything changes. Then it has to cite where each fact came from.

## What it will do

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

The data layer. The importer loads the public Olist e-commerce dataset (about 99,000 orders and 96,000 customers) into six tables, and a seed task plants five fixed scenarios with known answers: a delayed shipment, a lost package, a closed return window, a final-sale item and a duplicate charge. Each scenario will become an eval case.

## Key decisions

- **Real data plus planted scenarios.** Real public data makes the app believable. Planted cases give every eval a known correct answer.
- **Tools are plain Ruby classes.** The agent and the MCP server only wrap them, so the same tools work from the chat, the approval screen and Claude.
- **Human approval for anything risky.** Refunds, returns and cancellations never run without a person saying yes.
- **One small `LlmClient`.** All model calls go through it, so changing provider is a config change.

## Roadmap

Three milestones in 14 lessons: a working agent (LLM calls, tool calling, the agent loop, MCP, RAG), quality and safety (routing, hybrid search, approvals, evals, observability), and advanced topics (memory, multi-agent orchestration, deployment). Progress is tracked in the [repo](https://github.com/mjesar/support_engineer#roadmap).
