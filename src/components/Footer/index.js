import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import './index.scss'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <span className="footer-location">
            <FontAwesomeIcon icon={faLocationDot} />
            Riyadh, Saudi Arabia
          </span>
          <a href="mailto:ibrahim.o.n@hotmail.com" className="footer-email">
            <FontAwesomeIcon icon={faEnvelope} />
            ibrahim.o.n@hotmail.com
          </a>
        </div>
        <div className="footer-social">
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
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} Ibrahim Alnumair. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
