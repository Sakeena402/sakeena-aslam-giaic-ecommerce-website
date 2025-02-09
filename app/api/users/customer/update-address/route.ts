import jwt from 'jsonwebtoken';
import connectDB from '@/dbConfig/dbConfig';
import User from '@/models/userModel';
import { NextRequest, NextResponse } from 'next/server';

export async function PUT(req: NextRequest) {
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

    // Parse request body
    const { addressType, address } = await req.json();

    if (!addressType || !['shippingAddress', 'billingAddress'].includes(addressType)) {
      return NextResponse.json({ success: false, message: 'Invalid address type' }, { status: 400 });
    }

    if (!address || typeof address !== 'object') {
      return NextResponse.json({ success: false, message: 'Invalid address data' }, { status: 400 });
    }

    // Connect to the database
    await connectDB();

    // Find user and update the address
    const user = await User.findById(decodedUser.id);
    if (!user) {
      return NextResponse.json({ success: false, message: 'User not found' }, { status: 404 });
    }

    user[addressType] = address; // Update the specific address field
    await user.save();

    return NextResponse.json({
      success: true,
      message: 'Address updated successfully',
      data: { [addressType]: user[addressType] },
    });
  } catch (error) {
    console.error('Error updating address:', error);
    return NextResponse.json({ success: false, message: 'Internal server error' }, { status: 500 });
  }
}
