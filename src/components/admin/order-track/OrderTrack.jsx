import React, { useEffect, useState } from "react"
import OrderService from "../../../service/OrderService";
import { Link } from "react-router-dom";
const OrderTrack=()=>{


    const [orders,setOrders]=useState([])

   
    const getOrders=()=>{
     OrderService.getAllOrders().then(
        res=>{
            setOrders(res.data.reverse());
        }
     )
    }

    useEffect(() => {
         getOrders()
      },[])


return(
    <>
     
     <div>

     </div>
        {orders.map((order)=>(
            <div key={order.id} className="card text-center">
            
            <div className="card-body">
                <h5 className="card-title">Order No : {order.id}</h5>
                <p className="card-text">Price : {order.price}</p>

                <div className="card-text text-muted">
                Date : {order.calendarDate}
                </div>

                <div className="cart-footer" >
                Location :{order.address} 
    
                </div>


                <Link className="btn btn-primary" to={`${order.id}`} >View Details</Link>
            </div>
            

            
            </div>
        ))
        }
\


    </>
)


}

export default OrderTrack;