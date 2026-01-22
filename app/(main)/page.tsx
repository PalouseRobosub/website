import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {indexBlogPosts} from "@/lib/blog";

const Page = async () => {

  // get blog posts
  const posts = await indexBlogPosts()

  return (
    <main className="flex flex-col p-0 items-center">
      <Image src="/group.webp" priority height={634} width={1024} alt="" className="w-full h-[80vh] max-h-none object-cover object-[center_75%]" />
      <div className="w-full flex justify-center bg-[#CCCCCC]">
        <h1 className="bg-[#A60F2D] text-white px-5 py-2.5 m-0 text-5xl -mt-8 w-min whitespace-nowrap">Palouse RoboSub</h1>
      </div>
	    <div className="bg-[#CCCCCC] w-full py-0 px-[20%] pb-7.5">
		    <p className="text-center">
          WSU&apos;s Palouse RoboSub club develops underwater submarines designed to participate in the intercollegiate
          RoboSub national competitions. Located in the basement of Dana Hall, Palouse RoboSub combines Electrical,
          Mechanical, and Computer Engineering to create complex AUVs and ROVs.
        </p>
        <h2 style={{ fontSize: "40px" }}>Support Palouse RoboSub!</h2>
        <div className="flex justify-center items-start gap-5">
          <div>If you are a student please consider <Link href="/join">joining</Link>!</div>
          <div>If you have the means please consider <Link href="donate">donating to us</Link>!</div>
          <div>If you are a company or organization please consider <Link href="/sponsors">sponsoring us</Link>!</div>
        </div>
      </div>
      <p style={{ fontSize: "40px", textAlign: "center", margin: "20px" }}>Sponsored By</p>
      <div className="relative overflow-hidden whitespace-nowrap w-full">
        <div className="">
          <img className="h-25 w-auto my-0 mx-[20%]" src="/sponsor-logos/osh-park.png" alt="OSH Park" />
          <img className="h-25 w-auto my-0 mx-[20%]" src="/sponsor-logos/blue-robotics.png" alt="Blue Robotics" />
          <img className="h-25 w-auto my-0 mx-[20%]" src="/sponsor-logos/real-digital.svg" alt="Real Digital" />
          <img className="h-25 w-auto my-0 mx-[20%]" src="/sponsor-logos/solidworks.png" alt="SOLIDWORKS" />
          <img className="h-25 w-auto my-0 mx-[20%]" src="/sponsor-logos/vectornav.png" alt="VECTORNAV" />
          <img className="h-25 w-auto my-0 mx-[20%]" src="/sponsor-logos/joescan.jpg" alt="JoeScan" />
          <img className="h-25 w-auto my-0 mx-[20%]" src="/sponsor-logos/waterlinked.png" alt="WaterLinked" />
          <img className="h-25 w-auto my-0 mx-[20%]" src="/sponsor-logos/lattepanda.jpg" alt="LattePanda" />
          <img className="h-25 w-auto my-0 mx-[20%]" src="/sponsor-logos/tektronix.png" alt="Tektronix" />
          {/* duplicate for seamless loop */}
          <img className="h-25 w-auto my-0 mx-[20%]" src="/sponsor-logos/osh-park.png" alt="OSH Park" />
          <img className="h-25 w-auto my-0 mx-[20%]" src="/sponsor-logos/blue-robotics.png" alt="Blue Robotics" />
          <img className="h-25 w-auto my-0 mx-[20%]" src="/sponsor-logos/real-digital.svg" alt="Real Digital" />
          <img className="h-25 w-auto my-0 mx-[20%]" src="/sponsor-logos/solidworks.png" alt="SOLIDWORKS" />
          <img className="h-25 w-auto my-0 mx-[20%]" src="/sponsor-logos/vectornav.png" alt="VECTORNAV" />
          <img className="h-25 w-auto my-0 mx-[20%]" src="/sponsor-logos/joescan.jpg" alt="JoeScan" />
          <img className="h-25 w-auto my-0 mx-[20%]" src="/sponsor-logos/waterlinked.png" alt="WaterLinked" />
          <img className="h-25 w-auto my-0 mx-[20%]" src="/sponsor-logos/lattepanda.jpg" alt="LattePanda" />
          <img className="h-25 w-auto my-0 mx-[20%]" src="/sponsor-logos/tektronix.png" alt="Tektronix" />
        </div>
      </div>

      <div className="w-full px-[20%] mb-5">
        <h2 style={{ fontSize: "40px" }}>Check out our blog!</h2>
        <div className="flex items-start justify-center gap-5">
          <div>
            We regularly document our activities to share our progress and help the public understand our work.
            <Link href="/blog" className="flex flex-row items-center my-5 w-min text-nowrap">Check the blog out here <ArrowRight/></Link>
          </div>
          <div>
            {/* show 3 newest blog posts */}
            <h4 style={{ margin: "0" }}>Recent Posts</h4>
            <div className="flex justify-between items-center p-2.5">
              <Link href={`/blog/${posts[0].slug}`}>{posts[0].title}</Link>
              <div>{posts[0].published}</div>
            </div>
            <div className="flex justify-between items-center p-2.5">
              <Link href={`/blog/${posts[1].slug}`}>{posts[1].title}</Link>
              <div>{posts[1].published}</div>
            </div>
			{/*<div className="flex justify-between items-center p-2.5">
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
