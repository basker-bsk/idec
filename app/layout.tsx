import "./globals.css";
import { Providers } from "./GlobalRedux/provider";
import type { Metadata } from "next";
import FooterIdec from "@/components/footer-idec";
import Header from "@/components/Header/Header";
import localFont from "next/font/local";

const gotham = localFont({
  src: [
    {
      path: "../public/fonts/Gotham-Book.otf",
      weight: "400",
    },
    {
      path: "../public/fonts/Gotham-Medium.otf",
      weight: "500",
    },
    {
      path: "../public/fonts/Gotham-Bold.otf",
      weight: "700",
    },
  ],
  variable: "--font-gotham",
});

export const metadata: Metadata = {
  title: "HDFC",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" className={`${gotham.variable} font-sans`}>
        <link rel="shortcut icon" href="/assets/images/favicon.ico" />

        <body className="IDEC bg-white">
          <Providers initialReduxState="">
            {/* <Header /> */}
            <main>{children}</main>
            {/* <FooterIdec /> */}
          </Providers>
        </body>
      </html>
    </>
  );
}
