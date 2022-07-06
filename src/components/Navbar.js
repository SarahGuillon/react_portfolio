import '../styles/LeftNavbar.css';
import '../styles/TopNavbar.css';
import LeftNavbar from '../components/LeftNavbar.js';
import { useState, useEffect } from 'react';
import TopNavbar from './TopNavbar';

const Navbar = () => {
  const [leftNavBar , setLeftNavbar] = useState(true);

  const showNavBar = () => {
    if (window.innerWidth <= 999) {
      setLeftNavbar(false);
    } else {
      setLeftNavbar(true);
    }
  };

  useEffect(() => {
    showNavBar();
    window.addEventListener('resize', showNavBar);
    return (
      window.removeEventListener('resize', showNavBar)
    )
  }, [leftNavBar]);

  return (
    <div>
      { leftNavBar ? <LeftNavbar/> : <TopNavbar/> }
    </div>
  )
}

export default Navbar;
