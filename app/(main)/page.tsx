import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {indexBlogPosts} from "@/lib/blog";

const Page = async () => {

  // get blog posts
  const posts = await indexBlogPosts()

  return (
    <main className="flex flex-col p-0 items-center home">
      <Image src="/group.webp" priority height={634} width={1024} alt="" className="w-full md:h-[80vh] h-auto md:max-h-none max-h-[80vh] md:object-cover object-contain object-[center_75%]" />
      <div className="w-full flex justify-center bg-[#CCCCCC]">
        <h1 className="bg-[#A60F2D] text-white px-5 py-2.5 md:text-5xl text-2xl font-bold -mt-8 w-min whitespace-nowrap">Palouse RoboSub</h1>
      </div>
	    <div className="bg-[#CCCCCC] w-full py-0 md:px-[20%] px-[5%] pb-7.5">
		    <p className="text-center text-lg mt-4">
          WSU&apos;s Palouse RoboSub club develops underwater submarines designed to participate in the intercollegiate
          RoboSub national competitions. Located in the basement of Dana Hall, Palouse RoboSub combines Electrical,
          Mechanical, and Computer Engineering to create complex AUVs and ROVs.
        </p>
        <h2 className="md:text-4xl text-lg text-center md:text-left md:my-4">Support Palouse RoboSub!</h2>
        <div className="flex justify-center md:flex-row flex-col items-start gap-5 text-lg">
          <div>If you are a student please consider <Link href="/join">joining</Link>!</div>
          <div>If you have the means please consider <Link target="_blank" href="https://foundation.wsu.edu/give/?fund=ffdf2195-2497-4361-b697-44e5024bf0b0">donating to us</Link>!</div>
          <div>If you are a company or organization please consider <Link href="/sponsors">sponsoring us</Link>!</div>
        </div>
      </div>
      <p className="md:text-4xl text-xl text-center md:m-5 m-3">Sponsored By</p>
      <div className="sponsorBanner">
        <div className="sponsorTrack">
          <img className="sponsorLogo" src="/sponsor-logos/osh-park.png" alt="OSH Park" />
          <img className="sponsorLogo" src="/sponsor-logos/blue-robotics.png" alt="Blue Robotics" />
          <img className="sponsorLogo" src="/sponsor-logos/real-digital.svg" alt="Real Digital" />
          <img className="sponsorLogo" src="/sponsor-logos/solidworks.png" alt="SOLIDWORKS" />
          <img className="sponsorLogo" src="/sponsor-logos/vectornav.png" alt="VECTORNAV" />
          <img className="sponsorLogo" src="/sponsor-logos/joescan.jpg" alt="JoeScan" />
          <img className="sponsorLogo" src="/sponsor-logos/waterlinked.png" alt="WaterLinked" />
          <img className="sponsorLogo" src="/sponsor-logos/lattepanda.jpg" alt="LattePanda" />
          <img className="sponsorLogo" src="/sponsor-logos/tektronix.png" alt="Tektronix" />
          {/* duplicate for seamless loop */}
          <img className="sponsorLogo" src="/sponsor-logos/osh-park.png" alt="OSH Park" />
          <img className="sponsorLogo" src="/sponsor-logos/blue-robotics.png" alt="Blue Robotics" />
          <img className="sponsorLogo" src="/sponsor-logos/real-digital.svg" alt="Real Digital" />
          <img className="sponsorLogo" src="/sponsor-logos/solidworks.png" alt="SOLIDWORKS" />
          <img className="sponsorLogo" src="/sponsor-logos/vectornav.png" alt="VECTORNAV" />
          <img className="sponsorLogo" src="/sponsor-logos/joescan.jpg" alt="JoeScan" />
          <img className="sponsorLogo" src="/sponsor-logos/waterlinked.png" alt="WaterLinked" />
          <img className="sponsorLogo" src="/sponsor-logos/lattepanda.jpg" alt="LattePanda" />
          <img className="sponsorLogo" src="/sponsor-logos/tektronix.png" alt="Tektronix" />
        </div>
      </div>

      <div className="w-full md:px-[20%] px-[5%] mb-5">
        <h2 className="md:text-4xl text-xl text-center md:text-left md:my-4">Check out our blog!</h2>
        <div className="flex md:flex-row flex-col items-start justify-center md:gap-5 text-lg">
          <div className="flex-1">
            We regularly document our activities to share our progress and help the public understand our work.
            <Link href="/blog" className="flex flex-row items-center my-5 w-min text-nowrap">Check the blog out here <ArrowRight/></Link>
          </div>
          <div className="flex-1 w-full">
            {/* show 3 newest blog posts */}
            <h4 className="m-0">Recent Posts</h4>
              <div className="flex justify-between items-center p-2.5 even:bg-[#ebebeb]">
                <Link href={`/blog/${posts[0].slug}`}>{posts[0].title}</Link>
                <div>{posts[0].published}</div>
              </div>
              <div className="flex justify-between items-center p-2.5 even:bg-[#ebebeb]">
                <Link href={`/blog/${posts[1].slug}`}>{posts[1].title}</Link>
                <div>{posts[1].published}</div>
              </div>
              {/*<div className="flex justify-between items-center p-2.5 even:bg-[#ebebeb]">
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
