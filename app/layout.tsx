import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rojava Aid Hub",
  description:
    "A non-profit humanitarian information platform that links to verified organizations supporting North & East Syria.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     <body
  className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen text-white`}
>
  <div className="fixed inset-0 -z-10 bg-black">
    <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-black to-black" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.10),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.08),transparent_40%)]" />
  </div>

  <Header />

  <main className="mx-auto w-full max-w-5xl p-6">{children}</main>

  <Footer />
</body>
    </html>
  );
}