---
title: Hire a Ruby on Rails and AI Engineer
description: "Senior Ruby on Rails engineer for full-stack apps and MVPs, AI engineering (MCP, RAG, agents), Shopify and e-commerce. Remote full-time, contract or project work."
---
<div class="hero small">
  <div class="wrap">
    <div class="bar" aria-hidden="true"></div>
    <h1>Work with me</h1>
    <p class="lede">I am a senior full-stack Ruby on Rails engineer. I build new Rails applications and MVPs, extend applications that are already in production, add AI features that work with real data, and build Shopify and e-commerce software that keeps data correct across systems.</p>
    <p class="meta">Open to remote full-time roles, contracts and project work · Available now · Usually replies within a few hours · Flexible hours for U.S. and European time zones</p>
    <ul class="links">
      <li><a class="btn primary" href="mailto:mohammadalijaisar@gmail.com">Email me</a></li>
      <li><a class="btn" href="https://www.linkedin.com/in/mjesar/" rel="me noopener" target="_blank">LinkedIn</a></li>
    </ul>
  </div>
</div>

<main class="wrap prose" markdown="1">

## What I can do for you

<div class="grid two">
{%- for s in site.data.services %}
<article class="card">
<h3><a href="/services/{{ s.slug }}/">{{ s.name }}</a></h3>
<p><strong>For:</strong> {{ s.for }}</p>
<p><strong>The problem:</strong> {{ s.problem }}</p>
<p><strong>What I do:</strong> {{ s.summary }}</p>
<p class="stack"><strong>Evidence:</strong> {{ s.evidence | markdownify | remove: '<p>' | remove: '</p>' | strip }}</p>
<p><a href="/services/{{ s.slug }}/" aria-label="Details: {{ s.name }}">Details</a></p>
</article>
{%- endfor %}
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
