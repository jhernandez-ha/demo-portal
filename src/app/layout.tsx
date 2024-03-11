"use client";

import "antd/dist/reset.css";
import "@assets/styles/tailwind.scss";

import MainLayout from "./MainLayout";
import type { Metadata } from "next";
import { ConfigProvider } from "antd";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";

// export const metadata: Metadata = {
//   title: "WIPAY - Cliente",
//   description: "Portal clientes Wipay",
// };

export default function RootLayout({
  session,
  children,
}: Readonly<{
  session: Session;
  children: React.ReactNode;
}>) {
  const loginUrl = `${process.env.NEXT_PUBLIC_COGNITO_URI}/login?response_type=code&client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}&scope=openid%20aws.cognito.signin.user.admin&redirect_uri=${process.env.NEXT_PUBLIC_DOMAIN}`;

  return (
    <html lang="es">
      <head />
      <body>
        <SessionProvider
          session={session}
          // basePath="/api/auth/callback/cognito"
          baseUrl="http://localhost:8080"
        >
          <ConfigProvider
            theme={{
              hashed: false,
              // token: {
              //   colorPrimary: "#e61747",
              //   colorLink: "#e61747",
              //   controlItemBgActive: "#fafafa",
              // },
            }}
          >
            <MainLayout>{children}</MainLayout>
          </ConfigProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
