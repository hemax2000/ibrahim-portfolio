import { useInView } from 'react-intersection-observer'
import './index.scss'

const ProjectCard = ({ name, description, image, url, idx }) => {
  const cardImage = require('../../../assets/images/' + image)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <div
      ref={ref}
      className={`project-card ${inView ? 'visible' : ''}`}
      style={{ transitionDelay: `${idx * 0.1}s` }}
    >
      <div className="project-image">
        <img src={cardImage} alt={name} />
      </div>
      <div className="project-info">
        <h3 className="project-title">{name}</h3>
        <p className="project-description">{description}</p>
        <a href={url} target="_blank" rel="noreferrer" className="project-link">
          View on GitHub &rarr;
        </a>
      </div>
    </div>
  )
}

export default ProjectCard
