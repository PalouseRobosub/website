import styles from "@/styles/officer-bio.module.css"
// import Image from "next/image";

export const OfficersWrapper = ({ children }: { children: React.ReactNode }) => {

  const wrapperStyles: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    flexWrap:"wrap",
    justifyContent: "center",
    gap: "24px",
    marginBottom: "24px",
    width: "90vw",
    maxWidth: "90vw",
    position: "relative",
    left: "50%",
    transform: "translateX(-50%)",
  }

  return (
    <div style={wrapperStyles}>
      {children}
    </div>
  )
}

const OfficerBio = ({ children, imageSrc }: { children: React.ReactNode, imageSrc: string }) => {

  // return (
  //   <div className={styles.bioWrapper}>
  //     <Image src={imageSrc} alt="" height={250} width={250} />
  //     <div>
  //       {children}
  //     </div>
  //   </div>
  // )
	return (
    <div className={styles.bioWrapper}>
      <div>
        {children}
      </div>
    </div>
  )

}

export default OfficerBio;
