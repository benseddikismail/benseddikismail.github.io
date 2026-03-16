---
layout: page
title: Image Reconstruction from Human Brain Activity
description: High-fidelity image reconstruction from human brain activity using latent diffusion models
img: assets/img/projects/img-reconstruction.png
importance: 3
category: Human-Centered AI & Cognitive Modeling
---

**Image Reconstruction from Human Brain Activity** explores how generative AI can be used to reconstruct visual experiences directly from neural signals. Positioned at the intersection of **computational neuroscience** and **computer vision**, this project leverages **latent diffusion models** to translate functional MRI (fMRI) activity into high-resolution visual reconstructions.

Our framework integrates **Versatile Diffusion** with latent representations derived from brain activity using **VDVAE**, enabling a principled bridge between neural representations and visual perception. Additionally, **CLIP-based multimodal alignment** enhances semantic consistency between reconstructed images and their intended visual content.


    Technologies: Stable Diffusion, VDVAE, CLIP, Python, PyTorch, Neuroimaging Pipelines, fMRI

<!-- <br> -->
<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.liquid
      loading="eager"
      path="assets/img/projects/img-reconstruction.png"
      title="Image Reconstruction from Human Brain Activity"
      class="img-fluid rounded z-depth-1"
    %}
  </div>
</div>

<div class="caption text-center">
  Image Creation Pipeline. The process includes fMRI input, base image generation using an autoencoder,
  CLIP embedding extraction (visual and textual), and conditional refinement using the diffusion model.
  <br><br>
  <a href="https://drive.google.com/file/d/1w_7iMii29GE_fcbepGQqZi1JjOsojSrC/view?usp=sharing"
     class="btn btn-outline-secondary btn-sm"
     target="_blank">
    <i class="fas fa-video"></i> Demo
  </a>
</div>

#### Methodology

Our approach builds on recent advances in **diffusion-based generative modeling**, which have demonstrated remarkable performance in synthesizing high-resolution, multimodal content.

Key components include:

- **Latent Representation Extraction (VDVAE)**  
  fMRI signals are mapped into latent representations aligned with the generative model’s latent space.

- **Latent Diffusion with Versatile Diffusion**  
  These latent codes are injected into the diffusion process, guiding image generation from noise to structured visual content.

- **Multimodal Alignment with CLIP**  
  Vision–language embeddings are used to reinforce semantic coherence between reconstructed images and their underlying perceptual meaning.

Together, these components enable a robust pipeline for translating neural activity into visually meaningful reconstructions.

#### Main Contributions

- A diffusion-based framework for reconstructing visual stimuli directly from fMRI data  
- Integration of **latent neural representations** into the diffusion generation process  
- Demonstration of the strengths and limitations of diffusion models for neural decoding  
- Empirical insights into how scene complexity affects reconstruction fidelity  
 
