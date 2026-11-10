---
layout: post
title: From Connectomics to AGI — Rethinking Intelligence Through Brain Simulation
date: 2026-03-12 15:09:00
description: insights from connectomics and brain simulation challenge prevailing assumptions about AGI
tags: AI BCI Learning
categories: synthesis
featured: true
hidden: false
---

The reconstruction of the brain’s wiring diagram, connectomics, enables the identification of circuits responsible for complex behaviors such as courtship, navigation, and aggression. Studying these circuits allows us to understand long-term memory, as individual experiences are believed to be stored in the unique patterns of neural connections [1]. Notably, by understanding the brain at the synaptic level, we can gain insights into neuropathology in various disorders [2]. Understanding brain structure paves the way to reveal “connectopathies,” or wiring errors, that are the root causes of these conditions [3].

A single human brain fragment can generate 1.8 petabytes of data, which is too large to be mapped manually [2]. To simulate brain activity, mechanistic models such as the Leaky-Integrate-and-Fire (LIF) model are used to mathematically describe how a neuron’s voltage builds up and fires once it crosses a specific threshold [1]. Transformer models like QuantFormer and POCO are used to forecast neural activity. Foundation models help uncover general principles of how the visual system responds to movement and light by pooling data from different subjects to create a foundational core, then quickly adapting to new individuals [4].

Nonetheless, decoding internal stimuli from brain activity faces major hurdles, such as losing valuable spatial context information about cell size, position, and the activity occurring between known neurons. This loss often results from reducing complex 4D volumetric video data into 1D traces or simple activity line graphs [5]. Glia (non-neuronal support cells), electrical synapses (gap junctions), and neuromodulators like dopamine—with their diverse effects and roles—are often excluded from connectomes (wiring diagrams). However, these elements can profoundly alter how a circuit behaves without changing its wiring [6].

Another major hurdle is inter-individual variability: every brain is unique. Even genetically identical worms demonstrate different neural connections based on their life experiences [3].

Similar to human-designed technology, brains are organized with meticulous efficiency. Rent’s Rule is an empirical optimization law describing the packing of gates and wires on a computer chip. The Drosophila brain was found to follow Rent’s Rule [7]. This suggests that both human engineering and biology have converged on similar principles for maximizing computation within minimal physical space. In the human cerebral cortex, most connections involve only one or a few synapses. Yet researchers have discovered rare axonal inputs that form 50 or more synapses with a single target neuron—an unusual phenomenon [2]. These “super-connections” could act as uniquely powerful triggers for specialized neural pathways in humans. Furthermore, different species may use mathematical strategies for circuit design that differ substantially. Connection strengths in mammals usually follow a log-normal distribution, whereas the fly brain follows a power law [7].

These striking insights about biological “hardware” and evolutionary engineering that mirror human-designed technology inspire the development of AI models structured more like the brain. If the objective of AGI is to build a system that can plan and reason like a human, the brain provides a compelling blueprint. New algorithms for energy-efficient computing and data-efficient learning could be developed by deciphering the neural code of natural intelligence. Moving toward a digital twin, the OpenWorm project integrates the neural wiring of a worm with a biomechanical body and a fluid environment [8]. This could potentially enable AI to learn through sensorimotor feedback, much like a biological organism. AGI may require embodiment—experiencing physical consequences to better understand the world [8][9].

Still, AI and the brain solve different problems. For one, humans have far fewer lifetime experiences than the number of connections in their brains, unlike AI systems trained on massive datasets. Humans and animals possess profound dexterity in unsupervised and few-shot learning, an aspect of data-efficient learning that AI still lacks. So far, performance improvements in AI are largely driven by scaling laws, where more parameters and more data yield better results [3]. This suggests that the algorithms underlying natural intelligence are far more efficient than the “brute-force” data requirements of current AI.

Engramics is a novel concept proposing that biological brains store information in the unique physical patterns of their wiring diagrams, whereas AI treats data as external input used to adjust weights [2][3]. AI has achieved remarkable success in narrow competencies, such as classifying images or playing board games. Biological brains, by contrast, excel at integrative intelligence—encompassing reasoning, sensorimotor integration, planning, and memory within a single, flexible system—which AI still struggles to replicate [1]. AI models are typically “black boxes” engineered for predictive accuracy, often ignoring biological constraints entirely. Natural brains, on the other hand, are shaped by survival pressures. For example, a fly’s brain is optimized to pack maximal computation into the lightest, tightest space to facilitate flight and survival [7].

One main objective is to decipher the neural code of natural intelligence. Through projects like MICrONS and FlyWire, researchers create digital twins of brains to uncover the blueprint of how they perform complex reasoning with minimal energy and data [4][10]. The aspiration is to implement those same algorithms on more powerful hardware. If AI can adopt the brain’s norms of energy-efficient computing, its reasoning potential could scale far beyond biological limits. Currently, however, AI requires megawatts of power and football-field-sized facilities to reproduce forms of intelligence that a mouse can achieve with just a few milliwatts of energy [3].

AI holds the potential to learn a universal representation of intelligence that no single human could ever acquire in one lifetime [11]. While human circuits are built partly through limited life experience, a foundation model can pool massive data from multiple individuals and species [4]. For humans, when we learn something new that contradicts what we previously knew, the new information often overwrites the old. In contrast, large language models tend to preserve early training information while struggling to incorporate recent updates; attention mechanisms may privilege earlier encodings over recency (“Transformers remember first, forget last”).
Arguably, architectural modifications that better mimic biological memory may therefore be justified. Is this the path to AGI? Or are efforts to achieve AGI in this way conceptually misguided? One common definition of AGI describes it as an AI capable of doing everything a human can do—but are humans truly general?

Yann LeCun et al. recently introduced the concept of Superhuman Adaptable Intelligence (SAI), referring to adaptive intelligence capable of surpassing humans at any task we can perform, while also adapting to tasks beyond the human domain that have practical utility [12]. They argue that humans are highly specialized creatures optimized for tasks of evolutionary importance, particularly those fundamental to physical survival. A human-centered definition of AGI therefore overlooks the vast landscape of non-human intelligence. There is no reason to expect the most capable machines to mimic this narrow human survival toolkit.

Additionally, definitions based on benchmarking AI performance across ever-expanding test suites lack a clear metric for assessing intelligence itself. A more principled measure may be the speed of adaptation to new tasks, grounded in a definition of intelligence centered on learning and flexibility. The brain consists of multiple interacting systems rather than a single monolithic architecture, suggesting that a solitary system is unlikely to adapt in the same way humans do. Thus, a diversity of models and modalities may be necessary to achieve broad adaptability, rather than relying on one model that does it all.

Natural cognitive systems rely on world models for simulation and planning. A world model is central to few-shot and zero-shot adaptation. Specialization and adaptation across diverse tasks can be enabled by self-supervised learning and predictive world models—shifting from token-level prediction toward latent prediction architectures. Ultimately, AI should be evaluated based on its reliability and efficiency in generating new competencies, rather than using human performance and behavior as the sole benchmark for progress.

## References

[1] P. K. Shiu et al., "A Drosophila computational brain model reveals sensorimotor processing," Nature, vol. 634, pp. 210–219, Oct. 2024.

[2] A. Shapson-Coe et al., "A petavoxel fragment of human cerebral cortex reconstructed at nanoscale resolution," Science, vol. 384, eadk4858, May 2024.

[3] L. F. Abbott et al., "The Mind of a Mouse," Cell, vol. 182, pp. 1372–1376, 2020.

[4] E. Y. Wang et al., "Foundation model of neural activity predicts response to new stimulus types," Nature, vol. 640, pp. 470–477, Apr. 2025.

[5] A. Immer et al., "Forecasting Whole-Brain Neuronal Activity from Volumetric Video," arXiv preprint arXiv:2503.00073, Feb. 2025.

[6] L. K. Scheffer and I. A. Meinertzhagen, "A connectome is not enough – what is still needed to understand the brain of Drosophila?," Journal of Experimental Biology, vol. 224, jeb242740, Oct. 2021.

[7] L. K. Scheffer et al., "A connectome and analysis of the adult Drosophila central brain," eLife, vol. 9, e57443, Sep. 2020.

[8] G. P. Sarma et al., "OpenWorm: overview and recent advances in integrative biological simulation of Caenorhabditis elegans," Philosophical Transactions of the Royal Society B, vol. 373, 20170382, Sep. 2018.

[9] J. K. Lappalainen et al., "Connectome-constrained networks predict neural activity across the fly visual system," Nature, vol. 634, pp. 1132–1140, Oct. 2024.

[10] S. Dorkenwald et al., "Neuronal wiring diagram of an adult brain," Nature, vol. 634, pp. 124–138, Oct. 2024.

[11] Y. Duan et al., "POCO: Scalable Neural Forecasting through Population Conditioning," arXiv preprint arXiv:2410.22415 [Published at NeurIPS], 2024.

[12] J. Goldfeder, P. Wyder, Y. LeCun, and R. Shwartz Ziv, “AI Must Embrace Specialization via Superhuman Adaptable Intelligence,” arXiv preprint arXiv:2602.23643, Feb. 2026.

[12] V. Jain, "How AI could lead to a better understanding of the brain," [Commentary from Google Research], 2023.

[13] M. R. Tavakoli et al., "Light-microscopy-based connectomic reconstruction of mammalian brain tissue," Nature, vol. 642, pp. 398–410, May 2025.

[14] "QuantFormer: Learning to Quantize for Neural Activity Forecasting in Mouse Visual Cortex," [Research Methodology Excerpts], 2024.

[15] R. Barbulescu et al., "Learning the dynamics of realistic models of C. elegans nervous system with recurrent neural networks," Scientific Reports, vol. 13, no. 467, Jan. 2023.

[16] S. Rasp et al., "WeatherBench: A Benchmark Data Set for Data-Driven Weather Forecasting," Journal of Advances in Modeling Earth Systems, vol. 12, Aug. 2020.

[17] J. M. Lueckmann et al., "ZAPBench: A Benchmark for Whole Brain Activity Prediction in Zebrafish," arXiv preprint arXiv:2503.02618 [Presented at ICLR 2025], 2025.
