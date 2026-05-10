import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';

const projects = [
  {
    title: "Wanderlust AI",
    subtitle: "AI Travel Planning Platform",
    description: "Built an AI-native travel planning platform that generates personalized itineraries using Gemini and dynamic recommendation workflows. Engineered backend APIs, authentication systems, and persistent trip management workflows.",
    tech: ["Vertex AI", "FastAPI", "Supabase", "GCP", "Gemini"],
    links: {
      github: "#",
      live: "https://wanderlust-ai-330205915151.us-west1.run.app"
    }
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2>Featured <span className="text-gradient">Projects</span></h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card glass">
              <div className="project-content">
                <h3>{project.title}</h3>
                <h4>{project.subtitle}</h4>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="tech-tag">{t}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.links.github} target="_blank" rel="noreferrer" className="project-link">
                    <FaGithub size={20} /> Code
                  </a>
                  <a href={project.links.live} target="_blank" rel="noreferrer" className="project-link">
                    <ExternalLink size={20} /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
