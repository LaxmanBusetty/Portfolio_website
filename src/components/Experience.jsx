import './Experience.css';

const experiences = [
  {
    company: "Vosyn",
    role: "Machine Learning Engineer Intern",
    period: "Feb 2026 – Present",
    location: "Remote",
    achievements: [
      "Improved text-to-speech model naturalness and intelligibility through research and implementation of custom architectures on GCP.",
      "Fine-tuned large language models for translation using LoRA and 4-bit quantization, reducing GPU memory usage by 65–75%.",
      "Built an end-to-end supervised fine-tuning pipeline on OPUS100 with 1M+ sentence pairs using Hugging Face and PEFT.",
      "Improved training efficiency by 3–5x using gradient checkpointing, bfloat16 precision, and optimized training workflows."
    ]
  },
  {
    company: "Tilli",
    role: "AI Engineer Intern",
    period: "Oct 2025 – Feb 2026",
    location: "Remote",
    achievements: [
      "Built and improved a production-grade AI agent for educators using LLMs, RAG, and hybrid retrieval pipelines.",
      "Reduced response latency by 40% by architecting FastAPI-based inference services with multi-model routing across OpenAI and Gemini.",
      "Reduced hallucination rates by 30% by integrating curated knowledge sources and retrieval grounding techniques.",
      "Containerized and deployed scalable AI services on GCP using Docker for web and messaging-based user interactions."
    ]
  },
  {
    company: "Extern",
    role: "AI Engineer Extern",
    period: "Oct 2025 – Dec 2025",
    location: "Remote",
    achievements: [
      "Architected and deployed an enterprise AI workflow for automated financial and legal document analysis.",
      "Built scalable ingestion pipelines using OCR, semantic chunking, metadata-aware retrieval, and hybrid search architectures.",
      "Improved retrieval relevance to approximately 90% using BM25, vector embeddings, and LlamaIndex pipelines.",
      "Designed metadata-driven retrieval filtering systems to improve grounding and reduce irrelevant context exposure."
    ]
  },
  {
    company: "California State University, San Bernardino",
    role: "AI Research Assistant",
    period: "Oct 2024 – Dec 2025",
    location: "San Bernardino, CA",
    achievements: [
      "Researched adversarial attacks and AI defense mechanisms across NLP, computer vision, and graph neural network systems.",
      "Analyzed 50+ research papers and co-authored a paper accepted at AIRC 2025.",
      "Evaluated modern object detection and segmentation architectures across COCO, ImageNet, and nuScenes benchmarks."
    ]
  },
  {
    company: "Feynn Labs Services",
    role: "Machine Learning Intern",
    period: "Jan 2023 – Jun 2023",
    location: "India",
    achievements: [
      "Developed machine learning models for EV range prediction using feature engineering and regression techniques.",
      "Built retail sales forecasting systems using time-series and regression models.",
      "Performed data preprocessing, exploratory analysis, visualization, and stakeholder reporting."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2>Professional <span className="text-gradient">Experience</span></h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content glass">
                <div className="timeline-header">
                  <div>
                    <h3>{exp.role}</h3>
                    <h4 className="company">{exp.company}</h4>
                  </div>
                  <div className="timeline-meta">
                    <span className="period">{exp.period}</span>
                    <span className="location">{exp.location}</span>
                  </div>
                </div>
                <ul className="achievements">
                  {exp.achievements.map((ach, idx) => (
                    <li key={idx}>{ach}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
