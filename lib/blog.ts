import {PostMeta} from "@/app/(main)/blog/types";
import {readdirSync} from "fs";
import {join} from "path";

const indexBlogPosts = async () => {
  // get all post files
  const files = readdirSync(join(process.cwd(), "/blog-posts"))

  // collect metadata from all posts
  const posts = await Promise.all(files.map(async (file) => {
    const { meta } = await import(`@/blog-posts/${file}`) as { meta: PostMeta }

    return {...meta, slug: file.split(".")[0]}
  }))

  // sort posts by date published
  const sortedPosts = posts.sort((a, b) => {
    const dateA = new Date(a.published).getTime()
    const dateB = new Date(b.published).getTime()

    return dateB - dateA
  })

  return sortedPosts;
}

export {indexBlogPosts};