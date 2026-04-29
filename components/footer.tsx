'use client';

import Link from "next/link";
import { FiArrowUpRight, FiMail, FiLinkedin, FiDownload } from "react-icons/fi";
import { socialMedia } from "@/data";

export const Footer = () => {
  return (
    <footer id="contact" className="w-full pb-10 pt-12 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col items-center relative z-10">
        
        {/* Top Section - Actively Looking Card */}
        <div className="w-full max-w-6xl rounded-2xl bg-gradient-to-b from-[#1a1443] to-[#0f1123] border border-white/5 py-12 px-6 flex flex-col items-center text-center shadow-[0_0_80px_rgba(92,225,230,0.03)] mb-16 relative overflow-hidden">
          {/* Subtle glow effect inside the card */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-[#6366f1] opacity-10 blur-[100px] pointer-events-none"></div>
          
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-4 z-10 font-normal tracking-wide">
            Actively Looking for My Next Role
          </h2>
          <p className="text-[#a1a1aa] text-sm md:text-base mb-8 max-w-2xl z-10 font-light">
            I&apos;m currently seeking new opportunities where I can apply my product thinking and build 0→1 experiences. Let&apos;s build something great together.
          </p>
          <a
            href="/pdf/Manish%20Resume%20.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="z-10 flex items-center gap-2 rounded-lg bg-white text-black px-6 py-2.5 font-medium text-sm transition-all duration-300 hover:bg-white/90 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
          >
            <FiDownload className="text-base" />
            Download Resume
          </a>
        </div>

        {/* Bottom Section - Let's Chat */}
        <div className="flex flex-col items-start text-left w-full max-w-6xl mx-auto mb-8">
          <p className="text-[#a1a1aa] font-medium text-sm md:text-base mb-2">
            Let&apos;s build something meaningful together
          </p>
          <a href="mailto:sunkishalamanishrao@gmail.com" className="group flex items-baseline gap-2 md:gap-4 cursor-pointer">
            <h1 className="text-[5rem] md:text-[8rem] lg:text-[11rem] leading-none font-medium text-white tracking-tighter transition-colors duration-500 group-hover:text-[#c1c2d3]">
              Let&apos;s Chat
            </h1>
            <FiArrowUpRight className="text-[#7c3aed] text-5xl md:text-7xl lg:text-[6rem] transition-transform duration-500 ease-out group-hover:translate-x-4 group-hover:-translate-y-4" />
          </a>
        </div>

        {/* Footer Links */}
        <div className="w-full max-w-6xl mx-auto flex flex-wrap items-center gap-8 md:gap-16 pb-8">
          <a href="mailto:sunkishalamanishrao@gmail.com" className="flex items-center gap-2 text-[#8b8b93] hover:text-white transition-colors duration-300 text-sm md:text-base font-medium">
            <span className="text-lg font-serif italic">@</span>
            <span>sunkishalamanishrao@gmail.com</span>
          </a>
          
          {socialMedia.slice(0, 1).map((profile) => (
            <a 
              key={profile.name}
              href={profile.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 text-[#8b8b93] hover:text-white transition-colors duration-300 text-sm md:text-base font-medium"
            >
              <FiLinkedin className="text-lg" />
              <span>{profile.name}</span>
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
};
