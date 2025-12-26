import {Octokit} from "@octokit/rest";
import { readdirSync } from "fs";
import path from "path";
import DocsClientSidebar from "@/components/docs-client-sidebar";
import docsSetup from "@/docs.json";
import {asyncWalk} from "estree-walker";

export interface Page {
  name: string,
  path: string,
  type: "page"
}

export interface Dir {
  name: string,
  path: string,
  type: "dir",
  children: (Dir|Page)[]
}

export default async function DocsSidebar() {
  const octokit = new Octokit({auth: process.env.GITHUB_PAT});

  const {data} = await octokit.rest.repos.getContent({
    owner: "PalouseRobosub",
    repo: "guppy",
    path: ""
  })
  // console.log(data)

  const indexDocs = async () => {

    const subPromises = docsSetup.subs.map(async (sub) => {
      if (!sub.sections?.length) return [];


      const sectionPromises = sub.sections.map(async (section) => {
        switch (section.type) {
          case "ros_ws":

            const { data } = await octokit.rest.repos.getContent({
              owner: section.owner,
              repo: section.repo,
              path: section.path,
            });
            return data;

          default:
            return {};
        }
      });

      return Promise.all(sectionPromises);
    });

    return Promise.all(subPromises);
  };


  const docsIndex = await indexDocs();
  console.log(docsIndex);

  const indexDir = (dir: string): Dir => {
    const entries = readdirSync(dir, { encoding: "utf-8", withFileTypes: true })

    return {
      name: path.basename(dir),
      path: dir,
      type: "dir",
      children: entries.map(entry => {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
          return indexDir(fullPath);
        } else {
          return {
            name: entry.name,
            path: fullPath,
            type: "page"
          };
        }
      })
    }
  }

  const docsContents = indexDir(path.join(process.cwd(), "docs-root"))
  // console.log(docsContents)

  return (
    <DocsClientSidebar docsIndex={docsIndex} />
  )
}