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
    return (
      <div className="new-arrivals-container">
        <div className="new-arrivals-header">
          <h2>New Arrivals</h2>
        </div>
        {this.state.bookData.map(item => (
          <div key={item.id}>
            <ProductCard item={item} />
            <div className="product-info">
              Added {moment(item.createdAt, "MMDDYYYY").fromNow()}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default NewArrivals;
