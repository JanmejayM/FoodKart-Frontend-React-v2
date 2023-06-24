
import "./FoodList.css"

import React, { useEffect, useState } from "react"
 import ProductService from "../../../service/ProductService"
 import Card from 'react-bootstrap/Card';
 import Carousel from 'react-bootstrap/Carousel';
import CartItemService from "../../../service/CartItemService";
import plates from "../../../resources/plates.jpg"
import restaurant from "../../../resources/restaurant.jpg"
import dinning from "../../../resources/dinning.jpg"
import SearchBar from "../searchbar/SearchBar";




 const FoodList=()=>
{
  
  const [originalproduct, setOriginalProduct] = useState([])
  const [product, setProduct] = useState([{
   id:0,
   image:'',
   name:'',
   description:'',
   price:''
  }])


  useEffect(()=>{
   getAllProduct()
  
  },[])


  const getAllProduct=()=>{
    ProductService.fetchAllProducts().then(res=>{
      setOriginalProduct(res.data)
    }).catch(
      (error)=>{
        window.alert(error)
      }
    )
  }


  



   const addToCart=(product)=>
   {

    CartItemService.addProductToCartItem(product,JSON.parse(sessionStorage.getItem("log")).id).catch(
      (error)=>{
        window.alert(error)
      }
    );
   }


 


   const handleChange=(e)=>{
    
    if(e.target.value==="")
    {
    
        setProduct(originalproduct)
      
      
    }
    if(e.target.value==="LowToHigh")
    {
      const newProduct=[...product]

      newProduct.sort(
        (p1, p2) => (p1.price < p2.price) ? 1 : (p1.price > p2.price) ? -1 : 0).reverse();

        setProduct(newProduct)
      
      
    }
    if(e.target.value==="HighToLow")
    {
      const newProduct=[...product]

      newProduct.sort(
        (p1, p2) => (p1.price < p2.price) ? 1 : (p1.price > p2.price) ? -1 : 0);

        setProduct(newProduct)
    }
   }
 
   



  
   return(
   <div style={{backgroundColor:"white",height:'auto !important'}}>

<Carousel>
      <Carousel.Item style={{height:'400px'}}>
        <img
          className="d-block w-100"
          src={plates}
          alt="Image 1"
        />
      </Carousel.Item>
      <Carousel.Item style={{height:'400px'}}>
        <img
          className="d-block w-100"
          src={restaurant}
          alt="Image 2"
        />
      </Carousel.Item>
      <Carousel.Item style={{height:'400px'}}>
        <img
          className="d-block w-100"
          src={dinning}
          alt="Image 3"
        />
      </Carousel.Item>
    </Carousel>

<div className="container">



    <br/>

    <div style={{maxWidth:'800px',marginBottom:'20px',marginLeft:'auto'}}>
    


    <div className="row">

      <div className="col">
      <select className="form-select" onChange={handleChange}>
      <option value="" >Relevance</option>
        <option value="LowToHigh">Price : Low to High</option>
        <option value="HighToLow">Price : High to Low</option>

      </select>
      </div>

      <div className="col">
      <SearchBar setProduct={setProduct}/>

      </div>
    
    </div>

    

    </div>

      <div className="row">
        
        {product.map((product) => (
          <div key={product.id} className="col-lg-3 col-md-4 mb-4" >
            <div className="card h-100" >
              <img src={product.image} alt={product.name} className="image" />
              <div className="card-body " style={{}}>
                <h5 className="card-title">{product.name}</h5>
                <h6 className="card-text">{product.description}</h6>
                <p className="font-weight-bold">Rs. {product.price}</p>
              </div>
              <div className="card-footer">
                <button className="btn btn-lg btn-block" onClick={()=>addToCart(product)}>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
</div>
   

   );

}
export default FoodList;
