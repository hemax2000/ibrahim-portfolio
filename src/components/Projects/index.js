import gsap from 'gsap-trial';
import ScrollTrigger from 'gsap-trial/ScrollTrigger';
import { useEffect } from 'react';
import './index.scss'

const Projects = function () {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.utils.toArray(".panel").forEach((panel, i) => {
            ScrollTrigger.create({
                trigger: panel,
                start: "top top",
                pin: true,
                pinSpacing: false
            })
        })


        ScrollTrigger.create({
            snap: 1 / 4 // snap whole page to the closest section!
        })


    }
        , [])


    return (
        <>
            <div className="description panel blue">
                <div><h1>Layered pinning</h1>
                    <p>Use pinning to layer panels on top of each other as you scroll.</p>
                    <div className="scroll-down">Scroll down<div className="arrow"></div></div>
                </div>
            </div>


            <section className="panel">
                ONE
            </section>
            <section className="panel">
                TWO
            </section>
            <section className="panel">
                THREE
            </section>
            <section className="panel">
                FOUR
            </section>

        </>
    )
}
export default Projects