"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { slideInFromLeft } from "@/utils/motion";
import { slideInFromRight } from "@/utils/motion";
import Image from "next/image";
import mainIcons from "@/public/assets/mainIcons.svg";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5 " />
          <h1 className="Welcome-text text-[13px]">
            Front-End Developer Portfolio{" "}
          </h1>
        </motion.div>
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600] w-auto h-auto"
        >
          <span className="">
            Providing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 tocyan-500">
              {" "}
              the best{" "}
            </span>
            project experience
          </span>
        </motion.div>
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-2xl text-cyan-500 my-5 max-w-[600px] font-bold "
        >
          Hello, I am a front-end developer with a passion for creating
          beautiful and functional user interfaces. I have experience working
          with modern web technologies such as React, TypeScript, and Tailwind
          CSS.Check out my skills and projects below!
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className=" button-primary py-3 text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Learn More!
        </motion.a>
      </div>
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center mt-20 rounded-lg shadow-5xl shadow-cyan-500"
      >
        <Image
          src={mainIcons}
          alt="Main Icons"
          width={650}
          height={650}
          className=""
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
