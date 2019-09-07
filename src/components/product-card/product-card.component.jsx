import React from "react";
import { connect } from "react-redux";

import CustomButton from "../custom-button/custom-button.component";
import { addItem } from "../../redux/cart/cart.actions";

import "./product-card.styles.scss";

const ProductCard = ({ item, addItem }) => {
  const { productImage, title, price } = item;
  return (
    <div className="product-card">
      <div
        className="image"
        style={{
          backgroundImage: `url(${productImage})`
        }}
      />
      <div className="product-title">{title}</div>
      <CustomButton onClick={() => addItem(item)}>
        {" "}
        Add to Cart ${price}
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(ProductCard);
