---
layout: page
title: Work
---

I'm passionate about solving real problems. I'm focused on helping organizations 
<div class="work" id="work">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h2>Work</h2>
      </div>
      <div>
        {% for page in site.pages %}
            {% if page.categories contains 'work' %}
              <div class="col-sm-6 col-md-4">
                <div class="thumbnail">
                  <a href="{{page.url}}">
                    <img src="{{page.cover-image}}">
                    <div class="caption">
                      <h3>{{page.title}}</h3>
                      <p>{{page.description}}</p>
                    </div>
                  </a>
                </div>
              </div>
          {% endif %}
        {% endfor %}
      </div>
    </div>
  </div>
</div>