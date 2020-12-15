import React from 'react';
import "../../css/header.styles.css";
import {Link} from "react-router-dom";
import {ReactComponent as Logo} from "../../assets/crown.svg";
import {auth} from "../../firebase/firebase.utils";

const Header = ({currentUser}) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo"/>
      </Link>
      <nav className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {
          currentUser ?
          <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
          :
          <Link className="option" to="/signin">SIGN IN</Link>
        }
      </nav>
    </div>
  )
}

export default Header
