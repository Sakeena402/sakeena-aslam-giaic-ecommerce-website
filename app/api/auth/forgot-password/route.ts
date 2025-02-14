// app/api/auth/forgot-password/route.ts
import connectDB from '@/dbConfig/dbConfig';
import User from '@/models/userModel';
import { NextResponse } from 'next/server';
import { sendEmail } from '@/helpers/mailer';

connectDB();

export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    await sendEmail({
      email,
      emailType: "RESET",
      userId: user._id.toString()
    });

    return NextResponse.json({
      message: "Password reset email sent",
      success: true
    });

  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}