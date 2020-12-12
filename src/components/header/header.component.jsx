import React from 'react'
import "./../../css/header.styles.css"
import {Link} from "react-router-dom"
import {ReactComponent as Logo} from "./../../assets/crown.svg"

const Header = () => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo"/>
      </Link>
      <nav className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
      </nav>
    </div>
  )
}

export default Header