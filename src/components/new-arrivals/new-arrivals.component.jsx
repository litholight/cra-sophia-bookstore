import React from "react";
import moment from "moment";

import ProductCard from "../product-card/product-card.component";

import PRODUCT_DATA from "../../product-data";

import "./new-arrivals.styles.scss";

class NewArrivals extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bookData: PRODUCT_DATA
    };
  }

  render() {
    const { bookData } = this.state;
    return (
      <div className="new-arrivals-container">
        <div className="new-arrivals-header">
          <h2>New Arrivals</h2>
        </div>
        {bookData.map(({ id, createdAt, ...otherBookProps }) => (
          <div key={id}>
            <ProductCard {...otherBookProps} />
            <span>Added {moment(createdAt, "MMDDYYYY").fromNow()}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default NewArrivals;
