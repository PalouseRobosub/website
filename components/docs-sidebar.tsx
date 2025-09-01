import styles from "@/styles/docs-sidebar.module.css"
import Image from "next/image";

const DocsSidebar = () => {
  
  return (
    <nav className={styles.sidebar}>
      <div className={styles.sidebarHeader}>
        <div className={styles.logoWrapper}>
          <Image src="/robosub_logo.svg" alt="" fill priority />
        </div>
        <div>
          Palouse RoboSub Technical Documentation
        </div>
        <select className={styles.subSelect}>
          <option>Old</option>
          <option>Shark Bait</option>
          <option>Guppy</option>
          <option>Leviathan</option>
        </select>
        <input className={styles.search} type="search" placeholder="Search" />
      </div>
    </nav>
  )
}

export default DocsSidebar;