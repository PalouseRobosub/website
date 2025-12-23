import DocsHeader from "@/components/docs-header";
import {SidebarInset, SidebarProvider} from "@/components/ui/sidebar";
import DocsSidebar from "@/components/docs-sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider className="w-screen" defaultOpen
      style={
       {
         "--sidebar-width": "calc(var(--spacing) * 72)",
         "--header-height": "calc(var(--spacing) * 12)",
       } as React.CSSProperties
      }
    >
      <DocsSidebar />
        <SidebarInset>
          <DocsHeader />
          {children}
        </SidebarInset>
    </SidebarProvider>
  );
};

export default Layout;