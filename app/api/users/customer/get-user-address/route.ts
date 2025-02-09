import jwt from 'jsonwebtoken';
import connectDB from '@/dbConfig/dbConfig';
import User from '@/models/userModel';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    // Get the token from the Authorization header
    const token = req.headers.get("Authorization")?.replace("Bearer ", "");
    if (!token) {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
    }

    // Decode the token to get the user ID
    const decodedUser: any = jwt.verify(token, process.env.JWT_SECRET_KEY!);
    if (!decodedUser || !decodedUser.id) {
      return NextResponse.json({ success: false, message: "User not found" }, { status: 404 });
    }

    // Connect to the database
    await connectDB();

    // Find the user by ID and select shipping and billing address
    const user = await User.findById(decodedUser.id).select("name email shippingAddress billingAddress");
    
    // Check if the user exists
    if (!user) {
      return NextResponse.json({ success: false, message: "User not found" }, { status: 404 });
    }

    // Return the user data including the address information
    return NextResponse.json({
      success: true,
      data: {
        id: user._id,
        name: user.name,
        email: user.email,
        shippingAddress: user.shippingAddress,
        billingAddress: user.billingAddress,
      },
    });
  } catch (error) {
    console.error("Error fetching address data", error);
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 });
  }
}
