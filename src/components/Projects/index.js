import ProjectCard from './ProjectCards'
import projectInfo from '../../data/projectInfo.json'
import './index.scss'

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-heading">
        <span className="gradient-text">Projects</span>
      </h2>
      <div className="projects-grid">
        {projectInfo.portfolio.map((project, i) => (
          <ProjectCard
            key={i}
            name={project.name}
            description={project.title}
            image={project.image}
            url={project.url}
            idx={i}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects
