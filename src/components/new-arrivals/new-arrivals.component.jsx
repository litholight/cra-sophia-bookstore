import React from "react";

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
          <h1>New Arrivals</h1>
        </div>
        {this.state.bookData.map(item => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    );
  }
}

export default NewArrivals;
