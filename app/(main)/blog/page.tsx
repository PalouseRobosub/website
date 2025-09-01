import { readdirSync } from "fs";
import { join } from "path";
import { PostMeta } from "./types";
import ClientPage from "./client-page";

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
      <ClientPage posts={sortedPosts} />
    </main>
  )
}

export default Page;