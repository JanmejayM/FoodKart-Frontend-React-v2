import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AddressService from "../../../service/AddressService";
import "./Address.css"
const Address = () => {

    const[addresses,setAddresses]=useState([])
     const navigate=new useNavigate()

   const getAllAddress=()=>{
    AddressService.getByUser(JSON.parse(sessionStorage.getItem("log")).id)
    .then(
        res=>{
            setAddresses(res.data)
        }
    )
}
const addressForm=()=>
{
  navigate("/user/add-address-form")
}
const deleteAddress=(data)=>{
  if(window.confirm('Are you sure to delete the address'))
  {
    const updatedAddresses = [...addresses];

    let i=addresses.indexOf(data)
    AddressService.deleteAddress(data.address_id);

    updatedAddresses.splice(i, 1);
    setAddresses(updatedAddresses);

  }
}


useEffect(() => {
    getAllAddress()
  },[])

 

  return (
    <div className="row container" >

    <h1>Address List</h1>


      { addresses.length>=4 && <p className='text-danger'>Max. 4 addresses allowed</p> }
      <div>
      <button className='add btn btn-lg' onClick={addressForm} disabled={addresses.length>=4}>Add New Address</button>

      </div>
      <div className='col-sm-6' style={{padding:'50px'}}>

      {addresses.map((address) => (
        <div className="address card mb-3" key={address.address_id} >
          <div className="card-body">
            <p className="card-text">
              House No: {address.houseno}
              <br />
              Street: {address.street}
              <br />
              City: {address.city}
              <br />
              State: {address.state}
              <br />
              Pincode: {address.pincode}
            </p>
          </div>
          <div style={{marginRight:'auto',marginLeft:'auto'}}>
          <button className='btn btn-md btn-danger' style={{color:'white'}} onClick={(()=>deleteAddress(address))}>delete</button>
          </div>
        </div>

))}
</div>



      <div className='col-sm-6' style={{paddingTop:'100px'}}>
      <img src="https://thumbs.gfycat.com/MeaslySeparateKid-size_restricted.gif"/>
      </div>

    </div>
  );
};

export default Address;
