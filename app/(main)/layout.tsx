import type { Metadata } from "next";
import {Montserrat} from 'next/font/google'
import "./main.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "variable"
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
      <body className={`${montserrat.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
