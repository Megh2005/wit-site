import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export { default } from "next-auth/middleware";

export async function middleware(req) {
  const token = await getToken({
    req,
    secret: process.env.NEXT_PUBLIC_NEXT_AUTH_SECRET,
  });

  const currentUrl = req.nextUrl;

  // client side redirect

  if (token && currentUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/home", req.url));
  }

  if (
    !token &&
    (currentUrl.pathname.startsWith("/home") ||
      currentUrl.pathname.startsWith("/register") ||
      currentUrl.pathname.startsWith("/profile") ||
      currentUrl.pathname.startsWith("/games") ||
      currentUrl.pathname.startsWith("/agenda") ||
      currentUrl.pathname.startsWith("/marketplace") ||
      currentUrl.pathname.startsWith("/rooms") ||
      currentUrl.pathname.startsWith("/speakers") ||
      currentUrl.pathname.startsWith("/sponspors") ||
      currentUrl.pathname.startsWith("/scan") ||
      currentUrl.pathname.startsWith("/payment") ||
      currentUrl.pathname.startsWith("/add-product"))
  ) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (
    token &&
    token.role === "attendee" &&
    currentUrl.pathname.startsWith("/payment")
  ) {
    return NextResponse.redirect(new URL("/home", req.url));
  }

  if (
    token &&
    token.role === "sponsor" &&
    currentUrl.pathname.startsWith("/marketplace")
  ) {
    return NextResponse.redirect(new URL("/home", req.url));
  }

  if (
    token &&
    token.role !== "admin" &&
    (currentUrl.pathname.startsWith("/marketplace/orders") ||
      currentUrl.pathname.startsWith("/api/order") ||
      currentUrl.pathname.startsWith("/register") ||
      currentUrl.pathname.startsWith("/add-product"))
  ) {
    return NextResponse.redirect(new URL("/home", req.url));
  }
}

export const config = {
  matcher: [
    "/",
    "/register",
    "/home",
    "/profile",
    "/games",
    "/agenda",
    "/marketplace",
    "/rooms",
    "/speakers",
    "/sponspors",
    "/scan",
    "/payment",
    "/marketplace/orders",
    "/api/order/:path*",
    "/add-product",
  ],
};
