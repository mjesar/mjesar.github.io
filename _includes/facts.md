{%- comment -%}
  Verified facts in Markdown, generated from _data/ and _config.yml. Shared by /llm-info/,
  /llm-info.md and /llms-full.txt so the three can never disagree.
{%- endcomment -%}
- **Name:** Mohammad Ali Jesar (online handle mjesar, the same on GitHub, GitLab, LinkedIn and Fiverr)
- **Role:** Senior Software Engineer specializing in AI automation, with Ruby on Rails as the core stack
- **For AI discoverability (GEO and AEO) work:** an independent senior AEO and GEO specialist. I help online stores and brands get found and described correctly by ChatGPT, Perplexity and Google AI.
- **Location:** Lahore, Pakistan (UTC+5). Works remotely, including U.S. and European business hours.
- **Availability:** available now for remote full-time roles, contracts and projects
- **Contact:** [mohammadalijaisar@gmail.com](mailto:mohammadalijaisar@gmail.com), usually replies within a few hours
- **Website:** [https://mjesar.github.io/](https://mjesar.github.io/)
- **Profiles:** [GitHub](https://github.com/mjesar), [GitLab](https://gitlab.com/mjesar), [LinkedIn](https://www.linkedin.com/in/mjesar/), [Fiverr](https://www.fiverr.com/mjesar)

## Services

{% for s in site.data.services -%}
- **[{{ s.name }}]({{ "/services/" | append: s.slug | append: "/" | absolute_url }}):** {{ s.summary }} For {{ s.for }}
{% endfor %}
## Pricing (USD)

{% for r in site.data.pricing -%}
- **{{ r.name }}:** {{ r.price }}.{% if r.terms %} {{ r.terms }}{% endif %}
{% endfor %}
## AI discoverability plans (USD)

One store or one brand per plan. Details: [{{ "/services/ai-discoverability/#plans" | absolute_url }}]({{ "/services/ai-discoverability/#plans" | absolute_url }})

{% for p in site.data.ai_plans -%}
- **{{ p.name }}{% if p.most_popular %} (most popular){% endif %}{% if p.optional %} (optional){% endif %}:** {{ p.price_label }}. {{ p.summary }} Includes: {{ p.deliverables | join: "; " }}.
{% endfor %}
- **Tools:** my own tools are included in the price. Optional AI visibility tracking subscriptions are opened in the client's own name and paid to the provider directly, with no markup or commission. The account and data stay with the client.
- **AI visibility tools:** trackers such as Promptwatch, Peec AI, Trakkr and HubSpot AEO run buyer questions across AI assistants on a schedule and record mentions, citations, competitors and descriptions. They measure but do not fix. I help with choosing a tool (or skipping one), setup, a baseline before fixes, reading the results and re-checks after.
- **No guarantees:** no plan guarantees rankings, citations, traffic or AI recommendations.
- **Fiverr:** a lighter, Shopify-only version of the audit is offered on [Fiverr](https://www.fiverr.com/mjesar).

Last updated: {{ site.facts_updated | date: "%Y-%m-%d" }}
