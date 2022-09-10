import "./index.scss"
import {Link, NavLink} from 'react-router-dom'
import Logo from '../../assets/images/logos.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faHome, faUser } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

const Sidebar = () => (
    <div className="nav-bar">
        <Link className="logo" to='/'> 
            <img src={Logo} alt='logo'/>
        </Link>

        <nav>
            <NavLink
            exact="true"
            activeclassname="active"
            to="/"
            >
                <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
            </NavLink>

            <NavLink
            exact="true"
            activeclassname="active"
            to="/Projects"
            className="about-link"
            >
                <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
            </NavLink>

            <NavLink
            exact="true"
            activeclassname="active"
            to="/contact"
            className="contact-link"
            >
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_black" rel="noreferrer" href="https://www.linkedin.com/in/ibrahim-alnumair-913b95227/">
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
                </a>
            </li>
            <li>
                <a target="_black" rel="noreferrer" href="https://www.linkedin.com/in/ibrahim-alnumair-913b95227/">
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
                </a>
            </li>
            
        </ul>
    </div>
)

export default Sidebar;