---
layout: bannerPage
title: Step-by-Step Guide
fullTitle: Step-by-Step walkthrough to move your pet from the US to the UK
permalink: /step-by-step-walkthrough/
sequence_name: timeline
order: 1
excerpt: This Step-by-Step guide will walk you through how to move your pet from the US to the UK without any quarantine
linkName: Step by step
frontLinkImage: walkthroughIcon.png
bannerImage: walkthroughBanner.png
frontPageOrder: 1
---

Due to specific time restrictions outlined by the UK government, the order and timeliness of the necessary steps are very important.  The simplest and most time consuming mistake regards the strict rules for rabies vaccinations.  If your pet requires a rabies vaccination before traveling, the soonest your pet can travel is 21 days after the vaccination date.  Know if your pet needs a rabies vaccination before booking any travel arrangements.  


{% for collection in site.collections %}
	{% if collection.label == "guides" %}
		{% assign sorted_pages = collection.docs | sort:"order" %}
	{% endif %}
{% endfor %}

<div class="sequence-link-container">
{% assign counter = 1 %}
{% for my_page in sorted_pages %}
	{% if my_page.timeline %}
		<a class="page-link" href="#{{ my_page.url | split:'/' }}">{{ counter }}) {{ my_page.title }}</a><br>
	{% assign counter=counter | plus:1 %}
	{% endif %}
{% endfor %}
</div>

<br>

<div class="sequence-content">

{% assign counter = 1 %}
{% for my_page in sorted_pages %}
	{% if my_page.timeline %}
	<a class="sequence-link" name="{{ my_page.url | split: '/' }}"></a>
	<h2>STEP {{ counter }} - {{ my_page.title }}</h2><br>
	{{ my_page.content | newline_to_br }}<br><br>
	{% assign counter=counter | plus:1 %}
	{% endif %}
{% endfor %}
</div>