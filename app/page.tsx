"use client";

import { navItems } from "@/Data";
import dynamic from "next/dynamic";
import Hero from "@/Components/Hero";
import Grid from "@/Components/Grid";
import Footer from "@/Components/Footer";
import Approach from "@/Components/Approach";
import Experience from "@/Components/Experience";
import RecentProjects from "@/Components/RecentProject";
const FloatingNav = dynamic(async () => {
  const importedModule = await import("@/Components/ui/FLoatingNav");
  return importedModule.FloatingNav;
}, { ssr: false });

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
