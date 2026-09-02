import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // 🔥 Allow API routes always
  if (req.nextUrl.pathname.startsWith("/api/")) {
    return NextResponse.next();
  }

  const isAdminRoute = pathname.startsWith("/admin");
  const isLoginPage = pathname === "/admin/login.html";

  // ✅ Skip static assets (anything with a dot) + login page
  const isStaticAsset =
    pathname.includes(".") ||
    pathname.startsWith("/admin/fonts") ||
    pathname.startsWith("/admin/img");

  if (isStaticAsset || isLoginPage) {
    return NextResponse.next();
  }

  if (isAdminRoute) {
    const accessToken = req.cookies.get("access_token")?.value;
    if (!accessToken) {
      return NextResponse.redirect(new URL("/admin/login.html", req.url));
    }

    try {
      jwt.verify(accessToken, process.env.JWT_SECRET!);
      return NextResponse.next();
    } catch {
      return NextResponse.redirect(new URL("/admin/login.html", req.url));
    }
  }

  return NextResponse.next();
}

// ✅ Apply middleware only for /admin/*
export const config = {
  matcher: ["/admin/:path*"],
};
