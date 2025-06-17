import { useEffect, useState } from "react";
import {Routes, Route, Navigate } from "react-router-dom";
// import Home from "./components/Home"
// import Product from "./components/Product";
// import ProductList from "./components/ProductList"
import Login from "./components/Login";
// import Navigation from "./components/Navigation";
import "./App.css"

function App() {
  // const [token, setToken] = useState(localStorage.getItem("token") || null);
  // const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);


  // useEffect(() => {
  //   if (token) {
  //     localStorage.setItem("token", token);
  //   } else {
  //     localStorage.removeItem("token");
  //   }
  // }, [token]);

  // useEffect(() => {
  //   if (user) {
  //     localStorage.setItem("user", JSON.stringify(user));
  //   } else {
  //     localStorage.removeItem("user");
  //   }
  // }, [user]);

  // const logout = () => {
  //   setToken(null);
  //   setUser(null);
  // };

  return (
    <>
      {/* <Navigation/> */}
      <Routes>
        <Route path="/" element={<Login/>} />
        {/* <Route path="/products" element={<ProductList/>} />
        <Route path="/products/:id" element={<Product/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Login/>} />
        <Route path="*" element={<p>404: Page not found</p>} /> */}
      </Routes>
    </>
  );
}

export default App;
