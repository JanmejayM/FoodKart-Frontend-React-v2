import React, { useState } from 'react';
import OrderService from "../../../service/OrderService"
const Revenue=()=> {

 const [from,setFrom]=useState('')
 const [to,setTo]=useState('')
 const [revenue,setRevenue]=useState({})


  const handleDate=(e)=>{

    if(e.target.name==='from')
    {
      setFrom(e.target.value)

    }
    if(e.target.name==='to')
    {
      setTo(e.target.value)

    }
    
    

  }

  const calculateRevenue=()=>{
    
    if(to===from)
    {
    
      OrderService.getRevenue(to).then(
        res=>{
          setRevenue(res.data)
          
        }
      )
    }

    if(to>=from)
    {
      OrderService.getRevenueMonthy(from,to).then(
        res=>{
          setRevenue(res.data)
        }
      )
    }

    if(to<from)
    {
      window.alert("fromdate must be lesser than or equal to todate")
      return;
    }
  }
  return (
    <>


<div className="col">

<div className="text-center">

    <div className="form-group">

    <label htmlFor="from">From Date: *</label>
     <input className="form-control form-control-lg" type="date" name="from"  onChange={handleDate}/>

    </div>

    <div className="form-group" style={{marginBottom:"40px"}}>

    <label htmlFor="to">To Date:</label>
    <input className="form-control form-control-lg" type="date" name="to" onChange={handleDate}/>

    </div>

    <button className="btn btn-md btn-primary" type="button"

    disabled={to==='' || from===''} onClick={calculateRevenue}>
      Calculate Revenue</button>
   
   


    <div>
       {revenue.price && <h1>Rs. {revenue.price}</h1>}
    </div>




</div>




</div>

    </>
  )
}

export default Revenue;
