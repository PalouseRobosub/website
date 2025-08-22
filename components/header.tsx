import styles from "@/styles/header.module.css"
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  
  return (
    <header className={styles.header}>
      <div className={styles.titleWrapper}>
        <div className={styles.logoWrapper}>
          <Image src="/robosub_logo.png" alt="" fill priority />
        </div>
        <div className={styles.title}><Link href="/">Palouse RoboSub</Link></div>
      </div>
      <div className={styles.linkWrapper}>
        <Link href="/about" className={styles.link}>About</Link>
        <Link href="/officers" className={styles.link}>Officers</Link>
        <Link href="/blog" className={styles.link}>Blog</Link>
        <Link href="/contact" className={styles.link}>Contact</Link>
        <Link href="/join" className={styles.joinButton}>JOIN US</Link>
        <Link href="/donate" className={styles.donateButton}>DONATE</Link>
      </div>
    </header>
  )
}

export default Header;