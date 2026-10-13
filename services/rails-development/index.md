---
layout: service
slug: rails-development
title: "Ruby on Rails Developer for Apps, APIs & MVPs"
description: "Ruby on Rails developer helping startups launch MVPs, and building and maintaining APIs and production Rails apps for international clients."
image: /assets/img/og/rails-development.png
promise: I help startups launch MVPs on Rails, and do steady, tested work on the Rails app you already run.
contact_ask: whether this is a new product or an app you already run
faq:
  - q: "How do you plan an MVP?"
    a: "We start with the main problem the product needs to solve and identify the smallest set of features that solves it. We agree on that scope before development begins, and leave additional features for later."
  - q: "Should we use Hotwire or React for our Rails application?"
    a: "I generally use Hotwire when server-rendered interactions fit the application. React is a better choice for some highly interactive interfaces, or when your product and team already use it. The choice depends on the application, not a fixed preference."
  - q: "Do you write automated tests?"
    a: "Yes. I use RSpec to test application behavior and add or update tests as part of feature development and bug fixes. External services can be stubbed in tests, with integration checks where appropriate."
  - q: "Can you join our existing engineering team?"
    a: "Yes. I work inside your existing process, contributing features and fixes through branches, pull requests, automated tests and code review. I have delivered production software remotely for clients in the US and Germany."
---
## Who it is for

Startups and founders with an idea to turn into an MVP, CEOs and product teams with a Rails app that needs to move faster, and agencies that need a senior Rails developer for a client project.

## Problems I solve

- You have an idea and need the smallest working version that proves it, built so it can grow.
- New features in your app take too long to ship.
- Bugs and errors in production are costing you customers or time, and nobody has time to dig into them.
- Pages are slow, or background jobs pile up, run late or fail without anyone noticing.
- You need your app connected to another service, such as a payment provider, a CRM or a marketplace, through its API and webhooks.
- Your app runs on an older Rails version and needs a careful upgrade and ongoing maintenance.
- You need a senior Ruby on Rails developer who can start on your codebase without a long ramp-up.

## What I build

- **New Rails applications and MVPs** on current Rails (8.1 in my recent projects), from data model to deploy.
- **Features and fixes in existing apps**, on branches with pull requests your team can review.
- **Frontends** with Hotwire (Turbo and Stimulus) or React, with JavaScript or TypeScript.
- **APIs and integrations**: REST and GraphQL APIs, and connections to third-party services.
- **Background jobs** with Sidekiq and Redis, or Solid Queue, for work that should not block a web request, with retries and monitoring so failures are visible.
- **Performance and production debugging**: finding slow queries and N+1 problems, adding indexes and caching, and tracing errors back to their cause.
- **Maintenance and upgrades**: Rails and gem upgrades in small, tested steps.
- **Data** on PostgreSQL or MongoDB.
- **Tests and CI**: RSpec, with checks such as RuboCop, Brakeman and bundler-audit on every push.
- **Deployment** on Heroku, AWS, Google Cloud or Docker.

Want AI in the app as well? See [AI engineering](/services/ai-in-rails/).

## Evidence

- **7+ years of production Rails** for clients in the US and Germany.
- **MVP management tools for German clients** in real estate and furniture, built on Rails REST APIs (SimpleDeploy, 2019 to 2021).
- **Shopify and BigCommerce apps in Rails and React** for US clients, with Sidekiq jobs for catalog and order sync (MGLogics, 2021 to 2026).
- **[ai_shop_assistant](/projects/ai_shop_assistant/)**: a Rails 8.1 app built from scratch with Hotwire, Solid Queue, Solid Cable and MongoDB, with replies streamed to the browser.
- **[support_engineer](/projects/support_engineer/)** (in progress): a Rails 8.1 app that imports a public dataset of about 99,000 orders into six tables, with planted test scenarios.
- **[shop_mcp_server](/projects/shop_mcp_server/)**: a Rails 8.1 app with CI running RSpec, RuboCop, Brakeman and bundler-audit.

## How a project runs

1. **Read first.** For an existing app, I read the code and tests before changing anything. For a new product, we start with your idea and who it is for.
2. **A written plan.** Scope, the smallest version worth building, and the risks I can see, before any code.
3. **Small pull requests with tests.** Each change is small enough to review, and you can try it as it lands.
4. **Launch and hand-over.** Deployed, documented, and tested well enough that your team or the next developer can keep going.
