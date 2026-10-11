---
title: Uses
seo_title: "Uses: My Rails, AI and Shopify Stack"
description: The tools, stack and setup Mohammad Ali Jesar uses to build Ruby on Rails, Shopify and AI applications.
---
<div class="hero small">
  <div class="wrap">
    <div class="bar" aria-hidden="true"></div>
    <h1>Uses</h1>
    <p class="lede">The stack and tools I reach for, and why.</p>
  </div>
</div>

<main class="wrap prose" markdown="1">

## Stack

- **Ruby and Rails.** Ruby 4.0 and Rails 8.1 for new projects. Rails 8's Solid Queue and Solid Cable mean background jobs and live updates without running Redis.
- **PostgreSQL**, with **pgvector** when a project needs semantic search. Keeping embeddings next to the data beats running a separate vector database.
- **Sidekiq and Redis** on larger production apps with heavy sync work.
- **Hotwire** (Turbo and Stimulus) for most interfaces, **React** when an embedded Shopify app needs it.
- **RSpec** for tests, with external APIs stubbed so the suite is fast and free to run.

## AI

- **RubyLLM** for chat and tool calling across providers.
- **little_ghost** for agent loops (I contributed three fixes to it).
- **The official MCP Ruby SDK** for MCP servers, and **MCP Inspector** to test them by hand.
- **Gemini** on its free tier for experiments, **Claude** as a live MCP client, **Voyage AI** for embeddings.
- **AI coding assistants:** Claude Code, Cursor and GitHub Copilot.

## Shopify and e-commerce

- **Shopify CLI**, the Admin and Storefront GraphQL APIs, Shopify Functions and Checkout UI Extensions.
- **BigCommerce** APIs and **Amazon SP-API** for marketplace sync.

## Workflow

- **Ubuntu** as my everyday OS, **VS Code** as my editor.
- **Git and GitHub**: one branch per piece of work, small commits, and a pull request with a short "why" for every change.
- **GitHub Actions** for CI: tests, RuboCop, Brakeman and bundler-audit.
- **ngrok** to expose a local MCP server to Claude.
- **Heroku, AWS, Google Cloud and Docker** for deployment.

</main>
