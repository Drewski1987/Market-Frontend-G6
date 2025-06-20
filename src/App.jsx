import { useEffect, useState } from "react";
import {Routes, Route, Navigate } from "react-router-dom";
// import Home from "./components/Home"
// import Product from "./components/Product";
// import ProductList from "./components/ProductList"
import Login from "./components/Login";
import Register from "./components/Register";
import Account from "./components/UserAccount";
// import Navigation from "./components/Navigation";
import "./App.css"


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
        <Route path="/users/login" element={<Login token={token} setToken={setToken}/>} />

        <Route path="/users/:id" element={<Account orders={orders} setOrders={setOrders}/>}/>

        <Route path = "/users/register" element = {<Register/>}/>

        {/* <Route path="/products" element={<ProductList/>} />
        <Route path="/products/:id" element={<Product/>} />
        <Route path="*" element={<p>404: Page not found</p>} /> */}
      </Routes>
    </>
  );
}

export default App;
