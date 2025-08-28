import styles from "@/styles/footer.module.css"
import { Building, Mail } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  
  return (
    <footer className={styles.footer}>
      <div>
        <a href="https://vcea.wsu.edu" target="_blank">
          <Image src="/vcea.png" alt="Voiland College of Engineering and Architecture" width={300} height={75} />
        </a>
      </div>
      <div className={styles.flexCol}>
        <div className={styles.flexRow}>
          <Building />
          <a href="https://maps.app.goo.gl/7Q5XkS5YgbN3bmqq8" target="_blank" style={{color: "white"}}>Dana 3</a>
        </div>
        <div className={styles.flexRow}>
          <Mail />
          <a href="mailto:robosub.vcea@wsu.edu" style={{color: "white"}}>robosub.vcea@wsu.edu</a>
        </div>
        <div></div>
      </div>
    </footer>
  )
}

export default Footer;
