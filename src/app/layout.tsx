"use client";

import "./globals.css";
import "antd/dist/reset.css";

import { StyleProvider, createCache, extractStyle } from "@ant-design/cssinjs";

import type { Metadata } from "next";
import { useServerInsertedHTML } from "next/navigation";
import { useState } from "react";

/*
export const metadata: Metadata = {
  title: "WIPAY - Cliente",
  description: "Portal clientes Wipay",
};*/

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head title="WIPAY - Cliente"></head>
      <body>
        <StyleProviderLayout>{children}</StyleProviderLayout>
      </body>
    </html>
  );
}

function StyleProviderLayout({ children }: { children: React.ReactNode }) {
  const [cache] = useState(() => createCache());

  const render = <>{children}</>;

  useServerInsertedHTML(() => {
    return (
      <script
        dangerouslySetInnerHTML={{
          __html: `</script>${extractStyle(cache)}<script>`,
        }}
      />
    );
  });

  if (typeof window !== "undefined") {
    return render;
  }

  return <StyleProvider cache={cache}>{render}</StyleProvider>;
}
