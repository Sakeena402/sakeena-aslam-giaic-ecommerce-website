// 'use client'
// import { useEffect, useState } from "react";

// // Define a type for screen dimensions
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

// // Export the hook
// export default useScreenDimensions;
