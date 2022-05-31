import { Link } from 'react-router-dom';

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
            <i></i>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default LeftNavbar;
