"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import NavLogo from "@/public/assets/NavLogo.png";
import { Socials } from "@/constants/Index";

const Navbar = () => {
  return (
    <div className="w-full h-[95px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px=-[10px]">
        <div className="flex flex-row items-center">
          <Image
            src={NavLogo}
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />
          <span className="font-bold ml-[10px] hidden md:block text-cyan-500 text-2xl">
            The Webchain Development
          </span>
        </div>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div
            className="flex items-center justify-between 
            mr-[15px] px-[10px] py-[10px] rounded-lg text-white text-2xl w-full"
          >
            <Link href="#about me" className="cursor-pointer">
              About Me
            </Link>
            <Link href="#skills" className="cursor-pointer">
              skills
            </Link>{" "}
            <Link href="#projects" className="cursor-pointer">
              Projects
            </Link>
          </div>
        </div>
        <div className="flex flex-wrap gap-5">
          {Socials.map((social: any) => (
            <Link
              key={social.name}
              href={
                social.name === "gmail" ? "mailto:kevinngugi197@gmail.com" : ""
              }
            >
              <Image
                src={social.src}
                alt={social.name}
                width={24}
                height={24}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
