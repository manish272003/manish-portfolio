"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiArrowRight } from "react-icons/fi";

const experienceData = [
  {
    id: 1,
    role: "Associate Product Manager Intern",
    company: "Vilindha Technologies",
    duration: "Oct 2024 – Dec 2024",
    location: "Hyderabad",
    description: "Worked on market research, competitive analysis, and product performance analysis to identify feature opportunities and improve engagement.",
    img: "/vilindha-dash.png",
    focusAreas: [
      "Market & competitive research",
      "User behavior analysis",
      "Feature opportunity identification",
      "Product documentation (PRDs, specs)",
      "Cross-functional collaboration"
    ],
    cta: "Read more",
    link: "/case-studies/vilindha"
  },
  {
    id: 2,
    role: "Associate Product Manager Intern",
    company: "Vijay Tech Solutions",
    duration: "Jun 2024 – Aug 2024",
    location: "Bengaluru",
    description: "Supported product vision, roadmap planning, and PRD documentation while aligning product execution with GTM strategy.",
    img: "/vijay-tech.jpg",
    focusAreas: [
      "Customer research",
      "Product roadmap planning",
      "PRD creation",
      "GTM alignment",
      "Team collaboration"
    ],
    cta: "Read more",
    link: "/case-studies/vijay-tech"
  },
  {
    id: 3,
    role: "Product Analysis & Growth Strategy",
    company: "Independent Product Work",
    duration: "",
    location: "",
    description: "Analyzed platforms like Snapchat, Zomato, Netflix, and PhonePe to identify UX gaps and growth opportunities.",
    img: "/independent-work.png",
    focusAreas: [
      "UX improvement insights",
      "Growth & acquisition strategy",
      "Engagement analysis",
      "Competitive benchmarking"
    ],
    cta: "View case",
    link: "/project case study/product-analysis-case-study.html"
  },
  {
    id: 4,
    role: "Product Growth & Engagement Strategy",
    company: "PRD Project – Zomato",
    duration: "",
    location: "",
    description: "Designed a PRD to improve text review completion using nudges, gamification, and UX improvements.",
    img: "/zomato-prd-final.png",
    focusAreas: [
      "PRD development",
      "Gamification strategy",
      "Notification systems",
      "Conversion optimization"
    ],
    cta: "View case",
    link: "/project case study/zomato-prd-case-study.html"
  }
];

export const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Header Animation
      gsap.fromTo(
        ".experience-header",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".experience-header",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Block Animation
      gsap.utils.toArray<HTMLElement>(".experience-block").forEach((block) => {
        gsap.fromTo(
          block,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: block,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="pt-20 pb-32 w-full relative z-10 bg-black-100 flex flex-col items-center">
      <div className="max-w-6xl w-full px-5">
        
        {/* Section Heading */}
        <div className="experience-header flex flex-col items-center mb-24 opacity-0">
          <div className="relative group cursor-pointer flex flex-col items-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-[0.05em] transition-all duration-500 ease-out group-hover:scale-[1.02] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-[linear-gradient(90deg,#0A84FF,#5E5CE6,#BF5AF2,#FF2D55,#FF6A00)] bg-[length:200%_auto] bg-left group-hover:bg-right group-hover:drop-shadow-[0_0_20px_rgba(191,90,242,0.5)]">
              PRODUCT EXPERIENCE
            </h2>
            <div className="absolute -bottom-4 left-1/2 w-20 h-1 bg-[#bed7d9]/30 rounded-full transition-all duration-500 ease-out group-hover:w-full group-hover:left-0 group-hover:bg-[linear-gradient(90deg,#0A84FF,#5E5CE6,#BF5AF2,#FF2D55,#FF6A00)] group-hover:shadow-[0_0_15px_rgba(191,90,242,0.6)]"></div>
          </div>
        </div>

        {/* Experience Blocks */}
        <div className="flex flex-col gap-24 md:gap-32">
          {experienceData.map((exp, index) => {
            const isEven = index % 2 === 1;

            return (
              <div 
                key={exp.id} 
                className={`experience-block opacity-0 flex flex-col ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-10 md:gap-16 w-full group`}
              >
                
                {/* Content Side */}
                <div className="w-full md:w-1/2 flex flex-col items-start">
                  <div className="mb-2">
                    <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-2">{exp.role}</h3>
                    <p className="text-lg text-[#bed7d9] font-medium">{exp.company}</p>
                    {exp.duration && (
                      <p className="text-sm text-[#a1a1aa] mt-1 opacity-80">
                        {exp.duration} <span className="mx-1">•</span> {exp.location}
                      </p>
                    )}
                  </div>

                  <p className="text-[#c1c2d3] text-base md:text-lg leading-relaxed mt-4 mb-6">
                    {exp.description}
                  </p>

                  <div className="mb-8 w-full">
                    <span className="text-xs uppercase tracking-widest text-[#a1a1aa] font-bold inline-block mb-3">Focus Areas</span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
                      {exp.focusAreas.map((area, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-[#5ce1e6] mt-1.5 text-[8px] opacity-80">◆</span>
                          <span className="text-[#e2e2e5] text-sm font-light">{area}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {exp.link ? (
                    <a href={exp.link} target="_blank" rel="noopener noreferrer" className="inline-block">
                      <button className="flex items-center gap-2 text-black font-medium text-sm bg-white px-6 py-3 rounded-full hover:bg-white/90 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all duration-300 group/btn">
                        {exp.cta}
                        <FiArrowRight className="transition-transform group-hover/btn:translate-x-1" />
                      </button>
                    </a>
                  ) : (
                    <button className="flex items-center gap-2 text-black font-medium text-sm bg-white px-6 py-3 rounded-full hover:bg-white/90 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all duration-300 group/btn">
                      {exp.cta}
                      <FiArrowRight className="transition-transform group-hover/btn:translate-x-1" />
                    </button>
                  )}
                </div>

                {/* Visual Side */}
                <div className="w-full md:w-1/2">
                  <div className={`relative w-full aspect-[16/10] rounded-3xl bg-[#0a0a0a]/50 backdrop-blur-xl border border-white/10 ${exp.img ? 'p-0' : 'p-6'} flex items-center justify-center overflow-hidden transition-all duration-500 ease-out hover:scale-[1.02] hover:border-[#5ce1e6]/40 hover:shadow-[0_0_30px_rgba(92,225,230,0.15)] group/card`}>
                    
                    {/* Background glow movement */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#5ce1e6]/0 via-[#5ce1e6]/[0.05] to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 ease-out pointer-events-none"></div>
                    
                    {/* Noise texture */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>

                    {exp.img ? (
                      <div className="relative z-10 w-full h-full rounded-3xl overflow-hidden bg-black">
                        <Image src={exp.img} alt={exp.company} fill className="object-fill" />
                      </div>
                    ) : (
                      <div className="relative z-10 w-full h-full bg-[#13162d] rounded-xl border border-white/5 shadow-2xl flex flex-col overflow-hidden">
                        {/* Top Bar */}
                        <div className="h-8 border-b border-white/5 bg-white/[0.02] flex items-center px-4 gap-2">
                          <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                          <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                        </div>
                        {/* Abstract Content Lines */}
                        <div className="p-6 flex flex-col gap-4 opacity-30">
                          <div className="h-4 w-3/4 bg-white/20 rounded"></div>
                          <div className="h-2 w-1/2 bg-white/10 rounded"></div>
                          <div className="h-2 w-5/6 bg-white/10 rounded"></div>
                          <div className="mt-4 flex gap-4">
                            <div className="w-12 h-12 rounded-lg bg-white/10"></div>
                            <div className="flex-1 flex flex-col gap-2 justify-center">
                              <div className="h-2 w-full bg-white/5 rounded"></div>
                              <div className="h-2 w-2/3 bg-white/5 rounded"></div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Floating blurred orb in placeholder */}
                        <div className="absolute bottom-[-20%] right-[-10%] w-32 h-32 bg-purple/20 blur-[50px] rounded-full pointer-events-none"></div>
                      </div>
                    )}
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
