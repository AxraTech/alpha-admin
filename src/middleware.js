import { NextResponse } from 'next/server';
import {jwtDecode} from "jwt-decode";

export function middleware(req) {
  // Get the role from cookies
  const token = req.cookies.get('token')?.value;
  let role = null
  if (token) {
    role = jwtDecode(token)
  }

  // Define routes that require admin access with wildcard support
  const adminRoutes = ['/en/dashboard/', '/en/product/'];
  // Define routes that require manager access with wildcard support
  const managerRoutes = ['/en/user/', '/en/service/'];

  // Get the current pathname
  const { pathname } = req.nextUrl;

  // Exclude login and 401 pages from the middleware
  if (pathname.startsWith('/en/login') || pathname.startsWith('/en/pages/misc/401-not-authorized')) {
    return NextResponse.next();
  }

  // If there's no role in the cookies, redirect to the login page
  if (!role) {
    return NextResponse.redirect(new URL('/en/login', req.url));
  }

  // Check if the route is an admin route
  if (adminRoutes.some((route) => pathname.startsWith(route))) {
    if (role !== 'admin') {
      // Redirect to the 401 page if the user is not an admin
      return NextResponse.redirect(new URL('/en/pages/misc/401-not-authorized', req.url));
    }
  }
  console.log(pathname)
  console.log(managerRoutes.some((route) => pathname.startsWith(route)))

  // Check if the route is a manager route
  if (managerRoutes.some((route) => pathname.startsWith(route))) {
    if (role !== 'manager') {
      // Redirect to the 401 page if the user is not a manager
      return NextResponse.redirect(new URL('/en/pages/misc/401-not-authorized', req.url));
    }
  }

  // If the role matches or the route is not restricted, continue with the request
  return NextResponse.next();
}

// Apply the middleware to all routes with /en prefix
export const config = {
  matcher: '/en/:path*',
};
