import "./globals.css";
import "antd/dist/reset.css";

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
  return (
    <html lang="en">
      <head />
      <body><MainLayout>{children}</MainLayout></body>
    </html>
  );
}
