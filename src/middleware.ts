import { authMiddleware, withClerkMiddleware } from "@clerk/nextjs";
import { NextRequest, NextResponse } from "next/server";

// With the recommended matcher, all routes are protected by Clerk's authentication middleware,
// with the exception of internal /_next/ routes and static files.
// Static files are detected by matching on paths that end in .+\..+.

export default authMiddleware({
  afterAuth() {
    console.log("middleware is now running for authentication");
  },
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
