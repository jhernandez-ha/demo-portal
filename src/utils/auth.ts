// lib/auth/auth.ts

import NextAuth from "next-auth";
import CognitoProvider from "next-auth/providers/cognito";

export default NextAuth({
  providers: [
    CognitoProvider({
      clientId: "3ifl0tubtk9otb8pug8569hpad",
      clientSecret: "1peqfn8vq0elin78er3tqcd60vp1m6d4f2dj5u1m0ditetmo24m7",
      //   domain: process.env.COGNITO_DOMAIN,
      issuer: "https://cognito-idp.eu-west-1.amazonaws.com/eu-west-1_VObiRPC5f",
    }),
  ],
});
