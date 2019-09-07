import React from "react";

import "./cart-item.styles.scss";

const CartItem = ({ productImage, price, title, quantity }) => (
  <div className="cart-item">
    <img src={productImage} alt="item" />
    <div className="item-details">
      <span className="name">{title}</span>
      <span className="price">
        {quantity} x ${price}
      </span>
    </div>
  </div>
);

export default CartItem;
