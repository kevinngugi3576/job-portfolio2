"use client";

import React from "react";
import { slideInFromRight } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import LockTop from "@/public/assets/LockMain.png";

const Encryption = () => {
  return (
    <div className="flex flex-row relative items-center justify-center min-h-screen  w-full h-full mt-96 marker:first-letter:">
      <div className="absolute w-auto h-auto top-0 z-[5]">
        <motion.div
          variants={slideInFromRight(5)}
          className="text-[40px] font-medium text-center text-white"
        >
          Performance
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            the best{" "}
          </span>
          project experience
        </motion.div>
      </div>
      <div className="flex flex-col items-center justify-center translate-y-[-50px] absolute z-[20] w-auto h-auto mb-40">
        <div className="flex flex-col items-center group cursor-pointer w-auto h-auto b">
          <Image
            src={LockTop}
            alt="lock top"
            width={70}
            height={70}
            className="transte-y-5 transition-all duration-200 group-hover: translate-y-11"
          />
          {/* <Image
            src={LockMain}
            alt="lock Main"
            width={50}
            height={50}
            className="z-90"
          /> */}
        </div>
      </div>
      <div className="Welcome-box px-[15px] py-[4px] z-[20] my-[20px] border-[#70442f88b] opacity-[0.9] ">
        <h1 className="Welcome-text text-2xl ">Security</h1>
      </div>
      <div className="absolute z[2-] px-[5px]">
        <div className="cursive text-[20px] font-medium text-center text-white ">
          secure you data with end-to-end encryption
        </div>
      </div>
      <div className="w-[80%] h-[100%]  flex items-center justify-center absolute">
        <video autoPlay muted loop className="w-full h-auto">
          <source src="/assets/encryption.webm" type="video/webm" />
        </video>
      </div>
    </div>
  );
};

export default Encryption;
