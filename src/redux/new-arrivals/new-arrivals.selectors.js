import { createSelector } from "reselect";

const selectNewArrivals = state => state.newArrivals;

export const selectNewArrivalsBooks = createSelector(
  [selectNewArrivals],
  newArrivals => newArrivals.books
);
