// //app/api/auth/logout
// import { NextResponse } from "next/server";
// export async function GET() {
//     try {
//         const response=NextResponse.json({
//             message:'Logout Successfull',
//             success:true
//         })
//         response.cookies.set("token","",{
//             httpOnly:true,
//             expires:new Date(0)

//         } )
//         return response
//     } catch (error:any) {
//         return NextResponse.json({error:error.messager},
//             {status:500}
//         )
//     }
// }

import { NextResponse } from "next/server";

export async function GET() {
    try {
        const response = NextResponse.json({
            message: 'Logout Successful',
            success: true
        });

        // Correct way to clear the token in Next.js 13+
        response.headers.set("Set-Cookie", "token=; Path=/; HttpOnly; Expires=Thu, 01 Jan 1970 00:00:00 GMT");

        return response;
    } catch (error: any) {
        return NextResponse.json(
            { error: error.message || "Something went wrong" },
            { status: 500 }
        );
    }
}
