---
title: Hire a Ruby on Rails & AI Engineer
description: "Hire a senior Ruby on Rails engineer for apps and MVPs, AI integration (MCP, RAG, agents), Shopify and e-commerce. Remote full-time, contract or project work."
image: /assets/img/og/services.png
---
<div class="hero small">
  <div class="wrap">
    <div class="bar" aria-hidden="true"></div>
    <h1>Work with me</h1>
    <p class="role">Senior Ruby on Rails Engineer specializing in AI integration</p>
    <p class="lede">I build and extend production Ruby on Rails applications, integrate AI into existing products, and develop software for Shopify and other e-commerce platforms.</p>
    <p class="meta">Open to remote full-time roles, contracts and freelance projects · Available now · Usually replies within a few hours · Flexible hours for U.S. and European time zones</p>
    <ul class="links">
      <li><a class="btn primary" href="mailto:mohammadalijaisar@gmail.com">Have a project? Email me</a></li>
      <li><a class="btn" href="/resume/">Hiring? View my resume</a></li>
      <li><a class="btn" href="https://www.linkedin.com/in/mjesar/" rel="me noopener" target="_blank">LinkedIn</a></li>
    </ul>
  </div>
</div>

<main class="wrap prose" markdown="1">

With 7+ years of experience building software for international clients, I work across backend systems, full-stack applications, LLM integrations, AI agents, MCP servers, RAG and e-commerce integrations. I can help you build a new product, improve an existing Rails application, connect AI to real business data, or solve complex Shopify and e-commerce problems.

## What I can do for you

<div class="grid two">
{%- for s in site.data.services %}
<article class="card card-link">
<h3><a href="/services/{{ s.slug }}/">{{ s.name }}</a></h3>
<p><strong>For:</strong> {{ s.for }}</p>
<p><strong>The problem:</strong> {{ s.problem }}</p>
<p><strong>What I do:</strong> {{ s.summary }}</p>
<p class="stack"><strong>Evidence:</strong> {{ s.evidence | markdownify | remove: '<p>' | remove: '</p>' | strip }}</p>
<p class="card-cta" aria-hidden="true"><span class="more">See details</span></p>
</article>
{%- endfor %}
</div>

<div class="callout" markdown="1">
**For agencies:** I join your team as a Rails, AI or Shopify developer on client projects, including white-label work, under your process and tools.
</div>

## How I work

1. **A short call or message about the problem.** What is broken or missing, and what "done" looks like for you.
2. **A written plan.** Scope, approach and the risks I can see, before any code.
3. **Small, reviewed steps.** Work happens on branches with pull requests, tests (RSpec) and clear descriptions, so your team can follow and own it.
4. **Honest status.** I say what works, what does not yet, and what I verified by running it, not just by reading docs.

{% include pricing.html %}

{% include faq.html items=site.data.faq %}

## Get in touch

Available now, and I usually reply within a few hours. The fastest way is email: [mohammadalijaisar@gmail.com](mailto:mohammadalijaisar@gmail.com). Tell me whether you want a full-time hire, a contract, or a project, and a little about the work and your stack.

</main>
