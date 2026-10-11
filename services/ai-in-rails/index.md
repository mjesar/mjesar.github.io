---
layout: service
slug: ai-in-rails
title: "AI Engineering in Ruby on Rails: Agents, RAG and MCP"
description: "AI engineering in Ruby on Rails: LLM features, RAG on PostgreSQL with pgvector, MCP servers and agents that work with your real data and ask before any write."
image: /assets/img/og/ai-in-rails.png
promise: AI features that answer from your real data and never act without approval, built inside the Rails app you already run.
contact_ask: what you want the AI to do
faq:
  - q: "Do we need a separate Python service for AI?"
    a: "No. LLM calls, tool calling, MCP and RAG can all run inside your Rails app, with RubyLLM, the official MCP Ruby SDK and pgvector on PostgreSQL."
  - q: "Can RAG use our existing PostgreSQL database?"
    a: "Yes. With the pgvector extension, embeddings are stored in a column next to your existing data and searched with SQL, so there is no separate vector database to run."
  - q: "How do you stop the AI from making mistakes?"
    a: "It gets narrow tools with validated arguments, so it looks facts up instead of guessing. Anything that writes needs a person's approval, exact work such as math stays in Ruby, and evals check the answers before and after each change."
  - q: "Which AI models do you work with?"
    a: "Claude, OpenAI and Gemini. I use RubyLLM so the provider can change with a config change, and Voyage AI for embeddings."
---
## Who it is for

Companies hiring an AI engineer with Rails, CTOs and product teams with a Rails app, CEOs who want AI in their product, and agencies that need an AI engineer for a client project.

## Problems I solve

- Your customers or staff need answers from your own data (orders, products, documents), not from what a model guesses.
- Search only finds exact words, so people miss what they are looking for.
- You want an assistant or agent that can do real tasks, but only with a person's approval before anything changes.
- You want AI in your product without adding a second stack your team has to run.
- You cannot tell whether the AI is giving correct answers, or whether a change made it worse.

## What I build

- **LLM features** with Claude, OpenAI or Gemini through RubyLLM, with slow model calls run in background jobs and replies streamed with Turbo Streams.
- **MCP servers** on the official MCP Ruby SDK: schema-validated tools, read-only and destructive annotations so writes need approval, resources and prompts.
- **MCP clients** that call external MCP APIs, such as Shopify's live Catalog API.
- **RAG** with embeddings stored in your existing PostgreSQL using pgvector, searched by meaning instead of keywords.
- **Agents with tool calling**: narrow tools, validated arguments, approval before any write, and plain Ruby for anything that must be exact, such as scores and totals.
- **Evals and tracing**: repeatable test runs against hand-written expectations, and a trace of every tool call so you can see what the agent did.

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
