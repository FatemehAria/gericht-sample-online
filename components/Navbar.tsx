import Image from "next/image";
import React from "react";
import Logo from "@/public/Logo.svg";
import Link from "next/link";
import "./navbar.css"
import NavbarSeperator from "./NavbarSeperator";
import NavbarListSmall from "./NavbarListSmall";

function Navbar() {
  return (
    <nav className="flex flex-row justify-between lg:justify-around items-center py-8 text-base whitespace-nowrap bg-black px-5 lg:px-0">
      <Image src={Logo} alt="logo" className="w-[100px] lg:w-[189px]" />
      <NavbarListSmall />
      <div className="hidden lg:flex flex-row w-[30%] items-center justify-between text-[#a7bb80]">
        <Link
          href=""
          className="hover-underline-navbar"
        >
          Home
        </Link>
        <Link
          href=""
          className="hover-underline-navbar"
        >
          Pages
        </Link>
        <Link
          href=""
          className="hover-underline-navbar"
        >
          Contact Us
        </Link>
        <Link
          href=""
          className="hover-underline-navbar"
        >
          Blog
        </Link>
        <Link
          href=""
          className="hover-underline-navbar"
        >
          Landing
        </Link>
      </div>
      <div className="hidden lg:flex flex-row w-[20%] flex-wrap justify-between items-center relative">
        <Link href="" className="hover-underline-navbar-login">
          Login / Registration
        </Link>
        <NavbarSeperator />
        <Link
          href="/table-reservation"
          className="hover-underline-navbar-login"
        >
          Book Table
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
