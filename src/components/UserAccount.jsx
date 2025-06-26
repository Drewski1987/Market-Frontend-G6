import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";

export default function Account({orders, setOrders}){

    //Add token to get account info
    const token = localStorage.getItem("token");

    const [userDetails, setUserDetails] = useState({});

    const {id} = useParams();

    //Fetch user's details from the API
    useEffect(()=>{
        async function getUserDetails(){
            try{
                const response = await fetch (`http://localhost:3000/users/${id}`, {
                    headers: {Authorization: `Bearer ${token}`}
                })
                const results = await response.json();
                setUserDetails(results);

            }catch (error){
                console.log(error)
            }
        }
        getUserDetails();
    },[id]);


    //Fetch orders that match the user's token -> LINK GOES TO NOWHERE
    useEffect(()=>{
        async function getOrders(){
            try{

                const response = await fetch (`http://localhost:3000/orders/${id}`, {
                    headers: {Authorization: `Bearer ${token}`}
                })
                const result = await response.json();
                setOrders(result);

            }catch(err){
                console.log(err);
            }
        };
        getOrders();
    }, [id])

    
    return(
        <>
        <div className="accountInfo">
            <h1 className="infoTitle">Account Info</h1>
            <p>Username: {userDetails.username}</p>
            <p>User Id Number: {username.id}</p>
        </div>



        <>
        {/* map over the orders of the account */
            orders && orders.map((order)=> (
            <div key = {order.id} className="order">
                <h2 className="orderNote"> Item(s) ordered:  {order.note}</h2>
                <p>Date orderd: {order.date}</p>
            </div>
            ))}
        </>

        </>
    )
}