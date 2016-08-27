---
layout: page
title: Recommended Products and Services
author: Chris
image: /img/recommended.jpg
permalink: /recommended/
---

# Recommendations #

On the path to financial freedom, we all invariably find tools and products that help us along the way. The ones you see below are ones that I currently use or have used in the past and can recommend based on my experience.

{% assign typed = site.recommendations | group_by: "type" %}

{% for type in typed %}
  [{{ type.name }}](#{{ type.name | slugify }})
{% endfor %}

{% for type in typed %}
<div class="recommendation-set row">
  <a name="{{ type.name | slugify }}"></a>
  <h3>{{ type.name }}</h3>
   {% for recommendation in type.items %}
   <div class="recommendation-entry col s12 m6 l6">
     <div class="card">
       <div class="card-image">
          <a href="{{ recommendation.link }}">
            <img src="{{ recommendation.image }}">
          </a>
       </div>
       <div class="card-content">
          <a href="{{ recommendation.link }}">
            <span class="card-title grey-text text-darken-4">{{ recommendation.title }}</span>
          </a>
          {{ recommendation.content }}
       </div>
       <div class="card-action">
         <a href="{{ recommendation.link }}">Get {{ recommendation.title }}</a>
       </div>
     </div>
   </div>
   {% endfor %}
 </div>
 {% endfor %}
