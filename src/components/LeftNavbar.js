import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";
import { faAt} from '@fortawesome/free-solid-svg-icons';

const LeftNavbar = () => {
  return (
    <div className="left-navbar">
      <ul className="left-navbar-container">
        <li className="left-navbar-logo">
          <Link to ='./'>
            <div>
              <p className="firstName">Sarah</p>
              <p className="familyName">GUILLON</p>
              <p className="job">Web developer</p>
            </div>
          </Link>
        </li>
        <li>
          <Link to='./about'> About </Link>
        </li>
        <li>
          <Link to="./skills"> Skills </Link>
        </li>
        <li>
          <Link to="./projects"> Projects </Link>
        </li>
        <li>
          <Link to="./experience"> Experience </Link>
        </li>
        <li>
          <Link to="./contact">Contact</Link>
        </li>
        <li>
          <div className="social">
            <a href={"https://github.com/SarahGuillon"} target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faGithub} /></a>
            <a href={"https://www.linkedin.com/in/sarahguillon/"} target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="mailto:sarah.guillon.11@gmail.com"> <FontAwesomeIcon icon={faAt} /></a>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default LeftNavbar;
