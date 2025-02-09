// import { NextRequest, NextResponse } from "next/server";
// import { getDataFromToken } from "@/helpers/getDataFromToken";

// export async function GET(request: NextRequest) {
//   try {
//     // Get user details from token
//     const userDetails = getDataFromToken(request);
    
//     return NextResponse.json({
//       success: true,
//       data: userDetails,  // Send user info to client
//     });
//   } catch (error) {
//     return NextResponse.json({
//       error: "Unauthorized",
//     }, { status: 401 });
//   }
// }



import { NextRequest, NextResponse } from "next/server";
import { getDataFromToken } from "@/helpers/getDataFromToken";

export async function GET(request: NextRequest) {
  try {
    const userDetails = await getDataFromToken(request); // Ensure it is awaited if needed

    return NextResponse.json({
      success: true,
      data: userDetails,
    });
  } catch (error) {
    return NextResponse.json({
      error: "Unauthorized",
    }, { status: 401 });
  }
}

