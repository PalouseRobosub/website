'use client'

import {useSidebar} from "@/components/ui/sidebar";
import {PanelLeftIcon} from "lucide-react";
import Link from "next/link";

const DocsHeader = () => {
  const { toggleSidebar } = useSidebar()
  return (
    <header className="flex p-2.5 shrink-0 items-center justify-between flex-row px-4 gap-2 border-b bg-[#a41631]">
      <div className="flex flex-row items-center gap-2 text-white">
        <PanelLeftIcon className="hover:cursor-pointer" onClick={toggleSidebar} />
        <Link href="/docs">
          <h1 className="text-4xl font-semibold">Palouse RoboSub Docs</h1>
        </Link>
      </div>
    </header>
  );
};

export default DocsHeader;