"use client"

import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#A60F2D] w-full flex flex-col p-2.5 items-center relative">
      <div className="1-full flex justify-between items-center relative">
        <div className="flex gap-3 text-[40px] items-center">
          <Link href="/" className="titleLink">
            <div className="h-[1em] aspect-11/4 relative">
              <Image src="/robosub_logo.svg" alt="" fill priority />
            </div>
            <div className="text-white font-semibold">Palouse RoboSub</div>
          </Link>
        </div>
        <div className="text-white border border-white rounded-xl flex items-center justify-center p-1 cursor-pointer hidden" onClick={() => setMenuOpen(!menuOpen)}><Menu/></div>
        <div className="flex h-full items-center gap-4.5 text-[20px]">
          <Link href="/about" className="text-white relative font-medium">About</Link>
          <Link href="/officers" className="text-white relative font-medium">Officers</Link>
          <Link href="/sponsors" className="text-white relative font-medium">Sponsors</Link>
          <Link href="/blog" className="text-white relative font-medium">Blog</Link>
		      <Link href="/gallery" className="text-white relative font-medium">Gallery</Link>
          <Link href="/join" className="text-white border-3 border-white p-2 rounded-2xl transition-all duration-300 ease-in-out font-medium">JOIN US</Link>
          <Link href="https://foundation.wsu.edu/give/?fund=ffdf2195-2497-4361-b697-44e5024bf0b0" className="text-black bg-white border-3 border-white p-2 rounded-2xl transition-all duration-300 ease-in-out font-medium">DONATE</Link>
        </div>
      </div>
      <div className="top-full bg-[#A60F2D] flex flex-col w-full gap-[5px] transition-all ease-in-out duration-300 overflow-hidden" style={{ maxHeight: `${menuOpen ? "300px" : "0px"}` }}>
        <Link href="/about" className="text-white relative font-medium">About</Link>
        <Link href="/officers" className="text-white relative font-medium">Officers</Link>
        <Link href="/sponsors" className="text-white relative font-medium">Sponsors</Link>
        <Link href="/blog" className="text-white relative font-medium">Blog</Link>
		    <Link href="/gallery" className="text-white relative font-medium">Gallery</Link>
        <Link href="/join" className="text-white border-3 border-white p-2 rounded-2xl transition-all duration-300 ease-in-out font-medium">JOIN US</Link>
          <Link href="https://foundation.wsu.edu/give/?fund=ffdf2195-2497-4361-b697-44e5024bf0b0" className="text-black bg-white border-3 border-white p-2 rounded-2xl transition-all duration-300 ease-in-out font-medium">DONATE</Link>
      </div>
    </header>
  )
}

export default Header;
