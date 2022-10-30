import './index.scss'
import { useRef, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';



const ProjectCard = function ({ title, image, url, idx }) {
    let cardImage = require("../../../assets/images/"+image)
    const { ref: myRef, inView: myElementIsVisible } = useInView();
    if (idx%2 === 0) {
        return (

            <div ref={myRef} className={`project-card ${ myElementIsVisible ? 'show' : '' }`}>

                <div className='project-text'>
                {title}
                </div>
                <a href={url}><img className='project-logo' src={cardImage} alt='rtest' /></a>
            </div>
        )
    }
    else {
        return (

            <div ref={myRef} className={`project-card rtl ${ myElementIsVisible ? 'show' : '' }`}>
                <div className='project-text'>
                    {title}
                </div>
                <a href={url}><img className='project-logo' src={cardImage} alt='rtest' /></a>
            </div>
        )
    }
}

export default ProjectCard