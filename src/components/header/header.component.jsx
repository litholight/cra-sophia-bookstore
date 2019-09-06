import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";

import "./header.styles.scss";

const Header = ({ currentUser, hidden }) => (
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
      <CartIcon />
    </div>
    {hidden ? null : <CartDropDown />}
  </div>
);

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden
});

export default connect(mapStateToProps)(Header);
