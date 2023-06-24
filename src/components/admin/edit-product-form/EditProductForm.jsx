import React, { useEffect, useState } from 'react';
import ProductService from '../../../service/ProductService';
import {useNavigate, useParams} from 'react-router-dom';



const EditProductForm = () => {

    const {id} = useParams();
    // const navigate = useNavigate();
 
    const [product, setProduct] = useState({
        id: 0,
        name: '',
        description: '',
        image: '',
        price: 0,
      });
      const [errors, setErrors] = useState({});


      const getProduct=async()=>{
        const response=await ProductService.getProductById(id);

        setProduct(response.data)
      }

      useEffect(()=>{
        getProduct()
      },[])
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct((prevProduct) => ({
          ...prevProduct,
          [name]: value,
        }));
      };
    
      const handleSubmit = (e) => {

        if(window.confirm("Are you sure to make changes")){
        e.preventDefault();
        const validationErrors= {};
    
        if (!product.name) {
          validationErrors.name = 'Name is required';
        }
    
        if (!product.description) {
          validationErrors.description = 'Description is required';
        }
    
        if (!product.image) {
          validationErrors.image = 'Image is required';
        }
    
        if (!product.price) {
          validationErrors.price = 'Price is required';
        } else if (isNaN(product.price)) {
          validationErrors.price = 'Price must be a number';
        }
    
        if (Object.keys(validationErrors).length === 0) {
          // Form is valid, do something with the product data
          console.log('Product:', product);
          setProduct(product);
    
          ProductService.updateProduct(product).then(res=>{
            window.alert("success")
          }).catch(error=>{
            window.alert(error)
          })
          setErrors({});
          

        } else {
          // Form is invalid, set the validation errors
          setErrors(validationErrors);
        }
      }
      };

  return(

    <form onSubmit={handleSubmit}>

<div>
      <label htmlFor="id">ID</label>
      <input
        type="number"
        id="id"
        name="id"
        value={product.id}
        onChange={handleChange}
        readOnly
        className={`form-control`}
        disabled={true}

      />
      {errors.name && <span className="error">{errors.name}</span>}
    </div>
    <div>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={product.name}
        onChange={handleChange}
        className={`form-control ${errors.name ? 'is-invalid' : ''}`}

      />
      {errors.name && <span className="error">{errors.name}</span>}
    </div>

    <div>
      <label htmlFor="description">Description</label>
      <input
        type="text"
        id="description"
        name="description"
        value={product.description}
        onChange={handleChange}
        className={`form-control ${errors.description ? 'is-invalid' : ''}`}

      />
      {errors.description && (
        <span className="error">{errors.description}</span>
      )}
    </div>

    <div>
      <label htmlFor="image">Image</label>
      <input
        type="text"
        id="image"
        name="image"
        value={product.image}
        onChange={handleChange}
        className={`form-control ${errors.image ? 'is-invalid' : ''}`}

      />
      {errors.image && <span className="error">{errors.image}</span>}
    </div>

    <div>
      <label htmlFor="price">Price</label>
      <input
        type="text"
        id="price"
        name="price"
        value={product.price}
        onChange={handleChange}
        className={`form-control ${errors.price ? 'is-invalid' : ''}`}

      />
      {errors.price && <span className="error">{errors.price}</span>}
    </div>

    <button type="submit" className='btn btn-primary'>Submit</button>
  </form>


  );
};

export default EditProductForm;
