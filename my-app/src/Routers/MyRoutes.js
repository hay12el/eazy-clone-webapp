import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from '../pages/Home';
import Login from '../pages/login/Login'
import Signin from '../pages/SignIn/Signin';
import AdminPanel from '../pages/adminPanel/AdminPanel'
import BusinessPage from "../pages/businessPage/BusinessPage";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="adminPanel" element={<AdminPanel/>}/>
      <Route path="business/:id" element={<BusinessPage/>}/>
      
    </Routes>
  );
};

export default MyRoutes;
