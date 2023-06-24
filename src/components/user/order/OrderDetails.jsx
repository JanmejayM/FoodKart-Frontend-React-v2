import React, { useEffect, useId, useState } from "react";

const OrderDetails=(props)=>{

   
    const[item,setItem]=useState([])
    const[itemPrice,setItemPrice]=useState()

    

    const getitem=()=>{
        setItem(props.message)
        setItemPrice(props.price)

    }

    useEffect(() => {
        getitem()
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

                    </div>
            
            )}
          </div>
    );
}

export default OrderDetails;