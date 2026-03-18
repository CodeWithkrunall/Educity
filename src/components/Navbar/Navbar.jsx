import React from 'react'
import '../../assets/logo.png'
import './Navbar.css'
const Navbar = () => {
  return (
    <nav>

        <img src={logo} className=''/>

        <ul>
            <li>Home</li>
            <li>Program</li>
            <li>About us</li>
            <li>Campus</li>
            <li>Teslimonias</li>
            <li>Contact us</li>
        </ul>


    </nav>
  )
}

export default Navbar
