import type { MDXComponents } from 'mdx/types'
 
const components: MDXComponents = {
  wrapper: ({ children }) => <main>{ children }</main>
}
 
export function useMDXComponents(): MDXComponents {
  return components
}