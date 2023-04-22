import { compare } from "bcrypt";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        oab: { label: "Inscrição OAB", type: "text", placeholder: "00001" },
        password: { label: "Senha", type: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials || !credentials.oab || !credentials.password) {
          return null;
        }

        const user = await prisma.user.findUnique({
          where: { oab: credentials.oab },
        });

        if (!user) {
          return null;
        }

        const passwordChecks = await compare(
          credentials.password,
          user.password
        );

        if (!passwordChecks) {
          return null;
        }

        return user;
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
    error: "/auth/error",
    verifyRequest: "/auth/verify",
    newUser: "/auth/signup",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    jwt: async ({ user, token }) => {
      if (user) {
        token.oab = user.oab;
        token.firstName = user.firstName;
        token.lastName = user.lastName;
      }
      return token;
    },
    session: async ({ session, token }) => {
      if (token) {
        session.user.id = token.sub;
        session.user.oab = token.oab;
        session.user.firstName = token.firstName;
        session.user.lastName = token.lastName;
      }
      return session;
    },
  },
});

export { handler as GET, handler as POST };
