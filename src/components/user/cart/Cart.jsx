import React,{useState,useEffect} from "react";
import "./Cart.css"
import CartService from "../../../service/CartService";
import OrderService from "../../../service/OrderService";
import AddressService from "../../../service/AddressService";
import {BsFillTrashFill} from "react-icons/bs";
import {AiFillPlusCircle,AiFillMinusCircle} from "react-icons/ai";
import CartItemService from "../../../service/CartItemService";
import { Link } from "react-router-dom";
import {Modal, Button} from 'react-bootstrap';  



const Cart=()=>{

  


   const[cartItems,setCartItems]=useState([])
   const[address,setAddress]=useState([])
   const[finalAddress,setFinalAddress]=useState("")
   const[checkout,setCheckout]=useState(false)




   const [show, setShow] = useState(false);  
  
   const modalClose = () => setShow(false);  
   const modalShow = () => setShow(true);  
 



  const fetchData = async () => {
    try {
      const response1 = await CartService.addCart(JSON.parse(sessionStorage.getItem("log")).id);
  
      const response2 = await CartService.getById(JSON.parse(sessionStorage.getItem("log")).id);

      setCartItems(response2.data.cartitem)
  
      // Process the responses synchronously
    } catch (error) {
      window.alert(error)
    }
  };
  const fetchAddress=()=>{


     AddressService.getByUser(JSON.parse(sessionStorage.getItem("log")).id).then(
      res=>{
        setAddress(res.data)
      }
     ).catch(error=>{
      window.alert(error)
     })
  }

  const deleteCartItem=(cartitem)=>{
    if(window.confirm("Are you sure to delete the product "+ cartitem.product.name))
    {
    const updatedCart = [...cartItems];

    try{
     CartService.delete(cartitem)

    let i= updatedCart.indexOf(cartitem)
    updatedCart.splice(i,1)

    setCartItems(updatedCart)
    }
    catch(error)
    {
      window.alert("error")
    }
    }
  }
  
  const checkOut=()=>{
    
    OrderService.addToOrder(finalAddress,JSON.parse(sessionStorage.getItem("log")).id).then(
     res=>{ setCheckout(true)

      modalShow()
     }
    ).catch((error)=>{
      window.alert(error)
    })
    
    
  }
   const generateFullAddress=(address)=>
   {
    return address.houseno+', '+address.street+', '+address.city+', '+address.state+', '+address.pincode;

   }
   const calculatePrice=()=>{

    let ans=0;
    cartItems.forEach((element)=>{
     ans+=element.product.price*element.quantity
    }
    )
    return ans
   }

   const handleAddress=(e)=>{
     setFinalAddress(e.target.value)
   }


const changeQty=(item,qty)=>{
 
  const updatedCart = [...cartItems];
  let i= updatedCart.indexOf(item)
  updatedCart[i].quantity=updatedCart[i].quantity+qty;

  CartItemService.updateQty(updatedCart[i])


  setCartItems(updatedCart)



}

 
   useEffect(() => {
     fetchData()
     fetchAddress()
   },[])

   useEffect(() => {
    
    if(checkout===true)
    {
    setCartItems([])
    setCheckout(false)
    }
    
  },[checkout])
  



  
  
    return(

<div style={{backgroundColor:' rgb(232 201 175)'}}>
 

<h1 className="text-center">Cart</h1>

<div className="row" style={{backgroundColor:' rgb(232 201 175)',height:'100% !important',paddingLeft:'60px',paddingRight:'60px',margin:'auto'}}>


<div className="col-sm-7 col-md-7" style={{paddingTop:'10vh',paddingRight:'0'}} >
<div className="container card" style={{overflowY:'scroll',height:'70vh',borderRadius:'30px 5px 5px 30px',border:'double',backgroundColor:'white',border: '2px solid #999999'}}>
{cartItems.length === 0 ? (
  <p className="text-center">Your cart is empty.</p>
) : (
  <ul className="list-group" style={{paddingTop:'20px',paddingLeft:'20px',paddingRight:'20px'}}>
    {cartItems.map((item) => (
      <li key={item.cartItemId} className="list-group-item cart-item" >
        <div className="row align-items-center">
          <div className="col-md-3">
            <img src={item.product.image} alt={item.name} className="cart-item-image" />
          </div>
          <div className="col-md-9">
            <h3 className="cart-item-name">{item.product.name}</h3>
            <p className="cart-item-price">Price: {item.product.price}</p>
            <button className="btn btn-light"  onClick={()=>{changeQty(item,-1)}} disabled={item.quantity<=1}><AiFillMinusCircle/></button>
            <input className="cart-item-quantity" value= {item.quantity} style={{width:'20px'}} disabled={true}/>
            <button className="btn btn-light" onClick={()=>{changeQty(item,1)}} disabled={item.quantity>4}><AiFillPlusCircle/></button>

            <button className="btn add btn-sm" onClick={()=>{deleteCartItem(item)}}><BsFillTrashFill/></button>
          </div>
        </div>
      </li>
    ))}
  </ul>
)}
</div> 

</div>

<div className="col-sm-5 col-md-5" style={{paddingBottom:'10vh',paddingTop:'10vh',paddingRight:'20px',paddingLeft:'0px'}}>
  <div className="cart card" style={{height:'70vh',borderRadius:'5px 30px 30px 5px',border:'double',backgroundColor:'white',border: '2px solid #999999'}}>
    <div className="card-body" style={{paddingTop:'200px'}}>
      <h4 className="cart-text">Items Quantity: {cartItems.length}</h4>
      <h4 className="cart-text">Total Price:  {calculatePrice()}</h4>

      <select style={{maxWidth:'60%'}} value={finalAddress} onChange={handleAddress} >
      <option value="">Select an Address</option>
        {
          address.map((address)=>(
            <option key={address.address_id} value={generateFullAddress(address)} >{generateFullAddress(address)}</option>
          ))
        }
      </select>
      {address.length===0 && <p><Link to="../add-address-form">Add an address to proceed</Link></p>}

      <div style={{height:'100px'}}></div>

      <button className="btn btn-primary" disabled={cartItems.length===0 || finalAddress===""} onClick={checkOut} >Checkout</button>
    </div>

   
  </div>
</div>


</div>

<Modal centered show={show} onHide={modalClose}>  
  <Modal.Header >  
    <Modal.Title>Order Placed</Modal.Title>  
  </Modal.Header>  
  
  <Modal.Body>  
  <img src="https://cdn.dribbble.com/users/2015153/screenshots/7356752/media/9bb25eac29706d6c4c3f3e51a8c5295e.gif" alt="loading..." className="img-thumbnail" />

  </Modal.Body>  
  
  <Modal.Footer>  
    <Link className="btn" style={{backgroundColor: '#fc8019'}} to="../orders">Go to Orders</Link>
    <Button variant="secondary" onClick={modalClose}>Close</Button>  
  </Modal.Footer>  
</Modal>  


</div>






    );
}

export default Cart;