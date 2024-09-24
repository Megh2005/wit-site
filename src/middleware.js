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
      currentUrl.pathname.startsWith("/profile") ||
      currentUrl.pathname.startsWith("/games") ||
      currentUrl.pathname.startsWith("/agenda") ||
      currentUrl.pathname.startsWith("/marketplace") ||
      currentUrl.pathname.startsWith("/rooms") ||
      currentUrl.pathname.startsWith("/speakers") ||
      currentUrl.pathname.startsWith("/sponspors"))
  ) {
    return NextResponse.redirect(new URL("/", req.url));
  }
}

export const config = {
  matcher: [
    "/",
    "/home",
    "/profile",
    "/games",
    "/agenda",
    "/marketplace",
    "/rooms",
    "/speakers",
    "/sponspors",
    "/register",
  ],
};
