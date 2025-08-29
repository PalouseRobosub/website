import styles from "@/styles/blog.module.css"
import { readdirSync } from "fs";
import { join } from "path";
import { PostMeta } from "./types";
import Link from "next/link";

const Post = ({ data }: { data: PostMeta & { slug: string } }) => (
  <div className={styles.post}>
    <div style={{ width: "50%" }}>
      <Link href={`/blog/${data.slug}`}>{data.title}</Link>
      <div style={{ marginTop: "8px" }}>By {data.author}</div>
    </div>
    <div style={{ width: "20%" }}>
      <div style={{ marginBottom: "8px" }}>Updated: {data.updated}</div>
      <div>Published: {data.published}</div>
    </div>
    <div className={styles.tagContainer} style={{ width: "30%" }}>
      {data.tags.map((tag, i) => (
        <span className={styles.tag} key={i}>{tag}</span>
      ))}
    </div>
  </div>
)

const Page = async () => {
  
  const files = readdirSync(join(process.cwd(), "/blog-posts"))
  
  const posts = await Promise.all(files.map(async (file) => {
    const { meta } = await import(`@/blog-posts/${file}`) as { meta: PostMeta }
    
    return {...meta, slug: file.split(".")[0]}
  }))
  
  const sortedPosts = posts.sort((a, b) => {
    const dateA = new Date(a.published).getTime()
    const dateB = new Date(b.published).getTime()
    
    return dateB - dateA
  })
  
  return (
    <main>
      <h1>Palouse RoboSub Blog</h1>
      <div className={styles.postContainer}>
        {sortedPosts.map((post, i) => (
          <Post data={post} key={i}/>
        ))}
      </div>
    </main>
  )
}

export default Page;