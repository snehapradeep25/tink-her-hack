import React, { useState } from 'react';
import './Navbar.css';
import { assets } from '../assets/assests';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <nav className="navbar">
      <img src={assets.logo} alt="Logo" className="logo" />
      <ul className="navbar-section">
        
        {/* Use Link for Home navigation */}
        <li 
          className={menu === "home" ? "active" : ""}
        >
          <Link to="/" onClick={() => setMenu("home")}>Home</Link> {/* Link to home page */}
        </li>
        
        <li 
          onClick={() => setMenu("menu")} 
          className={menu === "menu" ? "active" : ""}
        >
          Search
        </li>
        
        {/* Use Link for Admin navigation */}
        <li 
          className={menu === "Admin" ? "active" : ""}
        >
          <Link to="/Admin" onClick={() => setMenu("Admin")}>Admin</Link>  {/* Using Link to navigate to /Admin */}
        </li>
        
        <li 
          onClick={() => setMenu("contact-us")} 
          className={menu === "contact-us" ? "active" : ""}
        >
          Contact Us
        </li>
      </ul>
      <button>Sign Up</button>
    </nav>
  );
};

export default Navbar;
