
import { useEffect,useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import ProjectCard from './ProjectCards'
import projectInfo from '../../data/projectInfo.json'
import './index.scss'


const Projects = function () {
const [letterClass, setLetterClass] = useState('text-animate')


const text="hi this the project page"

const textArray = text.split("")

    useEffect(() => {
        
        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 5000)
        
        return () => clearTimeout(timeoutId)
    }, [])
    
const projects = projectInfo.portfolio.map( record => {
    return (
        <ProjectCard 
        title={record.title}
        image={record.image}
        url={record.url}
        />
    )
})
    
    return (
        <>
        <div className='text-container'>
            <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={textArray}
              idx={15}
            />
            {}
            </h1>
        </div>
        <div className='projects-container'>
            {projects}
        </div>
        </>


        
    )
}
export default Projects