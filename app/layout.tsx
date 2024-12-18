import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import FloatingNavbar from "@/components/FloatingNavbar";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import Footer from "@/components/Footer";

import { Providers } from "./providers";
import React from "react";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
  keywords: siteConfig.keywords,
  authors: [
    { name: "Developer Choudhary", url: "https://developerchoudhary.com" },
  ],
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "bg-background font-sans antialiased scroll-smooth",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="h-[100vh] min-h-screen overflow-y-scroll overflow-x-hidden z-10 max-h-fit w-[100vw] relative flex justify-between flex-col">
            <header className="z-20 flex w-full justify-start absolute top-4 p-4">
              <FloatingNavbar />
            </header>
            <main className="h-full flex min-h-fit justify-center items-center lg:mx-20 sm:mx-10 mx-2 ">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
        <StarsBackground />
        <ShootingStars />
      </body>
    </html>
  );
}
