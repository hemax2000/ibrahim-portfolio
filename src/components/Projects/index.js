
import { useEffect, useState } from 'react'
import Sidebar from '../Sidebar/index'
import AnimatedLetters from '../AnimatedLetters'
import { gsap } from 'gsap-trial'
import ScrollTrigger from 'gsap-trial/ScrollTrigger'
import ProjectCard from './ProjectCards'
import projectInfo from '../../data/projectInfo.json'
import Loader from 'react-loaders'

import './index.scss'


const Projects = function () {
    const [letterClass, setLetterClass] = useState('text-animate')


    const text = "welcome to the project page,"
    const text1 = "Scroll down and enjoy ."
    const textArray = text.split("")
    const text1Array = text1.split("")
    
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
            document.getElementsByClassName('emoji').className="emoji-hover"
        }, 5000)
        return () => clearTimeout(timeoutId)
    }, [])

    const projects = projectInfo.portfolio.map(function (record, i) {

        return (
            <ProjectCard
                title={record.title}
                image={record.image}
                url={record.url}
                idx={i}
            />
        )
    })

    return (
        <>
            <div className='app'>
                <Sidebar />

                <div className='page'>
                    <span className='tags top-tags'>&lt;body&gt;</span>

                    <div className='text-container'>
                        <h1>
                            <AnimatedLetters
                                letterClass={letterClass}
                                strArray={textArray}
                                idx={12}
                            />
                            <br />
                            <br />
                            <AnimatedLetters
                                letterClass={letterClass}
                                strArray={text1Array}
                                idx={20}
                            />
                            <span className='emoji'>💖</span>
                           
                        </h1>


                    </div>

                    <span className='tags bottom-tags'>
                        &lt;/body&gt; <br />
                        <span className='bottom-tag-html'>&lt;/html&gt;
                        </span>
                    </span>
                </div>
                <div className='projects-container'>
                    {projects}
                </div>
            </div>




            <Loader type="pacman" />
        </>



    )
}
export default Projects