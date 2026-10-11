---
title: Services
description: Hire Mohammad Ali Jesar (mjesar), a senior Ruby on Rails engineer, for AI integration in Rails (MCP servers, RAG, agents), Shopify and BigCommerce apps, Shopify Functions and e-commerce integrations. Remote, full-time or freelance.
jsonld:
  "@context": https://schema.org
  "@type": Service
  name: Ruby on Rails, Shopify and AI engineering by Mohammad Ali Jesar
  serviceType: Software engineering (Ruby on Rails, Shopify, AI integration)
  url: https://mjesar.github.io/services/
  provider:
    "@id": https://mjesar.github.io/#person
  availableChannel:
    "@type": ServiceChannel
    serviceUrl: https://mjesar.github.io/services/
    availableLanguage: English
  areaServed:
    - { "@type": Country, name: "United States" }
    - { "@type": Country, name: "United Kingdom" }
    - { "@type": Country, name: "Canada" }
    - { "@type": Country, name: "Australia" }
    - { "@type": Place, name: "European Union" }
    - { "@type": Country, name: "Pakistan" }
    - { "@type": Place, name: "Worldwide (remote)" }
  hasOfferCatalog:
    "@type": OfferCatalog
    name: Services
    itemListElement:
      - "@type": Offer
        itemOffered: { "@type": Service, name: "AI integration for Ruby on Rails apps (MCP servers, RAG, AI agents)" }
      - "@type": Offer
        itemOffered: { "@type": Service, name: "Shopify and BigCommerce app development" }
      - "@type": Offer
        itemOffered: { "@type": Service, name: "Shopify Scripts to Functions migration and checkout customization" }
      - "@type": Offer
        itemOffered: { "@type": Service, name: "E-commerce integrations and product, inventory and order sync" }
      - "@type": Offer
        itemOffered: { "@type": Service, name: "Ruby on Rails backend and performance work" }
---
<div class="hero small">
  <div class="wrap">
    <div class="bar" aria-hidden="true"></div>
    <h1>Work with me</h1>
    <p class="lede">I help teams add AI to Rails apps they already have, and build Shopify and e-commerce software that keeps data in step across systems.</p>
    <p class="meta">Open to remote full-time roles and freelance projects</p>
    <ul class="links">
      <li><a class="btn primary" href="mailto:mohammadalijaisar@gmail.com">Email me</a></li>
      <li><a class="btn" href="https://www.fiverr.com/mjesar" rel="me noopener" target="_blank">Hire on Fiverr</a></li>
      <li><a class="btn" href="https://www.linkedin.com/in/mjesar/" rel="me noopener" target="_blank">LinkedIn</a></li>
    </ul>
  </div>
</div>

<main class="wrap prose" markdown="1">

## What I can do for you

<div class="grid">
{%- for s in site.data.services %}
<article class="card">
<h3><a href="/services/{{ s.slug }}/">{{ s.name }}</a></h3>
<p>{{ s.summary }}</p>
{%- if s.proof.size > 0 %}
<p class="stack">Proof: {% for p in s.proof %}<a href="{{ p.url }}">{{ p.name }}</a>{% unless forloop.last %}, {% endunless %}{% endfor %}</p>
{%- endif %}
<p><a href="/services/{{ s.slug }}/">Details</a></p>
</article>
{%- endfor %}
</div>

## How I work

1. **A short call or message about the problem.** What is broken or missing, and what "done" looks like for you.
2. **A written plan.** Scope, approach and the risks I can see, before any code.
3. **Small, reviewed steps.** Work happens on branches with pull requests, tests (RSpec) and clear descriptions, so your team can follow and own it.
4. **Honest status.** I say what works, what does not yet, and what I verified by running it, not just by reading docs.

## Good fit

- You have a Rails app and want AI features that use your real data safely.
- You run a Shopify or BigCommerce store or app and need custom functionality, checkout work or integrations.
- You need a senior Rails engineer who has shipped to production and worked daily with US and European clients, remotely.

{% include faq.html %}

## Get in touch

The fastest way is email: [mohammadalijaisar@gmail.com](mailto:mohammadalijaisar@gmail.com). Tell me about the project, your stack, and whether you are looking for a full-time hire, a contract, or a fixed-scope job. For smaller fixed-scope work you can also order on [Fiverr](https://www.fiverr.com/mjesar){:target="_blank" rel="noopener"}.

</main>
