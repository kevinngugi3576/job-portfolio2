import Image from "next/image";
import React from "react";

type Props = {
  src: string;
  title: string;
  description: string;
};
const ProjectsCard = ({ src, title, description }: Props) => {
  return (
    <div className="reltive overflow-hidden rounded-lg shadow-lg border border-[#2a0E61]">
      <Image
        src={src}
        alt={title}
        width={500}
        height={500}
        className="object-contain"
      />
      <div className="relative p-4">
        <h1 className="text-2xl font-semi-bold text-white">{title}</h1>
        <p className="mt-2 text-cyan-500">{description}</p>
      </div>
    </div>
  );
};

export default ProjectsCard;
