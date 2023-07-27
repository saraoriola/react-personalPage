import React from "react";
import "./Header.css";

import { Link } from "react-router-dom";

import Logo from '../../assets/sara.png';

const Header = () => {
  return (
    <nav className="header">
      <img src={Logo} alt="Logo" />
      <div className="nav-links">
        <span>
          <Link to="/">Home</Link>
        </span>
        <span>
          <Link to="/About">About</Link>
        </span>
        <span>
          <Link to="/Services">Services</Link>
        </span>
        <span>
          <Link to="/Blog">Blog</Link>
        </span>
        <span>
          <Link to="/Contact">Contact</Link>
        </span>
      </div>
    </nav>
  );
};

export default Header;
