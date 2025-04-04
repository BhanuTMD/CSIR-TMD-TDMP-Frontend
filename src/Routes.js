// src/Routes.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/auth/Login";
import Signup from "./Components/auth/Signup";
import Section1 from "./Components/Section1";
import TechSearch from "./Components/TechSearch";
import Section2 from "./Components/Section2";
import Section3 from "./Components/Section3";
import Section4 from "./Components/Section4";
import ChangePassword from "./Components/auth/ChangePassword";
import WelcomePage from "./Components/WelcomePage";
import OTPVerify from "./Components/auth/OtpVerify";
import OTPLoginVerify from "./Components/auth/OtpLoginVerify";
// import Search from "./Components/Search";
// import JsonDisplay from "./Components/JsonDisplay";
// import Search from "./Components/Search";
// import SearchTable from "./Components/SearchTable";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Login />} />
        <Route path="welcomePage" element={<WelcomePage />} />
        <Route path="signup" element={<Signup />} />
        <Route path="section1" element={<Section1 />} />
        <Route path="techSearch" element={<TechSearch />} />
        <Route path="section2" element={<Section2 />} />
        <Route path="section3" element={<Section3 />} />
        <Route path="section4" element={<Section4 />} />
        <Route path="changePassword" element={<ChangePassword />} />
        <Route path="otpVerify" element={<OTPVerify />} />
        <Route path="otpLoginVerify" element={<OTPLoginVerify />} />
        <Route path="Login" element={<Login />} />
        {/* <Route path="Search" element={<Search />} />
        <Route path="JsonDisplay" element={<JsonDisplay />} /> */}
        <Route path="TechSearch" element={<TechSearch />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
