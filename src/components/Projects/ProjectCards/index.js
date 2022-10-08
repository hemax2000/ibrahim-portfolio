import './index.scss'
import logo1 from '../../../assets/images/logo1.png'
import {gsap} from 'gsap-trial'
import ScrollTrigger from 'gsap-trial/ScrollTrigger'
import { useEffect } from 'react'



const ProjectCard = function ({ title, image, url }) {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        let cards = gsap.utils.toArray(".project-card")
        gsap.to(cards, {
            scrollTrigger:{
                trigger:cards,
                start: 'top 30%',
                markers:true,
                toggleActions:"restart pause reverse pause",
                scrub:1,
                
            },
            
            opacity:1,
            duration:3,
        })
    },[])
    return (
        <div className='project-card'>

            <div className='project-text'>
                {title}
                </div>
            <a href={url}><img className='project-logo' src={logo1} alt='rtest' /></a>
        </div>
    )
}

export default ProjectCard