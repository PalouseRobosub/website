import type { Metadata } from "next";
import {Montserrat} from 'next/font/google'
import "../docs.css";
import DocsSidebar from "@/components/docs-sidebar";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "variable"
})

export const metadata: Metadata = {
  title: "Palouse RoboSub Docs",
  description: "Palouse RoboSub Technical Documentation",
};

const bodyStyles: React.CSSProperties = {
  display: "grid",
  gridTemplateAreas: "\"sidebar main\"",
  gridTemplateColumns: "20vw 1fr"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className}`} style={bodyStyles}>
        <DocsSidebar />
        {children}
      </body>
    </html>
  );
}
