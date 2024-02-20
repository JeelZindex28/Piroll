import React, { useState } from 'react';
import { Link, useLocation  } from 'react-router-dom';
import logo from '../../images/logo.png';

const Header = () => {
const [isOpen, setIsOpen] = useState(false);
const location = useLocation();

const toggleNavbar = () => {
  setIsOpen((prevIsOpen) => !prevIsOpen);
};


  return (
    <header className="header">
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="BigCo Inc. logo" className="img-fluid" />
          </Link>
          <button
            className={`navbar-toggler${isOpen ? ' open' : ''}`}
            type="button"
            onClick={toggleNavbar}
          >
            <span className="navbar-toggler-icon"></span>
            <span className="navbar-toggler-icon"></span>
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse${isOpen ? ' show' : ''}`}>
          <ul className="navbar-nav ms-auto">
          <li className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}> <Link to="/" className="nav-link"> Home </Link> </li>
          <li className={`nav-item ${location.pathname === '/Service' ? 'active' : ''}`}> <Link to="/Service" className="nav-link"> Work </Link> </li>
          <li className={`nav-item ${location.pathname === '/About' ? 'active' : ''}`}> <Link to="/About" className="nav-link"> About </Link> </li>
          <li className={`nav-item ${location.pathname === '/Projects' ? 'active' : ''}`}> <Link to="/Projects" className="nav-link"> Project </Link> </li>
          <li className={`nav-item ${location.pathname === '/Contact' ? 'active' : ''}`}> <Link to="/Contact" className="nav-link"> Contact </Link> </li>
        </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
