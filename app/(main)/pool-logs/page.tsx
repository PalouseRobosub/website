import ClientPage from "./client-page";
import {indexPoolLogs} from "@/lib/logs";

// server component, executed at build time to use filesystem APIs in indexBlogPosts()
const Page = async () => {

  // get blog posts
  const posts = await indexPoolLogs()
  
  return (
    <main className="px-[15%] flex-1">
      <h1 className="text-[36px] font-bold text-center my-4">Pool Logs</h1>
      {/* pass post data to client component */}
      <ClientPage posts={posts} />
    </main>
  )
}

export default Page;