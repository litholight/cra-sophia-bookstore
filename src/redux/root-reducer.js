import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import directoryReducer from "./directory/directory.reducer";
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import newArrivalsReducer from "./new-arrivals/new-arrivals.reducer";
import shopReducer from "./shop/shop.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"]
};

const rootReducer = combineReducers({
  directory: directoryReducer,
  user: userReducer,
  cart: cartReducer,
  newArrivals: newArrivalsReducer,
  shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer);
