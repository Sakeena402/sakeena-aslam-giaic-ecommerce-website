
// import { NextRequest } from "next/server";
// import jwt from "jsonwebtoken";

// interface DecodedToken {
//   id: string;
//   role: string;
//   username: string;
//   email: string;
// }

// export const getDataFromToken = (request: NextRequest) => {
//   try {
//     console.log("Cookies:", request.cookies); // Debugging
//     const token = request.cookies?.get("token")?.value;
//     console.log("cookies token", token);

//     if (!token) {
//       console.warn("Token not found");
//       return null;
//     }

//     const secretKey = process.env.JWT_SECRET_KEY;
//     if (!secretKey) {
//       console.error("JWT_SECRET_KEY is missing");
//       throw new Error("JWT_SECRET_KEY is not set in environment variables.");
//     }

//     const decodedToken = jwt.verify(token, secretKey) as DecodedToken;
//     return { ...decodedToken, token }; // Return all fields including token
//   } catch (error: any) {
//     console.error("Token verification failed:", error.message);
//     return null; // Return null instead of throwing an error
//   }
// };
