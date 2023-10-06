import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { 
  BrowserRouter
 } from 'react-router-dom'

import { Provider } from 'react-redux'
import { configureStore } from "@reduxjs/toolkit"
import productReducer, { productFatch } from "./redux/product/productsSlice.jsx"
import { productsApi } from './redux/product/productsApi.jsx'
import creatsReducer from "./redux/cart/cart.jsx"

const store = configureStore({
  reducer: {
    products: productReducer,
    cart: creatsReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(productsApi.middleware)
  },
})

store.dispatch(productFatch())

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
