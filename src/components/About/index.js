import { useInView } from 'react-intersection-observer'
import './index.scss'

const About = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section id="about" className="about-section" ref={ref}>
      <div className={`about-content ${inView ? 'visible' : ''}`}>
        <h2 className="section-heading">
          <span className="gradient-text">About Me</span>
        </h2>
        <p className="about-bio">
          I'm Ibrahim, a Senior Software Developer with 2+ years of
          professional experience building scalable systems that serve millions
          of users daily. I specialize in C# and ASP.NET Core for
          enterprise-level applications, with a growing passion for Data
          Engineering and AI. From architecting centralized notification engines
          to implementing robust authentication systems with OAuth 2.0 and
          WS-Federation, I thrive on solving complex problems in high-stakes
          environments.
        </p>
        <div className="about-stats">
          <div className="stat-card">
            <span className="stat-number">2+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">Millions</span>
            <span className="stat-label">Users Served Daily</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">BSc SWE</span>
            <span className="stat-label">King Saud University</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
