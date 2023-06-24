import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import {MdFastfood} from "react-icons/md";




 const Navbar=()=>
{
   return(
    <nav className="navbar navbar-expand-sm navbar-light" style={{textAlign:'right',marginRight:'10pt',padding:"0px"}}>
        
        <div style={{marginLeft:'60px',height:'100%',display:'flex',alignItems:"center"}}>
        <MdFastfood size={'18pt'} style={{marginRight:'10px'}}/>

          <span style={{fontSize:"2rem"}}>FoodKart</span>
        </div>
        <button className="navbar-toggler" style={{float:'right'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">

          <span className="navbar-toggler-icon"></span>
        </button> 


        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <div className="mx-auto"></div>
          <ul className="navbar-nav ">
            <li className="nav-item">
              <Link className="nav-link" to="/" >Login</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/signup" >Signup</Link>

            </li>
            
          </ul>
        </div>
  </nav>
  


   );

}
export default Navbar;
