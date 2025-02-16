
'use client';
import React, { useEffect, useState } from "react";
import { BreadCrumbs } from "../components/BreadCrumbs";
import FilterBox from "../components/FilterBox";
import CategoryList from "../components/CategoryList";
import { products3 } from "@/data/products";
import { FiSettings } from "react-icons/fi"; // Icon for the filter settings
import useSWR from "swr";

type Props = {};
const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Page = (props: Props) => {
  const [isFilterVisible, setFilterVisible] = useState(false);
  // const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [error, setError] = useState<string | null>(null); // Track errors

  const { data: products, error } = useSWR("/api/products", fetcher, { dedupingInterval: 60000 });

  if (!products) return <div>Loading...</div>;
  if (error) return <div>Error fetching products.</div>;


  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const response = await fetch('./api/products');
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

  // if (loading) return <div>Loading...</div>; // Show a loading message while data is fetching
  if (error) return <div>Error: {error}</div>; // Show error message if there was an issue


  return (
    <div className="w-full grid grid-cols-1 grid-rows-[auto] border-t border-gray-300">
      {/* Breadcrumb Section */}
      <div className="w-full p-6">
      <BreadCrumbs
  breadcrumbs={[
    { name: "Home", link: "/" },
    { name: "Products", link: "/category" },
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
          <CategoryList products={products} title="Casual" />
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
<br />
<br /><br /><br /><br />
<br /><br /><br /><br />
<br /><br /><br /><br />
<br /><br /><br />
    </div>
  );
};

export default Page;


