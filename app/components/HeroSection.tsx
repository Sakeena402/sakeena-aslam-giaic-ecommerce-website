'use client';
import React from "react";

export const HeroSection = () => {
  return (
    <><section className="relative w-full  justify-evenly bg-[#F2F0F1] grid grid-cols-1 md:grid-cols-[6fr,6fr] place-items-center">
      {/* Text Section */}

      <div className="flex flex-col items-start justify-center p-6 relative space-y-10 md:space-y-12 ">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-black tracking-tighter leading-tight">
          FIND CLOTHES <br /> THAT MATCH <br />YOUR STYLE
        </h1>
        <p className="text-gray-600 text-base md:text-lg mb-6">
          Browse through our diverse range of meticulously crafted garments,
          designed <br /> to bring out your individuality and cater to your sense of style.
        </p>
        <button className="px-6 py-3 bg-black w-full sm:w-[40%] text-white text-lg font-medium rounded-full hover:bg-gray-800 transition">
          Shop Now
        </button>
      </div>

      {/* Image Section */}
      <div className="flex w-full top-0 m-0 p-0">
        <img
          src="./heroSection.jpeg"
          alt="Fashion"
          className="h-auto w-auto  rounded-lg" />
        {/* Decorative Elements */}
        {/* <div
className=" top-10 left-10 w-16 h-16 bg-gradient-to-r from-gray-900 to-gray-700 shadow-xl"
style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }}
></div>

<div
className=" top-16 right-10 w-32 h-32 bg-gradient-to-r from-gray-900 to-gray-600 shadow-xl"
style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }}
></div>

<div
className=" top-2/4 left-[50%] w-20 h-20 bg-gradient-to-r from-gray-900 to-gray-500 shadow-xl transform -translate-x-2/4"
style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }}
></div>

<div
className=" top-3/4 left-10 w-28 h-28 bg-gradient-to-r from-gray-900 to-gray-500 shadow-xl"
style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }}
></div> */}



      </div>

    </section>
    
    <section >
    <div className="w-full  bg-black h-auto py-6 flex justify-evenly items-center  space-x-2 sm:space-x-6 md:space-x-8 lg:space-x-14">
    {/* Gucci */}
    <img
      src="./gucci-logo-1 1.png"
      alt="Gucci Logo"
      className="lg:h-7 md:h-6 sm:h-5 h-2 object-contain"
    />
    {/* Versace */}
    <img
      src="./Group.png"
      alt="Versace Logo"
      className="lg:h-7 md:h-6  sm:h-5 h-2 object-contain"
    />
    {/* Prada */}
    <img
      src="./prada-logo-1 1.png"
      alt="Prada Logo"
      className="lg:h-7 md:h-6  sm:h-5 h-2 object-contain"
    />
    {/* Zara */}
    <img
      src="./zara-logo-1 1.png"
      alt="Zara Logo"
      className="lg:h-7 md:h-6  sm:h-5 h-2 object-contain"
    />
    {/* Calvin Klein */}
    <img
      src="./Group (1).png"
      alt="Calvin Klein Logo"
      className="lg:h-7 md:h-6  sm:h-5 h-2 object-contain"
    />
  </div>
</section>

      
      </>
  );
};

export default HeroSection;






