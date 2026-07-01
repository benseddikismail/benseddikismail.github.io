// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "publications in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "collection of selected projects. More projects on my GitHub.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-toward-context-aware-sycophancy-identifying-and-steering-the-signal",
        
          title: "Toward Context-Aware Sycophancy — Identifying and Steering the Signal",
        
        description: "can a model know when it&#39;s being sycophantic, and adjust accordingly?",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/llm-sycophancy/";
          
        },
      },{id: "post-from-connectomics-to-agi-rethinking-intelligence-through-brain-simulation",
        
          title: "From Connectomics to AGI — Rethinking Intelligence Through Brain Simulation",
        
        description: "insights from connectomics and brain simulation challenge prevailing assumptions about AGI",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/from-connectomics-to-agi/";
          
        },
      },{id: "news-presented-the-emopatt-lite-paper-at-the-20th-international-conference-on-information-technology-and-applications-icita-2025",
          title: 'Presented the EmoPAtt-Lite paper at the 20th International Conference on Information Technology and...',
          description: "",
          section: "News",},{id: "news-joined-the-bioinformatics-lab-at-um6p-as-a-research-engineer-and-data-analyst",
          title: 'Joined the Bioinformatics Lab at UM6P as a Research Engineer and Data Analyst....',
          description: "",
          section: "News",},{id: "news-sparkles-response-aware-agronomic-representation-learning-for-similarity-based-npk-recommendation-accepted-for-presentation-at-the-6th-european-sustainable-phosphorus-conference-espc6-2026",
          title: ':sparkles: Response-Aware Agronomic Representation Learning for Similarity-Based NPK Recommendation Accepted for Presentation at...',
          description: "",
          section: "News",},{id: "news-sparkles-podsage-story-driven-ai-for-enhanced-learning-comprehension-and-retention-accepted-for-publication-and-presentation-at-samyrad-2026",
          title: ':sparkles: PODSAGE: Story-Driven AI for Enhanced Learning, Comprehension, and Retention Accepted for Publication...',
          description: "",
          section: "News",},{id: "projects-bareos",
          title: 'bareOS',
          description: "A lightweight operating system featuring many modules including TTY support, thread scheduling, and a filesystem",
          section: "Projects",handler: () => {
              window.location.href = "/projects/bareos/";
            },},{id: "projects-image-reconstruction-from-human-brain-activity",
          title: 'Image Reconstruction from Human Brain Activity',
          description: "High-fidelity image reconstruction from human brain activity using latent diffusion models",
          section: "Projects",handler: () => {
              window.location.href = "/projects/brain_image_reconstruction/";
            },},{id: "projects-cifar-10-image-classification",
          title: 'CIFAR-10 Image Classification',
          description: "CIFAR-10 image classification with shuffled patches",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ciphar10_classification/";
            },},{id: "projects-curriculum-learning-for-nlu",
          title: 'Curriculum Learning for NLU',
          description: "Curriculum Learning for NLU using the BERT language model",
          section: "Projects",handler: () => {
              window.location.href = "/projects/clu_for_nlu/";
            },},{id: "projects-covid-19-detection",
          title: 'COVID-19 Detection',
          description: "Deep convolutional neural network to detect COVID-19 from chest X-rays",
          section: "Projects",handler: () => {
              window.location.href = "/projects/covid19_detection/";
            },},{id: "projects-delivery-management-system",
          title: 'Delivery Management System',
          description: "Delivery Management System designed for clients and administrators to efficiently and effectively handle and track deliveries",
          section: "Projects",handler: () => {
              window.location.href = "/projects/delivery_mgt_sys/";
            },},{id: "projects-emopatt-lite",
          title: 'EmoPAtt-Lite',
          description: "Lightweight facial emotion recognition",
          section: "Projects",handler: () => {
              window.location.href = "/projects/emopattlite/";
            },},{id: "projects-ewallet",
          title: 'eWallet',
          description: "Digital wallet and expense manager mobile application",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ewallet/";
            },},{id: "projects-hand-gestures-classification",
          title: 'Hand Gestures Classification',
          description: "Hand gestures classification using a pre-trained Vision Transformer",
          section: "Projects",handler: () => {
              window.location.href = "/projects/hand_gestures_classification/";
            },},{id: "projects-high-level-programmning-language",
          title: 'High-Level Programmning Language',
          description: "Procedural programming language and its compiler",
          section: "Projects",handler: () => {
              window.location.href = "/projects/hlpl/";
            },},{id: "projects-matrix-multiplication",
          title: 'Matrix Multiplication',
          description: "MapReduce-based matrix multiplication algorithm",
          section: "Projects",handler: () => {
              window.location.href = "/projects/matrix_multiplication/";
            },},{id: "projects-memcached-lite",
          title: 'Memcached-lite',
          description: "Memcached distributed memory object caching system",
          section: "Projects",handler: () => {
              window.location.href = "/projects/memcached_lite/";
            },},{id: "projects-naive-bayes-classifier",
          title: 'Naive Bayes Classifier',
          description: "Naive Bayes classifier of reviews into truthful/deceptive from scratch",
          section: "Projects",handler: () => {
              window.location.href = "/projects/naive_bayes_classifier/";
            },},{id: "projects-network-compression-using-svd",
          title: 'Network Compression using SVD',
          description: "Neural network compression using singular value decomposition",
          section: "Projects",handler: () => {
              window.location.href = "/projects/network_compression/";
            },},{id: "projects-optical-mark-recognition",
          title: 'Optical Mark Recognition',
          description: "Optical mark recognition for automated grading from scratch",
          section: "Projects",handler: () => {
              window.location.href = "/projects/omr/";
            },},{id: "projects-podsage",
          title: 'PODSAGE',
          description: "Story-driven AI for enhanced learning, comprehension, and retention",
          section: "Projects",handler: () => {
              window.location.href = "/projects/podsage/";
            },},{id: "projects-rnns-as-a-generative-model",
          title: 'RNNs as a Generative Model',
          description: "Generating the bottom half of MNIST digits using an RNN",
          section: "Projects",handler: () => {
              window.location.href = "/projects/rnns_generation/";
            },},{id: "projects-modeling-rock-classification-using-dl-and-psychological-frameworks",
          title: 'Modeling Rock Classification Using DL and Psychological Frameworks',
          description: "Predicting psychological feature spaces from rock image similarity judgments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/rock_classification/";
            },},{id: "projects-speaker-verification",
          title: 'Speaker Verification',
          description: "Speaker verification system using a Siamese Neural Network",
          section: "Projects",handler: () => {
              window.location.href = "/projects/speaker_verification/";
            },},{id: "projects-speech-denoising",
          title: 'Speech Denoising',
          description: "Speech Denoising using deep learning",
          section: "Projects",handler: () => {
              window.location.href = "/projects/speech_denoising/";
            },},{id: "projects-collaboration-quality-in-student-llm-dyads",
          title: 'Collaboration Quality in Student–LLM Dyads',
          description: "Characterising the quality of student interaction with large language models",
          section: "Projects",handler: () => {
              window.location.href = "/projects/student_llm_collaboration/";
            },},{id: "projects-intelligent-support-agent",
          title: 'Intelligent Support Agent',
          description: "Chatbot through which users can get automatic support and processing of their requests",
          section: "Projects",handler: () => {
              window.location.href = "/projects/support_agent/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/Ismail%20Ben%20seddik%20%E2%80%93%20CV.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%62%65%6E%73%65%64%64%69%6B%69%73%6D%61%69%6C@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/benseddikismail", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/benseddik-ismail", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
