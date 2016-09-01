---
layout: page
title: Archive
permalink: /archive/
redirect_from:
  - /challenges/
---

<h2>
  Read All The Things
  <a href="{{ "/feed.xml" | prepend: site.baseurl }}" class="right">
    <i class="material-icons small grey-text text-lighten-1">rss_feed</i>
  </a>
</h2>

{% for post in site.posts %}
  {% unless post.next %}
  <h3>{{ post.date | date: '%B %Y' }}</h3>
  {% else %}
    {% capture year %}{{ post.date | date: '%B %Y' }}{% endcapture %}
    {% capture nyear %}{{ post.next.date | date: '%B %Y' }}{% endcapture %}
    {% if year != nyear %}
  <h3>{{ post.date | date: '%B %Y' }}</h3>
    {% endif %}
  {% endunless %}
  <a href="{{ post.url }}">
    {{ post.title }}
  </a>
{% endfor %}
