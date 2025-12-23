import {ModeToggle} from "@/components/mode-toggle";
import DocsSearch from "@/components/docs-search";
import {SidebarTrigger} from "@/components/ui/sidebar";

const DocsHeader = () => {
  return (
    <header className="flex h-(--header-height) shrink-0 items-center justify-between flex-row px-4 gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex flex-row gap-4">
        <SidebarTrigger />
        <h1 className="text-3xl">Palouse RoboSub Docs</h1>
      </div>
      <div className="flex flex-row gap-4">
        <DocsSearch />
        <ModeToggle />
      </div>
    </header>
  );
};

export default DocsHeader;