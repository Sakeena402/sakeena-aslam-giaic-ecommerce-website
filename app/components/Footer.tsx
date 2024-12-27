// 'use client'
// import React from "react";
// import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaCcMastercard, FaCcPaypal, FaCcVisa, FaGooglePay } from "react-icons/fa";
// import { motion } from "framer-motion";

// const Footer = () => {
//   return (
//     <div className="relative flex justify-center gap-16 items-center">
//       <motion.div
//       initial={{ opacity: 0, y: -20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 1 }}
//       className="bg-black z-20 overflow-hidden sm:w-4/5   w-full -top-60  sm:-top-28 absolute   text-white py-2 md:py-3  flex flex-wrap sm:flex-nowrap justify-center rounded-[1.5rem] px-6 sm:px-8"
//     >
//       <div className="w-full text-center">
//         <h2 className="text-white font-extrabold  tracking-tighter text-left mx-auto py-7 leading-none scale-y-70 text-3xl sm:text-4xl">
//           <span>STAY UPTO DATE ABOUT</span> <br />
//           <span>OUR LATEST UPDATE</span>
//         </h2>
//       </div>

//       <div className="space-y-4 mt-2 w-full">
//         <form className="w-full flex flex-col items-center">
//           <input
//             type="email"
//             placeholder="Email address"
//             className="sm:w-[75%] w-full h-12 my-2 pl-4 pr-4 text-sm text-gray-700 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-500" />
//           <button className="sm:w-[75%] w-full my-2 h-12 mt-2 font-bold text-gray-700 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-500">
//             Subscribe to Newsletter
//           </button>


//         </form>
//       </div>
//     </motion.div>
    
//     <footer className="bg-gray-200 height-auto text-black w-full overflow-hidden relative  ">
        
//         {/* Main Footer Content */}
//         <div className="sm:pt-32 sm:px-20 mx-auto px-8 py-8">
//           <div className="max-w-screen-xl grid gap-10 sm:gap-2 sm:grid-cols-2">
//             {/* Brand Section */}
//             <div className="space-y-4 sm:space-y-8">
//               <h3 className="text-black font-extrabold tracking-tight leading-none scale-y-90 text-4xl">
//                 SHOP.CO
//               </h3>
//               <p className="text-gray-500 text-sm">
//                 We have clothes that suit your style and <br /> which you're proud to wear. From <br />women to men.
//               </p>
//               <div className="flex gap-4">
//                 <a href="#" className="text-black hover:text-gray-700">
//                   <FaFacebook size={28} />
//                 </a>
//                 <a href="#" className="text-black hover:text-gray-700">
//                   <FaTwitter size={28} />
//                 </a>
//                 <a href="#" className="text-black hover:text-gray-700">
//                   <FaInstagram size={28} />
//                 </a>
//                 <a href="#" className="text-black hover:text-gray-700">
//                   <FaLinkedin size={28} />
//                 </a>
//                 <a href="#" className="text-black hover:text-gray-700">
//                   <FaYoutube size={28} />
//                 </a>
//               </div>
//             </div>

//             {/* Other Sections */}
//             <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 sm:flex sm:gap-10 sm:flex-nowrap">
//               {["COMPANY", "HELP", "FAQ", "RESOURCES"].map((section) => (
//                 <div key={section} className="space-y-6 sm:w-1/4">
//                   <h3 className="text-lg font-light">{section}</h3>
//                   <ul className="space-y-4 text-gray-600 text-sm">
//                     <li>
//                       <a href="#" className="hover:underline">
//                         About
//                       </a>
//                     </li>
//                     <li>
//                       <a href="#" className="hover:underline">
//                         Features
//                       </a>
//                     </li>
//                     <li>
//                       <a href="#" className="hover:underline">
//                         Works
//                       </a>
//                     </li>
//                     <li>
//                       <a href="#" className="hover:underline">
//                         Career
//                       </a>
//                     </li>
//                   </ul>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>


//         {/* Bottom Section: Payment and Legal Info */}
//         <div className="mt-6 border-t border-gray-300 pt-6 pb-6 mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
//           <p className="text-sm text-gray-400 mb-2 sm:mb-0">
//             ©2024 GoLifeSpan.org, All Rights Reserved
//           </p>
//           <div className="flex gap-4">
//             {[FaCcVisa, FaCcMastercard, FaCcPaypal, FaGooglePay].map((Icon, i) => (
//               <a key={i} href="#" className="hover:text-gray-700">
//                 <Icon size={32} />
//               </a>
//             ))}
//           </div>
//         </div>
//       </footer>
      
//       </div>
//   );
// };

// export default Footer;












'use client'
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaCcMastercard, FaCcPaypal, FaCcVisa, FaGooglePay } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="relative flex justify-center gap-16 items-center">
      <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="bg-black z-20 overflow-hidden sm:w-4/5   w-full -top-60  sm:-top-28 absolute   text-white py-2 md:py-3  flex flex-wrap sm:flex-nowrap justify-center rounded-[1.5rem] px-6 sm:px-8 sm:h-[45%] lg:w-[90%]  lg:p-8"
    >
      <div className="w-full text-center">
        <h2 className="text-white font-extrabold  tracking-tighter text-left mx-auto p-4 leading-none scale-y-70 text-3xl sm:text-3xl md:text-4xl ">
          <span>STAY UPTO DATE ABOUT</span> <br />
          <span>OUR LATEST UPDATE</span>
        </h2>
      </div>

      <div className="space-y-4 mt-2 w-full">
        <form className="w-full flex flex-col items-center">
          <input
            type="email"
            placeholder="Email address"
            className="sm:w-[75%] w-full h-12 my-2 pl-4 pr-4 text-sm text-gray-700 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-500" />
          <button className="sm:w-[75%] w-full my-2 h-12 mt-2 font-bold text-gray-700 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-500">
            Subscribe to Newsletter
          </button>


        </form>
      </div>
    </motion.div>
    
    <footer className="bg-gray-200 height-auto text-black w-full overflow-hidden relative  ">
        
        {/* Main Footer Content */}
        <div className="sm:pt-32 sm:px-16 mx-auto px-8 py-8">
          <div className="max-w-screen-xl grid gap-10 sm:gap-2 sm:grid-cols-2">
            {/* Brand Section */}
            <div className="space-y-4 sm:space-y-8">
              <h3 className="text-black font-extrabold tracking-tight leading-none scale-y-90 text-4xl">
                SHOP.CO
              </h3>
              <p className="text-gray-500 text-sm">
                We have clothes that suit your style and <br /> which you're proud to wear. From <br />women to men.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-black hover:text-gray-700">
                  <FaFacebook size={28} />
                </a>
                <a href="#" className="text-black hover:text-gray-700">
                  <FaTwitter size={28} />
                </a>
                <a href="#" className="text-black hover:text-gray-700">
                  <FaInstagram size={28} />
                </a>
                <a href="#" className="text-black hover:text-gray-700">
                  <FaLinkedin size={28} />
                </a>
                <a href="#" className="text-black hover:text-gray-700">
                  <FaYoutube size={28} />
                </a>
              </div>
            </div>

            {/* Other Sections */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 sm:flex sm:gap-10 sm:flex-nowrap">
              {["COMPANY", "HELP", "FAQ", "RESOURCES"].map((section) => (
                <div key={section} className="space-y-6 sm:w-1/4">
                  <h3 className="text-lg font-light">{section}</h3>
                  <ul className="space-y-4 text-gray-600 text-sm">
                    <li>
                      <a href="#" className="hover:underline">
                        About
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:underline">
                        Features
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:underline">
                        Works
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:underline">
                        Career
                      </a>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>


        {/* Bottom Section: Payment and Legal Info */}
        <div className="mt-6 border-t border-gray-300 pt-6 pb-6 mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-2 sm:mb-0">
            ©2024 GoLifeSpan.org, All Rights Reserved
          </p>
          <div className="flex gap-4">
            {[FaCcVisa, FaCcMastercard, FaCcPaypal, FaGooglePay].map((Icon, i) => (
              <a key={i} href="#" className="hover:text-gray-700">
                <Icon size={32} />
              </a>
            ))}
          </div>
        </div>
      </footer>
      
      </div>
  );
};

export default Footer;
