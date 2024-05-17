import React from "react";
import Hero from "@/app/components/Hero";
import Skills from "@/app/components/Skills";
import Encryption from "@/app/components/Encryption";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
const page = () => {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col  gap-20">
        <Hero />
        <Skills />
        <Encryption />
        <Projects />
        <Footer />
      </div>
    </main>
  );
};

export default page;
