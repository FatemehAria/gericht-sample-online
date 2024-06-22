"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import "./navbar.css";

function NavbarListSmall() {
  const [showMenu, setShowMenu] = useState(false);
  const pathname = usePathname();

  return (
    <div className="lg:hidden w-full z-50">
      <div
        className={`absolute right-0 top-5 flex flex-col items-end w-full bg-black text-white h-screen p-3 ${
          showMenu ? "show-menu menu-transition" : "hide-menu menu-transition"
        }`}
      >
        <MdOutlineRestaurantMenu onClick={() => setShowMenu(false)} />
        <div className="flex flex-col items-start w-full gap-5">
          <Link
            href="/"
            className={`${pathname === "/" ? "text-[#a7bb80]" : "text-white"}`}
          >
            Home
          </Link>
          <Link href="">Pages</Link>
          <Link href="">Contact Us</Link>
          <Link href="">Blog</Link>
          <Link href="">Landing</Link>
        </div>
      </div>
      <div className={`flex flex-1 justify-end`}>
        <GiHamburgerMenu onClick={() => setShowMenu(true)} />
      </div>
    </div>
  );
}

export default NavbarListSmall;
