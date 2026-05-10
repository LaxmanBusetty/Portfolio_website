import './Skills.css';

const skillCategories = [
  {
    title: "Languages & Frameworks",
    skills: ["Python", "SQL", "FastAPI", "LangChain", "LlamaIndex"]
  },
  {
    title: "AI Engineering",
    skills: ["AI Agents", "RAG", "Multi-Agent Systems", "Prompt Engineering", "Tool Calling", "Context Engineering", "Hybrid Retrieval", "LLM Evaluation", "RAGAS", "Safety Guardrails", "Semantic Search"]
  },
  {
    title: "Machine Learning",
    skills: ["PyTorch", "TensorFlow", "Scikit-learn", "XGBoost", "NLP", "Deep Learning", "Computer Vision", "Model Evaluation", "Feature Engineering"]
  },
  {
    title: "Infrastructure & Tools",
    skills: ["Docker", "PostgreSQL", "Pgvector", "Qdrant", "GCP", "AWS LightSail", "Render", "Git", "CI/CD", "Cursor", "Claude", "GitHub Copilot", "Jupyter"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2>Technical <span className="text-gradient">Skills</span></h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category glass">
              <h3>{category.title}</h3>
              <div className="skills-tags">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
