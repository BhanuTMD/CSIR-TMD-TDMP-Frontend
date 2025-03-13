// src/Routes.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/auth/Login";
import Signup from "./Components/auth/Signup";
import Section1 from "./Components/Section1";
import Section6 from "./Components/Section6";
import Section2 from "./Components/Section2";
import Section3 from "./Components/Section3";
import Section4 from "./Components/Section4";
import ChangePassword from "./Components/auth/ChangePassword";
import WelcomePage from "./Components/WelcomePage";
import OTPVerify from "./Components/auth/OtpVerify";
import OTPLoginVerify from "./Components/auth/OtpLoginVerify";
import TechSearch from "./Components/TechSearch";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<WelcomePage />} />
        <Route path="welcomePage" element={<WelcomePage />} />
        <Route path="signup" element={<Signup />} />
        <Route path="section1" element={<Section1 />} />
        <Route path="section6" element={<Section6 />} />
        <Route path="Section2" element={<Section2 />} />
        <Route path="Section3" element={<Section3 />} />
        <Route path="Section4" element={<Section4 />} />
        <Route path="changePassword" element={<ChangePassword />} />
        <Route path="otpVerify" element={<OTPVerify />} />
        <Route path="otpLoginVerify" element={<OTPLoginVerify />} />
        <Route path="Login" element={<Login />} />
        <Route path="TechSearch" element={<TechSearch />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
