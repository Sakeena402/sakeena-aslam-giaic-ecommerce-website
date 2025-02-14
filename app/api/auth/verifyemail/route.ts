import connectDB from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
export const runtime = 'nodejs';
// Ensure the database is connected
connectDB();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { token } = reqBody;

        // Debug: Log the received token
        console.log("Received token:", token);

        // Find user with valid token and expiry time in the future
        const user = await User.findOne({
            verifyToken: token,
            verifyTokenExpiry: { $gt: Date.now() }
        });



        
        // Check if user exists and token is valid
        if (!user) {
            return NextResponse.json({ error: "Invalid or expired token" }, { status: 400 });
        }

        // Debug: Log the user object before updating
        console.log("User found:", user);

        // Update user verification status
        user.isVerified = true;
        user.verifyToken = undefined;
        user.verifyTokenExpiry = undefined;

        // await User.findOneAndUpdate(
        //     { verifyToken: token, verifyTokenExpiry: { $gt: Date.now() } },
        //     { $set: { isVerified: true, verifyToken: undefined, verifyTokenExpiry: undefined } },
        //     { new: true } // Returns the updated document
        // );
        
        console.log("Before save:", user);
        await user.save();
        console.log("After save:", user);
        

        return NextResponse.json({
            message: "Email verified successfully",
            success: true
        });
    } catch (error: any) {
        console.error("Error during email verification:", error.message);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
