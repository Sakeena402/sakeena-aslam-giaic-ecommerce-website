import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
// /app/api/auth/login/route.ts (or your relevant path)
import connectDB from '@/dbConfig/dbConfig';
import User from '@/models/userModel';
import { NextResponse, NextRequest } from 'next/server';


connectDB();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { email, password } = reqBody;

        // Validation
        if (!email || !password) {
            return NextResponse.json(
                { error: "Email and password are required" },
                { status: 400 }
            );
        }

        const user = await User.findOne({ email });
        if (!user) {
            return NextResponse.json(
                { error: "User doesn't exist" },
                { status: 400 }
            );
        }
        if (!user.isVerified) {
            return NextResponse.json(
              { error: "Please verify your email to log in" },
              { status: 401 }
            );
          }

        // Check if password is correct
        const validPassword = await bcryptjs.compare(password, user.password);
        if (!validPassword) {
            return NextResponse.json(
                { error: "Invalid password" },
                { status: 400 }
            );
        }

        // Create token
        const tokenData = {
            id: user._id,
            username: user.username,
            email: user.email,
            phoneNo: user.phoneNo,
            role: user.role
        };
        const token =  jwt.sign(tokenData, process.env.JWT_SECRET_KEY!, { expiresIn: '1d' });
console.log(token);
        const response = NextResponse.json({
            message: "User login successfully",
            success: true,
            status: 201
        });
        
        response.cookies.set("token", token, {
            httpOnly: true,
        });

        return response;
    } catch (error: any) {
        console.error('Server error:', error);
        return NextResponse.json(
            { error: error.message || 'Server error' },
            { status: 500 }
        );
    }
}


// // /app/api/auth/login/route.ts
// import { NextResponse, NextRequest } from 'next/server';
// import jwt from 'jsonwebtoken';
// import bcryptjs from 'bcryptjs';
// import connectDB from '@/dbConfig/dbConfig';
// import User from '@/models/userModel';
// export const runtime = 'edge';
// connectDB();

// export async function POST(request: NextRequest) {
//   try {
//     const { email, password } = await request.json();

//     if (!email || !password) {
//       return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
//     }

//     const user = await User.findOne({ email });
//     if (!user) {
//       return NextResponse.json({ error: "User doesn't exist" }, { status: 400 });
//     }

//     if (!user.isVerified) {
//       return NextResponse.json({ error: 'Please verify your email to log in' }, { status: 401 });
//     }

//     const validPassword = await bcryptjs.compare(password, user.password);
//     if (!validPassword) {
//       return NextResponse.json({ error: 'Invalid password' }, { status: 400 });
//     }

//     // Create JWT token
//     const tokenData = { id: user._id, role: user.role, username: user.username, email: user.email };
//     const token = jwt.sign(tokenData, process.env.JWT_SECRET_KEY!, { expiresIn: '1d' });

//     // Create response and set the cookie
//     const response = NextResponse.json({ success: true, message: 'Login successful' });

//     // Set the token cookie
//     response.cookies.set('token', token, {
//       httpOnly: true, // Prevent JavaScript access to cookies
//       path: '/', // Make cookie accessible across the site
//       maxAge: 24 * 60 * 60, // 1 day in seconds
//       secure: process.env.NODE_ENV === 'production', // Set Secure flag only in production (only send cookie over HTTPS)
//       sameSite: 'Strict', // Prevent CSRF attacks
//     });

//     return response;
//   } catch (error: any) {
//     console.error('Error in login API:', error.message); // Logging for better debugging
//     return NextResponse.json({ error: 'Server error' }, { status: 500 });
//   }
// }
