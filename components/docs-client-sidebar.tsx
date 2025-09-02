'use client'

import styles from "@/styles/docs-sidebar.module.css"
import Image from "next/image";
import { useState } from "react";
import type { Dir, Page } from "./docs-sidebar";
import Link from "next/link";
import { FolderClosed, FolderOpen } from "lucide-react";

const Route = ({ page }: { page: Page }) => (
  <div className={styles.route}>
    <Link href={`/docs/${page.path.split("docs-root/")[1].replace(".mdx", "")}`}>{page.name}</Link>
  </div>
)

const Folder = ({ folder }: { folder: Dir }) => {
  const [open ,setOpen] = useState(false)
  
  return (
    <div className={styles.folderWrapper}>
      <div className={styles.folder} onClick={() => setOpen(!open)}>
        {open ? <FolderOpen /> : <FolderClosed />}<div>{folder.name}</div>
      </div>
      <div style={{ display: `${open ? "block" : "none"}`}}>
        {folder.children.map((item, i) => {
          switch (item.type) {
            case "dir":
              return <Folder folder={item} key={i} />
            case "page":
              return <Route page={item} key={i} />
          }
        })}
      </div>
    </div>
  )
}

const DocsClientSidebar = ({ docsContents }: { docsContents: Dir }) => {
  
  const subs = docsContents.children.filter(i => i.type === "dir").sort((a, b) => b.name.localeCompare(a.name))
  
  const [selectedSub, setSelectedSub] = useState(subs[0])

  const subContents = selectedSub.children
  
  return (
    <nav className={styles.sidebar}>
      <div className={styles.sidebarHeader}>
        <div className={styles.logoWrapper}>
          <Image src="/robosub_logo.svg" alt="" fill priority />
        </div>
        <div>
          Palouse RoboSub Technical Documentation
        </div>
        <select className={styles.subSelect} onChange={(e) => setSelectedSub(subs[e.target.value as unknown as number])}>
          {subs.map((sub, i) => (
            <option key={i} value={i}>{sub.name}</option>
          ))}
        </select>
        {selectedSub.name}
        <input className={styles.search} type="search" placeholder="Search" />
      </div>
      <div>
        {subContents.map((item, i) => {
          switch (item.type) {
            case "dir":
              return <Folder folder={item} key={i} />
            case "page":
              return <Route page={item} key={i} />
          }
        })}
      </div>
    </nav>
  )
}

export default DocsClientSidebar;