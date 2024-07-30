import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
// import prisma from "@/prisma/client";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const handler = NextAuth({
  // Configure one or more authentication providers
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOLE_CLIENT_SECRET!,
    }),
  ],
  adapter: PrismaAdapter(prisma),
});

export { handler as GET, handler as POST };
