---
layout: page
title: Resources
permalink: /resources/
no_container: true
---

# Resources #

Personal finance is a broad term that covers a lot of areas and each area has a lot of depth. One of the best things you can do to empower yourself in your financial life is to learn the fundamentals of each area so you can know how to analyze situations and make the most optimal decisions.

<div class="container">
  {% for category in site.page_categories %}
    <h2>{{ category | capitalize }}</h2>
    {% for page in site.pages %}
      {% if page.categories contains category %}
        <p>
          <a href="{{ page.url }}">
            {{page.title}} - {{page.categories}}
          </a>
        </p>
      {% endif %}
    {% endfor %}
  {% endfor %}
</div>
