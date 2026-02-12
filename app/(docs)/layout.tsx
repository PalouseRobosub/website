import type {Metadata} from "next";
import {Montserrat, JetBrains_Mono} from 'next/font/google'
import DocsSidebar from "@/components/docs-sidebar";
import {SidebarProvider} from "@/components/ui/sidebar";
import DocsHeader from "@/components/docs-header";
import "@/app/globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "variable"
})

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-jetbrains"
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

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
    <body className={`${montserrat.className} ${jetBrainsMono.variable}`} style={bodyStyles}>
    <SidebarProvider
      className="w-screen h-screen overflow-hidden" defaultOpen
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <DocsSidebar/>
      <main className="bg-background relative flex w-full flex-1 flex-col max-w-full max-h-full">
        <DocsHeader/>
        {children}
      </main>
    </SidebarProvider>
    </body>
    </html>
  );
}
