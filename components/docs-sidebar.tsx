import DocsClientSidebar from "@/components/docs-client-sidebar";
import {indexDocs} from "@/lib/docs";

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

  const docsIndex = await indexDocs();

  return (
    <DocsClientSidebar docsIndex={docsIndex} />
  )
}