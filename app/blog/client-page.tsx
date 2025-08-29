'use client'

import { PostMeta } from "./types";
import Link from "next/link";
import styles from "@/styles/blog.module.css"
import { useState } from "react";

const Post = ({ data }: { data: PostMeta & { slug: string } }) => (
  <div className={styles.post}>
    <div style={{ width: "50%" }}>
      <Link href={`/blog/${data.slug}`}>{data.title}</Link>
      <div style={{ marginTop: "8px" }}>By {data.author}</div>
    </div>
    <div style={{ width: "20%" }}>
      <div style={{ marginBottom: "8px" }}>Updated: {data.updated}</div>
      <div>Published: {data.published}</div>
    </div>
    <div className={styles.tagContainer} style={{ width: "30%" }}>
      {data.tags.map((tag, i) => (
        <span className={styles.tag} key={i}>{tag}</span>
      ))}
    </div>
  </div>
)

const ClientPage = ({ posts }: { posts: (PostMeta & { slug: string })[] }) => {
  
  const [query, setQuery] = useState("")
  
  let results = posts
  
  if (query && query.trim().length > 0) {
    const lcQuery = query.toLowerCase();
    results = posts.filter((post) => post.title.toLowerCase().includes(lcQuery) || post.tags.some(tag => tag.toLowerCase().includes(lcQuery)));
  }
  
  return (
    <>
      <input className={styles.search} placeholder="Search" onChange={(e) => setQuery(e.target.value)} />
      <div className={styles.postContainer}>
        {results.map((post, i) => (
          <Post data={post} key={i}/>
        ))}
      </div>
    </>
  )
}

export default ClientPage;