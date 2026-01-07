import { readdirSync } from "fs"
import path from "path"
import docsSetup from "@/docs.json";


export function generateStaticParams() {
  const docsContents = readdirSync(path.join(process.cwd(), "docs-root"), { recursive: true, withFileTypes: true, encoding: "utf-8" })
  const docsFiles = docsContents.filter(i => i.isFile())

  const allParams = docsSetup.subs.flatMap((sub) =>
    sub.sections
      ? sub.sections.flatMap((section) => {
        if (section.type === "internal") {
          const contents = readdirSync(path.join(process.cwd(), section.path), { recursive: true, withFileTypes: true, encoding: "utf-8" })
          const files = contents.filter(i => i.isFile())
          return files.map((file) => ({
            slug: file.parentPath.split(section.path + "/")[1].split("/").concat(file.name.replace(".mdx", ""))
          }))
        }
        return []
      })
      : []
  )

  console.log(allParams)


  const staticParams = docsFiles.map((file) => ({
    slug: file.parentPath.split("docs-root/")[1].split("/").concat(file.name.replace(".mdx", ""))
  }))

  console.log(staticParams)

  return staticParams
}

export default async function Page({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params
  const { default: Post } = await import(`@/docs-root/${slug.join("/")}.mdx`)
  
  return <Post />
}