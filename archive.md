---
layout: page
title: Archive
permalink: /archive/
redirect_from:
  - /challenges/
---

<h1 class="flow-text">
  All the posts (by date | <a href="/tags/">by topic</a>)
  <a href="{{ "/feed.xml" | prepend: site.baseurl }}" class="right">
    <i class="material-icons small grey-text text-lighten-1">rss_feed</i>
  </a>
</h1>

<div class="post-list">
	<ul>
	  {% for post in site.posts %}
	    {% unless post.next %}
	      <h2 class="flow-text">{{ post.date | date: '%B %Y' }}</h2>
	    {% else %}
	      {% capture year %}{{ post.date | date: '%B %Y' }}{% endcapture %}
	      {% capture nyear %}{{ post.next.date | date: '%B %Y' }}{% endcapture %}
	      {% if year != nyear %}
	        <h2 class="flow-text">{{ post.date | date: '%B %Y' }}</h2>
	      {% endif %}
	    {% endunless %}

	    <li><a href="{{ post.url }}">{{ post.title }}</a></li>
	  {% endfor %}
	</ul>
</div>
