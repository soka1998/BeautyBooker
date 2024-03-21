import React from 'react';
import logo from '../assets/logo.jpeg'; // Make sure the path is correct relative to this file

const NavBar = () => {
    return (
        <header className="sticky top-0 bg-white shadow">
            <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
                <div className="flex items-center text-2xl">
                    <img src={logo} alt="Logo" className="w-12 mr-3" /> {/* Updated line */}
                   
                </div>
                <div className="flex mt-4 sm:mt-0">
                    <a className="px-4" href="#features">Features</a>
                    <a className="px-4" href="#services">Services</a>
                    <a className="px-4" href="#stats">Stats</a>
                    <a className="px-4" href="#testimonials">Testimonials</a>
                </div>
                <div className="hidden md:block">
                    <button type="button" className="py-3 px-8 text-sm bg-teal-500 hover:bg-teal-600 rounded text-white">
                        Start Free Trial
                    </button>
                </div>
            </div>
        </header>
    );
};

export default NavBar;
