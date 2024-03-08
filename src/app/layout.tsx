import "antd/dist/reset.css";
import "@assets/styles/tailwind.scss";

import MainLayout from "./MainLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WIPAY - Cliente",
  description: "Portal clientes Wipay",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loginUrl = `${process.env.NEXT_PUBLIC_COGNITO_URI}/login?response_type=code&client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}&scope=openid%20aws.cognito.signin.user.admin&redirect_uri=${process.env.NEXT_PUBLIC_DOMAIN}`;

  return (
    <html lang="es">
      <head />
      <body>
        <MainLayout>
          <a
            // href={`https://cliente-dev.auth.eu-west-1.amazoncognito.com/login?response_type=code&client_id=3ifl0tubtk9otb8pug8569hpad&scope=openid%20aws.cognito.signin.user.admin&state=krP8Yyc8nWzYImdsH2bTBje51m60FP0Fed44eBZOInw%3D&redirect_uri=http://localhost:8080/login/oauth2/code/cognito&nonce=vDhIoSK1IQDWO0a8Zz3LAk5hAGz0FCn8NuHUE5HlP6I`}
            href={loginUrl}
          >
            Login
          </a>

          {children}
        </MainLayout>
      </body>
    </html>
  );
}
