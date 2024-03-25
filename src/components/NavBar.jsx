import React from "react";
import logo from "../assets/logo.jpeg"; // Make sure the path is correct relative to this file
import background from "../assets/background.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      {/* Applying background to the header itself */}
      <header>
        <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
          <div className="flex items-center text-2xl">
            <img src={logo} alt="Logo" className="w-12 mr-3" />
            {/* Logo and company name here */}
          </div>
          {/* Adjust the nav container to center items */}
          <nav className="flex-1">
            <ul className="flex justify-center space-x-4">
              <li>
                <Link to={"/"} className="text-gray-600 hover:text-gray-800">
                  Home
                </Link>
              </li>
              <li>
                <Link to={"/services"}
                  className="text-gray-600 hover:text-gray-800"
                >
                  Services
               </Link>
              </li>
              <li>
               
                 <Link to={"/pricing"}
                  className="text-gray-600 hover:text-gray-800"
                >
                  Pricing
               </Link>
              </li>
              <li>
                <Link to={"/about"} className="text-gray-600 hover:text-gray-800">
                  About Us
                </Link>
              </li>
              <li>
              <Link to={"/contact"}
                  className="text-gray-600 hover:text-gray-800"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <button
            type="button"
            className="w-40 h-12 bg-white cursor-pointer rounded-3xl border-2 border-[#eaa2ed] shadow-[inset_0px_-2px_0px_1px_#9748FF] group hover:bg-[#d5a6cc] transition duration-300 ease-in-out"
          >
            <span className="font-medium text-[#333] group-hover:text-white">
              Book Now
            </span>
          </button>
        </div>
      </header>
      
    </>
  );
};

export default NavBar;
