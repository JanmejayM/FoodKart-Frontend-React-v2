import React, { useEffect, useState,useId } from "react";
import OrderService from "../../../service/OrderService";
import OrderDetails from "./OrderDetails";


const Order=()=>{


    const[orders,setOrders]=useState([])
    const[selectitem,setSelectItem]=useState([])
    const[selectprice,setSelectPrice]=useState()


    const getOrdersofUser=()=>{
      OrderService.getByUserId(JSON.parse(sessionStorage.getItem("log")).id).then(
        res=>{setOrders(res.data.reverse())
        }
      ).catch((error)=>
      window.alert(error)
      )
    }

    const displaySummary=(summary)=>{

      let sub=summary.split(";");
      let ans="";

    
      ans+=sub[0].split(",")[0]
      ans+=", "+sub[1].split(",")[0]

      return ans;

    }
      
    

    useEffect(()=>{
     getOrdersofUser()
    },[])

    const selectOrder=(order)=>{
     setSelectItem(order.description)
     setSelectPrice(order.price)
    }

    return(
    
    <>
   
     
    <div style={{margin:'auto'}}>
<div className="row mx-5">


    <div  className="col col-xs-6 col-sm-6 col-md-5 col-lg-4" style={{height: '100vh',overflow:'hidden',overflowY:'scroll'}} >
     
    

    {orders.length===0?
    (
   <p>No previous Order</p>
    ):
    (
<div>
{orders.map((order) => (
          <div key={order.id} className="col-lg-11 col-md-11 mb-4" >
            <div className="card h-100" >
              <div className="card-body">
                <h5 className="card-title">{displaySummary(order.summary)}</h5>
                <h6 className="card-text">{order.calendarDate}</h6>
                <p className="font-weight-bold">Rs.{order.price}</p>
                <p className="text-muted">Address : {order.address}</p>

              </div>
              <div className="card-footer">
                <button className="btn btn-block" onClick={()=>{selectOrder(order)}} >View Details</button>
              </div>
            </div>
          </div>
        ))}
</div>

      
    ) }
    
        


    </div>
    

    <div  className="col col-xs-6 col-sm-5 col-md-6 col-lg-7 mt-8" >

   

   <OrderDetails message={selectitem} price={selectprice} />

    </div>


</div>


    </div>
    </>);
}

export default Order;