import React from "react";

import {
  RxDiscordLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
  RxGithubLogo,
  RxInstagramLogo
} from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">community</div>
            <p className="flex flex-row items-center my-[15px] curssor pointer">
              <FaYoutube />
              <span className="text-[15px] ml-[6px]">Youtube</span>
            </p>
            <p className="flex flex-row items-center my-[15px] curssor pointer">
              <RxGithubLogo />
              <span className="text-[15px] ml-[6px]">Github</span>
            </p>{" "}
            <p className="flex flex-row items-center my-[15px] curssor pointer">
              <RxDiscordLogo />
              <span className="text-[15px] ml-[6px]">Discord</span>
            </p>
          </div>{" "}
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Social media</div>
            <p className="flex flex-row items-center my-[15px] curssor pointer">
              <RxInstagramLogo />
              <span className="text-[15px] ml-[6px]">Instagram</span>
            </p>
            <p className="flex flex-row items-center my-[15px] curssor pointer">
              <RxTwitterLogo/>
              <span className="text-[15px] ml-[6px]">Twitter</span>
            </p>{" "}
            <p className="flex flex-row items-center my-[15px] curssor pointer">
              <RxLinkedinLogo />
              <span className="text-[15px] ml-[6px]">LinkedIn</span>
            </p>
          </div>{" "}
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">About</div>
            <p className="flex flex-row items-center my-[15px] curssor pointer">
              <span className="text-[15px] ml-[6px]">become sponsor</span>
            </p>
            <p className="flex flex-row items-center my-[15px] curssor pointer">
              <span className="text-[15px] ml-[6px]">learning about me</span>
            </p>{" "}
            <p className="flex flex-row items-center my-[15px] curssor pointer">
              <span className="text-[15px] ml-[6px]">
                kevinngugi197@gmail.com
              </span>
            </p>
          </div>
        </div>
        <div className="mb-[20px] text-[15px] text-center"></div>
      </div>
    </div>
  );
};

export default Footer;
