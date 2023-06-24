import { Link } from "react-router-dom";
import "./AdminNavbar.css";
import {AiOutlineLogout,AiFillShop} from "react-icons/ai";

import {MdAccountBalanceWallet ,MdOutlineFoodBank,MdFastfood} from "react-icons/md";
const AdminNavBar=()=>
{


   const logOut=()=>{
      sessionStorage.removeItem('log')
    }
   return(
   <>
    <div  style={{height:'100%',backgroundColor:'rgb(211,211,211)'}} >
      <div style={{marginBottom:"30%"}}>

    <h1>Foodkart <MdFastfood/></h1>
      </div>

    <ul style={{listStyle:'none',padding:'0px'}}>
        

    <li><Link className="btn btn-lg" style={{width:'100%'}} to={"/admin"}>Product <MdOutlineFoodBank/></Link></li>

    <li><Link className="btn btn-lg" style={{width:'100%'}} to={"order-track"} >Order <AiFillShop/></Link></li>

    <li><Link className="btn btn-lg" style={{width:'100%'}} to={"revenue"} >Revenue <MdAccountBalanceWallet/></Link></li>
 

    <li><Link className="btn btn-lg" style={{width:'100%'}} onClick={logOut} to={"../"} >Logout <AiOutlineLogout/></Link></li>
    </ul> 

   </div>

   </>
   );

}
export default AdminNavBar;