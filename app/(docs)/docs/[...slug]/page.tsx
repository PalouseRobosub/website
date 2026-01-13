import { readdirSync } from "fs"
import path from "path"
import docsSetup from "@/docs.json";
import { Octokit } from "@octokit/rest";
import {MDXRemote, MDXRemoteOptions} from "next-mdx-remote-client/rsc";
import {ScrollArea} from "@/components/ui/scroll-area";
import {notFound} from "next/dist/client/components/not-found";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeShiki from "@shikijs/rehype";
import NoReadme from "@/components/no-readme";

export async function generateStaticParams() {
  const octokit = new Octokit({ auth: process.env.GITHUB_PAT })

  const params = await Promise.all(
    docsSetup.subs.flatMap((sub) =>
      (sub.sections ?? []).map(async (section) => {
        if (section.type === "internal") {
          const contents = readdirSync(
            path.join(process.cwd(), section.path),
            { recursive: true, withFileTypes: true }
          )

          const files = contents.filter((i) => i.isFile())

          return files.map((file) => ({
            slug: file.parentPath
              .split("docs-root/")[1]
              .split("/")
              .concat(file.name.replace(".mdx", "")),
          }))
        }

        if (section.type === "ros_ws") {
          const { data } = await octokit.rest.repos.getContent({
            owner: section.owner as string,
            repo: section.repo as string,
            path: section.path,
          })

          if (!Array.isArray(data)) return []

          return data.map((item) => ({
            slug: [sub.name.toLowerCase(), section.name.toLowerCase(), item.name.toLowerCase()],
          }))
        }

        return []
      })
    )
  )
  // console.log(params.flat())
  return params.flat()
}


export default async function Page({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params
  const octokit = new Octokit({ auth: process.env.GITHUB_PAT })

  const options: MDXRemoteOptions = {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings, [rehypeShiki, {theme: "github-dark"}]]
    },
  }

  let activeSub = undefined
  for (const sub of docsSetup.subs) {
    if (sub.name.toLowerCase() == slug[0]) {
      activeSub = sub
    }
  }
  let activeSection = undefined
  if (!activeSub) return notFound()
  for (const section of activeSub.sections) {
    if (section.name.toLowerCase() == slug[1]) {
      activeSection = section
    }
  }
  if (!activeSection) return notFound()
  switch (activeSection.type) {
    case "internal":
      const { default: Post } = await import(`@/docs-root/${slug.join("/")}.mdx`)
      return <Post />
    case "ros_ws":
      const { data } = await octokit.rest.repos.getContent({
        owner: activeSection.owner as string,
        repo: activeSection.repo as string,
        path: activeSection.path + "/" + slug[2],
      });
      let readme = undefined
      if (!Array.isArray(data)) return notFound()
      for (const item of data) {
        if (item.name.toLowerCase() == "readme.md") {
          readme = item
        }
      }
      if (readme && readme.download_url) {
        const res = await fetch(readme.download_url)
        const mdx = await res.text()
        return (
          <ScrollArea className="prose prose-neutral dark:prose-invert h-full max-w-none overflow-y-auto p-8">
            <MDXRemote source={mdx} options={options} />
          </ScrollArea>
        )
      } else {
        return <NoReadme name={slug.pop()||"ERROR"} />
      }
  }
}