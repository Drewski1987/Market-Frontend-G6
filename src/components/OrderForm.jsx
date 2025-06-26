import {useEffect, useState} from "react"
import {  useNavigate, useParams } from "react-router-dom";



function OrderForm ({token}){
    const {id} = useParams()
    const [date, setdate] = useState('');
    const [note, setNote] = useState('');
    const [user_id, setUser_id] = useState('');
    const currentToken = localStorage.getItem("token")
    
    

    async function handleSubmit (event){
        event.preventDefault();
    
            try { 
            const res = await fetch(`http://localhost:3000/orders/${id}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${currentToken}`
                },
                body: JSON.stringify({
                    date: date,
                    note: note,
                    user_id: user_id

                }),
            });

            const data = await res.json();
            console.log(data);
            
           
            
    } catch (err) {
        console.error(err)
    } 
};
        
    return(
       
        <>
        
        <div className="orderForm">
            <form onSubmit={handleSubmit}>
            <label> 
                date: 
                <input 
                name = "date"
                onChange={(e)=>setdate(e.target.value)}
                value={date}/>
            </label>
            <br/><br/>
             <label> 
                Note: 
                <input 
                name = "note"
                onChange={(e)=>setNote(e.target.value)}
                value={note}/>
            </label>
            <br/><br/>
             <label> 
                User Id: 
                <input 
                name = "user_id"
                onChange={(e)=>setUser_id(e.target.value)}
                value={user_id}/>
            </label>
            <br/><br/>

<<<<<<< fixOrderForm
            <button>Submit</button>
            </form>
=======
       <h3>Create Your Order</h3>
      
        
      
        {/* <div>
          {orders?.map((order) => (
            <div key={order.id}>
              <h4>{order.id}</h4>
              <h4>{order.date}</h4>
              <h4>{order.note}</h4>
            </div>
))}
                
        </div>     */}
>>>>>>> main

        </div>
        
        
        
        
        
        </>
    )
}
export default OrderForm
