import type { Metadata } from "next";

import { Playpen_Sans } from "next/font/google";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import "./globals.css";
import { ScreenWidthProvider } from "./context/ContextScreenSize";

const playPenSans = Playpen_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "DrawUI - Simple and Funny sketchy style components",
  description: "A simple and small library with User Interface Components in Sketchy Style",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body
        className={`${playPenSans.variable} antialiased bg-dotted`}
      >
        <ScreenWidthProvider>
          <Header/>
          {children}
          <Footer/>
        </ScreenWidthProvider>
      </body>
    </html>
  );
}
