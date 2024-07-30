import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    Google({
      // ! - used for telling typescript compiler that we have a valid value for the variable
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOLE_CLIENT_SECRET!,
    }),
  ],
});

export { handler as GET, handler as POST };
