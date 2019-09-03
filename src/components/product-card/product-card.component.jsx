import React from "react";

import CustomButton from "../custom-button/custom-button.component";

import "./product-card.styles.scss";

const ProductCard = ({ children }) => (
  <div className="product-card">
    <div
      className="image"
      style={{
        backgroundImage: "url(/book-images/IDC.jpg)"
      }}
    />
    <CustomButton> Add to Cart </CustomButton>
    <CustomButton> Share </CustomButton>
  </div>
);

export default ProductCard;
