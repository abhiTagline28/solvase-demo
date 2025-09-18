import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Mock user state variables (replace with actual authentication logic)
  const isLoggedIn = request.cookies.get("isLoggedIn")?.value === "true";
  const hasSubscription =
    request.cookies.get("hasSubscription")?.value === "true";
  const hasConnectedCompany =
    request.cookies.get("hasConnectedCompany")?.value === "true";

  // Define route categories
  const authRoutes = [
    "/login",
    "/signup",
    "/forgot-password",
    "/reset-password",
  ];
  const subscriptionRoute = ["/subscription"];
  const onboardingRoute = ["/onboarding"];
  const dashboardRoutes = [
    "/dashboard",
    "/platform-key",
    "/plan-billing",
    "/settings",
    "/support",
  ];
  const publicRoutes = ["/"]; // Home page is public

  // Check if current path is in a specific category
  const isAuthRoute = authRoutes.some((route) => pathname.startsWith(route));
  const isSubscriptionRoute = subscriptionRoute.some((route) =>
    pathname.startsWith(route)
  );
  const isOnboardingRoute = onboardingRoute.some((route) =>
    pathname.startsWith(route)
  );
  const isDashboardRoute = dashboardRoutes.some((route) =>
    pathname.startsWith(route)
  );
  const isPublicRoute = publicRoutes.some((route) => pathname === route);

  // Rule 1: If user is NOT logged in, they can only visit auth routes and public routes
  if (!isLoggedIn) {
    if (isAuthRoute || isPublicRoute) {
      return NextResponse.next();
    }
    // Redirect to login for any other route
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Rule 2: If user is logged in, they CANNOT visit auth routes
  if (isLoggedIn && isAuthRoute) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // Rule 3: If user is logged in but doesn't have subscription, they can only visit subscription route
  if (isLoggedIn && !hasSubscription) {
    if (isSubscriptionRoute || isPublicRoute) {
      return NextResponse.next();
    }
    // Redirect to subscription for any other route
    return NextResponse.redirect(new URL("/subscription", request.url));
  }

  // Rule 4: If user is logged in and has subscription but hasn't connected company, they can only visit onboarding route
  if (isLoggedIn && hasSubscription && !hasConnectedCompany) {
    if (isOnboardingRoute || isPublicRoute) {
      return NextResponse.next();
    }
    // Redirect to onboarding for any other route
    return NextResponse.redirect(new URL("/onboarding", request.url));
  }

  // Rule 5: If user is logged in, has subscription, and has connected company, they can visit dashboard routes
  if (isLoggedIn && hasSubscription && hasConnectedCompany) {
    if (isDashboardRoute || isPublicRoute) {
      return NextResponse.next();
    }
    // Redirect to dashboard for any other route
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // Allow access to public routes for everyone
  if (isPublicRoute) {
    return NextResponse.next();
  }

  // Default fallback - redirect to login
  return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder files
     */
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
