import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/ssfw.svg";

import "./header.styles.scss";

const Header = () => (
  <div className="header">
    Sophia's Bookstore
    <div className="options">
      <Link className="option" to="/ ">
        SHOP
      </Link>
      <Link className="option" to="/">
        CONTACT
      </Link>
      <Link className="option" to="/signin">
        SIGN IN
      </Link>
    </div>
  </div>
);

export default Header;
