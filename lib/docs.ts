import {Octokit} from "@octokit/rest";
import docsSetup from "@/docs";
import {readdirSync} from "fs";
import path from "path";

export const indexDocs = async () => {
  const octokit = new Octokit({ auth: process.env.GITHUB_PAT })

  const docsIndex = docsSetup

  for (const sub of docsIndex.subs) {
    for (const section of sub.sections) {
      if (section.type === "internal") {

        const contents = readdirSync(
          path.join(process.cwd(), section.path),
          { recursive: true, withFileTypes: true }
        )

        const files = contents.filter((i) => i.isFile())

        section.params = files.map((file) => ({
          slug: file.parentPath
            .split("docs-root/")[1]
            .split("/")
            .concat(file.name.replace(".mdx", "")),
        }))
        section.routes = files.map((file) => ({
          params: {
            slug: file.parentPath
              .split("docs-root/")[1]
              .split("/")
              .concat(file.name.replace(".mdx", ""))
          },
          name: file.name.replace(".mdx", "")
        }))

      } else if (section.type === "ros_ws") {

        const { data } = await octokit.rest.repos.getContent({
          owner: section.owner as string,
          repo: section.repo as string,
          path: section.path,
        })

        if (!Array.isArray(data)) section.params = []
        else section.params = data.map((item) => ({
          slug: [sub.name.toLowerCase(), section.name.toLowerCase(), item.name.toLowerCase()],
        }))

      }
    }
  }
  return docsIndex;
}