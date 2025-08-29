import type { PostMeta } from "@/app/blog/types";
import styles from "@/styles/blog.module.css"

const BlogMeta = ({ meta }: { meta: PostMeta }) => {
  
  return (
    <div className={styles.container}>
      <span>Written by: {meta.author}</span>
      <span>Published: {meta.published}</span>
      <span>Updated: {meta.updated}</span>
      <div className={styles.tagsWrapper}>
        Tags:&nbsp;
        <div className={styles.tagContainer}>
          {meta.tags.map((tag, i) => (
            <span className={styles.tag} key={i}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BlogMeta;