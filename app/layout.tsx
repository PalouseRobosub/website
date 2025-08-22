import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";
import Header from "@/components/header";

const aptos = localFont({
  src: '../public/fonts/Aptos.ttf'
})

export const metadata: Metadata = {
  title: "Palouse RoboSub",
  description: "The official Palouse RoboSub team website, run by WSU",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${aptos.className}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
