import type { PostMeta } from "@/app/(main)/blog/types";
// import styles from "@/styles/blog.module.css"

const BlogMeta = ({ meta }: { meta: PostMeta }) => {
  
  return (
    <div className="flex flex-col gap-1">
      <span>Written by: {meta.author}</span>
      <span>Published: {meta.published}</span>
      <span>Updated: {meta.updated}</span>
      <div className="flex flex-row items-center">
        Tags:&nbsp;
        <div className="flex flex-row items-center flex-wrap gap-2">
          {meta.tags.map((tag, i) => (
            <span className="bg-[#A60F2D4D] text-[#A60F2D] rounded-full py-1 px-2.5 h-min" key={i}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BlogMeta;