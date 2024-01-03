import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import productReducer, { productFatch, } from "./redux/product/productsSlice.jsx";
import { productsApi } from "./redux/product/productsApi.jsx";
import creatsReducer, { cauculateTotal } from "./redux/cart/cart.jsx";

const store = configureStore({
  reducer: {
    products: productReducer,
    cart: creatsReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(productsApi.middleware);
  },
});

store.dispatch(productFatch());
store.dispatch(cauculateTotal());

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
