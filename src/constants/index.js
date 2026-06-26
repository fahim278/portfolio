import {
  mobile,
  backend,
  creator,
  web,
  python,
  django,
  aiml,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  voiceAssistant,
  spamDetector,
  personalityPrediction,
  genderDetection,
  fakeNewsDetector,
  allProjects,
  aiQuizAgent,
  w9Extractor,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Python Developer",
    icon: python,
  },
    {
    title: "Django Developer",
    icon: django,
  },
  {
    title: "AI/ML Engineer",
    icon: aiml,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Python Developer",
    company_name: "IREG-IT",
    icon: backend,
    iconBg: "#1a1a2e",
    date: "2023 - 2024",
    points: [
      "Developed advanced OCR solutions using EasyOCR, Tesseract, PaddleOCR, and PyMuPDF for extracting data from tax documents including static/dynamic PDFs and images.",
      "Implemented data extraction pipelines with 100% accuracy using Plumber, Tabula, and Regex for processing flattened and unflattened PDF formats.",
      "Built automated systems for extracting formatting rules from PDFs and converting them to JSON, CSV, and XML formats following IRIS standards.",
      "Engineered robust Python scripts for handling complex document structures and metadata extraction from various tax document formats.",
    ],
  },
  {
    title: "AI/ML Engineer",
    company_name: "IREG-IT",
    icon: backend,
    iconBg: "#2d2d44",
    date: "2023 - 2024",
    points: [
      "Developed machine learning models for handwriting feature extraction and personality prediction from handwritten text and images.",
      "Implemented classification models handling both balanced and unbalanced datasets with optimized performance metrics.",
      "Integrated LLM APIs for specialized data processing, text analysis, and intelligent document understanding tasks.",
      "Applied computer vision techniques for feature extraction from handwriting samples to build predictive models.",
    ],
  },
  {
    title: "Django Developer",
    company_name: "IREG-IT",
    icon: backend,
    iconBg: "#1a1a2e",
    date: "2023 - 2024",
    points: [
      "Designed and developed RESTful APIs using Django REST Framework for tax document processing and data management systems.",
      "Created robust API endpoints for handling JSON data, file uploads, and complex data transformations.",
      "Implemented data validation rules and business logic for ensuring data integrity across the application.",
      "Built automated PDF filling system integrated with web forms that generates single/multiple fillable PDFs and ZIP archives dynamically.",
    ],
  },
  {
    title: "Backend Developer",
    company_name: "IREG-IT",
    icon: backend,
    iconBg: "#2d2d44",
    date: "2023 - 2024",
    points: [
      "Engineered PDF form automation using Java PDFBox to extract AcroForm fields including headers, partial names, fully qualified names, data types, and values.",
      "Developed web form integration system that automatically fills PDF forms based on user input with precise field mapping using fully qualified names.",
      "Configured and deployed SMTP servers on domain and VPS infrastructure during internship for enterprise email communications.",
      "Architected scalable backend solutions for document processing workflows handling multiple file formats and concurrent operations.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Personality Prediction (Handwriting & LLMs)",
    description:
      "A machine learning project that predicts personality traits based on handwriting samples and large language models (LLMs). The system analyzes handwriting features and textual data to provide insights into an individual's personality characteristics.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "deeplearning",
        color: "green-text-gradient",
      },
      {
        name: "opencv",
        color: "pink-text-gradient",
      },
      {
        name: "nlp",
        color: "blue-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Rule Based Live Face Mask Detection",
    description:
      "A real-time face mask detection system using OpenCV and rule-based logic to identify whether a person is wearing a mask via webcam.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "opencv",
        color: "green-text-gradient",
      },
      {
        name: "deeplearning",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Emoji Predictor From Text",
    description:
      "A deep learning model that predicts the most relevant emoji for a given text input using NLP and sentiment analysis techniques.",
    tags: [
      {
        name: "deeplearning",
        color: "blue-text-gradient",
      },
      {
        name: "nlp",
        color: "green-text-gradient",
      },
      {
        name: "tensorflow",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "Voice Assistant",
    description:
      "An intelligent voice assistant system that recognizes and processes voice commands to perform tasks and provide information through natural language understanding.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "nlp",
        color: "green-text-gradient",
      },
      {
        name: "speech-recognition",
        color: "pink-text-gradient",
      },
    ],
    image: voiceAssistant,
    source_code_link: "https://github.com/fahim278/Voice_Assistant",
  },
  {
    name: "Spam SMS Detector",
    description:
      "A machine learning classifier that detects spam and phishing SMS messages using text analysis and classification algorithms to protect users from malicious communications.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "nlp",
        color: "green-text-gradient",
      },
      {
        name: "classification",
        color: "pink-text-gradient",
      },
    ],
    image: spamDetector,
    source_code_link: "https://github.com/fahim278/Spam-SMS-Detector",
  },
  {
    name: "Gender Detection From Face Images",
    description:
      "A deep learning model using computer vision and convolutional neural networks to accurately predict and classify gender from facial images in real-time.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "deeplearning",
        color: "green-text-gradient",
      },
      {
        name: "opencv",
        color: "pink-text-gradient",
      },
    ],
    image: genderDetection,
    source_code_link: "https://github.com/fahim278",
  },
  {
    name: "Fake News Detector",
    description:
      "An AI-powered system that identifies and classifies fake news articles using natural language processing, machine learning, and content verification techniques.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "nlp",
        color: "green-text-gradient",
      },
      {
        name: "deeplearning",
        color: "pink-text-gradient",
      },
    ],
    image: fakeNewsDetector,
    source_code_link: "https://github.com/fahim278",
  },
  {
    name: "AI Quiz Agent",
    description:
      "An intelligent quiz agent powered by AI that generates dynamic quiz questions, evaluates user responses, and provides adaptive learning paths based on performance and knowledge gaps.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "ai",
        color: "green-text-gradient",
      },
      {
        name: "nlp",
        color: "pink-text-gradient",
      },
    ],
    image: aiQuizAgent,
    source_code_link: "https://github.com/fahim278/AI-Quiz-Agent",
  },
  {
    name: "W9 To CSV Extractor",
    description:
      "A data extraction tool that automatically extracts information from W9 tax forms and converts the extracted data into structured CSV format for easy data management and processing.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "dataextraction",
        color: "green-text-gradient",
      },
      {
        name: "ocr",
        color: "pink-text-gradient",
      },
    ],
    image: w9Extractor,
    source_code_link: "https://github.com/fahim278/W9_TO_CSV_Extractor",
  },
];

export { services, technologies, experiences, testimonials, projects };
