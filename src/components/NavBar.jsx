import React from "react";
import logo from "../assets/logo.jpeg"; // Make sure the path is correct relative to this file
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  let navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact'); // This will navigate to the Contact page
  };
    const scrollToBottom = (sectionID) => {
        const element = document.getElementById(sectionID);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };
  return (
    <>
      <header>
        <div className="w-full flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8 fixed top-0 bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg z-50">
          <div className="flex items-center text-2xl">
            <img src={logo} alt="Logo" className="w-12 mr-3" />
            {/* Logo and company name here */}
          </div>
          <nav className="flex-1">
            <ul className="flex justify-center space-x-4">
              <li>
                <Link to={""} className="text-white hover:text-pink-300" onClick={() => scrollToBottom("home")}>
                  Home
                </Link>
              </li>
              <li>
                <Link to={"/services"}
                  className="text-white hover:text-pink-300"
                  onClick={() => scrollToBottom("services")}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link to={"/pricing"}
                  className="text-white hover:text-pink-300"
                  onClick={() => scrollToBottom("pricing")}
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link to={"/about"} className="text-white hover:text-pink-300"
                onClick={() => scrollToBottom("about")}
                >
                  About Us
                </Link>
              </li>
              <li>
              <nav className="flex-1">
              <Link to={"/contact"}
              
                  className="text-white hover:text-pink-300"
                  onClick={handleContactClick} 
                >
                  Contact
                </Link>
                </nav>
              </li>
            </ul>
          </nav>
          <button
            type="button"
            className="w-40 h-12 bg-white cursor-pointer rounded-3xl border-2 border-[#eaa2ed] shadow-[inset_0px_-2px_0px_1px_#9748FF] group hover:bg-[#d5a6cc] transition duration-300 ease-in-out"
          >
            <span className="font-medium text-gray-800 group-hover:text-white">
              Book Now
            </span>
          </button>
        </div>
      </header>
    </>
  );
};

export default NavBar;
