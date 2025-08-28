import styles from "@/styles/gallery-image.module.css"

const GalleryImage = ({ name, caption }: { name: string, caption: string }) => {
  
  return (
    <div className={styles.container}>
      <img src={`gallery/${name}`} alt="" className={styles.image} />
      <div className={styles.caption}>{caption}</div>
    </div>
  )
}

export default GalleryImage;