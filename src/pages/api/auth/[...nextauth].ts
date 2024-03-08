// lib/auth/auth.ts

import NextAuth from "next-auth";
import CognitoProvider from "next-auth/providers/cognito";

export default NextAuth({
  providers: [
    CognitoProvider({
      clientId: "3ifl0tubtk9otb8pug8569hpad",
      // checks: ["state", "nonce"],
      clientSecret: "1peqfn8vq0elin78er3tqcd60vp1m6d4f2dj5u1m0ditetmo24m7",
      // requestTokenUrl:
      //   "https://cliente-dev.auth.eu-west-1.amazoncognito.com/oauth2/token",
      //   domain: process.env.COGNITO_DOMAIN,
      issuer: "https://cognito-idp.eu-west-1.amazonaws.com/eu-west-1_VObiRPC5f",
      // token:
      //   "https://cliente-dev.auth.eu-west-1.amazoncognito.com/oauth2/token",
      // identity_provider:"COGNITO",
      region: "eu-west-1",

      authorization: {
        url: "https://cliente-dev.auth.eu-west-1.amazoncognito.com/oauth2/authorize",
        params: {
          response_type: "code",
          client_id: "3ifl0tubtk9otb8pug8569hpad",
          scope: "openid,aws.cognito.signin.user.admin",
          redirect_uri: "http://localhost:3000/api/auth/callback/cognito",
          display: "none",
        },
      },
      profile(profile, tokens) {
        return { ...profile, ...tokens };
      },
    }),
  ],
  debug: true,
});
