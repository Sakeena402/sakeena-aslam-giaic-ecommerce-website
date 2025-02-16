//app/api/auth/me
import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get('token')?.value;
    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const decodedToken: any = jwt.verify(token, process.env.JWT_SECRET_KEY!);
    const { id, role, username,email,phoneNo } = decodedToken;
  

    return NextResponse.json({ id, role, username,email,phoneNo,token});
  } catch (error) {
    console.error('Error verifying token:', error);
    return NextResponse.json({ error: 'Invalid or expired token' }, { status: 401 });
  }
}


// import { NextApiRequest, NextApiResponse } from "next";
// import jwt from "jsonwebtoken";

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//   const token = req.cookies.token;

//   if (!token) {
//     return res.status(401).json({ message: "Not authenticated" });
//   }

//   try {
//     const user = jwt.verify(token, process.env.JWT_SECRET!);
//     return res.status(200).json({ user });
//   } catch (error) {
//     return res.status(401).json({ message: "Invalid token" });
//   }
// }
