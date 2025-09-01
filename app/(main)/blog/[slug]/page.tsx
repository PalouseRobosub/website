import { readdirSync } from "fs"
import { join } from "path"

export const dynamicParams = false

export function generateStaticParams() {
  const posts = readdirSync(join(process.cwd(), "/blog-posts"))
  
  const slugs = posts.map((post) => ({
    slug: post.split(".")[0]
  }))
  
  return slugs
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const { default: Post } = await import(`@/blog-posts/${slug}.mdx`)
  
  return <Post />
}