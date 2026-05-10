import { GraduationCap } from 'lucide-react';
import './Education.css';

const educationList = [
  {
    institution: "California State University, San Bernardino",
    degree: "Master of Science in Computer Science",
    period: "Dec 2025",
    details: "Relevant Coursework: Artificial Intelligence, Machine Learning, Software Engineering, Theory of Algorithms"
  }
];

const certifications = [
  {
    title: "Designing Multi-Agent AI Systems",
    issuer: "Maven",
    details: "Completed advanced training in multi-agent orchestration, workflow coordination, and AI agent architecture design."
  },
  {
    title: "Data Science Simulation",
    issuer: "Lloyds Banking Group (Forage)",
    details: "Built and evaluated machine learning models for customer churn prediction, achieving 0.82 ROC-AUC."
  }
];

const Education = () => {
  return (
    <section id="education" className="education-section">
      <div className="container">
        <h2>Education & <span className="text-gradient">Certifications</span></h2>
        
        <div className="edu-grid">
          <div className="edu-column">
            <h3 className="column-title"><GraduationCap size={24} /> Education</h3>
            {educationList.map((edu, index) => (
              <div key={index} className="edu-card glass">
                <h4>{edu.degree}</h4>
                <h5>{edu.institution}</h5>
                <span className="period">{edu.period}</span>
                <p>{edu.details}</p>
              </div>
            ))}
          </div>

          <div className="edu-column">
            <h3 className="column-title">Certifications</h3>
            {certifications.map((cert, index) => (
              <div key={index} className="edu-card glass">
                <h4>{cert.title}</h4>
                <h5>{cert.issuer}</h5>
                <p>{cert.details}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
