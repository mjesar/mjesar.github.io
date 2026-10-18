---
title: Hire a Ruby on Rails & AI Engineer
ask_ai_question: "What services does Mohammad Ali Jesar offer at mjesar.github.io/services/, and who are they for? How can a client work with him?"
description: "Hire a Ruby on Rails and AI engineer for apps and MVPs, AI integration (MCP, RAG, agents), Shopify and e-commerce. Remote full-time, contract or project work."
image: /assets/img/og/services.png
---
<div class="hero small">
  <div class="wrap">
    <div class="bar" aria-hidden="true"></div>
    <h1>Work with me</h1>
    <p class="lede"><strong class="role">Senior Software Engineer specializing in AI automation.</strong> I help startups and businesses turn ideas into working applications, automate repetitive workflows with AI, and build software that solves real business problems.</p>
    <p class="meta">Open to remote full-time roles, contracts and freelance projects · Available now · Usually replies within a few hours · Flexible hours for U.S. and European time zones</p>
    <ul class="links">
      <li><a class="btn primary" href="{% include mailto.html contact="project_contact" %}">Have a project? Email me</a></li>
      <li><a class="btn" href="/resume/">Hiring? View my resume</a></li>
    </ul>
    <p class="hero-text-links"><a href="https://github.com/mjesar" rel="me noopener" target="_blank">GitHub</a> · <a href="https://www.linkedin.com/in/mjesar/" rel="me noopener" target="_blank">LinkedIn</a></p>
  </div>
</div>

<main class="wrap prose" markdown="1">

With 7+ years of experience building software for international clients, I work across backend systems, full-stack applications, LLM integrations, AI agents, MCP servers, RAG and e-commerce integrations. I can help you build a new product, improve an existing Rails application, connect AI to real business data, or solve complex Shopify and e-commerce problems.

I focus on results, not hours: a working product, less manual work, and processes that run on their own.

## What I can do for you

<div class="grid two">
{%- for s in site.data.services %}
<article class="card card-link service-card">
<h3><a href="/services/{{ s.slug }}/">{{ s.card_title | default: s.name }}</a></h3>
<p class="card-headline">{{ s.card_headline }}</p>
<p>{{ s.card_intro }}</p>
<p class="stack"><span class="tools-label">{{ s.card_tools_label | default: "What I work with" }}:</span> {{ s.card_tools }}</p>
<p class="card-proof">{{ s.card_proof | markdownify | remove: '<p>' | remove: '</p>' | strip }}</p>
<p class="card-cta" aria-hidden="true"><span class="more">{{ s.card_cta }}</span></p>
</article>
{%- endfor %}
</div>

{%- assign cheapest_plan = site.data.ai_plans | sort: "price" | first -%}
<p><a href="/services/ai-discoverability/">AI discoverability audits from ${{ cheapest_plan.price }}</a>: find out what ChatGPT, Perplexity and Google AI can and cannot see about your store or brand.</p>

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

{% include ask-ai.html kind="service" %}

## Get in touch

Available now, and I usually reply within a few hours. The fastest way is email: [mohammadalijaisar@gmail.com]({% include mailto.html contact="project_contact" %}). Tell me whether you want a full-time hire, a contract, or a project, and a little about the work and your stack.

Experimental: this site exposes read-only tools to browser AI agents (WebMCP).

</main>
