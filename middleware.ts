import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const token = req.cookies.get('token')?.value;
  const { pathname } = req.nextUrl;

  // If user is logged in and trying to access /login, redirect to dashboard
  if (token && pathname === '/login') {
    return NextResponse.redirect(new URL('/', req.url));
  }

  // If user is not logged in and trying to access protected pages, redirect to /login
  const protectedRoutes = ['/dashboard', '/profile', '/settings','/cart'];
  if (!token && protectedRoutes.some(route => pathname.startsWith(route))) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return NextResponse.next();
}


// Define the matcher to apply middleware only to specific paths
export const config = {
  matcher: ['/profile', '/user/:path*'], // Correct syntax for dynamic/wildcard routes
};
