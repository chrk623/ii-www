import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// TODO: auth roles
// https://clerk.com/docs/references/nextjs/clerk-middleware#protect-multiple-groups-of-routes

const isProtectedRoute = createRouteMatcher(["/dashboard(.*)"]);

// redirect unauthed users to sign-in route
export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth().protect();
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
