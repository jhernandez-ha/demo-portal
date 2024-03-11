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
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log(user);
      console.log(account);
      console.log(profile);
      console.log(email);
      console.log(credentials);

      const isAllowedToSignIn = true;
      if (isAllowedToSignIn) {
        return true;
      } else {
        // Return false to display a default error message
        return false;
        // Or you can return a URL to redirect to:
        // return '/unauthorized'
      }
    },
    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
    async jwt({ token, account, profile }) {
      console.log(account);
      console.log(token);
      console.log(profile);

      // Persist the OAuth access_token and or the user id to the token right after signin
      if (account) {
        token.accessToken = account.access_token;
        token.name = profile?.name;
      }
      return token;
    },

    async session({ session, token, user }) {
      console.log(session);
      console.log(token);
      console.log(user);

      // Send properties to the client, like an access_token and user id from a provider.
      session.accessToken = token.accessToken;
      session.user.id = token.id;

      return session;
    },
  },
  debug: true,
});
