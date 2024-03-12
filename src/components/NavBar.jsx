import React from 'react';
// Import Link from react-router-dom for SPA navigation
import  Link  from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="bg-gray-800 text-white">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <Link to="/" className="font-bold text-xl flex items-center">
                    <img src="/path-to-your-logo.png" alt="Logo" className="h-8 w-8 mr-2"/>
                    BeautyCenter
                </Link>
                <div className="hidden md:flex space-x-4">
                    <Link to="/" className="hover:text-pink-400 transition-colors duration-300">Home</Link>
                    <Link to="/services" className="hover:text-pink-400 transition-colors duration-300">Services</Link>
                    <Link to="/book-appointment" className="hover:text-pink-400 transition-colors duration-300">Book Appointment</Link>
                    <Link to="/login" className="hover:text-pink-400 transition-colors duration-300">Login/Register</Link>
                </div>
               
            </div>
          
        </nav>
    );
};

export default NavBar;
