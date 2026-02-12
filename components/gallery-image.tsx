//import styles from "@/styles/gallery-image.module.css"

const GalleryImage = ({ name, caption }: { name: string, caption: string }) => {
  
  return (
    <div className="relative w-full mb-12 flex flex-col items-center">
      <img src={`gallery-images/${name}`} alt="" className="object-contain w-full h-auto max-h-[60vh] block" />
      <div className="bg-[#A60F2D] text-white py-2 px-4 text-3xl text-center -my-8">{caption}</div>
    </div>
  )
}

export default GalleryImage;