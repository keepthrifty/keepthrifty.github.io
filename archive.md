---
layout: page
title: Archive
permalink: /archive/
no_container: true
---

<h1>
  Everything in one place
  <a href="{{ "/feed.xml" | prepend: site.baseurl }}" class="right">
    <i class="material-icons small grey-text text-lighten-1">rss_feed</i>
  </a>
</h1>

You asked and I delivered - here's the full list of KeepThrifty posts in one spot so you can make sure you don't miss any morsels.

<div class="container">
  <div class="collection with-header">
    {% for post in site.posts %}
      {% unless post.next %}
        <h3 class="collection-header">{{ post.date | date: '%B %Y' }}</h3>
      {% else %}
        {% capture year %}{{ post.date | date: '%B %Y' }}{% endcapture %}
        {% capture nyear %}{{ post.next.date | date: '%B %Y' }}{% endcapture %}
        {% if year != nyear %}
          <h3 class="collection-header">{{ post.date | date: '%B %Y' }}</h3>
        {% endif %}
      {% endunless %}
      <a class="collection-item" href="{{ post.url }}">
        {{ post.title }}
      </a>
    {% endfor %}
  </div>
</div>
