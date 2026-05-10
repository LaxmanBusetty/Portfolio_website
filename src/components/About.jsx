import { Terminal, Brain, Rocket } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2>About <span className="text-gradient">Me</span></h2>
        <div className="about-content glass">
          <p className="about-text">
            I am an AI Engineer with a strong builder mindset, specializing in rapidly prototyping and deploying AI-native applications. My focus lies in creating robust, scalable systems that leverage the latest in Large Language Models and AI engineering practices.
          </p>
          <div className="about-highlights">
            <div className="highlight-card">
              <div className="icon-wrapper"><Brain size={32} /></div>
              <h4>AI & Agents</h4>
              <p>Architecting RAG pipelines, multi-agent workflows, and hybrid retrieval systems.</p>
            </div>
            <div className="highlight-card">
              <div className="icon-wrapper"><Terminal size={32} /></div>
              <h4>Engineering</h4>
              <p>Building scalable inference services using Python, FastAPI, and LangChain.</p>
            </div>
            <div className="highlight-card">
              <div className="icon-wrapper"><Rocket size={32} /></div>
              <h4>Deployment</h4>
              <p>Deploying production-grade solutions in fast-moving startup environments.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
