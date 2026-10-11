---
title: Hire a Ruby on Rails and AI Engineer
description: "Hire Mohammad Ali Jesar (mjesar), senior Rails and AI engineer: AI integration, Shopify and BigCommerce apps and integrations. Remote, full-time or freelance."
---
<div class="hero small">
  <div class="wrap">
    <div class="bar" aria-hidden="true"></div>
    <h1>Work with me</h1>
    <p class="lede">I help teams add AI to Rails apps they already have, and build Shopify and e-commerce software that keeps data in step across systems.</p>
    <p class="meta">Open to remote full-time roles and freelance projects · Flexible hours for U.S. and European time zones</p>
    <ul class="links">
      <li><a class="btn primary" href="mailto:mohammadalijaisar@gmail.com">Email me</a></li>
      <li><a class="btn" href="https://www.fiverr.com/mjesar" rel="me noopener" target="_blank">Hire on Fiverr</a></li>
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

{% include pricing.html %}

{% include faq.html items=site.data.faq pricing=true %}

## Get in touch

The fastest way is email: [mohammadalijaisar@gmail.com](mailto:mohammadalijaisar@gmail.com). Tell me about the project, your stack, and whether you are looking for a full-time hire, a contract, or a fixed-scope job. For smaller fixed-scope work you can also order on [Fiverr](https://www.fiverr.com/mjesar){:target="_blank" rel="noopener"}.

</main>
