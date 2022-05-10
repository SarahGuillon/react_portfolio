import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <ul className="navbar">
      <li className="logo">
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
        <Link to=""> Skills </Link>
      </li>
      <li>
        <Link to=""> Projects </Link>
      </li>
      <li>
        <Link to=""> Resume </Link>
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
  )
}

export default Navbar;
