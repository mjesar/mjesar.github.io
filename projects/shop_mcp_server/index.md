---
layout: project
slug: shop_mcp_server
title: shop_mcp_server
seo_title: "MCP Server and RAG in Ruby on Rails: shop_mcp_server"
kind: MCP server and RAG in Ruby on Rails
description: An MCP server in Ruby on Rails that lets Claude read a store's products, orders and inventory, place orders with approval, and search by meaning.
image: /assets/img/og/shop_mcp_server.png
stack: Ruby 4.0 · Rails 8.1 · official MCP Ruby SDK · PostgreSQL · pgvector · Voyage AI · RSpec
repo: https://github.com/mjesar/shop_mcp_server
services: [ai-in-rails]
jsonld:
  "@context": https://schema.org
  "@type": SoftwareSourceCode
  name: shop_mcp_server
  description: A Ruby on Rails MCP (Model Context Protocol) server that exposes a store's products, orders and inventory to AI assistants, with semantic product search on PostgreSQL and pgvector.
  codeRepository: https://github.com/mjesar/shop_mcp_server
  programmingLanguage: Ruby
  runtimePlatform: Ruby on Rails
  keywords: MCP, Model Context Protocol, Ruby on Rails, RAG, pgvector, Voyage AI, Claude
  url: https://mjesar.github.io/projects/shop_mcp_server/
  image: https://mjesar.github.io/assets/img/og/shop_mcp_server.png
  author:
    "@type": Person
    "@id": https://mjesar.github.io/#person
    name: Mohammad Ali Jesar
    url: https://mjesar.github.io/
---

## The problem

An AI assistant can only talk. It cannot check your database, place an order or know what is really in stock. Left alone, it guesses, and a guess that sounds right is worse than no answer.

MCP (Model Context Protocol) fixes that by giving the assistant a toolbox. Each tool is one clearly labeled capability, and the assistant reads the labels and decides on its own when to use one.

## What I built

A Rails app that is an MCP server for a small store. Counted from the code:

| Piece | Count | Examples |
|---|---|---|
| Tools | 7 | `get_product_tool`, `create_order_tool`, `semantic_search_products_tool` |
| Resources | 2 | `shop://products/catalog`, `shop://products/low-stock` |
| Prompts | 1 | `inventory_check` |

- **Safe writes.** Six tools are read-only. `create_order_tool` is the only write, annotated `destructive_hint: true`, so Claude groups it apart and asks the user before running it.
- **Transactions.** An order and all its stock decrements happen in one database transaction. If any line fails, everything rolls back, and a spec proves it.
- **Semantic search (RAG).** Product text is embedded with Voyage AI (`voyage-3.5-lite`, 512 dimensions), stored in a pgvector column and searched by cosine similarity. A search for "something warm for winter" surfaced the scarf and the beanie, though neither word is in their descriptions (a hand check, not a benchmark).
- **Tested at three levels.** RSpec, MCP Inspector, and Claude as a live custom connector. CI runs Brakeman, bundler-audit, RuboCop and the specs.

## How it works

<figure class="diagram"><img src="/assets/img/projects/shop_mcp_server.svg" width="820" height="312" loading="lazy" alt="Flow diagram of shop_mcp_server in six steps: 1. an MCP client such as Claude or MCP Inspector sends a request, 2. to the /mcp endpoint over Streamable HTTP with JSON-RPC, 3. the MCP server built on the official Ruby SDK routes it, 4. to a tool call (six read-only tools and one write tool that needs approval), 5. the tool reads PostgreSQL through ActiveRecord and pgvector, 6. the model answers from real store data."></figure>

A normal chat reply is `Question → Answer`. With MCP it becomes `Question → pick a tool → real data → Answer`:

1. The client sends `tools/list` and reads every tool's description.
2. The model picks the tool that fits, for example `check_inventory_tool`.
3. The client sends `tools/call` with arguments.
4. Rails runs plain ActiveRecord code against PostgreSQL.
5. The model writes its answer from the real numbers.

## What I verified

- **RSpec**, including a spec that proves a failed order line rolls back the whole order, and one that guards the symbol keys of prompt arguments.
- **MCP Inspector** over Streamable HTTP, calling the tools, resources and prompt by hand.
- **Claude as a live custom connector** through a tunnel: Claude used the tools to answer from real data and asked before running `create_order_tool`.
- **CI on every push**: RSpec, RuboCop, Brakeman and bundler-audit.
- **Not yet covered:** semantic search was checked by hand and has no specs yet.

## What broke, and what I learned

**Claude reported an authentication problem. It was not one.** I first built the server on the community `fast-mcp` gem. Claude's connector setup kept failing with an auth error. The real cause was the transport: `fast-mcp` only speaks the older SSE transport, Claude probes with Streamable HTTP, and the probe hit a `GET`-only route and got a 405. I rewrote every tool on the official `mcp` Ruby SDK, which supports Streamable HTTP natively.

**The docs were wrong about argument keys.** The SDK's docs show prompt arguments with string keys. At runtime they arrive as symbols. I found it with a debug log line, and a spec now guards against someone "fixing" it back.

The lesson I took from both is to trust running code over docs and tutorials.

## Approach: key decisions

- **Mount over controller.** The SDK offers two Rails patterns. I mounted one server at boot for the full session lifecycle, accepting that code changes need a restart.
- **pgvector over a separate vector database.** The app already used PostgreSQL, so embeddings live next to the products.
- **Batched embedding calls.** The backfill task sends all products in one API call, because Voyage's free tier can be as low as 3 requests per minute.

## Status

A working learning project, not production software. Sessions are in memory (single process), there is no authentication, and semantic search has been checked by hand but has no specs yet. The full list of limitations is in the [README](https://github.com/mjesar/shop_mcp_server#status).
