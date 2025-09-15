
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ReactElement } from "react";
import "./globals.css";
import Navbar from "@/componentUI/navbar";
import Footer from "@/componentUI/footer";
import { ThemeProvider } from "./provider";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TonBoutiquier.com",
  description: "Faites vos achats en ligne en toute securite",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const isNotFound =
    typeof children === "object" &&
    children !== null &&
    (children as ReactElement)?.type === 'NotFound';

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster/>
        {!isNotFound && <Navbar />}
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <main className="pt-5">{children}</main>
          <Footer/>
        </ThemeProvider>
        
      </body>
    </html>
  );
}
