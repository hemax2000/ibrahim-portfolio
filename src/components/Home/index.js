import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Loader from 'react-loaders'
import Logo from './Logo'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const name="Ibrahim"
  const job= "a fantastic web devoleper"

  const nameArray = name.split("")
  const jobArray = job.split("")
  useEffect(() => {
        
    let timeoutId = setTimeout(() => {
        setLetterClass('text-animate-hover')
    }, 5000)
    
    return () => clearTimeout(timeoutId)
}, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            </span>
            <br />
            <span>
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m&nbsp;</span>
            </span>
            <span>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            </span>
            <br />
            <span>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
            </span>
          </h1>
          <h2> Full stack Developer </h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home;