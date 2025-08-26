import styles from "@/styles/blog.module.css"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Plaouse RoboSub"
};

const Page = () => {
  
  return (
    <main>
      <h1>Palouse RoboSub Blog</h1>
      <p style={{ fontSize: "24px", textAlign: "center" }}>
        Our blog is currently under development.
        Please check back soon to read our posts.
        Thank you for your patience.
      </p>
    </main>
  )
}

export default Page;