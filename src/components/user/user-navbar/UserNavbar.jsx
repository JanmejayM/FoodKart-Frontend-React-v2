import React from "react";
import { Link } from "react-router-dom";

import {AiFillHome,AiFillShopping,AiOutlineLogout} from "react-icons/ai";

import {BsFillPersonFill,BsFillCartFill} from "react-icons/bs";
import {FaAddressCard} from "react-icons/fa";
import {MdFastfood} from "react-icons/md";



  import "./UserNavbar.css"





 const UserNavBar=()=>
{

    const logOut=()=>{
      sessionStorage.removeItem('log')
    }

   return(
    <div  className="mainDiv">
  
    <nav className="navbar navbar-expand-sm" style={{ textAlign: 'right'}}>
      <div style={{marginLeft:'60px',height:'100%',display:'flex',alignItems:"center"}} >
      <MdFastfood size={'18pt'} style={{marginRight:'10px'}}/>

       <span style={{fontSize:'2rem'}}>FoodKart</span> </div>
      <button className="navbar-toggler" style={{ float: 'right' }} type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavbar" style={{width:'30px'}}>
        <div className="mx-auto"></div>
        <ul className="navbar-nav">
        <li className="nav-item">
            <Link className="nav-link" style={{height:'100%',display:'flex',alignItems:"center"}} to="/user"><AiFillHome/><span style={{marginLeft:'5px'}}>Home</span></Link>
          </li>

          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" style={{height:'100%',display:'flex',alignItems:"center"}} id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
             <BsFillPersonFill/><span style={{marginLeft:'5px'}}>{JSON.parse(sessionStorage.getItem('log')).firstname}</span>
            </Link>
            <div className="dropdown-menu" style={{ textAlign: 'center', padding: '10%',listStyle:'none',margin:'auto' ,fontSize:'14px'}} aria-labelledby="navbarDropdown">
              <ul style={{listStyle:'none'}}> {/* Wrap the <li> elements inside a <ul> */}
                <li className="nav-item">
                  <Link className="nav-link" to={'/user/account/'+`${JSON.parse(sessionStorage.getItem("log")).id}`}>Account</Link>
                </li>
                <li className="nav-item pb-2">
                  <Link className="nav-link" to="/user/address" style={{height:'100%',display:'flex',alignItems:"center"}}>Address <FaAddressCard/></Link>
                </li>
                <li className="nav-item"><Link className="nav-link" onClick={logOut} to="/" style={{height:'100%',display:'flex',alignItems:"center"}}>Logout <AiOutlineLogout/></Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/user/orders" style={{height:'100%',display:'flex',alignItems:"center"}}><AiFillShopping/><span style={{marginLeft:"5px"}}>My Orders</span></Link>
          </li>
          
          
          <li className="nav-item">
            <Link className="nav-link" to="/user/cart" style={{height:'100%',display:'flex',alignItems:"center"}}><BsFillCartFill/><span style={{marginLeft:"5px"}}>Cart</span></Link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
  
       );



   

}
export default UserNavBar;
