import React, { useState,useEffect } from "react";
import AddressService from "../../../service/AddressService";
import { useNavigate, useNavigation } from "react-router-dom";

const AddressForm= () => {
 
 const navigate=useNavigate()
 const [address, setAddress] = useState({
    houseno: '',
    street: '',
    city: '',
    state: '',
    pincode: '',
  });

  const [errors, setErrors] = useState({});


  const handleChange = (e) => {
    setAddress((prevAddress) => ({
      ...prevAddress,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm(address);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
        AddressService.addAddress(address,JSON.parse(sessionStorage.getItem("log")).id)
        .then(
         (res)=>{
           // Form is valid
      window.alert("success")
      setAddress({
          houseno: '',
          street: '',
          city: '',
          state: '',
          pincode: '',})

         navigate("..")
         }
        )
        .catch((error)=>
          window.alert(error)
        )

     

    }
  };

  const validateForm = (data) => {
    const errors = {};

    if (!data.houseno) {
      errors.houseno = 'House number is required';
    }

    if (!data.street) {
      errors.street = 'Street is required';
    }

    if (!data.city) {
      errors.city = 'City is required';
    }

    if (!data.state) {
      errors.state = 'State is required';
    }

    if (!data.pincode) {
      errors.pincode = 'Pincode is required';
    } else if (!/^\d{6}$/.test(data.pincode)) {
      errors.pincode = 'Invalid pincode';
    }

    return errors;
  };




  


  

  return (
    <div className="container">
      <h1 className="text-center">Address Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">House Number:</label>
          <input
            type="text"
            name="houseno"
            value={address.houseno}
            onChange={handleChange}
            className={`form-control ${errors.houseno ? 'is-invalid' : ''}`}
          />
          {errors.houseno && <div className="invalid-feedback">{errors.houseno}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Street:</label>
          <input
            type="text"
            name="street"
            value={address.street}
            onChange={handleChange}
            className={`form-control ${errors.street ? 'is-invalid' : ''}`}
          />
          {errors.street && <div className="invalid-feedback">{errors.street}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">City:</label>
          <input
            type="text"
            name="city"
            value={address.city}
            onChange={handleChange}
            className={`form-control ${errors.city ? 'is-invalid' : ''}`}
          />
          {errors.city && <div className="invalid-feedback">{errors.city}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">State:</label>
          <input
            type="text"
            name="state"
            value={address.state}
            onChange={handleChange}
            className={`form-control ${errors.state ? 'is-invalid' : ''}`}
          />
          {errors.state && <div className="invalid-feedback">{errors.state}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Pincode:</label>
          <input
            type="text"
            name="pincode"
            value={address.pincode}
                onChange={handleChange}
                className={`form-control ${errors.pincode ? 'is-invalid' : ''}`}
              />
              {errors.pincode && <div className="invalid-feedback">{errors.pincode}</div>}
            </div>
    
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
    
    



  );

}

export default AddressForm;
