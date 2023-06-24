import React, { useEffect, useState } from "react";
import ProductService from "../../../service/ProductService";
import AddProductForm from "../add-product-form/AddProductForm"


import {BiEdit} from 'react-icons/bi';
import {BsFillTrashFill} from "react-icons/bs";
import { Link } from "react-router-dom";



const FoodPage=()=>{



   


    const[products,setProducts]=useState([])
    const[deleteSwitch,setDeleteSwitch]=useState(false)

    const getAllProduct=()=>{
            ProductService.fetchAllProducts().then(
                res=>{
                    setProducts(res.data);
                }
            )
            .catch(e=>console.log(e))

    }

   

    const deleteProduct=(product)=>{

      if(window.confirm("Are you sure to delete the product "+ product.name))
      {
      ProductService.deleteProduct(product.id).then(
        res=>{
          const updatedList=[...products]
      let i=updatedList.indexOf(product)

      updatedList.splice(i,1)

      setProducts(updatedList)
        }
      ).catch(
        error=>{
          window.alert(error)
        }
      )
      
      }
    }

    useEffect(() => {

      
       getAllProduct()
     
       
      },[])

      useEffect(() => {

        if(deleteSwitch===true)
        {
          setDeleteSwitch(false)
         getAllProduct()
        }
       
         
        },[deleteSwitch])


   


   

    


    return(

<div>
    <div style={{overflowY:'scroll',height:'100vh',paddingTop:'30px'}}>

      <Link className="btn btn-lg btn-info"  to="add-product-form">Add Product</Link>
              



{products.map((product) => (
          <div key={product.id} style={{marginTop:'30px'}}>
            <div className="card" style={{width:'90%',maxWidth:'500px',marginLeft:"auto",marginRight:'auto'}}>
              <img src={product.image} style={{marginTop:'30px'}} alt={product.name} className="card-img-top" />
              <div className="food card-body">
                <h5 className="food card-title">{product.name}</h5>
                <h6 className="food card-text">{product.description}</h6>
                <p className="font-weight-bold">Rs. {product.price}</p>
              </div>

              <div style={{paddingLeft:'20px',paddingRight:'20px'}}>

              <Link className="btn btn-lg btn-info" to={`edit-product-form/${product.id}`}>Edit <BiEdit/></Link>
              <button className="btn btn-lg btn-danger" onClick={()=>{deleteProduct(product)}}>Delete <BsFillTrashFill/></button>
              </div>

            </div>
          </div>
        ))}




        
    </div>



</div>
    );
}

export default FoodPage;


