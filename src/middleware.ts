export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/((?!auth/*|api|assets/*|_next/static|_next/image|favicon.ico).*)",
  ],
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
    error: "/auth/error",
    verifyRequest: "/auth/verify",
    newUser: "/auth/signup",
  },
};
