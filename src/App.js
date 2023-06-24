// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import UserDashBoard from "./components/user/user-dashboard/UserDashboard";
import AdminDashBoard from "./components/admin/admin-dashboard/AdminDashboard";
import FoodList from "./components/user/food-list/FoodList";
import Order from "./components/user/order/Order";
import Cart from "./components/user/cart/Cart";
import Account from "./components/user/account/Account";
import FoodPage from "./components/admin/food-page/FoodPage";
import ProtectedUser from "./auth/ProtectedUser";
import ProtectedAdmin from "./auth/ProtectedAdmin";
import AddressForm from "./components/user/address/AddressForm";
import Address from "./components/user/address/Address";
import InvalidPage from "./pages/invalid-page/InvalidPage";
import OrderTrack from "./components/admin/order-track/OrderTrack";
import Revenue from "./components/admin/revenue/Revenue";
import AddProductForm from "./components/admin/add-product-form/AddProductForm";
import EditProductForm from "./components/admin/edit-product-form/EditProductForm";
import OrderBill from "./components/admin/order-track/OrderBill";
function App() {
  return (

      <Router>

      <Routes>
 

      <Route path="/" element={<Login/>}/>

      <Route path="/signup" element={<Signup/>}/>

      <Route path="/user" element={ <ProtectedUser><UserDashBoard/></ProtectedUser>}>
        <Route index element={ <ProtectedUser><FoodList/></ProtectedUser>}/>
        <Route path="orders" element={<ProtectedUser><Order/></ProtectedUser>}/>
        <Route path="cart" element={<ProtectedUser><Cart/></ProtectedUser>}/>
        <Route path="account/:id" element={<ProtectedUser><Account/></ProtectedUser>}/>
        <Route path="address" element={<ProtectedUser><Address/></ProtectedUser>}/>
        <Route path="add-address-form" element={<ProtectedUser><AddressForm/></ProtectedUser>}/>

      </Route>

     
      <Route path="/admin" element={<ProtectedAdmin><AdminDashBoard/></ProtectedAdmin>}>
      <Route index element={<ProtectedAdmin><FoodPage/></ProtectedAdmin>}/>
      <Route path="order-track" element={<ProtectedAdmin><OrderTrack/></ProtectedAdmin>}/>
      <Route path="order-track/:id" element={<ProtectedAdmin><OrderBill/></ProtectedAdmin>}/>
      <Route path="revenue" element={<ProtectedAdmin><Revenue/></ProtectedAdmin>}/>
      <Route path="add-product-form" element={<ProtectedAdmin><AddProductForm/></ProtectedAdmin>}/>
      <Route path="edit-product-form/:id" element={<ProtectedAdmin><EditProductForm/></ProtectedAdmin>}/>



        </Route>

        <Route path="*" element={<InvalidPage/>}/>




      </Routes>

     

      </Router>

      
  

);






}

export default App;