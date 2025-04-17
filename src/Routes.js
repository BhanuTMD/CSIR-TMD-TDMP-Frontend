// src/Routes.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/auth/Login";
import Signup from "./Components/auth/Signup";
import SectionOne from "./Components/SectionOne";
import TechSearch from "./pages/TechSearch";
import SectionTwo from "./Components/SectionTwo";
import SectionThree from "./Components/SectionThree";
import SectionFour from "./Components/SectionFour";
import ChangePassword from "./Components/auth/ChangePassword";
import WelcomePage from "./Components/WelcomePage";
import OTPVerify from "./Components/auth/OtpVerify";
import OTPLoginVerify from "./Components/auth/OtpLoginVerify";
// import Search from "./Components/Search";
// import JsonDisplay from "./Components/JsonDisplay";
// import Search from "./Components/Search";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Login />} />
        <Route path="welcomePage" element={<WelcomePage />} />
        <Route path="signup" element={<Signup />} />
        <Route path="SectionOne" element={<SectionOne />} />
        {/* <Route path="techSearch" element={<TechSearch />} /> */}
        <Route path="SectionTwo" element={<SectionTwo />} />
        <Route path="SectionThree" element={<SectionThree />} />
        <Route path="SectionFour" element={<SectionFour />} />
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
