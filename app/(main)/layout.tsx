import type { Metadata } from "next";
import { Montserrat, JetBrains_Mono } from 'next/font/google'
import "./main.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

// preload fonts
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "variable"
})

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-jetbrains"
})


// html head data
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
      <body className={`${montserrat.className} ${jetBrainsMono.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
