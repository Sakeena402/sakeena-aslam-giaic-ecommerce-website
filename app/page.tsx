
// 'use client'
// import { useEffect, useState } from "react";


// import Image from "next/image";
// import { Navbar } from "./components/Navbar";
// import Footer from "./components/Footer";

// export default function Home() {

// type ScreenDimensions = {
//   width: number;
//   height: number;
// };

// // Create the hook
// const useScreenDimensions = (): ScreenDimensions => {
//   const [dimensions, setDimensions] = useState<ScreenDimensions>({
//     width: 0,
//     height: 0,
//   });

//   useEffect(() => {
//     // Update the state with the current screen dimensions
//     const updateDimensions = () => {
//       setDimensions({
//         width: window.innerWidth,
//         height: window.innerHeight,
//       });
//     };

//     // Set the initial dimensions
//     updateDimensions();

//     // Add event listener for window resize
//     window.addEventListener("resize", updateDimensions);

//     // Clean up the event listener
//     return () => window.removeEventListener("resize", updateDimensions);
//   }, []);

//   return dimensions;
// };


//   const { width, height } = useScreenDimensions();
//   return (
//     <div className="relative min-h-screen flex flex-col overflow-hidden">
//       <Navbar />

//       <main className="flex-grow ">
//         {/* Hero Section */}
//         <section className="relative w-full overflow-hidden">


//           {/* <ImagesSliderDemo /> */}
//         </section>

      
//         <section className="p-8  w-full relative">
//           {/* <div className="absolute left-0 top-35 w-[34%] h-full bg-cover bg-no-repeat bg-[url('/image8.png')] opacity-12"></div>
//            */}
          
//           <div className="relative z-10 ">
//             {/* <Introduction /> */}
           
// <p className="top-16 m-11 text-black" >{width}</p>

// <p className="top-16 m-11 text-black">
//   { `'sm-md': { min: '0px', max: '599px' },  // Between small and medium <br/>
//           'md-lg': { min: '600px', max: '1023px' }, // Between medium and large <br/>
//           'lg-xl': { min: '1024px', max: '1279px' } // Between large and extra large`}
// </p>
// {/* <p>Screen Height: {height}px</p> */}
//           </div>
//           {/* <div className="absolute right-0 top-5 w-[36%] h-full bg-cover bg-no-repeat bg-[url('/image13.jpg')] opacity-12"></div>
//          */}
//         </section>

//         {/* Rating Section with Left Side Background Image */}
//         <section className="p-8 w-full relative">
       
//            <div className="relative z-10">
//            {/* <RatingSection /> */}
//           </div>
//         </section>

//         {/* Additional Content Section */}
//         <section className="p-2 bg-white">
//           {/* <InfiniteMovingCardsDemo /> */}
//         </section>


//         <section className="p-11 w-full relative">
       
//        <div className="relative mt-10 z-10">
//        {/* <CampaignList /> */}
    
//       </div>
//     </section>

       
//         <section className="p-8 w-full relative">
        
//        <div className="relative mt-5 z-10">
//        {/* <FundingComponent /> */}
//       </div>
//     </section>
       

//     <section className="p-8 w-full relative">
       
//        <div className="relative z-10">
//        {/* <SuccessStoryCard /> */}
//       </div>
//     </section>
    
//       </main>
// <footer className="w-full bg-gray-200 overflow-hidden">
// <Footer />
// </footer>


     
      
//     </div>
//   );
// }










'use client';
import { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import ProductList from "./components/ProductList";
import {products, products2, reviews} from '@/data/products'
import FeedbackCarousel, { CustomerFeedbackCarousel } from "./components/FeedbackCarousel";
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
      <div className="row-span-1  bg-white  w-full ">
        <Navbar />
      </div>

      {/* Row 2: Hero Section */}
      <div className="row-span-1 bg-[#F2F0F1]  w-full ">
        {/* <h1 className="text-4xl font-bold text-gray-800">
          Welcome to the Dashboard
        </h1> */}

      <HeroSection />
      </div>

      {/* Row 3: Section 1 */}
      <div className="row-span-1 bg-white p-6 flex items-center justify-center ">
      <ProductList products={products} title="NEW ARRIVALS" />
        
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
      <div className="row-span-1 bg-white p-8 flex items-center justify-center">
        {/* Additional Section Content */}
        <p className="text-xl text-gray-700">Screen Width: {width}px</p>
      </div>

      {/* Row 8: Footer */}
      <div className="row-span-1 bg-gray-200 z-20">
        <Footer />
      </div>
    </div>
  );
}
