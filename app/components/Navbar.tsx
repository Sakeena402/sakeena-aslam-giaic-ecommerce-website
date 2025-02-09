"use client";
import React, { useState, useEffect } from "react";
import { FaBell, FaSearch, FaShoppingCart, FaUserCircle } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/contexts/CartContext";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SearchBar from "./SearchBar";
// import { getUserData } from "@/helpers/getUserData";
import { Notifications } from "./Notifications";
import LogoutButton from "./forms/LogoutButton";
import { useAuth } from "@/contexts/AuthContext";


export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  // const [user, setUser] = useState<{ id: string; role: string; username: string; email: string } | null>(null);
  const { cart } = useCart();
  const router = useRouter();
  const { user, setUser } = useAuth(); // Get user and setUser from context
  // const [userData, setUserData] = useState(null);

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const user = await getUserData();
  //     setUserData(user);
  //   };

  //   fetchUser();
  // }, []);

  // useEffect(() => {
  //   console.log("User state updated:", user);
  // }, [user]);
  
;
const [key, setKey] = useState(0);

// Force re-render when user state changes
useEffect(() => {

  setKey(prev => prev + 1);
  console.log("User state updated:", user);
}, [user]);

  const totalItems = cart.reduce((sum, item) => sum + (item.stockQuantity || 1), 0);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleNotifications = () => setShowNotifications(!showNotifications);

  const handleLoginClick = () => router.push("/login");
  

  return (
    <nav key={key} className="fixed top-0 p-2 left-0 w-full bg-white z-50 shadow-md">
      <div className="flex items-center justify-between h-16 px-4">
        {/* Mobile Menu Button and Logo */}
        <div className="flex items-center space-x-2">
          <button onClick={toggleMobileMenu} className="text-black focus:outline-none md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
          <div className="text-black lg:text-5xl text-3xl font-extrabold tracking-tighter leading-none scale-y-75 md:text-4xl">
            <Link href="/">SHOP.CO</Link>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex flex-1 justify-center space-x-4">
          <Link href="/" className="text-black hover:text-gray-600 transition duration-300">Shop</Link>
          <Link href="/sale" className="text-black hover:text-gray-600 transition duration-300">On Sale</Link>
          <Link href="/category" className="text-black hover:text-gray-600 transition duration-300">New Arrivals</Link>
          <Link href="/products" className="text-black hover:text-gray-600 transition duration-300">Brands</Link>
        </div>

        {/* Search Bar and Icons */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex">
            <SearchBar />
          </div>

          <button className="md:hidden">
            <FaSearch className="text-gray-800 h-6 w-6 cursor-pointer" />
          </button>

          {/* Cart Icon */}
          <Link href={user ? "/cart" : "/login"} className="relative">
            <FaShoppingCart className="text-gray-800 h-6 w-6 cursor-pointer" />
            {user && totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}
          </Link>

          {/* Notification Icon */}
          {user ? (
            <button onClick={toggleNotifications} className="relative">
              <FaBell className="text-gray-800 h-6 w-6 cursor-pointer" />
              <ToastContainer />
            </button>
          ) : (
            <button onClick={handleLoginClick}>
              <FaBell className="text-gray-800 h-6 w-6 cursor-pointer" />
            </button>
          )}

          {/* User Profile and Authentication */}
          {user ? (
            <div className="flex items-center space-x-2">
              <button onClick={() => router.push("/profile")}>
                <FaUserCircle className="text-gray-800 h-6 w-6 cursor-pointer" />
              </button>
             <LogoutButton/>
            </div>
          ) : (
            <button className="px-8 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition" onClick={handleLoginClick}>
              Login
            </button>
          )}
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="flex flex-col space-y-4 p-4 md:hidden">
          <Link href="/" className="text-black hover:text-gray-600 transition duration-300">Shop</Link>
          <Link href="/sale" className="text-black hover:text-gray-600 transition duration-300">On Sale</Link>
          <Link href="/category" className="text-black hover:text-gray-600 transition duration-300">New Arrivals</Link>
          <Link href="/products" className="text-black hover:text-gray-600 transition duration-300">Brands</Link>

          {/* Search Bar for Mobile */}
          <SearchBar />
        </div>
      )}

      {/* Notifications Component */}
      {showNotifications && <Notifications />}
    </nav>
  );
};

























// 'use client';
// import React, { useEffect, useState } from 'react';
// import { FaBell, FaSearch, FaShoppingCart, FaUserCircle } from 'react-icons/fa';
// import SearchBar from './SearchBar';
// import Link from 'next/link';
// import { useCart } from '@/contexts/CartContext';
// import { Notifications } from './Notifications';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useRouter } from 'next/navigation';
// import { useAuth } from '@/contexts/AuthContext';


// export const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [showNotifications, setShowNotifications] = useState(false);
//   const { cart } = useCart();
//   const [notificationCount, setNotificationCount] = useState(0);
//   const { isLoggedIn, logout,user } = useAuth();
//   const router = useRouter();

 

//   const handleLoginClick = () => {
//    if (!isLoggedIn) router.push('/login'); // Redirect to login page
//   };
//   // Example function that triggers a new notification
//   const notifyNewProduct = () => {
//     toast.success("New Product Added!", {
//      // position: toast.POSITION.TOP_RIGH,
//     });
//     setNotificationCount(notificationCount + 1); // Increment the count
//   };

//   // useEffect(() => {
//   //   // Simulate fetching data and triggering a notification on new products
//   //   const timer = setTimeout(() => {
//   //     notifyNewProduct();
//   //   }, 5000); // 5 seconds for demo purposes

//   //   return () => clearTimeout(timer);
//   // }, []);
//   const totalItems = cart.reduce((sum, item) => sum + (item.stockQuantity || 1), 0);
//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   const toggleNotifications = () => {
//     setShowNotifications(!showNotifications);
//   };

//   return (
//     <nav className="fixed top-0 p-2 left-0 w-full bg-white z-50">
//       <div className="flex items-center justify-between h-16 px-4">
//         {/* Menu Button and Logo */}
//         <div className="flex items-center space-x-2">
//           {/* Menu Button */}
//           <button
//             onClick={toggleMobileMenu}
//             className="text-black focus:outline-none md:hidden"
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16M4 18h16"
//               ></path>
//             </svg>
//           </button>

//           {/* Logo */}
//           <div className="text-black lg:text-5xl text-3xl font-extrabold tracking-tighter leading-none scale-y-75 md:text-4xl">
//             <a href="/">SHOP.CO</a>
//           </div>
//         </div>

//         {/* Navigation Links */}
//         <div className="hidden flex-1 justify-center md:flex lg:space-x-4 sm:space-x-3">
//           <a
//             href="/"
//             className="text-black hover:text-gray-600 transition duration-300 md:text-sm lg:text-base"
//           >
//             Shop
//           </a>
//           <a
//             href="/"
//             className="text-black hover:text-gray-600 transition duration-300 md:text-sm lg:text-base"
//           >
//             On Sale
//           </a>
//           <a
//             href="/category"
//             className="text-black hover:text-gray-600 transition duration-300 md:text-sm lg:text-base"
//           >
//             New Arrivals
//           </a>
//           <a
//             href="/products"
//             className="text-black hover:text-gray-600 transition duration-300 md:text-sm lg:text-base"
//           >
//             Brands
//           </a>
//         </div>

//         {/* Search Bar and Icons */}
//         <div className="flex items-center space-x-4">
//           {/* Search Bar */}
//           <div className="hidden md:flex">
//             <SearchBar />
//           </div>

//           {/* Icons */}
//           <button className="md:hidden">
//             <FaSearch className="text-gray-800 h-6 w-6 cursor-pointer" />
//           </button>
          

//           {/* Cart Icon with Count */}
//           {/* <Link href="/cart" className="relative">
//             <FaShoppingCart className="text-gray-800 h-6 w-6 cursor-pointer" />
//             {cart.length > 0 && (
//               <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
//                 {cart.length}
//               </span>
//             )}
//           </Link> */}


// {isLoggedIn ? (
          
           
// <Link href="/cart" className="relative">
//           <FaShoppingCart className="text-gray-800 h-6 w-6 cursor-pointer" />
//           {totalItems > 0 && (
//             <span className="absolute -top-2 -right-2 bg-red-500 text-white text-sm rounded-full w-5 h-5 flex items-center justify-center">
//               {totalItems}
//             </span>
//           )}
//         </Link>
        
         
//         ) : (
          
// <Link href="/login" className="relative">
//           <FaShoppingCart className="text-gray-800 h-6 w-6 cursor-pointer" />
         
//         </Link>
//           )}

          
         

//            {/* Notification Icon */}

//               {isLoggedIn ? (
//           <>
//            <button onClick={toggleNotifications}>
//             <FaBell className="text-gray-800 h-6 w-6 cursor-pointer" />
//             {notificationCount > 0 && (
//         <span className="absolute  -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
//           {notificationCount}
//         </span>
//       )}

//       {/* Toast Notifications */}
//       <ToastContainer />
//           </button>
//           </>
//         ) : (
//           <button onClick={handleLoginClick}>  <FaBell className="text-gray-800 h-6 w-6 cursor-pointer" /></button> 
//         )}
//            {isLoggedIn ? (
//           <>
//             <button onClick={() => router.push('/profile')}><FaUserCircle className="text-gray-800 h-6 w-6 cursor-pointer" /></button>
//             <button onClick={logout}>Logout</button>
//           </>
//         ) : (
//           <button className="px-8 py-4 bg-black w-full sm:w-[40%] text-white text-md font-medium rounded-full hover:bg-gray-800 transition" onClick={handleLoginClick}>Login</button>
//         )}
//         </div>
//       </div>

//       {/* Mobile Navigation Menu */}
//       {isMobileMenuOpen && (
//         <div className="flex flex-col space-y-4 p-4 md:hidden">
//           <a
//             href="#"
//             className="text-black hover:text-gray-600 transition duration-300"
//           >
//             Shop
//           </a>
//           <a
//             href="#about"
//             className="text-black hover:text-gray-600 transition duration-300"
//           >
//             On Sale
//           </a>
//           <a
//             href="#services"
//             className="text-black hover:text-gray-600 transition duration-300"
//           >
//             New Arrivals
//           </a>
//           <a
//             href="#contact"
//             className="text-black hover:text-gray-600 transition duration-300"
//           >
//             Brands
//           </a>

//           {/* Search Bar for Mobile */}
//           <div>
//             <SearchBar />
//           </div>
//         </div>
//       )}
//       {/* Notifications Component */}
//       {showNotifications && <Notifications />}
//     </nav>
//   );
// };

