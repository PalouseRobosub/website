import styles from "@/styles/footer.module.css"
import Image from "next/image";

const Footer = () => {
  
  return (
    <footer className={styles.footer}>
      <a href="https://vcea.wsu.edu">
        <Image src="/vcea.png" alt="Voiland College of Engineering and Architecture" width={300} height={75} />
      </a>
    </footer>
  )
}

export default Footer;