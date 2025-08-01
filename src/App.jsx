import { useEffect, useState } from "react";
import {Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/home"
import ProductDetail from "./components/ProductDetail";
import ProductList from "./components/ProductList";
import Login from "./components/login";
import Register from "./components/Register";
import Account from "./components/userAccount";
import Navigation from "./components/Navigation";
import OrderForm from "./components/OrderForm";
import Reviews from "./components/Reviews";
import "./App.css"


function App() {
  const [token, setToken] = useState (null);
  const [userId, setUserId] = useState (null);
  const [orders, setOrders] = useState ([]);
  // const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);

    //set token in localStorage
      useEffect(() => {
        const invalidTokens = ['Not authorized.', "Unable to login"];

        if (token && !invalidTokens.includes(token)) {
          localStorage.setItem("token", token);
        } else {
          localStorage.removeItem("token");
        }
      }, [token]);


      //retrieve token from localStorage
  useEffect(()=>{
    const storedToken = localStorage.getItem("token");
    if (storedToken){
      setToken(storedToken)
    }
  },[]);

      //set user in localStorage
  useEffect(() => {
    if (token)  {
      localStorage.setItem("userId", userId)
    }else{
      localStorage.removeItem("userId")
    }
  }, [userId]);


      //retrieve user from localStorage
  useEffect(()=>{
    const storedUserId = localStorage.getItem("userId");
    if (storedUserId){
      setUserId(storedUserId)
    }
  },[]);


  return (
    <>
    <div>  
    <Navigation token={token} setToken={setToken} setUserId={setUserId} userId={userId}/>
    </div>
    
      <Routes>
        <Route path="/users/login" element={<Login token={token} setToken={setToken} userId={userId} setUserId={setUserId}/>} />

        <Route path="/users/:id" element={<Account orders={orders} setOrders={setOrders}/>}/>

        <Route path = "/users/register" element = {<Register/>}/>

        <Route path ="/orders/:id" element = {<OrderForm token={token} setToken={setToken}/>}/>

        <Route path="/products" element={<ProductList/>} />

        <Route path="/reviews" element={<Reviews token={token}/>} />

        <Route path="/products/:id" element={<ProductDetail/>} />
        <Route path="*" element={<Home/>} />
      </Routes>
    </>
  );
}

export default App;
