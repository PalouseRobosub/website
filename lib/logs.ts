import {LogMeta} from "@/app/(main)/pool-logs/types";
import {readdirSync} from "fs";
import {join} from "path";

const indexPoolLogs = async () => {
  // get all post files
  const files = readdirSync(join(process.cwd(), "/pool-logs"))

  // collect metadata from all posts
  const posts = await Promise.all(files.map(async (file) => {
    const { meta } = await import(`@/pool-logs/${file}`) as { meta: LogMeta }

    return {...meta, slug: file.split(".")[0]}
  }))

  // sort posts by date published
  const sortedLogs = posts.sort((a, b) => {
    const dateA = new Date(a.date).getTime()
    const dateB = new Date(b.date).getTime()

    return dateB - dateA
  })

  return sortedLogs;
}

export {indexPoolLogs};