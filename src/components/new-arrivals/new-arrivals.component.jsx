import React from "react";

import ProductCard from "../product-card/product-card.component";

import "./new-arrivals.styles.scss";

const NewArrivals = () => (
  <div className="new-arrivals-container">
    <div className="new-arrivals-header">
      <h3>New Arrivals</h3>
    </div>
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
  </div>
);

export default NewArrivals;
