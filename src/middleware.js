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

  if (
    token &&
    (currentUrl.pathname.startsWith("/login") || currentUrl.pathname === "/")
  ) {
    return NextResponse.redirect(new URL("/home", req.url));
  }

  if (!token && currentUrl.pathname.startsWith("/home")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export const config = {
  matcher: ["/", "/home", "/login"],
};
