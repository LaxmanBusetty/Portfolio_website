import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-background" style={{ backgroundImage: "url('/hero-bg.png')" }}>
        <div className="overlay"></div>
      </div>
      <div className="container hero-content">
        <div className="hero-text glass">
          <h2 className="greeting">Hello, I'm</h2>
          <h1 className="name text-gradient">Laxman Kumar Busetty</h1>
          <h3 className="title">AI Engineer</h3>
          <p className="summary">
            Focused on building production-grade AI agents, LLM applications, and customer-facing AI systems.
          </p>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/laxmanbusetty" target="_blank" rel="noreferrer" className="social-icon" aria-label="LinkedIn">
              <FaLinkedin size={24} />
            </a>
            <a href="https://github.com/LaxmanBusetty" target="_blank" rel="noreferrer" className="social-icon" aria-label="GitHub">
              <FaGithub size={24} />
            </a>
            <a href="mailto:laxman.busetty@gmail.com" className="social-icon" aria-label="Email">
              <FaEnvelope size={24} />
            </a>
          </div>
          <a href="#about" className="cta-button">Explore My Work</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
