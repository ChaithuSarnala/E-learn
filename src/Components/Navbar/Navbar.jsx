import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.png';
import './Navbar.css';

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="nav-banner">
          <p>Free Courses 🌟 Sale Ends Soon, Get It Now</p>
          <button>&rarr;</button>
        </div>

        <div className="nav-content">
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <Link to="/" className="nav-logo">
              <img src={Logo} alt="Logo" />
            </Link>

            <ul className="nav-links">
              <li>
                <Link to="/"><button>Home</button></Link>
              </li>
              <li>
                <Link to="/about"><button>About</button></Link>
              </li>
              <li>
                <Link to="/courses"><button>Courses</button></Link>
              </li>
              <li>
                <Link to="/pricing"><button>Pricing</button></Link>
              </li>
              <li>
                <Link to="/contact"><button>Contact</button></Link>
              </li>
            </ul>
          </div>

          <div className="nav-buttons">
            <button className="sign-up-button">Sign Up</button>
            <button className="login-button">Login</button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
