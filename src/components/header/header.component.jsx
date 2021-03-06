import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";
import { createStructuredSelector } from "reselect";

import "./header.styles.scss";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { selectCartHidden } from "../../redux/cart/cart.selectors";

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="store-name" to="/">
      Sophia's Bookstore
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/new-Arrivals">
        NEW ARRIVALS
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

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
