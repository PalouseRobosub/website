import Link from "next/link";
import { MoveLeft } from "lucide-react";

const BlogBack = () => (
  <Link href="/blog" style={{ marginBottom: "10px", display: "flex", width: "min-content", textWrap: "nowrap" }}><MoveLeft/>Back to blog home</Link>
)

export default BlogBack;