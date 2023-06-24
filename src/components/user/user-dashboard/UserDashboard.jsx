import React from "react";
import { BrowserRouter as Router, Routes, Route,Outlet} from "react-router-dom";
import FoodList from "../food-list/FoodList";
import UserNavBar from "../user-navbar/UserNavbar";



 const UserDashBoard=()=>
{
   return(<div>
   <UserNavBar/>   
   
    
      <Outlet/>

      </div>

   );

}
export default UserDashBoard;
