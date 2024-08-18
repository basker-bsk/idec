import type { Metadata } from "next";

import "./globals.css";
import Sidebar from "@/components/sidebar";
import { Poppins } from "next/font/google";
import { Providers } from "./GlobalRedux/provider";
import Header from "@/components/header";
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "IDEC UI Components",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} bg-gray-100`}>
        <div className="flex">
          <div className="hidden lg:flex">
            <Sidebar />
          </div>
          <main className="py-[10px] pl-[10px] lg:pl-[320px] pr-[10px] lg:pr-[20px] lg:py-[20px] overflow-y-auto">
            <div className="mb-4 flex gap-2 lg:hidden items-center justify-center">
              <Header />
            </div>
            <Providers>{children}</Providers>
          </main>
        </div>
      </body>
    </html>
  );
}
