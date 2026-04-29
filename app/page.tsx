'use client';

import dynamic from 'next/dynamic';

const FloatingNav = dynamic(() => import("@/components/ui/floating-nav").then(mod => mod.FloatingNav), { ssr: false });
const App = dynamic(() => import('@/components/band/App'), { ssr: false });
const CardSection = dynamic(() => import("@/components/card/CardSection"), { ssr: false });
const RecentProjects = dynamic(() => import("@/components/recent-projects").then(mod => mod.RecentProjects), { ssr: false });
const Experience = dynamic(() => import("@/components/Experience").then(mod => mod.Experience), { ssr: false });
const Footer = dynamic(() => import("@/components/footer").then(mod => mod.Footer), { ssr: false });
const Grid = dynamic(() => import("@/components/grid").then(mod => mod.Grid), { ssr: false });

import { navItems } from "@/data";

const MainPage = () => {
  return (
    <main className="relative mx-auto flex flex-col items-center justify-center overflow-clip bg-black-100 px-5 sm:px-10">
      <FloatingNav navItems={navItems} />
  
      <div style={{ minHeight: "100vh", width: "100vw", backgroundColor: "black" }}>
        <App />
      </div>  

      <div className="w-full max-w-7xl">
        <Grid/> 
        <CardSection />
        <Experience />
        <RecentProjects />
        <Footer />
      </div>
    </main>
  );
};

export default MainPage;
