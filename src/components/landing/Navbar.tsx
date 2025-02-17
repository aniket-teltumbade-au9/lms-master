import React from "react";
import { HiOutlineMenu } from "react-icons/hi"; // Heroicons

function Navbar() {
    return (
        <div className="fixed bg-body w-full z-20">
            <div className="w-full relative bg-body">
                <nav className="text-cta md:mx-[80px] px-10 py-5 flex justify-between items-center">
                    {/* Logo */}
                    <div className="text-header text-2xl font-bold">EduLMS</div>

                    {/* Navigation Links */}
                    <div className="md:flex md:items-center sm:hidden space-x-8">
                        <a href="#" className="hover:text-header transition duration-300">Programs</a>
                        <a href="#" className="hover:text-header transition duration-300">About</a>
                        <a href="#" className="hover:text-header transition duration-300">Features</a>
                        <a href="#" className="hover:text-header transition duration-300">Success Stories</a>
                    </div>

                    {/* Sign In Button */}
                    <button className="bg-header px-6 py-2 sm:hidden md:block rounded-full font-medium hover:bg-opacity-80 transition duration-300">
                        Sign In
                    </button>
                    <button
                        className="sm:block md:hidden p-2"
                    >
                        <HiOutlineMenu className="w-8 h-8" />
                    </button>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;
