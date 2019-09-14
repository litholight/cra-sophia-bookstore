import React from "react";
import { connect } from "react-redux";
import moment from "moment";

import CustomButton from "../custom-button/custom-button.component";
import { addItem } from "../../redux/cart/cart.actions";

import "./product-card.styles.scss";

const ProductCard = ({ item, addItem }) => {
  const { imageUrl, title, price } = item;
  return (
    <div className="product-card">
      <div className="product-title">{title}</div>
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <div className="product-info">
        Added {moment(item.createdAt, "MMDDYYYY").fromNow()}
      </div>
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
