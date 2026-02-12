'use client'

import { PostMeta } from "./types";
import Link from "next/link";
import { useState } from "react";


// component to display information about a single post
const Post = ({ data }: { data: PostMeta & { slug: string } }) => (
  <div className="w-full flex flex-row items-center py-5 px-2.5 odd:rounded-lg odd:bg-[#ebebeb]">
    <div className="md:w-1/2">
      <Link href={`/blog/${data.slug}`} className="text-xl">{data.title}</Link>
      <div className="mb-2">By {data.author}</div>
    </div>
    <div className="md:contents hidden">
      <div className="w-1/5">
        <div className="mb-2">Updated: {data.updated}</div>
        <div>Published: {data.published}</div>
      </div>
      <div className="flex flex-row justify-center gap-2 flex-wrap w-[30%]">
        {data.tags.map((tag, i) => (
          <span className="bg-[#A60F2D4D] text-[#a60f2d] rounded-full py-1 px-2.5 h-min" key={i}>{tag}</span>
        ))}
      </div>
    </div>
  </div>
)

const ClientPage = ({ posts }: { posts: (PostMeta & { slug: string })[] }) => {

  // stateful search query var
  const [query, setQuery] = useState("")

  // post data from server component
  let results = posts

  // filter posts if a search query is present
  if (query && query.trim().length > 0) {
    const lcQuery = query.toLowerCase();
    // check for substring matches in post titles and in post tags
    results = posts.filter((post) => post.title.toLowerCase().includes(lcQuery) || post.tags.some(tag => tag.toLowerCase().includes(lcQuery)));
  }
  
  return (
    <>
      <input className="w-full text-3xl p-2 rounded-lg mb-6 border-2 border-[#cecece]" placeholder="Search" onChange={(e) => setQuery(e.target.value)} />
      <div className="w-[85vw] relative left-1/2 -translate-x-1/2">
        {results.map((post, i) => (
          <Post data={post} key={i}/>
        ))}
      </div>
    </>
  )
}

export default ClientPage;