---
layout: service
slug: ai-in-rails
title: "AI Engineer for Ruby on Rails, RAG & AI Agents"
description: "Add AI to Ruby on Rails applications with LLM integrations, MCP servers, RAG, tool-calling agents and evaluation, grounded in real data. n8n workflows too."
image: /assets/img/og/ai-in-rails.png
promise: AI that answers from your real data and can only do what you allow, built into the Rails app and systems you already run instead of a separate stack.
contact_ask: what you want the AI to do
faq:
  - q: "Do we need a separate Python service for AI?"
    a: "No. LLM calls, tool calling, MCP and RAG can all run inside your Rails app, with RubyLLM, the official MCP Ruby SDK and pgvector on PostgreSQL."
  - q: "Can RAG use our existing PostgreSQL database?"
    a: "Yes. With the pgvector extension, embeddings are stored in a column next to your existing data and searched with SQL, so there is no separate vector database to run."
  - q: "How do you stop the AI from making mistakes?"
    a: "Through engineering controls, not hope. Each tool has validated inputs, so the AI looks facts up instead of guessing. Permissions limit what each tool can read or change, and the write actions you choose, such as refunds or order changes, need a person's approval first. Exact work such as math stays in Ruby, and evals check the answers before and after each change."
  - q: "Our AI team works in Python. Can you still help?"
    a: "Yes. I connect their models and services to your Rails app through APIs, background jobs and MCP, so they keep their stack and your product gets the feature."
  - q: "Do you work with n8n?"
    a: "Yes. I build automated workflows in n8n and connect them to AI models and to your existing systems through webhooks, APIs and MCP. When a workflow needs complex logic, tests or approval steps, I build that part in Rails code."
  - q: "Which AI models do you work with?"
    a: "Claude, OpenAI (ChatGPT) and Gemini. I use RubyLLM so the provider can change with a config change, and Voyage AI for embeddings."
---
## Who it is for

Companies hiring an AI engineer with Rails, CTOs and product teams with a Rails app, CEOs who want AI in their product, and agencies that need an AI engineer for a client project.

## Problems I solve

- Your customers or staff need answers from your own data (orders, products, documents), not from what a model guesses.
- Search only finds exact words, so people miss what they are looking for.
- You want an assistant or agent that can do real tasks, but only the actions you allow, with a person's approval where it matters.
- Manual business processes, such as order lookups, support triage or data entry, take hours that automation could save.
- You want AI in your product without adding a second stack your team has to run.
- You cannot tell whether the AI is giving correct answers, or whether a change made it worse.

## What I build

- **AI assistants grounded in your data**: answers that come from your orders, products, documents and database records, with sources shown, instead of from what a model remembers.
- **AI in the product you already have**: features added to your existing Rails app, instead of rebuilding it in another stack.
- **LLM features** with Claude, OpenAI or Gemini through RubyLLM, with slow model calls run in background jobs and replies streamed with Turbo Streams.
- **MCP servers** (Model Context Protocol) on the official MCP Ruby SDK: schema-validated tools, read-only and destructive annotations so writes need approval, resources and prompts.
- **MCP clients** that call external MCP APIs, such as Shopify's live Catalog API.
- **RAG** (retrieval-augmented generation) with embeddings stored in your existing PostgreSQL using pgvector, searched by meaning instead of keywords.
- **AI agents that call your app's tools and APIs**: narrow tools with validated arguments, permissions on what each tool can do, approval for the write actions you choose, and plain Ruby for anything that must be exact, such as scores and totals.
- **Evaluation, tracing and testing of agent behavior**: repeatable test runs against hand-written expectations, and a trace of every tool call so you can see what the agent did.
- **Workflow automation and integrations**: automated business workflows in n8n or in Rails code, connected to your existing systems through APIs, webhooks and MCP, with complex logic, tests and approval steps kept in Rails.

## Why build AI in Rails?

Your data, users, permissions and background jobs already live in your Rails app. Most AI features are model API calls, tools that read or change that data, and background jobs, which Rails already does well. RubyLLM and the official MCP Ruby SDK cover the model and protocol side, and pgvector adds semantic search to the PostgreSQL database you already have. You get one codebase, one deploy and one team, with no separate Python service to build and maintain.

## Evidence

- **[shop_mcp_server](/projects/shop_mcp_server/)**: an MCP server in Rails 8.1 that gives Claude a store's products, orders and inventory. Six read-only tools, one approval-gated write, orders in a single transaction with rollback, and semantic search with pgvector. Tested with RSpec, MCP Inspector and Claude as a live custom connector.
- **[ai_shop_assistant](/projects/ai_shop_assistant/)**: a Rails 8 shopping chat where the model decides when to search Shopify's live catalog over MCP, through a hand-written JSON-RPC client, so it answers with real products and prices.
- **[product_geo_agent](/projects/product_geo_agent/)**: an agent with five tools that it chooses between. The model judges and Ruby computes the score, so the same facts always give the same number. It has an eval harness and a live trace.
- **[support_engineer](/projects/support_engineer/)** (in progress): a support agent built around human approval for refunds, returns and cancellations, with planted test cases that have known correct answers.
- **[little_ghost](/projects/#open-source)**: three merged pull requests fixing bugs in this open-source Ruby agent framework, found while building product_geo_agent.

## How a project runs

1. **Pick one job for the AI.** We agree on the one question or task it should handle first, and the data it needs.
2. **A written plan.** Which tools it gets, which ones only read, which ones write and need approval, and how we will know the answers are right.
3. **Tools first, then the model.** Each tool is plain Ruby with specs, then the model is connected to it.
4. **Evals before launch.** The feature runs against real cases with expected answers, and a trace shows each step.
5. **Hand-over.** Pull requests, tests and a short write-up your team can maintain.
