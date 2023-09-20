import './index.scss'
import { Link } from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import LogoSub from '../../assets/images/logo_sub.png'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faListCheck } from '@fortawesome/free-solid-svg-icons'




const Sidebar = () => {
  return (
    <div className="nav-bar">
      <nav>
        <NavLink exact='true' activeclassname='active' to='/'>
          <FontAwesomeIcon icon={faHome} color='#4d4d4e'></FontAwesomeIcon>
        </NavLink>
        <NavLink exact='true' activeclassname='active' className='about-link' to='/about'>
          <FontAwesomeIcon icon={faUser} color='#4d4d4e'></FontAwesomeIcon>
        </NavLink>
        <NavLink exact='true' activeclassname='active' className='contact-link' to='/contact'>
          <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e'></FontAwesomeIcon>
        </NavLink>
        <NavLink exact='true' activeclassname='active' className='projects-link' to='/projects'>
          <FontAwesomeIcon icon={faListCheck} color='#4d4d4e'></FontAwesomeIcon>
        </NavLink>
      </nav>
      <ul>
        <li>
          <a target='_blank' 
             rel='noreferrer' 
             href='https://www.linkedin.com/in/andrew-cichewicz-3baaa21a9'
          >
            <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e'></FontAwesomeIcon>
          </a>
        </li>
        <li>
          <a target='_blank' 
             rel='noreferrer' 
             href='https://github.com/APCichewicz'
          >
            <FontAwesomeIcon icon={faGithub} color='#4d4d4e'></FontAwesomeIcon>
          </a>
        </li>
      </ul>
    </div>
    )
}

export default Sidebar