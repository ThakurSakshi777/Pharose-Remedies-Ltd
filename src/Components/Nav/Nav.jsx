import React from 'react'
import './Nav.css'
import logo from "../../assets/logo.jpg";
import {Link} from 'react-router-dom'
import  { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Nav = () => {
     const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="nav">
      {/* Logo */}
      <Link to="/">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
      </Link>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Menu */}
      <ul className={isOpen ? "nav-manu active" : "nav-manu"}>
        <li>
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        </li>
        <li>
          <Link to="/About" onClick={() => setIsOpen(false)}>About Us</Link>
        </li>
        <li>
          <Link to="/facilities" onClick={() => setIsOpen(false)}>Facilities</Link>
        </li>
        <li>
          <Link to="/Gallery" onClick={() => setIsOpen(false)}>Gallery</Link>
        </li>
        <li>
          <Link to="/Clients" onClick={() => setIsOpen(false)}>Clients</Link>
        </li>
      </ul>
    </div>
  )
}

export default Nav