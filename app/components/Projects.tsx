import React from "react";
import ProjectsCard from "./sub/ProjectsCard";

const Projects = () => {
  return (
    <div  id="projects" className="flex flex-col items-center justify-center gap-8 py-20 ">
      <h1 className="py-20 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
        My projects
      </h1>
      <div className="flex flex-col items-center gap-8 px-20 py-20 lg:flex lg:flex-row ">
        <ProjectsCard
          src="/assets/portfolioPic.png"
          title="Modern Three.js Portfolio"
          description="a new way of animating a portfolio project with Three.js"
        />
        <ProjectsCard
          src="/assets/jabyPic.png"
          title="E-commerce site"
          description="Modern Next14 E-commerce site witha  a modern finish "
        />

        <ProjectsCard
          src="/assets/schoolWeb.png"
          title="Glisten Internationals"
          description="A mordern School website with next14"
        />
         <ProjectsCard
          src="/assets/payteller.png"
          title="Payteller"
          description="An online banking system with next15"
        /> 
        
        <ProjectsCard
          src="/assets/Enlint.png"
          title="Enlint"
          description="A mordern School website with next15"
        />

      </div>
    </div>
  );
};

export default Projects;
