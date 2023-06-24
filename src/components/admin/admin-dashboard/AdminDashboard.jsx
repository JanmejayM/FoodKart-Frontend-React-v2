import React from "react";
import { BrowserRouter as Router, Routes, Route,Outlet} from "react-router-dom";
import AdminNavBar from "../admin-navbar/AdminNavbar";
import "./AdminDashboard.css"



 const AdminDashBoard=()=>
{
   return(
   
      <div className="container" style={{height:'100vh',margin:0,padding:0}}>

      <div className="row" style={{textAlign:'center'}}>
         <div className="col col-12 col-sm-4 col-md-4 col-lg-4">
           <AdminNavBar/>
         </div>
         <div className="col col-12 col-sm-8 col-md-8 col-lg-8"  style={{overflowY:'scroll',height:'100vh'}}>
            <Outlet/>
         </div>
      </div>
   
      </div>

   );

}
export default AdminDashBoard;
