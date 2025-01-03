'use client';
import { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import ProductList from "./components/ProductList";
import {products, products2, reviews} from '@/data/products'
import { CustomerFeedbackCarousel } from "./components/FeedbackCarousel";
import StyleSection from "./components/StyleSection";

export default function Home() {
  // Hook to get screen dimensions
  const useScreenDimensions = () => {
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
      const updateDimensions = () => {
        setDimensions({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      updateDimensions();
      window.addEventListener("resize", updateDimensions);

      return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    return dimensions;
  };

  const { width, height } = useScreenDimensions();

  return (
    <div className="grid grid-rows-[auto]  gap-20   min-h-screen w-full">
      {/* Row 1: Navbar */}
      {/* <div className="row-span-1  bg-white  w-full ">
        <Navbar />
      </div> */}

      {/* Row 2: Hero Section */}
      <div className="row-span-1 bg-[#F2F0F1]  w-full ">
        {/* <h1 className="text-4xl font-bold text-gray-800">
          Welcome to the Dashboard
        </h1> */}

      <HeroSection />
      </div>

      {/* Row 3: Section 1 */}
      <div className="row-span-1 bg-white p-6 flex items-center justify-center ">
      <ProductList products={products} title="NEW ARRIVALS" 
      
      />
        
      </div>

      {/* Row 4: Section 2 */}
      <div className="row-span-1 bg-white p-6 flex items-center justify-center  border-t border-gray-200">
      <ProductList products={products2} title="TOP SELLING" />
        {/* <p className="text-xl text-gray-700">Screen Width: {width}px</p> */}
      </div>

      {/* Row 5: Section 3 */}
      <div className="row-span-1 bg-white p-8 flex items-center  justify-center">
        {/* Additional Section Content */}
      
        <StyleSection/>
      </div>

      {/* Row 6: Section 4 */}
     
      {/* p-4 sm:p-6 md:p-8 lg:p-10 w-2/4 sm:w-[65%] md:w-3/4 lg:w-full */}
      <div className="row-span-1 overflow-x-hidden bg-white p-4  ">
  <CustomerFeedbackCarousel reviews={reviews} />
</div>

      {/* Row 7: Section 5 */}
      {/* <div className="row-span-1 bg-white p-8 flex items-center justify-center"> */}
        {/* Additional Section Content */}
        {/* <p className="text-xl text-gray-700">Screen Width: {width}px</p>
      </div> */}

      {/* Row 8: Footer */}
      {/* <div className="row-span-1 bg-gray-200 z-20">
        <Footer />
      </div> */}
    </div>
  );
}
