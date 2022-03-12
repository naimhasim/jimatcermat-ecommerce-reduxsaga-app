//react library
import React from "react"
import ReactDOM from "react-dom"

//styling
import "./index.css"

//main components
import App from "./App" //main app
import Product from "./components/Product/ProductBox"

//redux-saga
import { Provider } from "react-redux"
import createSagaMiddleware from "@redux-saga/core"
import { configureStore } from "@reduxjs/toolkit"

//reducer
import productReducer from "./components/Product/ProductSlice"

//rootSaga - contains all saga watchers
import rootSaga from "./app/rootSaga"
import productwatcher from "./components/Product/ProductSaga"
const saga = createSagaMiddleware() // create sagamiddleware

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(saga), //take all default middleware and add sagaMiddleware
  devTools: true, //enabled devtool for development only
})
saga.run(productwatcher)

ReactDOM.render(
  <Provider store={store}>
    <App />
    <Product />
  </Provider>,
  document.getElementById("root")
)
