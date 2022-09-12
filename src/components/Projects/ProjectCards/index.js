import './index.scss'
import logo1 from '../../../assets/images/logo1.png'


const ProjectCard = function ({ title, image, url }) {
    return (
        <div className='project-card'>

            <div className='project-text'>
                {title}
                </div>
            <img src={logo1} alt='rtest' />
        </div>
    )
}

export default ProjectCard