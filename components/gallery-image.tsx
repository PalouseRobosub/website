import Image from "next/image";

const GalleryImage = ({ name, caption }: { name: string, caption: string }) => {
  
  const captionStyles: React.CSSProperties = {
    backgroundColor: "#A60F2D",
    color: "white",
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    bottom: "-20px",
    width: "min-content",
    padding: "8px 16px",
    fontSize: "32px",
    textWrap: "nowrap"
  }
  
  return (
    <div style={{ position: "relative", maxHeight: "100vh", minHeight:"60vh", width: "100%", marginBottom: "48px" }}>
        <Image src={`/gallery/${name}`} alt="" fill unoptimized style={{ objectFit: "contain", width: "100%" }} />
      <div style={captionStyles}>{caption}</div>
    </div>
  )
}

export default GalleryImage;