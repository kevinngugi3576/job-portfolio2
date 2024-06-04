"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import NavLogo from "@/public/assets/NavLogo.png";
import { Socials } from "@/constants/Index";
import Hamburger from "hamburger-react";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleNav = () => {
    setOpen(!isOpen);
  };

  const handleClick = () => {
    setOpen(false);
  };

  return (
    <div className="w-full h-[95px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <div className="flex flex-row items-center">
          <Image
            src={NavLogo}
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />
          <span className="font-bold ml-[10px] md:block text-cyan-500 text-2xl">
            The Webchain Development
          </span>
        </div>

        <div className="hidden lg:flex flex-row items-center justify-between md:mr-20 space-x-4">
          <Link
            href="#about me"
            className="cursor-pointer hover:-translate-y-3 delay-150 font-bold text-white text-2xl"
            onClick={handleClick}
          >
            About Me
          </Link>
          <Link
            href="#skills"
            className="cursor-pointer hover:-translate-y-3 delay-150 font-bold text-white text-2xl"
            onClick={handleClick}
          >
            Skills
          </Link>
          <Link
            href="#projects"
            className="cursor-pointer hover:-translate-y-3 delay-150 font-bold text-white text-2xl"
            onClick={handleClick}
          >
            Projects
          </Link>
        </div>

        <div className="hidden lg:flex space-x-3">
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

        <div className="lg:hidden">
          <button onClick={toggleNav} className="bg-purple-600">
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </button>
        </div>
      </div>

      {isOpen && (
        <div className=" inset-0 bg-[#030014] bg-opacity-95  flex flex-col items-center justify-center lg:hidden h-screen">
          <Link
            href="#about me"
            className="cursor-pointer hover:-translate-y-3 delay-150 font-bold text-3xl text-white mb-4"
            onClick={handleClick}
          >
            About Me
          </Link>
          <Link
            href="#skills"
            className="cursor-pointer hover:-translate-y-3 delay-150 font-bold text-3xl text-white mb-4"
            onClick={handleClick}
          >
            Skills
          </Link>
          <Link
            href="#projects"
            className="cursor-pointer hover:-translate-y-3 delay-150 font-bold text-3xl text-white mb-4"
            onClick={handleClick}
          >
            Projects
          </Link>
          <div className="flex space-x-4 mt-8">
            {Socials.map((social: any) => (
              <Link
                key={social.name}
                href={
                  social.name === "gmail"
                    ? "mailto:kevinngugi197@gmail.com"
                    : ""
                }
                onClick={handleClick}
              >
                <Image
                  src={social.src}
                  alt={social.name}
                  width={36}
                  height={36}
                />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
