import { Link } from 'react-router-dom';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

const TopNavbar = () => {
  const [click, setClick] = useState(false);

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
          <FontAwesomeIcon icon={faBars} />
      </div>
      <div className="dropdown-list" onClick={() => (setClick(!click))}>
        { click && <ul>
          <li>
            <Link to='./about'> About </Link>
          </li>
          <li>
            <Link to="./skills"> Skills </Link>
          </li>
          <li>
            <Link to=""> Projects </Link>
          </li>
          <li>
            <Link to=""> Experiences </Link>
          </li>
          <li>
            <Link to="./contact">Contact</Link>
          </li>
          {/* <li>
            <div className="social">
              <i></i>
            </div>
          </li> */}
        </ul> }
      </div>
    </div>
  )
}

export default TopNavbar;
