import React from "react";
import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";
import { Outlet } from "react-router-dom";
const Root = () => {
  return (
    <div className="bg-white min-h-screen">
        <div className="bg-white py-5"></div>
      <div className="max-w-11/12 mx-auto">
        <Navbar></Navbar>
        <Banner></Banner>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Root;
