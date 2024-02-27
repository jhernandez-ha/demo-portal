import "./globals.css";

import { Inter } from "next/font/google";
import type { Metadata } from "next";
import MainLayout from "./MainLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WIPAY - Cliente",
  description: "Portal clientes Wipay",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
