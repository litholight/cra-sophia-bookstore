import React from "react";

import CustomButton from "../custom-button/custom-button.component";

import "./product-card.styles.scss";

const ProductCard = ({ children, productImage, title }) => (
  <div className="product-card">
    <div
      className="image"
      style={{
        backgroundImage: `url(${productImage})`
      }}
    />
    <div className="product-title">{title}</div>
    <CustomButton> Add to Cart </CustomButton>
    <CustomButton> Share </CustomButton>
  </div>
);

export default ProductCard;
