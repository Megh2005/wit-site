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
      currentUrl.pathname.startsWith("/add-product") ||
      currentUrl.pathname.startsWith("/organizers") ||
      currentUrl.pathname.startsWith("/contact") ||
      currentUrl.pathname.startsWith("/privacy-policy") ||
      currentUrl.pathname.startsWith("/terms"))
  ) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (
    token &&
    (token.role === "attendee" || token.role === "volunteer") &&
    currentUrl.pathname.startsWith("/payment")
  ) {
    return NextResponse.redirect(new URL("/home", req.url));
  }

  if (
    token &&
    token.role === "sponsor" &&
    (currentUrl.pathname.startsWith("/marketplace") ||
      currentUrl.pathname.startsWith("/games"))
  ) {
    return NextResponse.redirect(new URL("/home", req.url));
  }

  if (
    token &&
    token.role !== "store-volunteer" &&
    token.role !== "admin" &&
    (currentUrl.pathname.startsWith("/marketplace/orders") ||
      currentUrl.pathname.startsWith("/api/order"))
  ) {
    return NextResponse.redirect(new URL("/home", req.url));
  }

  if (
    token &&
    token.role !== "admin" &&
    (currentUrl.pathname.startsWith("/api/product/add") ||
      currentUrl.pathname.startsWith("/api/speaker/add") ||
      currentUrl.pathname.startsWith("/register") ||
      currentUrl.pathname.startsWith("/games/spin") ||
      currentUrl.pathname.startsWith("/add-product") ||
      currentUrl.pathname.startsWith("/add-speaker"))
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
    "/games/:path*",
    "/agenda",
    "/marketplace",
    "/rooms",
    "/speakers",
    "/sponspors",
    "/scan",
    "/payment",
    "/marketplace/orders",
    "/api/order/:path*",
    "/api/product/add",
    "/api/speaker/add",
    "/add-product",
    "/add-speaker",
    "/organizers",
    "/contact",
    "/privacy-policy",
    "/terms",
  ],
};
