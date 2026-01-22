import { Building, Mail } from "lucide-react";
import { SiInstagram, SiGithub } from "@icons-pack/react-simple-icons";
import Image from "next/image";

const Footer = () => {

  return (
    <footer className="w-full bg-[#4d4d4d] p-6 text-white flex justify-between items-center">
      <div>
        <a href="https://vcea.wsu.edu" target="_blank">
          <Image src="/vcea.png" alt="Voiland College of Engineering and Architecture" width={300} height={75} />
        </a>
      </div>
      <div className="flex items-center gap-1">
        <div className="flex flex-col gap-1" style={{ marginRight: "10px" }}>
          <div className="flex items-center gap-1">
            <Image src="/linkedin.svg" alt="LinkedIn" height={24} width={24} className="m-0" />
            <a href="https://www.linkedin.com/company/palouse-robosub" target="_blank" style={{color: "white"}}>Palouse RoboSub</a>
          </div>
          <div className="flex items-center gap-1">
            <Image src="/involve.svg" alt="Involve" height={24} width={24} className="rounded-lg m-0" />
            <a href="https://wsu.presence.io/organization/palouse-robosub" target="_blank" style={{color: "white"}}>WSU Presence</a>
          </div>
        </div>
        <div className="flex flex-col gap-1" style={{ marginRight: "10px" }}>
          <div className="flex items-center gap-1">
            <SiInstagram className="m-0" />
            <a href="https://www.instagram.com/wsu.robosub/" target="_blank" style={{color: "white"}}>@wsu.robosub</a>
          </div>
          <div className="flex items-center gap-1">
            <SiGithub className="m-0" />
            <a href="https://github.com/PalouseRobosub" target="_blank" style={{color: "white"}}>@PalouseRobosub</a>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1">
            <Building className="m-0" />
            <a href="https://maps.app.goo.gl/7Q5XkS5YgbN3bmqq8" target="_blank" style={{color: "white"}}>Dana 3</a>
          </div>
          <div className="flex items-center gap-1">
            <Mail className="m-0" />
            <a href="mailto:robosub.vcea@wsu.edu" style={{color: "white"}}>robosub.vcea@wsu.edu</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
