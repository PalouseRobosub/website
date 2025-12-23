import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar"
import {Octokit} from "@octokit/rest";
import { readdirSync } from "fs";
import path from "path";
import docsSetup from "../docs.json"
import SubSwitcher from "@/components/sub-switcher";

export interface Page {
  name: string,
  path: string,
  type: "page"
}

export interface Dir {
  name: string,
  path: string,
  type: "dir",
  children: (Dir|Page)[]
}

export default async function DocsSidebar() {
  const octokit = new Octokit({auth: process.env.GITHUB_PAT});

  const {data} = await octokit.rest.repos.getContent({
    owner: "PalouseRobosub",
    repo: "guppy",
    path: ""
  })
  console.log(data)

  const indexDir = (dir: string): Dir => {
    const entries = readdirSync(dir, { encoding: "utf-8", withFileTypes: true })

    return {
      name: path.basename(dir),
      path: dir,
      type: "dir",
      children: entries.map(entry => {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
          return indexDir(fullPath);
        } else {
          return {
            name: entry.name,
            path: fullPath,
            type: "page"
          };
        }
      })
    }
  }

  const docsContents = indexDir(path.join(process.cwd(), "docs-root"))
  console.log(docsContents)

  return (
    <Sidebar variant="inset" collapsible="icon">
      <SubSwitcher docsSetup={docsSetup} />
      <SidebarContent>
        <SidebarGroup />
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}