import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const geistFont = localFont({ src: '/fonts/GeistVF.woff' });

export const metadata: Metadata = {
  title: "GDG Acharya Narendra Dev College",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geistFont.className}>
      <body>
        <div className="min-h-screen bg-[#0a0f1e]">
          <Navigation />
          <div className="pt-16">
          <main className="flex-grow">{children}</main>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}