import ClientPage from "./client-page";
import {indexBlogPosts} from "@/lib/blog";

// server component, executed at build time to use filesystem APIs in indexBlogPosts()
const Page = async () => {

  // get blog posts
  const posts = await indexBlogPosts()
  
  return (
    <main>
      <h1>Palouse RoboSub Blog</h1>
      {/* pass post data to client component */}
      <ClientPage posts={posts} />
    </main>
  )
}

export default Page;