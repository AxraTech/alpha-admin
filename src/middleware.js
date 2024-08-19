import {NextResponse} from 'next/server';
import {jwtDecode} from "jwt-decode";

export function middleware(req) {
  const token = req.cookies.get('token')?.value;
  let role = null
  if (token) {
    role = jwtDecode(token).role
  }

  const adminRoutes = ['/en/dashboards/', '/en/products/', '/en/user/', '/en/orders/', '/en/news/', '/en/invoice/'];
  const managerRoutes = ['/en/products/', '/en/news/'];
  const saleRoutes = ['/en/order/', '/en/invoice/', '/en/quotation/'];
  const serviceRoutes = ['/en/service/'];
  const deliveryRoutes = [''];
  const financeRoutes = ['/en/orders/', '/en/invoice/'];

  const {pathname} = req.nextUrl;

  if (pathname.startsWith('/en/login') || pathname.startsWith('/en/pages/misc/401-not-authorized')) {
    return NextResponse.next();
  }

  if (!role) {
    return NextResponse.redirect(new URL('/en/login', req.url));
  } else if (role === "admin" && adminRoutes.some((route) => pathname.startsWith(route))) {
    return NextResponse.next();
  } else if (role === "manager" && managerRoutes.some((route) => pathname.startsWith(route))) {
    return NextResponse.next();
  } else if (role === "service" && serviceRoutes.some((route) => pathname.startsWith(route))) {
    return NextResponse.next();
  } else if (role === "sale" && saleRoutes.some((route) => pathname.startsWith(route))) {
    return NextResponse.next();
  } else if (role === "delivery" && deliveryRoutes.some((route) => pathname.startsWith(route))) {
    return NextResponse.next();
  } else if (role === "finance" && financeRoutes.some((route) => pathname.startsWith(route))) {
    return NextResponse.next();
  } else {
    return NextResponse.redirect(new URL('/en/pages/misc/401-not-authorized', req.url));
  }
}

export const config = {
  matcher: '/en/:path*',
};