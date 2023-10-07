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

// export default withClerkMiddleware(() => {
//   console.log("Middleware running");
//   return NextResponse.next();
// });

// export default authMiddleware({
//     afterAuth(auth, req, evt) {
//       // handle users who aren't authenticated
//       if (!auth.userId && !auth.isPublicRoute) {
//         return redirectToSignIn({ returnBackUrl: req.url });
//       }
//       // redirect them to organization selection page
//       if(auth.userId && !auth.orgId && req.nextUrl.pathname !== "/org-selection"){
//         const orgSelection = new URL('/org-selection', req.url)
//         return NextResponse.redirect(orgSelection)
//       }
//     }
//   });

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
