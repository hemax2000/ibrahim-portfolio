import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import heroImg from '../../assets/images/header-img.svg'
import './index.scss'

const Hero = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = 'Ibrahim'.split('')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 5000)
    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m&nbsp;</span>
            <span className="gradient-text">
              <AnimatedLetters
                letterClass={letterClass}
                strArray={nameArray}
                idx={15}
              />
            </span>
          </h1>
          <h2>Senior Software Developer | Data & AI Enthusiast</h2>
          <a href="#contact" className="hero-cta">
            Contact Me
          </a>
        </div>
        <div className="hero-image">
          <img src={heroImg} alt="Developer illustration" />
        </div>
      </div>
    </section>
  )
}

export default Hero
