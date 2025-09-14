import styles from "@/styles/gallery-image.module.css"

const GalleryImage = ({ name, caption }: { name: string, caption: string }) => {
  
  return (
    <div className={styles.container}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`gallery-images/${name}`} alt="" className={styles.image} />
      <div className={styles.caption}>{caption}</div>
    </div>
  )
}

export default GalleryImage;