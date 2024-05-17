"use client";
import React from "react";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

type Props = {
  src: string;
  width: number;
  height: number;
  index: number;
};

const SkillsDataProvider = ({ src, width, height, index }: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const animationDelay = 0.3;

  return (
    <motion.div
      ref={ref}
      initial="hiddden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      transition={{ delay: index * animationDelay }}
      custom={index}
    >
      <Image src={src} width={width} height={height} alt="skill" />
    </motion.div>
  );
};

export default SkillsDataProvider;
