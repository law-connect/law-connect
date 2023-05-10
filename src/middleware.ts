export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/", "/profile", "/q/:questionId*"],
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
    error: "/auth/error",
    verifyRequest: "/auth/verify",
    newUser: "/auth/signup",
  },
};
