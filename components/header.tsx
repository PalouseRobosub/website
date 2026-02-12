"use client"

import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#A60F2D] w-full flex flex-col p-2.5 items-center relative text-white">
      <div className="w-full flex justify-between items-center relative">
        <div className="flex gap-3 md:text-4xl text-xl items-center">
          <Link href="/" className="contents">
            <div className="h-[1em] aspect-11/4 relative">
              <Image src="/robosub_logo.svg" alt="" fill priority />
            </div>
            <div className="font-semibold">Palouse RoboSub</div>
          </Link>
        </div>
        <div className="border border-white rounded-md items-center justify-center p-1 cursor-pointer md:hidden" onClick={() => setMenuOpen(!menuOpen)}><Menu/></div>
        <div className="md:flex hidden h-full items-center gap-4.5 text-[20px] font-medium">
          <Link href="/about">About</Link>
          <Link href="/officers">Officers</Link>
          <Link href="/sponsors">Sponsors</Link>
          <Link href="/blog">Blog</Link>
		      <Link href="/gallery">Gallery</Link>
          <Link href="/join" className="border-3 border-white px-2 py-1 rounded-lg transition-all duration-300 ease-in-out hover:bg-white hover:text-black no-underline">JOIN US</Link>
          <Link target="_blank" href="https://foundation.wsu.edu/give/?fund=ffdf2195-2497-4361-b697-44e5024bf0b0" className="text-black bg-white border-3 border-white px-2 py-1 rounded-lg transition-all duration-300 ease-in-out no-underline hover:text-white hover:bg-[#14769C]">DONATE</Link>
        </div>
      </div>
      <div className="top-full bg-[#A60F2D] flex flex-col w-full gap-1.25 transition-all ease-in-out duration-300 overflow-hidden" style={{ maxHeight: `${menuOpen ? "300px" : "0px"}` }}>
        <Link href="/about">About</Link>
        <Link href="/officers">Officers</Link>
        <Link href="/sponsors">Sponsors</Link>
        <Link href="/blog">Blog</Link>
		    <Link href="/gallery">Gallery</Link>
        <Link href="/join" className="border-3 border-white p-2 rounded-lg transition-all duration-300 ease-in-out font-medium no-underline">JOIN US</Link>
        <Link target="_blank" href="https://foundation.wsu.edu/give/?fund=ffdf2195-2497-4361-b697-44e5024bf0b0" className="text-black bg-white border-3 border-white p-2 rounded-lg transition-all duration-300 ease-in-out no-underline font-medium">DONATE</Link>
      </div>
    </header>
  )
}

export default Header;
