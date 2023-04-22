import NextAuth, { DefaultSession } from "next-auth";
import { DefaultJWT, GetTokenParams } from "next-auth/jwt";

declare module "next-auth" {
  interface User {
    id: string;
    oab: string;
    firstName: string;
    lastName: string;
  }
  interface Session extends DefaultSession {
    user: User & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  type JWT = {
    sub: string;
    oab: string;
    firstName: string;
    lastName: string;
  } & DefaultJWT;
}
