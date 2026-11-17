import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const adminCookie = request.cookies.get("admin_auth");

  // If the user is trying to access /admin but doesn't have the cookie, kick them to login
  if (
    request.nextUrl.pathname.startsWith("/admin") && 
    !request.nextUrl.pathname.startsWith("/admin/login")
  ) {
    if (!adminCookie) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/admin/:path*",
};