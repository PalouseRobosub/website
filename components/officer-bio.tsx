import styles from "@/styles/officer-bio.module.css"
import Image from "next/image";

const OfficerBio = ({ children, imageSrc, marginBottom }: { children: React.ReactNode, imageSrc: string, marginBottom: string|undefined }) => {
  
  return (
    <div className={styles.bioWrapper} style={{marginBottom: marginBottom}}>
      <Image src={imageSrc} alt="" height={350} width={350} />
      <div>
        {children}
      </div>
    </div>
  )
}

export default OfficerBio;