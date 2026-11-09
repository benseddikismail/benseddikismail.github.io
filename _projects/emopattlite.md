---
layout: page
title: EmoPAtt-Lite
description: Lightweight facial emotion recognition
img: assets/img/projects/emopattlite.png
importance: 5
category: Human-Centered AI & Cognitive Modeling
related_publications: true
---

Facial expressions are a fundamental component of human communication, conveying a wide range of emotional states.  
However, **facial expression recognition (FER)** in the wild remains challenging due to variations in pose, illumination, occlusion, and limited computational resources.

**EmoPAtt-Lite** is a lightweight facial emotion recognition architecture designed to achieve **high accuracy with minimal computational cost**, making it suitable for deployment on resource-constrained devices  {% cite benseddik2026emopattlite %}.

<!-- <br> -->

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.liquid
      loading="eager"
      path="assets/img/projects/emopattlite.png"
      title="EmoPAtt-Lite architecture"
      class="img-fluid rounded z-depth-1"
    %}
  </div>
</div>


<div class="caption text-center">
  Overview of the EmoPAtt-Lite architecture, combining a truncated MobileNetV1 backbone with spatial transformation, channel-wise attention, and an attention-based classifier.
  <br><br>
  <a href="https://github.com/benseddikismail/EmoPAtt-Lite"
     class="btn btn-outline-secondary btn-sm"
     target="_blank">
    <i class="fab fa-github"></i> Code
  </a>
</div>

## Results

Despite its lightweight design, **EmoPAtt-Lite contains only 1.3M parameters** and achieves **state-of-the-art performance** on the **FER2013** benchmark:

- **Accuracy:** 79.35%
- **Model size:** ~1.3M parameters
- **Training requirements:** Minimal compared to heavier deep FER models

These results demonstrate that **high recognition accuracy does not require heavy computational demands**.

## Contributions

The main contributions of this work are:

- A novel **lightweight FER architecture** suitable for real-world deployment  
- Successful integration of **STN and SE blocks** into a truncated MobileNetV1  
- An efficient **attention-based classifier** tailored for FER  
- State-of-the-art results on FER2013 with significantly fewer parameters  

<!-- 
## Publication

**EmoPAtt-Lite: A Lightweight Attention-Based Architecture for Facial Emotion Recognition**  
Presented at the **20th International Conference on Information Technology and Applications (ICITA 2025)**. -->