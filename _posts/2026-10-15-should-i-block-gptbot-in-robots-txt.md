---
title: "Should I block GPTBot in robots.txt? Search bots versus training bots"
seo_title: "Should I block GPTBot? Search bots vs training bots"
description: "Blocking GPTBot stops OpenAI training on your pages, not ChatGPT search. Which AI bots train, which search, which follow robots.txt, and which may not."
ask_ai_question: "Read https://mjesar.github.io/writing/should-i-block-gptbot-in-robots-txt/ and explain whether I should block GPTBot in robots.txt, and which AI bots I should allow."
related_services: [ai-discoverability]
faq:
  - q: "Does blocking GPTBot remove my store from ChatGPT search?"
    a: "No. GPTBot is OpenAI's training crawler. ChatGPT search uses a different crawler, OAI-SearchBot, with its own robots.txt rules."
  - q: "Does blocking Google-Extended hurt my Google rankings?"
    a: "No. Google-Extended is a robots.txt control token, not a separate crawler. It controls whether Gemini can use your pages for training and grounding. It does not affect inclusion or ranking in Google Search."
  - q: "Can robots.txt stop every AI visit?"
    a: "No. Some user-triggered visits, where a person asks an assistant to open your page, may not follow robots.txt. Perplexity-User generally ignores it, and OpenAI says robots.txt may not apply to ChatGPT-User."
  - q: "How long does a robots.txt change take?"
    a: "For OAI-SearchBot, OpenAI says about 24 hours. The other companies listed here do not give a time."
---
Only if you do not want OpenAI to train on your pages. GPTBot is OpenAI's training crawler. Blocking it does not remove you from ChatGPT search, because ChatGPT search uses a different bot, OAI-SearchBot, which you can allow separately.

A more useful question than "should I block AI bots?" is "which ones, and for what?"

## Three kinds of AI bots

AI companies run different bots for different jobs:

- **Training bots** collect pages to train AI models.
- **Search bots** read pages so an AI assistant can find and cite them in answers.
- **User-triggered bots** visit a page because a person asked an assistant to open it.

| Bot | Company | Job | Follows robots.txt? |
|---|---|---|---|
| GPTBot | OpenAI | Training | Yes |
| OAI-SearchBot | OpenAI | ChatGPT search | Yes, changes take about 24 hours |
| ChatGPT-User | OpenAI | User-triggered | May not apply |
| ClaudeBot | Anthropic | Training | Yes |
| Claude-SearchBot | Anthropic | Search quality | Yes |
| Claude-User | Anthropic | User-triggered | Yes |
| PerplexityBot | Perplexity | Search results (not training) | Yes |
| Perplexity-User | Perplexity | User-triggered | Generally ignores it |

Google works differently. **Google-Extended** is not a crawler. It is a token you can use in robots.txt to control whether Gemini can use your pages for training and grounding. It does not change whether your pages appear or rank in Google Search.

## What robots.txt can and cannot control

robots.txt is a request, and each company decides how its bots treat it. For training and search bots, the companies above say they follow it. For user-triggered visits it is mixed: Claude-User honors it, OpenAI says it may not apply to ChatGPT-User, and Perplexity-User generally ignores it.

So robots.txt does not control every AI visit. It controls the bots that choose to follow it.

## An example: allow search, block training

If you want AI assistants to find and cite your pages but do not want them used for training, a robots.txt like this does that for the bots that follow it:

```
User-agent: GPTBot
Disallow: /

User-agent: ClaudeBot
Disallow: /

User-agent: *
Allow: /
```

OAI-SearchBot, Claude-SearchBot and PerplexityBot fall under the last rule and stay allowed.

Think twice before adding Google-Extended to that list. It also covers grounding, so blocking it can keep Gemini from using your pages in its answers, not just in training.

## What I do on this site

This site's robots.txt allows every crawler and points to the sitemap. I want AI assistants to find and describe my work correctly, so I do not block any of them. A store might decide differently about training, and that is a fair choice. Just do not block the search bots by accident.

To see what AI tools can and cannot read on your own store, see [AI discoverability](/services/ai-discoverability/) or [why Shopify products do not show up in ChatGPT](/writing/why-shopify-products-do-not-show-up-in-chatgpt/).
