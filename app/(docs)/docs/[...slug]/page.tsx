import { readdirSync } from "fs"
import path from "path"
import docsSetup from "@/docs.json";
import { Octokit } from "@octokit/rest";


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
            slug: [sub.name, section.name, item.name],
          }))
        }

        return []
      })
    )
  )

  return params.flat()
}


export default async function Page({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params
  let activeSub = undefined
  for (const sub of docsSetup.subs) {
    if (sub.name.toLowerCase() == slug[0]) {
      activeSub = sub
    }
  }
  let activeSection = undefined
  for (const section of activeSub.sections) {
    if (section.name == slug[1]) {
      activeSection = section
    }
  }

  switch (activeSection.type) {
    case "internal":
      const { default: Post } = await import(`@/docs-root/${slug.join("/")}.mdx`)
      return <Post />
    case "ros_ws":

      break
  }
}