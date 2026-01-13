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
import {JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useState} from "react";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const DocsClientSidebar = ({docsIndex}) => {

  const {isMobile} = useSidebar()
  const [activeSub, setActiveSub] = useState(docsSetup.subs[0]);

  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton size="lg">
                  <div
                    className="flex aspect-square size-12 items-center justify-center">
                    <img src={`/${activeSub.logo}`} className="size-12 aspect-square" />
                  </div>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-medium">{activeSub.name}</span>
                    <span className="truncate text-xs">{activeSub.yearsActive}</span>
                  </div>
                  <ChevronsUpDown className="ml-auto"/>
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
                  <DropdownMenuItem
                    onClick={() => setActiveSub(sub)}
                    className="gap-2 p-2"
                    key={index}
                  >
                    <div className="flex size-8 items-center justify-center rounded-md">
                      <img src={`/${sub.logo}`} className="size-8 aspect-square" />
                    </div>
                    {sub.name}
                  </DropdownMenuItem>
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
                {docsIndex[docsSetup.subs.indexOf(activeSub)][index].length && docsIndex[docsSetup.subs.indexOf(activeSub)][index].map((item: { name: string; git_url: string | undefined; type: string; sha: number; }) => {
                  let url
                  switch (section.type) {
                    case "internal":
                      url = "/docs/" + activeSub.name.toLowerCase() + "/" + section.name.toLowerCase() + "/" + item.name.replace(".mdx", "")
                      break

                    case "ros_ws":
                      url = "/docs/" + activeSub.name.toLowerCase() + "/" + section.name.toLowerCase() + "/" + item.name
                      break
                  }
                  return (
                    <SidebarMenuItem key={item.name}>
                      <SidebarMenuButton asChild>
                        <a href={url}>
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