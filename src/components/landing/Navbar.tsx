"use client"
import Link from "next/link";
import { useState } from "react";
import { HiOutlineMenu, HiX } from "react-icons/hi"; // Menu & Close Icons

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bg-body w-full z-20">
            <div className="w-full relative bg-body">
                <nav className="text-cta md:mx-[80px] px-10 py-5 flex justify-between items-center">
                    {/* Logo */}
                    <div className="text-header text-2xl font-bold">EduLMS</div>

                    {/* Desktop Navigation Links */}
                    <div className="md:flex md:items-center hidden space-x-8">
                        <a href="#" className="hover:text-header transition duration-300">Programs</a>
                        <a href="#" className="hover:text-header transition duration-300">About</a>
                        <a href="#" className="hover:text-header transition duration-300">Features</a>
                        <a href="#" className="hover:text-header transition duration-300">Success Stories</a>
                    </div>

                    {/* Sign In Button (Desktop) */}
                    <Link href='/sign_in' className="bg-header px-6 py-2 hidden md:block rounded-full font-medium hover:bg-opacity-80 transition duration-300">
                        Sign In
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="block md:hidden p-2 focus:outline-none"
                    >
                        {isOpen ? <HiX className="w-8 h-8" /> : <HiOutlineMenu className="w-8 h-8" />}
                    </button>
                </nav>

                {/* Mobile Dropdown Menu */}
                <div className={`md:hidden absolute w-full left-0 bg-body transition-all duration-300 ${isOpen ? "block" : "hidden"}`}>
                    <div className="flex flex-col items-center space-y-4 py-5">
                        <a href="#" className="hover:text-header transition duration-300">Programs</a>
                        <a href="#" className="hover:text-header transition duration-300">About</a>
                        <a href="#" className="hover:text-header transition duration-300">Features</a>
                        <a href="#" className="hover:text-header transition duration-300">Success Stories</a>
                        <Link href="/sign_in" className="bg-header px-6 py-2 rounded-full font-medium hover:bg-opacity-80 transition duration-300">
                            Sign In
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
