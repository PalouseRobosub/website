import styles from "@/styles/footer.module.css"
import { Building, Mail } from "lucide-react";
import { SiInstagram, SiGithub } from "@icons-pack/react-simple-icons";
import Image from "next/image";

const Footer = () => {

  return (
    <footer className={styles.footer}>
      <div>
        <a href="https://vcea.wsu.edu" target="_blank">
          <Image src="/vcea.png" alt="Voiland College of Engineering and Architecture" width={300} height={75} />
        </a>
      </div>
      <div className={styles.flexRow}>
        <div className={styles.flexCol} style={{ marginRight: "10px" }}>
          <div className={styles.flexRow}>
            <Image src="/linkedin.svg" alt="LinkedIn" height={24} width={24} />
            <a href="https://www.linkedin.com/company/palouse-robosub" target="_blank" style={{color: "white"}}>Palouse RoboSub</a>
          </div>
          <div className={styles.flexRow}>
            <Image src="/involve.svg" alt="Involve" height={24} width={24} style={{ borderRadius: "4px" }} />
            <a href="https://wsu.presence.io/organization/palouse-robosub" target="_blank" style={{color: "white"}}>WSU Presence</a>
          </div>
        </div>
        <div className={styles.flexCol} style={{ marginRight: "10px" }}>
          <div className={styles.flexRow}>
            <SiInstagram />
            <a href="https://www.instagram.com/wsu.robosub/" target="_blank" style={{color: "white"}}>@wsu.robosub</a>
          </div>
          <div className={styles.flexRow}>
            <SiGithub />
            <a href="https://github.com/PalouseRobosub" target="_blank" style={{color: "white"}}>@PalouseRobosub</a>
          </div>
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
        </div>
      </div>
    </footer>
  )
}

export default Footer;
