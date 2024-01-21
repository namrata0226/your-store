import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Product from "./Pages/Product";
import Home from "./Pages/Home";
import Navbar from "./Component/Navbar";
import { Provider } from "react-redux";
import store from "./Store/store";
import "./App.css"
function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/product" element={<Product />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
