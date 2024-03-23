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
                    <a className="px-4 hover:bg-[#d5a6cc] rounded-3xl " href="#features">Home</a>
                    <a className="px-4 hover:bg-[#d5a6cc] rounded-3xl " href="#services"> Our Services</a>
                    <a className="px-4 hover:bg-[#d5a6cc] rounded-3xl " href="#stats">Pricing</a>
                    <a className="px-4 hover:bg-[#d5a6cc] rounded-3xl " href="#testimonials">About Us</a>
                    <a className="px-4 hover:bg-[#d5a6cc] rounded-3xl" href="#Contact">Contact</a>
                </div>
                <div className="hidden md:block">
                    <button type="button" className="w-40 h-12 bg-white cursor-pointer rounded-3xl border-2 border-[#eaa2ed] shadow-[inset_0px_-2px_0px_1px_#9748FF] group hover:bg-[#d5a6cc] transition duration-300 ease-in-out">
 <span class="font-medium text-[#333] group-hover:text-white"> Book Now</span>
                      
                    </button>
                </div>
            </div>
        </header>
    );
};

export default NavBar;
