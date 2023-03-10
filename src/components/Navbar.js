import React, {useState, useEffect} from 'react';  //print rfce , we could get sa simple structure of react
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';


function NavBar() {

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);


  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  }

  useEffect(() => {
    showButton();
  },[]);

  window.addEventListener("resize", showButton);

  return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                ROBOT <i class="fa-solid fa-robot"></i>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                  <i className={click ? "fas fa-times" : "fas fa-bars"} />
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                  <li className='nav-item'>
                    <Link to="/About" className='nav-links' onClick={closeMobileMenu}>
                      About
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to="/Hardware" className='nav-links' onClick={closeMobileMenu}>
                    Hardware
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to="/Structure" className='nav-links' onClick={closeMobileMenu}>
                    Structure
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to="/Algorithm" className='nav-links' onClick={closeMobileMenu}>
                    Algorithm
                    </Link>
                  </li>
                  {/* <li className='nav-item'>
                    <Link to="/sign-up" className='nav-links-mobile' onClick={closeMobileMenu}>
                      Sign up
                    </Link>
                  </li> */}
                </ul>
                {/* {button && <Button buttonStyle="btn--outline">SIGN UP</Button>} */}
            </div>
        </nav>
    </>
  )
}

export default NavBar;

