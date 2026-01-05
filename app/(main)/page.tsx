import Image from "next/image";
//import styles from "@/styles/home.module.css"
import Link from "next/link";
import { ArrowRight } from "lucide-react";
// import {indexBlogPosts} from "@/lib/blog";

const Page = async () => {

  // get blog posts
  // const posts = await indexBlogPosts()

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
      <p style={{ fontSize: "40px", textAlign: "center", margin: "20px" }}>Sponsored By</p>
      <div className={styles.sponsorBanner}>
        <div className={styles.sponsorTrack}>
          <img className={styles.sponsorLogo} src="/sponsor-logos/osh-park.png" alt="OSH Park" />
          <img className={styles.sponsorLogo} src="/sponsor-logos/blue-robotics.png" alt="Blue Robotics" />
          <img className={styles.sponsorLogo} src="/sponsor-logos/real-digital.svg" alt="Real Digital" />
          <img className={styles.sponsorLogo} src="/sponsor-logos/solidworks.png" alt="Solidworks" />
          {/* duplicate for seamless loop */}
          <img className={styles.sponsorLogo} src="/sponsor-logos/osh-park.png" alt="OSH Park" />
          <img className={styles.sponsorLogo} src="/sponsor-logos/blue-robotics.png" alt="Blue Robotics" />
          <img className={styles.sponsorLogo} src="/sponsor-logos/real-digital.svg" alt="Real Digital" />
          <img className={styles.sponsorLogo} src="/sponsor-logos/solidworks.png" alt="Solidworks" />
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
            {/* show 3 newest blog posts */}
            {/*<h4 style={{ margin: "0" }}>Recent Posts</h4>*/}
            {/*<div className={styles.post}>*/}
            {/*  <Link href={`/blog/${posts[0].slug}`}>{posts[0].title}</Link>*/}
            {/*  <div>{posts[0].published}</div>*/}
            {/*</div>*/}
            {/*<div className={styles.post}>*/}
            {/*  <Link href={`/blog/${posts[1].slug}`}>{posts[1].title}</Link>*/}
            {/*  <div>{posts[1].published}</div>*/}
            {/*</div>*/}
			{/*<div className={styles.post}>
              <Link href={`/blog/${posts[2].slug}`}>{posts[2].title}</Link>
              <div>{posts[0].published}</div>
            </div>*/}
          </div>
        </div>
      </div>
    </main>
  )
}

export default Page;
