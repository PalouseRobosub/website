import Image from "next/image";
import styles from "@/styles/home.module.css"
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { readdirSync } from "fs";
import { join } from "path";
import { PostMeta } from "./blog/types";

const Page = async () => {

  const files = readdirSync(join(process.cwd(), "/blog-posts"))

  const posts = await Promise.all(files.map(async (file) => {
    const { meta } = await import(`@/blog-posts/${file}`) as { meta: PostMeta }

    return {...meta, slug: file.split(".")[0]}
  }))

  const sortedPosts = posts.sort((a, b) => {
    const dateA = new Date(a.published).getTime()
    const dateB = new Date(b.published).getTime()

    return dateB - dateA
  })

  return (
    <main className={styles.main}>
      <Image src="/group.webp" priority height={634} width={1024} alt="" className={styles.mainPhoto} />
      <div className={styles.titleWrapper}>
        <h1 className={styles.title}>Palouse RoboSub</h1>
      </div>
	    <div className={styles.graySection}>
		    <p style={{ textAlign: "center" }}>
          WSU&apos;s Palouse RoboSub club develops underwater submarines designed to participate in the intercollegiate
          RoboSub national competitions. Located in the basement of Dana Hall, Palouse RoboSub combines Electrical,
          Mechanical, and Computer Engineering to create complex AUVs and ROVs.
        </p>
        <h2 style={{ fontSize: "40px" }}>Support Palouse RoboSub!</h2>
        <div className={styles.flexRow}>
          <div>If you are a student please consider <Link href="/join">joining</Link>!</div>
          <div>If you have the means please consider <Link href="donate">donating to us</Link>!</div>
          <div>If you are a company or organization please consider <Link href="/sponsors">sponsoring us</Link>!</div>
        </div>
      </div>
      <div className={styles.section}>
        <h2 style={{ fontSize: "40px" }}>Check out our blog!</h2>
        <div className={styles.flexRow}>
          <div>
            We regularly document our activities to share our progress and help the public understand our work.
            <Link href="/blog" className={styles.link}>Check the blog out here <ArrowRight/></Link>
          </div>
          <div>
            <h4 style={{ margin: "0" }}>Recent Posts</h4>
            <div className={styles.post}>
              <Link href={`/blog/${sortedPosts[0].slug}`}>{sortedPosts[0].title}</Link>
              <div>{sortedPosts[0].published}</div>
            </div>
            <div className={styles.post}>
              <Link href={`/blog/${sortedPosts[1].slug}`}>{sortedPosts[1].title}</Link>
              <div>{sortedPosts[1].published}</div>
            </div>
			{/*<div className={styles.post}>
              <Link href={`/blog/${sortedPosts[2].slug}`}>{sortedPosts[2].title}</Link>
              <div>{sortedPosts[0].published}</div>
            </div>*/}
          </div>
        </div>
      </div>
    </main>
  )
}

export default Page;
