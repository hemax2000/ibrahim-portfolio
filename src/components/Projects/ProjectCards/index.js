import './index.scss'
import logo1 from '../../../assets/images/logo1.png'
import { gsap } from 'gsap-trial'
import ScrollTrigger from 'gsap-trial/ScrollTrigger'
import { useEffect } from 'react'



const ProjectCard = function ({ title, image, url, idx }) {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        let cards = gsap.utils.toArray(".project-card")

        cards.forEach(card => {
            gsap.to(card, {
                scrollTrigger: {
                    trigger: card,
                    toggleActions: "play none none reverse",
                    start: 'top 86%',
                    end: 'bottom 86%'
                },


                opacity: 1,
                duration: 2,
            })

        })

        

    }, [])
    if (idx%2 === 0) {
        return (

            <div className='project-card'>

                <div className='project-text'>
                {title}
                </div>
                <a href={url}><img className='project-logo' src={logo1} alt='rtest' /></a>
            </div>
        )
    }
    else {
        return (

            <div className='project-card rtl'>

                <div className='project-text'>
                    {title}
                </div>
                <a href={url}><img className='project-logo' src={logo1} alt='rtest' /></a>
            </div>
        )
    }
}

export default ProjectCard