import {useEffect, useState} from "react"
import {  Link, useNavigate, useParams } from "react-router-dom";



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
            <label className="orderLabel"> 
                Date: 
                <input 
                name = "date"
                onChange={(e)=>setdate(e.target.value)}
                value={date}/>
            </label>
            <br/><br/>
             <label className="orderLabel"> 
                *Note: 
                
                <input 
                name = "note"
                onChange={(e)=>setNote(e.target.value)}
                value={note}/>
            </label>
            <br/><br/>
             <label className="orderLabel"> 
                User Id: 
                <input 
                name = "user_id"
                onChange={(e)=>setUser_id(e.target.value)}
                value={user_id}/>
            </label>
            <br/><br/>
               <h4 className="orderLabel">*Please specify the item and quantity</h4> 
               
            <button>Submit</button>
                
            </form>

     
        </div>
        
        </>
    )
}
export default OrderForm
