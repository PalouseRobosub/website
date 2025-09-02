import { readdirSync } from "fs";
import path from "path";
import DocsClientSidebar from "./docs-client-sidebar";

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

const DocsSidebar = () => {
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
  
  return (
    <DocsClientSidebar docsContents={docsContents} />
  )
}

export default DocsSidebar;