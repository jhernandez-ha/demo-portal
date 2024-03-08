// lib/auth/auth.ts

import NextAuth from "next-auth";
import CognitoProvider from "next-auth/providers/cognito";

export default NextAuth({
  providers: [
    CognitoProvider({
      clientId: "3ifl0tubtk9otb8pug8569hpad",
      checks: ["state", "nonce"],
      clientSecret: "1peqfn8vq0elin78er3tqcd60vp1m6d4f2dj5u1m0ditetmo24m7",
      issuer: "https://cognito-idp.eu-west-1.amazonaws.com/eu-west-1_VObiRPC5f",
      region: "eu-west-1",

      authorization: {
        url: "https://cliente-dev.auth.eu-west-1.amazoncognito.com/oauth2/authorize",
        params: {
          response_type: "code",
          client_id: "3ifl0tubtk9otb8pug8569hpad",
          scope: "aws.cognito.signin.user.admin",
          redirect_uri: "http://localhost:8080/login/oauth2/code/cognito",
        },
      },
      profile(profile, tokens) {
        return { ...profile, ...tokens };
      },
    }),
  ],
  debug: true,
});
