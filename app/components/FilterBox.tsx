
import React, { useState } from "react";
import { FiSettings } from "react-icons/fi";

const FilterBox = ({ isVisible, onClose }: { isVisible: boolean; onClose: () => void }) => {
  if (!isVisible) return null;

  return (
    <div className="top-0 left-0 w-full h-auto bg-white shadow-lg border rounded-lg p-6  ">
      <button
        onClick={onClose}
        className=" absolute top-4 right-4 text-gray-600 hover:text-gray-900"
      >
        ✕
      </button>
      <h2 className="text-xl font-bold mb-6">Filters</h2>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Categories</h3>
        <ul>
          <li className="mb-2">T-shirts</li>
          <li className="mb-2">Shorts</li>
          <li className="mb-2">Shirts</li>
          <li className="mb-2">Hoodies</li>
          <li>Jeans</li>
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Price</h3>
        <input type="range" min="50" max="200" step="10" className="w-full" />
        <div className="flex justify-between text-sm mt-2">
          <span>$50</span>
          <span>$200</span>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Colors</h3>
        <div className="flex flex-wrap  gap-2">

          <button className="w-8 h-8 bg-green-500 rounded-full border"></button>
          <button className="w-8 h-8 bg-red-500 rounded-full border"></button>
          <button className="w-8 h-8 bg-yellow-500 rounded-full border"></button>
          <button className="w-8 h-8 bg-blue-500 rounded-full border"></button>
          <button className="w-8 h-8 bg-black rounded-full border"></button>
          <button className="w-8 h-8 bg-green-500 rounded-full border"></button>
          <button className="w-8 h-8 bg-red-500 rounded-full border"></button>
          <button className="w-8 h-8 bg-yellow-500 rounded-full border"></button>
          <button className="w-8 h-8 bg-blue-500 rounded-full border"></button>
          <button className="w-8 h-8 bg-black rounded-full border"></button>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Size</h3>
        <div className="flex gap-2">
          <button className="px-3 py-1 border rounded-lg">S</button>
          <button className="px-3 py-1 border rounded-lg">M</button>
          <button className="px-3 py-1 border rounded-lg">L</button>
          <button className="px-3 py-1 border rounded-lg">XL</button>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Dress Style</h3>
        <ul>
          <li className="mb-2 flex justify-between items-center cursor-pointer">
            Casual <span>›</span>
          </li>
          <li className="mb-2 flex justify-between items-center cursor-pointer">
            Formal <span>›</span>
          </li>
          <li className="mb-2 flex justify-between items-center cursor-pointer">
            Party <span>›</span>
          </li>
          <li className="flex justify-between items-center cursor-pointer">
            Gym <span>›</span>
          </li>
        </ul>
      </div>

      <button className="w-full py-2 bg-black text-white rounded-lg mt-4">
        Apply Filter
      </button>
    </div>
  );
};

export default FilterBox;















// import React, { useState } from "react";

// const FilterBox = ({ isVisible, onClose }: { isVisible: boolean; onClose: () => void }) => {
//   const [expanded, setExpanded] = useState<string | null>(null);
//   const [selectedColor, setSelectedColor] = useState<string | null>(null);
//   const [selectedSize, setSelectedSize] = useState<string | null>(null);

//   if (!isVisible) return null;

//   return (
//     <div className=" top-0 left-0 w-72 h-screen bg-white shadow-lg rounded-lg z-50 p-6 overflow-y-auto">
//       {/* Close Button */}
//       <button
//         onClick={onClose}
//         className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
//       >
//         ✕
//       </button>
//       <h2 className="text-xl font-bold mb-6">Filters</h2>

//       {/* Categories Section */}
//       <div className="mb-6">
//         <h3
//           className="text-lg font-semibold mb-2 flex justify-between items-center cursor-pointer"
//           onClick={() => setExpanded(expanded === "categories" ? null : "categories")}
//         >
//           Categories
//           <span>{expanded === "categories" ? "▲" : "▼"}</span>
//         </h3>
//         {expanded === "categories" && (
//           <ul className="pl-4">
//             <li className="mb-2 cursor-pointer">T-shirts</li>
//             <li className="mb-2 cursor-pointer">Shorts</li>
//             <li className="mb-2 cursor-pointer">Shirts</li>
//             <li className="mb-2 cursor-pointer">Hoodies</li>
//             <li className="cursor-pointer">Jeans</li>
//           </ul>
//         )}
//       </div>

//       {/* Price Section */}
//       <div className="mb-6">
//         <h3
//           className="text-lg font-semibold mb-2 flex justify-between items-center cursor-pointer"
//           onClick={() => setExpanded(expanded === "price" ? null : "price")}
//         >
//           Price
//           <span>{expanded === "price" ? "▲" : "▼"}</span>
//         </h3>
//         {expanded === "price" && (
//           <div>
//             <input type="range" min="50" max="200" step="10" className="w-full" />
//             <div className="flex justify-between text-sm mt-2">
//               <span>$50</span>
//               <span>$200</span>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Colors Section */}
//       <div className="mb-6">
//         <h3
//           className="text-lg font-semibold mb-2 flex justify-between items-center cursor-pointer"
//           onClick={() => setExpanded(expanded === "colors" ? null : "colors")}
//         >
//           Colors
//           <span>{expanded === "colors" ? "▲" : "▼"}</span>
//         </h3>
//         {expanded === "colors" && (
//           <div className="flex gap-2 mt-2">
//             {["green", "red", "yellow", "blue", "black"].map((color) => (
//               <button
//                 key={color}
//                 onClick={() => setSelectedColor(color)}
//                 className={`w-6 h-6 rounded-full border-2 ${
//                   selectedColor === color ? "border-gray-800" : "border-transparent"
//                 }`}
//                 style={{ backgroundColor: color }}
//               ></button>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* Size Section */}
//       <div className="mb-6">
//         <h3
//           className="text-lg font-semibold mb-2 flex justify-between items-center cursor-pointer"
//           onClick={() => setExpanded(expanded === "size" ? null : "size")}
//         >
//           Size
//           <span>{expanded === "size" ? "▲" : "▼"}</span>
//         </h3>
//         {expanded === "size" && (
//           <div className="flex flex-wrap gap-2 mt-2">
//             {["XX-Small", "X-Small", "Small", "Medium", "Large", "X-Large", "XX-Large", "3X-Large", "4X-Large"].map(
//               (size) => (
//                 <button
//                   key={size}
//                   onClick={() => setSelectedSize(size)}
//                   className={`px-3 py-1 border rounded-lg ${
//                     selectedSize === size ? "bg-black text-white" : "bg-gray-200 text-gray-800"
//                   }`}
//                 >
//                   {size}
//                 </button>
//               )
//             )}
//           </div>
//         )}
//       </div>

//       {/* Dress Style Section */}
//       <div className="mb-6">
//         <h3
//           className="text-lg font-semibold mb-2 flex justify-between items-center cursor-pointer"
//           onClick={() => setExpanded(expanded === "dressStyle" ? null : "dressStyle")}
//         >
//           Dress Style
//           <span>{expanded === "dressStyle" ? "▲" : "▼"}</span>
//         </h3>
//         {expanded === "dressStyle" && (
//           <ul className="pl-4">
//             <li className="mb-2 flex justify-between items-center cursor-pointer">
//               Casual <span>›</span>
//             </li>
//             <li className="mb-2 flex justify-between items-center cursor-pointer">
//               Formal <span>›</span>
//             </li>
//             <li className="mb-2 flex justify-between items-center cursor-pointer">
//               Party <span>›</span>
//             </li>
//             <li className="flex justify-between items-center cursor-pointer">
//               Gym <span>›</span>
//             </li>
//           </ul>
//         )}
//       </div>

//       {/* Apply Filter Button */}
//       <button className="w-full py-2 bg-black text-white rounded-lg mt-4">
//         Apply Filter
//       </button>
//     </div>
//   );
// };

// export default FilterBox;
