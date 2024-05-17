import React from "react";
import HeroContent from "./sub/HeroContent";

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full ">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-340px] h-full w-full left-0 z-[-1] object-cover"
      >
        <source src="/assets/darkstar.mp4" type="video/mp4" />
      </video>
      <div className="mt-20   ">
        <HeroContent />
      </div>
    </div>
  );
};

export default Hero;
