import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// redirects root url to /TopPicks
export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL("/TopPicks", request.url));
}

export const config = {
  matcher: "/",
};
