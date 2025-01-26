import React from 'react'
import './Navbar.css'
import { assets } from '../assets/assests'
import { useState } from 'react'
import Admin from '../pages/home/AdminPanel/Admin'
const Navbar = () => {
  const [menu, setMenu] = useState("home");


  return (
    <nav className='navbar'  >
      <img src={assets.logo} alt="" className="logo" />
      <ul className="navbar-section">
        <li onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>home</li>
        <li onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>search</li>
        <li onClick={() => setMenu("Admin")} className={menu === "Admin" ? "active" : ""}>Admin</li>
        <li onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>contact us</li>
      </ul>
      <button>Sign Up</button>

    </nav>
  )
}

export default Navbar
