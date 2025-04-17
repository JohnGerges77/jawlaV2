"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import AuthButton from "./AuthContextButton";
import AuthContextButtonSignOut from "./AuthContextButtonSignOut";
import { useAuth } from "../context/AuthContext";


function HeaderNav() {
  const pathname = usePathname();
  const { role } = useAuth(); 

  return (
    <div
      className="justify-between flex items-center space-x-2 w-[75%] h-full px-[4em] 
                 bg-gradient-to-r from-[#FFFFFF40] to-[#FFFFFF1A]
                 rounded-bl-[2.5em] rounded-br-[2.5em]"
    >
      <nav className="flex space-x-[1em] text-base">
        <Link
          href="./"
          className={`${
            pathname === "/"
              ? "bg-gradient-to-r from-[#2573F980] to-[#050C4533] border-[1px] border-gray-300"
              : ""
          } text-white hover:text-gray-300 px-4 py-2 rounded-3xl`}
        >
          Home
        </Link>

        {role === "Admin" && (
          <Link
            href="./Dashboard"
            className={`${
              pathname === "/Dashboard"
                ? "bg-gradient-to-r from-[#2573F980] to-[#050C4533] border-[1px] border-gray-300"
                : ""
            } text-white hover:text-gray-300 px-4 py-2 rounded-3xl`}
          >
            Dashboard
          </Link>
        )}

        <Link
          href="/Descover"
          className={`${
            pathname === "/Descover"
              ? "bg-gradient-to-r from-[#2573F980] to-[#050C4533] border-[1px] border-gray-300"
              : ""
          } text-white hover:text-gray-300 px-4 py-2 rounded-3xl`}
        >
          Discover
        </Link>

        <Link
          href="./Profile"
          className={`${
            pathname === "/Profile"
              ? "bg-gradient-to-r from-[#2573F980] to-[#050C4533] border-[1px] border-gray-300"
              : ""
          } text-white hover:text-gray-300 px-4 py-2 rounded-3xl`}
        >
          Profile
        </Link>
      </nav>

      <div className="flex items-center space-x-[1em]">
        <AuthContextButtonSignOut />
        <AuthButton />
      </div>
    </div>
  );
}

export default HeaderNav;