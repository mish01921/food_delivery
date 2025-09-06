import React from 'react'
import "./Navbar.css"
import { assets } from "../../assets/frontend_assets/assets.js"

export const Navbar = () => {
  return (
    <div className="navBar">
        <img src={assets.logo} alt="Logo_Tomato" className="logo"/>
        <ul className="navbar-menu">
          <li>Home</li>
          <li>Menu</li>
          <li>mobile-app</li>
          <li>contact us</li>
         
        </ul>
        <div className="navbar-right">
          <img src={assets.search_icon} alt="search_icon" />
          <div className="navabr-search-icon">
            <img src={assets.basket_icon} alt="basket_icon" />
          </div>
          <button>sign in</button>
        </div>
    </div>
  )
}
