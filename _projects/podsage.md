---
layout: page
title: PODSAGE
description: Story-driven AI for enhanced learning, comprehension, and retention
img: assets/img/projects/podsage/podsage.png
importance: 4
category: Human-Centered AI & Cognitive Modeling
related_publications: false
---

**PODSAGE** is an AI-driven educational storytelling platform that transforms complex concepts into engaging, interactive narratives. By combining fine-tuned large language models with multimodal delivery, PODSAGE enhances comprehension and long-term retention, particularly for neurodivergent and diverse learners {% cite podsage %}.

The platform generates adaptive, citation-aware stories that integrate text, audio, and visuals, grounded in cognitive science and educational psychology.

    Technologies: Ollama (LLaMA 3.3), PyTorch, RAG, ElevenLabs, DeepFloyd IF, Flutter, FastAPI, Django, Spring Boot, Node.js, PostgreSQL, MongoDB, Redis, Google Cloud Platform

<!-- <br> -->
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/podsage/podsage_1.png" title="podsage 1" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/podsage/podsage_2.png" title="podsage 2" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/podsage/podsage_3.png" title="podsage 3" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<div class="caption text-center">
  Snapshots of the prototype for PODSAGE.
  <br><br>
  <a href="https://drive.google.com/file/d/1t0lzNSWOVXI-TRa-VxhpdnH14biS9Wc4/view?usp=sharing"
     class="btn btn-outline-secondary btn-sm"
     target="_blank">
    <i class="fas fa-video"></i> Demo
  </a>

  <a href="../../assets/pdf/PODSAGE.pdf" class="btn btn-outline-secondary btn-sm" target="_blank">
    <i class="fas fa-graduation-cap"></i> Paper
  </a>
</div>

#### Main Contributions

- A scalable, user-centric framework for generating emotionally engaging and pedagogically effective stories from complex concepts using LLMs.
- A demonstration that fine-tuning a lightweight LLM on a curated dataset distilled from a more powerful model (GPT-4.1) enables high-quality, efficient story generation.
- A platform supporting both human and LLM-based evaluation, enabling continuous improvement and trust in educational storytelling systems.

#### Research Directions Enabled by PODSAGE

- **Psychographic, Behavioral, and Cognitive Data Collection**  
  Longitudinal analysis of user interaction data (choices, response times, quiz performance) to study how narrative structure and personalization impact learning and memory.

- **Human Subject Studies**  
  Controlled experiments comparing narrative techniques, formats, and feedback mechanisms to rigorously evaluate retention and comprehension.

- **LLMs as Educational Evaluators**  
  Use of LLMs as scalable, consistent evaluators of narrative quality, educational value, and learning objective alignment.

- **Narratives for LLM Reasoning**  
  Investigation of whether story-based prompting improves LLM reasoning, problem-solving, and knowledge transfer in complex domains.

<!--
The code is simple.
Just wrap your images with `<div class="col-sm">` and place them inside `<div class="row">` (read more about the <a href="https://getbootstrap.com/docs/4.4/layout/grid/">Bootstrap Grid</a> system).
To make images responsive, add `img-fluid` class to each; for rounded corners and shadows use `rounded` and `z-depth-1` classes.
Here's the code for the last row of images above:

{% raw %}

```html
<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
```

{% endraw %} -->
