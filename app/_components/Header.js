"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import HeaderNav from "./HeaderNav";


   
function Header() {

  const pathname = usePathname();
  console.log(pathname);
  if (pathname.startsWith("/Dashboard")) return null;
  return (
    <header
      className=" text-white px-[9%] py-[1em] 
                        flex items-center justify-between 
                        h-[8em] pt-[3em] mt-[-3em] bg-none z-50 sticky"
    >
      <Link href="/" className="mr-48">
        <Image src="/Logo.png" alt="logo" width={293} height={93} />
      </Link>

      <HeaderNav />
    </header>
  );
}

export default Header;
