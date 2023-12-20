import "@/styles/globals.css";
// import "@foundry/ui/styles.scss";
import { Inter } from "next/font/google";

import type { Metadata, Viewport } from "next";

import { SiteLayout } from "./site-layout";
import { Providers } from "./providers";

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
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* <link
          rel="stylesheet"
          href="https://use.typekit.net/drz6hcr.css"
        ></link> */}
        <meta name="darkreader-lock"></meta>
      </head>
      <body className={inter.variable}>
        <Providers>
          <SiteLayout>{children}</SiteLayout>
        </Providers>
      </body>
    </html>
  );
}
