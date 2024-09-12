import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'



const isProtectedRoute = createRouteMatcher(['/dashboards(.*)'])
// const isPublicRoute = createRouteMatcher(['/sign-in(.*)', '/sign-up(.*)','/'])
// console.log(isPublicRoute)
export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) {
    auth().protect();
  }

  // console.log("req", req)

  // if (!isPublicRoute(req)) {
  //   auth().protect()
  // }

},
  // { debug: true }
)

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};