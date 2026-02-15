import { useInView } from 'react-intersection-observer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCertificate } from '@fortawesome/free-solid-svg-icons'
import skills from '../../data/skills'
import './index.scss'

const certifications = [
  {
    name: 'Professional Scrum Developer I (PSD I)',
    issuer: 'Scrum.org',
  },
  {
    name: 'Building a Centralized Caching Platform using Redis',
    issuer: 'Redis Certification',
  },
  {
    name: 'Full Stack JavaScript Developer',
    issuer: 'MCIT Nanodegree Program',
  },
]

const SkillCard = ({ skill, index }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <div
      ref={ref}
      className={`skill-card ${inView ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 0.05}s` }}
    >
      <FontAwesomeIcon icon={skill.icon} className="skill-icon" />
      <span className="skill-name">{skill.name}</span>
    </div>
  )
}

const Skills = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <section id="skills" className="skills-section">
      <h2 className="section-heading">
        <span className="gradient-text">Skills</span>
      </h2>
      <div className="skills-grid">
        {skills.map((skill, i) => (
          <SkillCard key={skill.name} skill={skill} index={i} />
        ))}
      </div>

      <div
        ref={ref}
        className={`certifications ${inView ? 'visible' : ''}`}
      >
        <h3 className="certifications-heading">Certifications</h3>
        <div className="certifications-list">
          {certifications.map((cert, i) => (
            <div key={i} className="cert-item">
              <FontAwesomeIcon icon={faCertificate} className="cert-icon" />
              <div>
                <span className="cert-name">{cert.name}</span>
                <span className="cert-issuer">{cert.issuer}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
