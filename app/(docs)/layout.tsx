import DocsHeader from "@/components/docs-header";
import {SidebarInset, SidebarProvider} from "@/components/ui/sidebar";
import DocsSidebar from "@/components/docs-sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider className="w-screen h-screen overflow-hidden" defaultOpen
      style={
       {
         "--sidebar-width": "calc(var(--spacing) * 72)",
         "--header-height": "calc(var(--spacing) * 12)",
       } as React.CSSProperties
      }
    >
      <DocsSidebar />
        <main className="bg-background relative flex w-full flex-1 flex-col max-w-full max-h-full">
          <DocsHeader />
          {children}
        </main>
    </SidebarProvider>
  );
};

export default Layout;