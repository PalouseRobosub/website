"use client"

import styles from "@/styles/header.module.css"
// import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [menuOpen/*, setMenuOpen*/] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.innerHeader}>
        <div className={styles.titleWrapper}>
          <Link href="/" className={styles.titleLink}>
            <div className={styles.logoWrapper}>
              <Image src="/robosub_logo.svg" alt="" fill priority />
            </div>
            <div className={styles.title}>Palouse RoboSub</div>
          </Link>
        </div>
        {/*<div className={styles.menuButton} onClick={() => setMenuOpen(!menuOpen)}><Menu/></div>*/}
        <div className={styles.linkWrapper}>
          <Link href="/about" className={styles.link}>About</Link>
          <Link href="/officers" className={styles.link}>Officers</Link>
          <Link href="/sponsors" className={styles.link}>Sponsors</Link>
          <Link href="/blog" className={styles.link}>Blog</Link>
		  {/*<Link href="/gallery" className={styles.link}>Gallery</Link>*/}
          <Link href="/join" className={styles.joinButton}>JOIN US</Link>
          <Link href="/donate" className={styles.donateButton}>DONATE</Link>
        </div>
      </div>
      <div className={styles.menu} style={{ maxHeight: `${menuOpen ? "300px" : "0px"}` }}>
        <Link href="/about" className={styles.link}>About</Link>
        <Link href="/officers" className={styles.link}>Officers</Link>
        <Link href="/sponsors" className={styles.link}>Sponsors</Link>
        <Link href="/blog" className={styles.link}>Blog</Link>
		{/*<Link href="/gallery" className={styles.link}>Gallery</Link>*/}
        <Link href="/join" className={styles.joinButton}>JOIN US</Link>
        <Link href="/donate" className={styles.donateButton}>DONATE</Link>
      </div>
    </header>
  )
}

export default Header;
