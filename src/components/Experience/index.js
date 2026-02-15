import { useInView } from 'react-intersection-observer'
import './index.scss'

const experiences = [
  {
    role: 'Senior Software Developer',
    company: 'Elm Company',
    period: 'March 2025 - Present',
    description: [
      'Lead development initiatives in Digital Business Enablement division, overseeing multiple high-impact projects',
      'Architect and develop centralized notification engine serving millions of users daily',
      'Build and maintain comprehensive billing system with complex external integrations including ZATCA and SADAD',
      'Implement scalable payment gateway solutions handling high-volume transactions',
    ],
  },
  {
    role: 'Software Developer',
    company: 'National Center for Government Resources Systems',
    period: 'Jun 2023 - March 2025',
    description: [
      "Led the development and maintenance of the company's central Identity Provider (IDP) system",
      'Implemented multiple authentication protocols including WS-Federation, LDAP, and OAuth 2.0 token exchange',
      'Contributed to designing robust systems using Domain-Driven Design principles, ensuring scalability and resilience',
    ],
  },
  {
    role: 'Full-Stack Development Trainee',
    company: 'National Center for Government Resources Systems',
    period: 'Dec 2022 - Jun 2023',
    description: [
      'Learned C#, .NET, ABP Framework, SonarQube, EF Core, and SSMS',
      'Studied diverse design patterns and applied them in day-to-day development activities',
    ],
  },
]

const ExperienceItem = ({ exp, index }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <div
      ref={ref}
      className={`timeline-item ${inView ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 0.15}s` }}
    >
      <div className="timeline-marker" />
      <div className="timeline-card">
        <span className="timeline-period">{exp.period}</span>
        <h3 className="timeline-role">{exp.role}</h3>
        <span className="timeline-company">{exp.company}</span>
        <ul className="timeline-details">
          {exp.description.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <h2 className="section-heading">
        <span className="gradient-text">Experience</span>
      </h2>
      <div className="timeline">
        {experiences.map((exp, i) => (
          <ExperienceItem key={i} exp={exp} index={i} />
        ))}
      </div>
    </section>
  )
}

export default Experience
