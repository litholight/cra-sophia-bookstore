import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectNewArrivalsBooks } from "../../redux/new-arrivals/new-arrivals.selectors";

import ProductCard from "../product-card/product-card.component";
import "./new-arrivals.styles.scss";

const NewArrivals = ({ books }) => (
  <div className="new-arrivals-container">
    <div className="new-arrivals-header">
      <h1>New Arrivals</h1>
    </div>
    {books.map(item => (
      <ProductCard key={item.id} item={item} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  books: selectNewArrivalsBooks
});

export default connect(mapStateToProps)(NewArrivals);
