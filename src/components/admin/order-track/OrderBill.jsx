import React from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import OrderService from "../../../service/OrderService";

const OrderBill=()=>{

    const[itemPrice,setItemPrice]=useState(0)
    const[item,setItem]=useState([{
        name:'',
        quantity:0,
        price:0
    }])
    const[address,setAddress]=useState()

     const {id}=useParams()


     const getOrderById=()=>{
        OrderService.getByOrderId(id).then(res=>{
            setItem(res.data.description)
       setItemPrice(res.data.price)
       setAddress(res.data.address)
        }).catch(error=>{
            window.alert(error)
        })
       
     }

     useState(()=>{
      getOrderById()
     },[])

return(
        <div>

               <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        item.map((item)=>(
                        <tr key={Math.random()}>
                            <td >{item.name}</td>
                            <td >{item.price}</td>
                            <td >{item.quantity}</td>
                        </tr>


                        )
                        )}

                    </tbody>
                    </table>

                    <div style={{textAlign:'right'}}>
                    <h4></h4>
                    <h6></h6>

                    <div className="card text-center">
                    
                    <div className="card-body">
                        <h5 className="card-title">Total Price : Rs.{itemPrice}</h5>
                        <p className="card-text">Location : {address}</p>
                        <Link className="btn btn-primary" to="..">Go Back</Link>
                    </div>
                   
                    </div>
                    </div>

                    </div>
            
        </div>
);

}
export default OrderBill;