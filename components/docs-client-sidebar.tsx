"use client"

import docsSetup from "@/docs.json";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader,
  SidebarMenu, SidebarMenuButton,
  SidebarMenuItem, useSidebar
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {ChevronsUpDown} from "lucide-react";
import Link from "next/link";
import {useState} from "react";

const DocsClientSidebar = ({ docsIndex }) => {

  const { isMobile } = useSidebar()
  const [activeSub, setActiveSub] = useState(docsSetup.subs[0]);

  return (
    <Sidebar variant="inset" collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton size="lg">
                  <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                    {/*<activeSub.logo className="size-4" />*/}
                  </div>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-medium">{activeSub.name}</span>
                    <span className="truncate text-xs">{activeSub.yearsActive}</span>
                  </div>
                  <ChevronsUpDown className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
                align="start"
                side={isMobile ? "bottom" : "right"}
                sideOffset={4}
              >
                <DropdownMenuLabel className="text-muted-foreground text-xs">
                  Subs
                </DropdownMenuLabel>
                {docsSetup.subs.map((sub, index) => (
                  <Link
                    key={sub.name}
                    href={`/docs/${sub.name.toLowerCase()}`}
                  >
                    <DropdownMenuItem
                      onClick={() => setActiveSub(sub)}
                      className="gap-2 p-2"
                    >
                      <div className="flex size-6 items-center justify-center rounded-md border">
                        {/*<sub.logo className="size-3.5 shrink-0" />*/}
                      </div>
                      {sub.name}
                    </DropdownMenuItem>
                  </Link>

                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        {activeSub.sections && activeSub.sections.map((section, index) => (
          <SidebarGroup key={index}>
            <SidebarGroupLabel>{section.name}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {docsIndex[docsSetup.subs.indexOf(activeSub)][index].length && docsIndex[docsSetup.subs.indexOf(activeSub)][index].map((item) => {
                  return (
                    <SidebarMenuItem key={item.name}>
                      <SidebarMenuButton asChild>
                        <a href={item.git_url}>
                          {item.type == "page" && <span>{item.name.replace(".mdx", "").replaceAll("_", " ")}</span>}
                          {item.sha && <span>{item.name}</span>}
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                )
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}

export default DocsClientSidebar