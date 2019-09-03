import React from "react";

import "./product-card.styles.scss";

const ProductCard = imgUrl => (
  <div className="product-card">
    <div
      className="image"
      style={{
        backgroundImage: `url(${"https://images-na.ssl-images-amazon.com/images/I/51ZCXF4QWTL._SX284_BO1,204,203,200_.jpg"})`
      }}
    />
  </div>
);

export default ProductCard;
