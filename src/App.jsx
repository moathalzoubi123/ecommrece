import Home from "./pages/Home";
import React from "react";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

const App = () => {
  const user = true
  return (
    <Router>
      <Routes>
      <Route exact path="/" element={<Home/>}> </Route>

      <Route path="/products/:category" element={<ProductList/>}> </Route>

      <Route path="/product/:id" element={<Product/>}> </Route>

      <Route path="/cart" element={<Cart/>}> </Route>

      <Route path="/login" element={user ? <Home /> : <Login/>} />

      <Route path="/register" element={user ? <Home /> : <Register/>} />

      </Routes>
    </Router>
  );
};

export default App;