import {useEffect, useState} from "react"
import {  useParams } from "react-router-dom";



function OrderForm ({token}){
    const {id} = useParams()
    const [orders, setOrders] = useState(null);
    const currentToken = localStorage.getItem("token")
    
    


    useEffect(()=> {
        const fetchOrder = async () => {
            try { 
            const res = await fetch(`http://localhost:3000/orders/${id}`, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${currentToken}`
                }
            });
            const data = await res.json();
            console.log(data);
            // setOrders(data)
           
            
    } catch (err) {
        console.error(err)
    } 
};
    
    fetchOrder();

    }, [id])

    // console.log(orders)
   
    // const navigate = useNavigate
    // navigate("/")

    
    return(
       
        
        <div className="orderForm">

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


</div>
    )
}
export default OrderForm
