'use client';
import { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import ProductList from "./components/ProductList";
 import {reviews} from '@/data/products'
import { CustomerFeedbackCarousel } from "./components/FeedbackCarousel";
import StyleSection from "./components/StyleSection";
// import importProducts from '../data/importData'
import useSWR from "swr";
import SkeletonLoader from "./components/SkeletonLoader";
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Home() {
  
  const { data: products, error } = useSWR("/api/products", fetcher, { dedupingInterval: 60000 });

  if (!products) return <SkeletonLoader />;
  if (error) return <div>Error fetching products.</div>;
  
// Sort and filter products
const newArrivals = [...products]
.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()) // Sort by newest
.slice(0, 4); // Take top 4

const topSelling = [...products]
.sort((a, b) => (b.rating || 0) - (a.rating || 0)) // Sort by highest rating
.slice(0, 4); // Take top 4

  
  return (
    <div className="grid grid-rows-[auto]  gap-20   min-h-screen w-full">
    

      {/* Row 2: Hero Section */}
      <div className="row-span-1 bg-[#F2F0F1]  w-full ">
       

      <HeroSection />
      </div>

      {/* Row 3: Section 1 */}
      <div className="row-span-1 bg-white p-6 flex items-center justify-center ">
      <ProductList products={newArrivals} title="NEW ARRIVALS" 
      
      />
        
      </div>

      {/* Row 4: Section 2 */}
      <div className="row-span-1 bg-white p-6 flex items-center justify-center  border-t border-gray-200">
      <ProductList products={topSelling} title="TOP SELLING" />
        {/* <p className="text-xl text-gray-700">Screen Width: {width}px</p> */}
      </div>

      {/* Row 5: Section 3 */}
      <div className="row-span-1 bg-white p-8 flex items-center  justify-center">
        {/* Additional Section Content */}
      
        <StyleSection/>
      </div>

      {/* Row 6: Section 4 */}
     
      {/* p-4 sm:p-6 md:p-8 lg:p-10 w-2/4 sm:w-[65%] md:w-3/4 lg:w-full */}
      <div className="row-span-1 overflow-x-hidden flex justify-center  bg-white p-4  ">
  <CustomerFeedbackCarousel reviews={reviews} />
</div>
<br />
<br /><br /><br />
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














// Hook to get screen dimensions
  
  // const useScreenDimensions = () => {
  //   const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    // useEffect(() => {
    //   const updateDimensions = () => {
    //     setDimensions({
    //       width: window.innerWidth,
    //       height: window.innerHeight,
    //     });
    //   };

    //   updateDimensions();
    //   window.addEventListener("resize", updateDimensions);

    //   return () => window.removeEventListener("resize", updateDimensions);
    // }, []);

  //   return dimensions;
  // };

  // const { width, height } = useScreenDimensions();
  // useEffect(() => {
  //   importProducts();
  // }, []);
  // const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const response = await fetch('/api/products');
  //       const data = await response.json();
  //       setProducts(data);
  //       setLoading(false);
  //     } catch (error) {
  //       console.error("Error fetching products:", error);
  //       setLoading(false);
  //     }
  //   };
  
  //   fetchProducts();
  // }, []);

  

  //   // Check if data is loading
  //   if (loading) {
  //     return <div>Loading...</div>;
  //   }