import { readdirSync } from "fs"
import { join } from "path"

export const dynamicParams = false

// runs at build time, generates a list of all possible dynamic routes, REQUIRED for static export
export function generateStaticParams() {
  // list all blog post files
  const posts = readdirSync(join(process.cwd(), "/blog-posts"))

  // generate slugs from filename by stripping extension
  const slugs = posts.map((post) => ({
    slug: post.split(".")[0]
  }))
  
  return slugs
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  // get url segment
  const { slug } = await params

  // dynamically import post content based on slug as react component
  const { default: Post } = await import(`@/blog-posts/${slug}.mdx`)

  // render content as react component
  return <Post />
}