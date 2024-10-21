import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import Footer from "@/components/Footer";

const intern = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OCEAN",
  description: "Best modern CRM Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
l        <link rel="shortcut icon" href="./favicon.ico" />
      </Head>
      <body
        className={`${intern.className} bg-slate-900 text-slate-400 text-lg min-h-screen overflow-x-hidden`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
