import type { NextConfig } from "next";
import createMDX from "@next/mdx"

const nextConfig: NextConfig = {
  images: {
    // disable automatic image optimization, REQUIRED for static export
    unoptimized: true
  },

  // add mdx to list of valid page extensions
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],

  // builds generate static files
  output: "export",
};

const withMDX = createMDX({
  extension: /\.(mdx)$/,
  options: {
    /*
    * remark-gfm enables github flavored markdown parsing
    *
    * remark-prism enables language-aware syntax highlighting in code blocks using prismjs
    */
    remarkPlugins: ["remark-gfm"],
    /*
    * rehype-slug automatically adds id attributes to headings
    *
    * rehype-autolink-headings automatically generates links to headings, which are currently
    *   overwritten by my css. this will be fixed in the future
    *
    */
    rehypePlugins: [
      "rehype-slug",
      "rehype-autolink-headings",
      [
        "@shikijs/rehype",
        {
          theme: "github-dark",
        },
      ],
    ]
  }
})

export default withMDX(nextConfig);