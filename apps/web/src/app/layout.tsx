import "./globals.css";
// import "@foundry/ui/styles.scss";

import type { Metadata } from "next";

import { SiteLayout } from "./site-layout";
import { Client } from "./client";

export const metadata: Metadata = {
  title: "Foundry",
  description:
    "an advanced weapon roll explorer and buildcrafting tool for Destiny 2.",
  applicationName: "Foundry",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black",
    title: "Foundry",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://use.typekit.net/drz6hcr.css"
        ></link>
        <meta name="darkreader-lock"></meta>
      </head>
      <body>
        <Client>
          <SiteLayout>{children}</SiteLayout>
        </Client>
      </body>
    </html>
  );
}
