import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import headerImg from '../../../assets/images/header-img.svg'
import './index.scss'

const Logo = () => {
  const bgRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {


    gsap.registerPlugin(DrawSVGPlugin)

    gsap.timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })


    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 2,
        duration: 4,

      }
    )

  }, [])
  return (
    <div className="logo-container" ref={bgRef}>
       <img ref={solidLogoRef} src={headerImg} alt="Header Img"/>

      
    </div>
  )
}

export default Logo