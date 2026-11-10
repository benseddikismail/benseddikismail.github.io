---
layout: page
title: PODSAGE — Agentic Learning Framework
description: Evidence-grounded multi-agent AI for adaptive learning through stories and conversational podcasts
img: assets/img/projects/podsage_agent_architecture.png
importance: 1
category: Human-Centered AI & Cognitive Modeling
related_publications: true
---

**PODSAGE** is an evidence-grounded, stateful multi-agent framework designed to personalize learning through educational storytelling and conversational podcasts. Building on the original [PODSAGE](/projects/podsage/) platform, this research explores how large language models, cognitive science, and adaptive learner modeling can be integrated to support comprehension, knowledge retention, and independent learning {% cite podsage2026 %}.

The proposed architecture centers on an **LLM Orchestrator** and an **Evidence-Grounding Council** that coordinate knowledge retrieval, pedagogical planning, narrative generation, conversational audio, assessment, and personalized recommendations. Rather than relying on static learner profiles or single-prompt generation, PODSAGE maintains an evolving representation of learner knowledge, misconceptions, confidence, memory, and preferences to guide instructional decisions over time.

**Research Areas:** Multi-Agent Systems, Large Language Models, Retrieval-Augmented Generation, Learner Modeling, Cognitive Science, Adaptive Learning, Human-Centered AI

**Research Status:** Presented at SAMYRAD 2026, Seville, Spain. Accepted for publication in forthcoming conference proceedings.

<div class="row justify-content-center">
  <div class="col-sm-12 mt-3">
    {% include figure.liquid loading="eager" path="assets/img/projects/podsage_agent_architecture.png" title="PODSAGE multi-agent architecture" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

<div class="caption text-center">
  Proposed PODSAGE architecture integrating evidence grounding, multi-agent orchestration, learner-state modeling, adaptive storytelling, conversational podcasts, assessment, and recommendation.

  <!-- <br><br> -->

  <!-- <a href="../../assets/pdf/PODSAGE_Agentic.pdf"
     class="btn btn-outline-secondary btn-sm"
     target="_blank">
    <i class="fas fa-graduation-cap"></i> Paper
  </a> -->
</div>

#### Main Research Contributions

- **Evidence-Grounded Multi-Agent Architecture:** A stateful framework coordinating specialized agents for evidence retrieval, educational content generation, conversational audio, assessment, recommendation, and safeguards.

- **Evidence-Grounding Council:** A multi-agent reasoning mechanism combining domain expertise, pedagogical and cognitive-science guidance, independent evaluation, adversarial critique, and citation verification to support reliable instructional decisions.

- **Dynamic Learner Modeling:** An evolving learner-state representation that integrates knowledge, misconceptions, memory strength, confidence, engagement, and preferences to guide personalized instruction, assessment difficulty, and review scheduling.

- **Adaptive Narrative and Podcast Generation:** A framework for adapting story structure, analogies, dialogue, explanation depth, pacing, and conversational audio to individual learner needs while preserving factual accuracy.

- **Evaluation Framework:** A proposed validation methodology combining component-level benchmarks, expert and LLM-based assessment, ablation studies, and controlled human-subject experiments measuring comprehension, knowledge transfer, and delayed retention.

#### Research Directions

- **Cognitive Modeling and Personalized Learning:** Investigating how learner interactions, self-explanations, confidence judgments, and retrieval performance can inform interpretable models of knowledge acquisition, misconceptions, and forgetting.

- **Multi-Agent Reasoning and Evidence Grounding:** Evaluating whether specialized agents, adversarial critique, and evidence verification improve the factual reliability and pedagogical quality of AI-generated learning materials.

- **Adaptive Learning and Long-Term Retention:** Studying how narrative personalization, retrieval practice, spaced repetition, and conversational interaction influence comprehension, knowledge transfer, and delayed recall.

- **Human-Centered and Accessible AI:** Exploring adaptive educational interfaces that accommodate diverse cognitive needs, language proficiency, accessibility preferences, and learner autonomy.
