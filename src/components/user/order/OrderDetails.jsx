import React, { useEffect, useId, useState } from "react";
import OrderService from "../../../service/OrderService";

const OrderDetails=(props)=>{

   const[orderid,setOrderid]=useState()
    const[item,setItem]=useState([])
    const[itemPrice,setItemPrice]=useState()
    const[message,setMessage]=useState()
    const[disabled,setDisabled]=useState(false)


    const getBill=()=>{
        OrderService.getBill(orderid).then(
            res=>{
                if(res.status=='200')
                {
                    setMessage("Bill Generated")
                    setDisabled(true)
                }
            }

            
        )
    }

    const getitem=()=>{
        setItem(props.message)
        setItemPrice(props.price)
        setOrderid(props.orderid)

    }

    useEffect(() => {
        getitem()
        setMessage("")
        setDisabled(false)
      },[props])
   


    return (
        <div>


           {item.length===0?(
            <p></p>
           ):(
            <div>
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
                        <tr key={Math.random()} >
                            <td key={Math.random()}>{item.name}</td>
                            <td key={Math.random()}>{item.quantity}</td>
                            <td key={Math.random()}>{item.price}</td>
                        </tr>
                        ))}
                    </tbody>
                    </table>

                    <div style={{textAlign:'right'}}>
                    <h4>Total Price : Rs.{itemPrice}</h4>

                    </div>
                    <button onClick={()=>{getBill(orderid)}} className="btn btn-primary" disabled={disabled}>Need the Bill</button>
                    <p>{message}</p>
                    </div>
                    
            
            )}

          </div>
    );
}

export default OrderDetails;