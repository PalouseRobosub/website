import type { NextConfig } from "next";
import createMDX from "@next/mdx"

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL('https://picsum.photos/*')
    ]
  },
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  output: "export"
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
})

export default withMDX(nextConfig);
