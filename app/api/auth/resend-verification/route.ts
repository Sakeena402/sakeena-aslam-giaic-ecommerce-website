import connectDB from '@/dbConfig/dbConfig';
import User from '@/models/userModel';
import { NextResponse, NextRequest } from 'next/server';
import { sendEmail } from '@/helpers/mailer';
import bcryptjs from 'bcryptjs';

connectDB();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { email } = reqBody;

        // Check if the email is provided
        if (!email) {
            return NextResponse.json(
                { error: "Email is required" },
                { status: 400 }
            );
        }

        // Find the user by email
        const user = await User.findOne({ email });

        // Check if the user exists
        if (!user) {
            return NextResponse.json(
                { error: "User does not exist" },
                { status: 404 }
            );
        }

        // Check if the user is already verified
        if (user.isVerified) {
            return NextResponse.json(
                { message: "User is already verified" },
                { status: 200 }
            );
        }

        // Check if the token has expired
        const currentTime = Date.now();
        if (user.verifyTokenExpiry && user.verifyTokenExpiry > currentTime) {
            return NextResponse.json(
                { message: "A verification email has already been sent. Please check your inbox." },
                { status: 200 }
            );
        }

       
        await sendEmail({
            email,
            emailType: "VERIFY",
            userId: user._id,
        });

        return NextResponse.json({
            message: "Verification email resent successfully",
            success: true,
        });
    } catch (error: any) {
        console.error("Resend Verification Error:", error);
        return NextResponse.json(
            { error: error.message || "Server error" },
            { status: 500 }
        );
    }
}
