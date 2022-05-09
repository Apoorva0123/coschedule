import React from 'react';
import logo from './images/logo.png';
import './main_navbar.css'
function AnkitNavbar() {
    
  return (
    <nav className="nav">
      <a href="#" className="logo">
          <img src={logo} className="nav_logo" alt="logo" />
      </a>
       <ul className="nav_ul">
           <li><a  href="#" className="nav_a">Products</a></li>
           <li><a href="#" className="nav_a">WhyCoschedule</a></li>
           <li><a href="#" className="nav_a">Resources</a></li>
           <li><a href="#" className="nav_a">Pricing</a></li>
       </ul>
       
       <ul className="nav_left">
           <li className="nav_left_a left_1">Sign In</li>
           <li className="nav_left_a left_2">Get A Demo</li>
           <li className="nav_left_a left_3"><button className="calander">Create My Calander</button></li>
       </ul>
    </nav>
   
  )
}

export default AnkitNavbar
