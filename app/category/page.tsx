
'use client';
// import { BreadCrumbs } from "../components/BreadCrumbs";
// import FilterBox from "../components/FilterBox";
// import { PaginationDemo } from "../components/Pagination";
// import React, { useState } from "react";
// import ProductList from "../components/ProductList";
// import { products3  } from "@/data/products";
// import CategoryList from "../components/CategoryList";


// type Props = {};

// const page = (props: Props) => {
//   const [isFilterVisible, setFilterVisible] = useState(false);

//   return (
//     <div className="w-full grid grid-cols-1  grid-rows-[auto] border-t border-gray-300">
//       {/* Breadcrumb Section */}
//       <div className="w-full p-6">
//         <BreadCrumbs />
//       </div>

//       {/* Main Content */}
//       <div className="grid grid-cols-8 w-full gap-2 p-6 place-content-center">
//         {/* Sidebar Filter Box */}
//         <div className="col-span-2 hidden md:block  bg-white p-4">
//           <FilterBox isVisible={true} />
//         </div>

//         {/* Filter Button for Small Screens */}
//         <button
//           onClick={() => setFilterVisible(true)}
//           className="sticky  top-32 left-4 bg-gray-800 text-white px-4 py-2 rounded-md  md:hidden"
//         >
//           Open Filters
//         </button>

//         {/* Filter Box Modal on Small Screens */}
//         {isFilterVisible && (
//           <div className="sticky  inset-0 bg-black bg-opacity-50  flex justify-end">
//             <div className="w-3/4 bg-white h-full p-4">
//               <button
//                 onClick={() => setFilterVisible(false)}
//                 className="text-gray-800 mb-4 font-semibold"
//               >
//                 Close
//               </button>
//               <FilterBox isVisible={true} />
//             </div>
//           </div>
//         )}

//         {/* Product Grid */}
      
//         <div className="col-span-8 md:col-span-6 w-full bg-white   ">
//         {/* grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 */}
// {/* 
//           {Array.from({ length: 12 }).map((_, index) => (
//             <div key={index} className="bg-white p-4 shadow-md rounded-lg">
//               <div className="w-full h-40 bg-gray-200 mb-4"></div>
//               <h3 className="font-semibold text-lg">Product Title</h3>
//               <p className="text-gray-600">$120</p>
//             </div>
//           ))} */}
//       <CategoryList products={products3} title="Casual" />
      
//         </div>
//       </div>

//       {/* Pagination */}
//       {/* <div className="h-auto w-full p-10">
//         <PaginationDemo />
//       </div> */}
//     </div>
//   );
// };

// export default page;



import React, { useState } from "react";
import { BreadCrumbs } from "../components/BreadCrumbs";
import FilterBox from "../components/FilterBox";
import CategoryList from "../components/CategoryList";
import { products3 } from "@/data/products";
import { FiSettings } from "react-icons/fi"; // Icon for the filter settings

type Props = {};

const Page = (props: Props) => {
  const [isFilterVisible, setFilterVisible] = useState(false);

  return (
    <div className="w-full grid grid-cols-1 grid-rows-[auto] border-t border-gray-300">
      {/* Breadcrumb Section */}
      <div className="w-full p-6">
      <BreadCrumbs
  breadcrumbs={[
    { name: "Home", link: "/" },
    { name: "Components", link: "/components" },
    { name: "Casual" } // No link for the last breadcrumb
  ]}
/>

      </div>

      {/* Main Content */}
      <div className="grid grid-cols-8 w-full gap-2 p-6 place-content-center">
        {/* Sidebar Filter Box for Larger Screens */}
        <div className="col-span-2 hidden md:block bg-white p-4">
          <FilterBox isVisible={true} onClose={() => {}} />
        </div>

        {/* Category List with Filter Icon for Small Screens */}
        <div className="col-span-8 md:col-span-6 w-full bg-white relative">
          <div className="flex justify-between items-center p-4">
            <h2 className="text-xl font-bold"> </h2>
            {/* Filter Icon */}
            <button
              onClick={() => setFilterVisible(true)}
              className="md:hidden text-gray-800 hover:text-black"
            >
              <FiSettings size={24} />
            </button>
          </div>

          {/* Category List */}
          <CategoryList products={products3} title="Casual" />
        </div>
      </div>

      {/* Filter Modal for Small Screens */}
      {isFilterVisible && (
        <div className="fixed inset-0 flex items-end justify-center bg-black bg-opacity-50 md:hidden">
          <div
            className="w-full bg-white relative rounded-t-lg shadow-lg p-4 transition-transform transform translate-y-0"
            style={{
              animation: "slide-up 0.3s ease-out",
              height: "50vh", // Set the height to 50% of the screen height
              overflowY: "auto", // Enable scrolling if content overflows
            }}
          >
            <button
              onClick={() => setFilterVisible(false)}
              className=" text-gray-800 mb-4 font-semibold"
            >
              Close
            </button>
            <FilterBox isVisible={true} onClose={() => setFilterVisible(false)} />
          </div>
        </div>
      )}

      {/* Animation for sliding up */}
      <style jsx>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Page;
