import {useState, useEffect} from "react";

export default function Account(){
    const [refresh, setRefresh] = useState(false);
    //Add token to get account info
    const token = localStorage.getItem("token");

    const [userDetails, setUserDetails] = useState({});


    //Fetch orders that match the user's token -> LINK GOES TO NOWHERE
    useEffect(()=>{
        const getOrders = async()=>{
            const response = await fetch ("http://localhost:3000/", {
                headers: {Authorization: `Bearer ${token}`}
            })
            const result = await response.json();
            setOrders(result)
        }
        getOrders();
    }, [refresh])


    //Fetch user's details from the API
    useEffect(()=>{
        async function getUserDetails(){
            try{
                const response = await fetch ("http://localhost:3000/users/:id", {
                    headers: {Authorization: `Bearer ${token}`}
                })
                const results = await response.json();
                setUserDetails(results);
            }catch (error){
                console.log(error)
            }
        }
        getUserDetails();
    },[]);


    
    return(
        <>
        <div className="accountInfo">
            <h1>Account Info</h1>
            <p>Username:{userDetails.username}</p>
        </div>



        <>
        {/* map over the orders of the account */
            orders && orders.map((order)=> <div key = {order.id} className="order">
                <h2>{order.note}</h2>
                <br/>
                <p>{order.date}</p>
            </div>
            )}
        </>

        </>
    )
}