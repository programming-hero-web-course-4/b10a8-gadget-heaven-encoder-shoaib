import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { GiSelfLove } from "react-icons/gi";
import { CardContext } from "../Root/Root";

const Navbar = ({handleDashboardClick}) => {

  const count  = useContext(CardContext)[0]
  const loveCount  = useContext(CardContext)[8]
  const navColor  = useContext(CardContext)[11]
  // const handleDashboardClick = useContext(CardContext)[10]

  console.log(navColor)



  const links = (
    <>
      <li className="text-white">
        <NavLink
        onClick={() => handleDashboardClick('Home')}
          to="/"
          className={({ isActive }) =>
            isActive ? "text-blue-500 font-semibold" : "hover:text-blue-500"
          }
        >
          Home
        </NavLink>
      </li>

      <li className="text-white">
        <NavLink
        onClick={() => handleDashboardClick("Statistics")}
          to="/statistics"
          className={({ isActive }) =>
            isActive ? "text-blue-500 font-semibold" : "hover:text-blue-500"
          }
        >
          Statistics
        </NavLink>
      </li>
      
      <li className="text-white">
        <NavLink
        onClick={() => handleDashboardClick("Dashboard")}
          to="/ListProduct/:product_id"
          className={({ isActive }) =>
            isActive ? "text-blue-500 font-semibold" : "hover:text-blue-500"
          }
        >
          Dashboard
        </NavLink>
      </li>
      <li className="text-white">
        <NavLink
        onClick={() => handleDashboardClick("Dashboard")}
          to="/offer"
          className={({ isActive }) =>
            isActive ? "text-blue-500 font-semibold" : "hover:text-blue-500"
          }
        >
          Offer Gadgets
        </NavLink>
      </li> 

    </>
  );

  return (
    <div className=" bg-[#a032cb] shadow-lg px-4 md:px-16 rounded-2xl ">
      <div className={` navbar ${navColor ? "bg-gray-500 relative -top-16 mt-10 rounded-2xl" : ""}`}>
      <div className="navbar-start">
        <div className="dropdown">
          <button
            tabIndex={0}
            className="btn btn-ghost lg:hidden"
            aria-label="Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-purple-400 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <NavLink to="/" className="md:text-2xl font-bold text-white">
        Gadget Heaven
        </NavLink>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-4">{links}</ul>
      </div>

      <div className="navbar-end space-x-6">
        <NavLink
          onClick={()=>handleDashboardClick('Dashboard')}
          to="/ListProduct/:product_id"
          className="text-2xl"
        >
          <div className="flex justify-center  ">
          <CiShoppingCart /> 
          <span className="text-sm">{count}</span>
          </div>
        </NavLink>
        <NavLink
          to="/ListProduct/:product_id"
          onClick={()=>handleDashboardClick('Dashboard')}
          className="text-2xl"
        >
          <div className="flex justify-center  ">
            <GiSelfLove />
            <span className="text-sm">{loveCount}</span>
          </div>
        </NavLink>
      </div>

    </div>
    <div className="flex flex-col justify-center items-center mt-14 pb-40 ">
      <h1 className="text-5xl text-center font-bold  w-3/5">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
      <p className=" text-center mt-14 mb-7 w-2/5 ">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
      <button className="text-xl text-center font-bold rounded-2xl text-black p-3 bg-white" >Shop Now</button>
    </div>
    </div>
  );
};

export default Navbar;
