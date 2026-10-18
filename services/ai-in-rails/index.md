---
layout: service
ask_ai_question: "What AI engineering and integration services does Mohammad Ali Jesar offer at mjesar.github.io/services/ai-in-rails/?"
slug: ai-in-rails
contact_template: project_contact
secondary_cta:
  label: See pricing
  url: /services/#pricing
title: "AI Engineer for Ruby on Rails, RAG & AI Agents"
description: "Add AI to Ruby on Rails applications with LLM integrations, MCP servers, RAG, tool-calling AI agents and evaluation, grounded in real data. n8n workflows too."
image: /assets/img/og/ai-in-rails.png
promise: AI that answers from your real data and only does what you allow. I build it into the Rails app you already run.
contact_ask: what you want the AI to do
faq:
  - q: "Do we need a separate Python service to add AI to our Rails application?"
    a: "Not necessarily. Many AI features can be built directly in Ruby on Rails with libraries such as RubyLLM, the official MCP Ruby SDK and pgvector. A separate Python service can still make sense when you need a specific library, a model-serving setup or existing Python infrastructure."
  - q: "Can we build RAG using our existing PostgreSQL database?"
    a: "Yes. With the pgvector extension, PostgreSQL stores and searches vector embeddings alongside your application data. Depending on your scale and retrieval needs, this can keep your architecture simpler than running a separate vector database."
  - q: "How do you reduce mistakes and control what an AI agent can do?"
    a: "I use validated tool arguments, permission checks, and limited access to application data and actions. Write actions can require approval based on your requirements, deterministic calculations stay in Ruby, and evaluations help test how the system behaves across different inputs."
  - q: "Our AI team works in Python. Can you still help?"
    a: "Yes. I can integrate Python-based AI services with Rails through APIs, background jobs and, where it fits the use case, MCP. The goal is to connect your existing AI work to the application without duplicating it."
  - q: "Do you work with n8n?"
    a: "Yes. I build workflows in n8n and connect them to Rails through webhooks and APIs, using MCP where it fits, and keep complex business rules and application-specific logic in Rails code."
  - q: "Which AI models and providers do you work with?"
    a: "I work with Claude, OpenAI and Gemini through RubyLLM, and with Voyage AI for embeddings. The best choice depends on your use case, data, evaluation results, cost and latency requirements."
---
## Who it is for

Companies hiring an AI engineer with Rails, CTOs and product teams with a Rails app, CEOs who want AI in their product, and agencies that need an AI engineer for a client project.

## Problems I solve

- Your customers or staff need answers from your own data (orders, products, documents), not from what a model guesses.
- Search only finds exact words, so people miss what they are looking for.
- You want an AI assistant or AI agent that can do real tasks, but only the actions you allow, with a person's approval where it matters.
- Manual business processes, such as order lookups, support triage or data entry, take hours that automation could save.
- You want AI in your product without adding a second stack your team has to run.
- You cannot tell whether the AI is giving correct answers, or whether a change made it worse.

## What I build

- **AI assistants grounded in your data**: answers from your orders, products, documents and database records, with sources shown.
- **LLM features in your existing Rails app** with Claude, OpenAI or Gemini through RubyLLM, so you do not rebuild in another stack.
- **MCP servers and clients** (Model Context Protocol) on the official MCP Ruby SDK. AI tools such as Claude get safe access to your app, and changes need a person's approval where it matters. Your app can also call external MCP APIs, such as Shopify's live Catalog API.
- **WebMCP tools** that let AI agents in the browser use your website directly, with confirmation for anything important. [How WebMCP works](/writing/what-is-webmcp/).
- **RAG** (retrieval-augmented generation): search by meaning instead of exact words, with pgvector in the PostgreSQL database you already have.
- **AI agents that use your app's tools**: each tool does one job, checks its inputs and only has the permissions it needs. Exact numbers, such as totals and scores, are calculated in plain Ruby.
- **Evaluation and tracing**: repeatable test runs with expected answers, and a record of every step the agent took.
- **Workflow automation** in n8n or Rails, connected to your systems through APIs, webhooks and MCP.

## Why build AI in Rails?

Your data, users, permissions and background jobs already live in your Rails app. Most AI features are model API calls, tools that read or change that data, and background jobs, which Rails already does well. RubyLLM and the official MCP Ruby SDK cover the model and protocol side, and pgvector adds semantic search to the PostgreSQL database you already have. You get one codebase, one deploy and one team, with no separate Python service to build and maintain.

## Evidence

- **[shop_mcp_server](/projects/shop_mcp_server/)**: an MCP server in Rails 8.1 that gives Claude a store's products, orders and inventory. Six read-only tools, one approval-gated write, orders in a single transaction with rollback, and semantic search with pgvector. Tested with RSpec, MCP Inspector and Claude as a live custom connector.
- **[ai_shop_assistant](/projects/ai_shop_assistant/)**: a Rails 8 shopping chat where the model decides when to search Shopify's live catalog over MCP, through a hand-written JSON-RPC client, so it answers with real products and prices.
- **[product_geo_agent](/projects/product_geo_agent/)**: an AI agent with five tools that it chooses between. The model judges and Ruby computes the score, so the same facts always give the same number. It has an eval harness and a live trace.
- **[support_engineer](/projects/support_engineer/)** (in progress): an AI support agent built around human approval for refunds, returns and cancellations, with planted test cases that have known correct answers.
- **[little_ghost](/projects/#open-source)**: three merged pull requests fixing bugs in this open-source Ruby AI agent framework, found while building product_geo_agent.

## How a project runs

1. **Pick one job for the AI.** We agree on the one question or task it should handle first, and the data it needs.
2. **A written plan.** Which tools it gets, which ones only read, which ones write and need approval, and how we will know the answers are right.
3. **Tools first, then the model.** Each tool is plain Ruby with specs, then the model is connected to it.
4. **Evals before launch.** The feature runs against real cases with expected answers, and a trace shows each step.
5. **Hand-over.** Pull requests, tests and a short write-up your team can maintain.
