import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import headerImg from '../../../assets/images/header-img.svg'
import './index.scss'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {


    gsap.registerPlugin(DrawSVGPlugin)

    gsap.timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {
        duration: 23,
        drawSVG: 1,
      })


    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 4,
        duration: 4,
      }
    )

  }, [])
  return (
    <div className="logo-container" ref={bgRef}>
       <img src={headerImg} alt="Header Img"/>

      
    </div>
  )
}

export default Logo