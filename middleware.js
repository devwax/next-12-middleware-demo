
import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  // console.log({request});
  // console.log("===================> " + request.url);

  if (request.nextUrl.pathname.startsWith('/about') && ! request.headers.hasOwnProperty('sec-fetch-mode')) {
    // This logic is only applied to /about
    console.log({request});
    // console.log('Header:', request.headers);
    console.log("===================> " + request.url);
  }

  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    // This logic is only applied to /dashboard
    console.log("===================> " + request.url);
  }


  //   return NextResponse.redirect(new URL("/about-2", request.url));
  return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/:path*"
  //   matcher: "/:path"
};
