import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedin, faGithub  } from "@fortawesome/free-brands-svg-icons";
import { faAt, faBars} from '@fortawesome/free-solid-svg-icons';

const TopNavbar = () => {

  const [click, setClick] = useState(false);

  const handleClick = () => {
    // console.log("hello");
    setClick(!click);
  }

  return (
    <div className="top-navbar">
      <div className="top-navbar-container">
        <div className="top-navbar-logo">
          <Link to ='./'>
            <div>
              <p className="firstName">Sarah</p>
              <p className="familyName">GUILLON</p>
            </div>
          </Link>
        </div>
          <FontAwesomeIcon icon={faBars} onClick={handleClick} />
      </div>
      <div className="dropdown-list">
        { click &&
        <ul>
          <li onClick={handleClick}>
            <Link to='./about'> About </Link>
          </li>
          <li onClick={handleClick}>
            <Link to="./skills"> Skills </Link>
          </li>
          <li onClick={handleClick}>
            <Link to="./projects"> Projects </Link>
          </li>
          <li onClick={handleClick}>
            <Link to="./experience"> Experience </Link>
          </li>
          <li onClick={handleClick}>
            <Link to="./contact">Contact</Link>
          </li>
          <li>
            <div className="social">
              <a href={"https://github.com/SarahGuillon"} target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faGithub} /></a>
              <a href={"https://www.linkedin.com/in/sarahguillon/"} target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faLinkedin} /></a>
              <Link to="./contact"> <FontAwesomeIcon icon={faAt} /></Link>
            </div>
          </li>
        </ul> }
      </div>
    </div>
  )
}

export default TopNavbar;
