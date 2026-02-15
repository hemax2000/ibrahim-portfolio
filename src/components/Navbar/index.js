import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Logo from '../../assets/images/logos.png'
import './index.scss'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, targetId) => {
    e.preventDefault()
    setMenuOpen(false)
    const el = document.getElementById(targetId)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },

    { id: 'contact', label: 'Contact' },
  ]

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <a href="#hero" onClick={(e) => handleNavClick(e, 'hero')} className="navbar-logo">
        <img src={Logo} alt="Ibrahim" />
      </a>

      <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={(e) => handleNavClick(e, link.id)}
          >
            {link.label}
          </a>
        ))}
        <FontAwesomeIcon
          icon={faClose}
          className="close-icon"
          onClick={() => setMenuOpen(false)}
        />
      </div>

      <div className="navbar-social">
        <a
          href="https://www.linkedin.com/in/ibrahim-alnumair"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="https://github.com/hemax2000"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>

      <FontAwesomeIcon
        icon={faBars}
        className="hamburger-icon"
        onClick={() => setMenuOpen(true)}
      />
    </nav>
  )
}

export default Navbar
