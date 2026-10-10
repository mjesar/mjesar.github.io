---
layout: project
slug: ai_shop_assistant
title: ai_shop_assistant
kind: Tool calling and MCP client in Ruby on Rails
description: A shopping chat built with Rails 8 where the AI decides when to search Shopify's live Global Catalog over MCP and answers with real products, prices and links.
stack: Ruby 4.0 · Rails 8.1 · RubyLLM · Gemini · Hotwire · Solid Queue · Solid Cable · MongoDB · RSpec
repo: https://github.com/mjesar/ai_shop_assistant
jsonld:
  "@context": https://schema.org
  "@type": SoftwareSourceCode
  name: ai_shop_assistant
  description: An AI shopping assistant built with Ruby on Rails 8, RubyLLM and Gemini that uses tool calling to search Shopify's live Catalog API over MCP.
  codeRepository: https://github.com/mjesar/ai_shop_assistant
  programmingLanguage: Ruby
  runtimePlatform: Ruby on Rails
  keywords: tool calling, MCP, RubyLLM, Gemini, Shopify Catalog API, Hotwire, Ruby on Rails
  url: https://mjesar.github.io/projects/ai_shop_assistant/
  author:
    "@id": https://mjesar.github.io/#person
---

## The problem

An AI model with no way to look things up will happily invent a product, a price or a link. For shopping that is a real problem: a made-up price is worse than no answer.

## What I built

A Rails chat app that gives the model one tool, `SearchProducts`, and lets it decide when to use it. When a question needs real product data, the model asks for the tool, the app searches Shopify's live Global Catalog, and the model answers from what came back: up to three products, each reduced to a title, a price and a URL.

It is the same tool calling pattern behind the shopping features in ChatGPT, Perplexity and Copilot, built from scratch in Ruby.

## How it works

1. **Save and enqueue.** The controller saves the message and hands the slow model call to a background job, so the web request returns at once.
2. **Run the model in a job.** `ChatResponseJob` on Solid Queue builds a RubyLLM chat with the `SearchProducts` tool attached.
3. **Let the model decide.** If it asks for a search, the browser shows a "searching" status line.
4. **Search the live catalog.** The tool gets an OAuth 2.0 client-credentials token and sends a JSON-RPC `tools/call` to Shopify's catalog MCP endpoint.
5. **Stream the reply.** The saved message broadcasts itself to the browser with a Turbo Stream.

## What broke, and what I learned

**Replies never reached the browser.** The job and the web server are separate processes, and Action Cable's default `async` adapter only broadcasts inside one process. I switched to Solid Cable, which passes broadcasts through a shared database, with no Redis needed.

**The assistant forgot the conversation.** Each job builds a fresh chat, so on the second message the model had no memory of the first. The fix replays saved messages into the new chat, and a spec covers it ("My name is Alex", then "What is my name?").

**An MCP gem crashed on the handshake.** `ruby_llm-mcp` failed on Shopify's response, so I filed [ruby_llm-mcp#155](https://github.com/patvice/ruby_llm-mcp/issues/155) and called the endpoint directly with a small hand-written JSON-RPC client over `Net::HTTP`.

## Key decisions

- **One tool, not many.** The point was to see the model choose when to search, so the tool surface stays minimal.
- **MongoDB for chats.** Chats and messages are Mongoid documents, so RubyLLM's ActiveRecord-only `acts_as_chat` could not be used and persistence is written by hand.
- **Stubbed specs.** All 14 specs stub RubyLLM and HTTP, so they are fast and never spend API quota. Live behavior is checked by running the app.

## Status

Works end to end: chat, live catalog search and streamed replies. It is a learning and portfolio project. It only searches (no cart or checkout) and returns at most three products per search.
