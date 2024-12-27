
'use client';
import React, { useState } from "react";
import { FaSearch, FaShoppingCart, FaUserCircle } from "react-icons/fa";
import SearchBar from "./SearchBar";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 p-2 left-0 w-full bg-white z-50">
      <div className="flex items-center justify-between h-16 px-4">
        {/* Menu Button and Logo */}
        <div className="flex items-center space-x-2">
          {/* Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="text-black focus:outline-none md:hidden"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>

          {/* Logo */}
          <div className="text-black lg:text-5xl  text-3xl font-extrabold tracking-tighter leading-none scale-y-75 md:text-4xl ">
            SHOP.CO
          </div>
        </div>

        {/* Navigation Links */}
       


<div className="hidden flex-1 justify-center md:flex lg:space-x-4 sm:space-x-3">
  <a
    href="#"
    className="text-black hover:text-gray-600 transition duration-300 md:text-sm lg:text-base"
  >
    Shop
  </a>
  <a
    href="#about"
    className="text-black hover:text-gray-600 transition duration-300 md:text-sm lg:text-base"
  >
    On Sale
  </a>
  <a
    href="#services"
    className="text-black hover:text-gray-600 transition duration-300 md:text-sm lg:text-base"
  >
    New Arrivals
  </a>
  <a
    href="#contact"
    className="text-black hover:text-gray-600 transition duration-300 md:text-sm lg:text-base"
  >
    Brands
  </a>
</div>

        {/* Search Bar and Icons */}
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <div className="hidden md:flex">
            <SearchBar />
          </div>

          {/* Icons */}
          <button className="md:hidden">
            <FaSearch className="text-gray-800 h-6 w-6 cursor-pointer" />
          </button>
          <FaShoppingCart className="text-gray-800 h-6 w-6 cursor-pointer" />
          <FaUserCircle className="text-gray-800 h-6 w-6 cursor-pointer" />
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="flex flex-col space-y-4 p-4 md:hidden">
          <a
            href="#"
            className="text-black hover:text-gray-600 transition duration-300"
          >
            Shop
          </a>
          <a
            href="#about"
            className="text-black hover:text-gray-600 transition duration-300"
          >
            On Sale
          </a>
          <a
            href="#services"
            className="text-black hover:text-gray-600 transition duration-300"
          >
            New Arrivals
          </a>
          <a
            href="#contact"
            className="text-black hover:text-gray-600 transition duration-300"
          >
            Brands
          </a>

          {/* Search Bar for Mobile */}
          <div>
            <SearchBar />
          </div>
        </div>
      )}
    </nav>
  );
};
