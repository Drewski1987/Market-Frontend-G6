import { useEffect, useState } from "react";
import {Routes, Route, Navigate } from "react-router-dom";
// import Home from "./components/Home"
// import Product from "./components/Product";
// import ProductList from "./components/ProductList"
import Login from "./components/Login";
// import Navigation from "./components/Navigation";
import "./App.css"
import Account from "./components/UserAccount";

function App() {
  const [token, setToken] = useState (null);
  const [orders, setOrders] = useState ([]);
  // const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);

    //set token in localStorage
  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token)
    }
  }, [token]);


      //retrieve token from localStorage
  useEffect(()=>{
    const storedToken = localStorage.getItem("token");
    if (storedToken){
      setToken(storedToken)
    }
  },[]);

  // const logout = () => {
  //   setToken(null);
  //   setUser(null);
  // };

  return (
    <>
      {/* <Navigation/> */}
      <Routes>
        <Route path="/" element={<Login token={token} setToken={setToken}/>} />

        <Route path="/users/:id" element={<Account orders={orders} setOrders={setOrders}/>}/>

        {/* <Route path="/products" element={<ProductList/>} />
        <Route path="/products/:id" element={<Product/>} />
        <Route path="/register" element={<Login/>} />
        <Route path="*" element={<p>404: Page not found</p>} /> */}
      </Routes>
    </>
  );
}

export default App;
