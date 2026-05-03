"use client";

import Image from "next/image";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";
import { FiArrowRight, FiChevronLeft, FiChevronRight, FiGlobe } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

import { projects } from "@/data";

export const RecentProjects = () => {
  const [isHeaderActive, setIsHeaderActive] = useState(false);
  const [activeCarouselIndex, setActiveCarouselIndex] = useState(0);
  const lastWheelTime = useRef(0);

  const handleWheel = (e: React.WheelEvent) => {
    const now = Date.now();
    if (now - lastWheelTime.current < 500) return;

    if (e.deltaX > 20) {
      setActiveCarouselIndex(prev => Math.min(projects.length - 1, prev + 1));
      lastWheelTime.current = now;
    } else if (e.deltaX < -20) {
      setActiveCarouselIndex(prev => Math.max(0, prev - 1));
      lastWheelTime.current = now;
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setActiveCarouselIndex(prev => Math.max(0, prev - 1));
      } else if (e.key === "ArrowRight") {
        setActiveCarouselIndex(prev => Math.min(projects.length - 1, prev + 1));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [projects.length]);

  return (
    <section id="projects" className="pt-4 pb-20">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ amount: 0.3 }}
        onViewportEnter={() => setIsHeaderActive(true)}
        className="flex flex-col items-center mt-16 mb-24"
      >
        <div className="relative group cursor-pointer flex flex-col items-center">
          <h2 className={`text-3xl md:text-5xl font-bold tracking-[0.05em] transition-all duration-500 ease-out text-white ${
            isHeaderActive 
              ? "scale-[1.02] drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]" 
              : "group-hover:scale-[1.02] group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]"
          }`}>
            RECENT PROJECTS
          </h2>
          <div className={`absolute -bottom-4 rounded-full transition-all duration-500 ease-out h-1 ${
            isHeaderActive
              ? "w-full left-0 bg-[linear-gradient(90deg,#3B82F6,#A855F7,#EC4899,#F97316)] shadow-[0_0_15px_rgba(236,72,153,0.6)]"
              : "left-1/2 w-20 bg-[#bed7d9]/30 group-hover:w-full group-hover:left-0 group-hover:bg-[linear-gradient(90deg,#3B82F6,#A855F7,#EC4899,#F97316)] group-hover:shadow-[0_0_15px_rgba(236,72,153,0.6)]"
          }`}></div>
        </div>
      </motion.div>

      <div 
        className="relative w-full h-[550px] md:h-[650px] flex items-center justify-center overflow-visible perspective-[1200px] mt-10"
        onWheel={handleWheel}
      >
        <AnimatePresence initial={false}>
          {projects.map((item, index) => {
            const offset = index - activeCarouselIndex;
            const absOffset = Math.abs(offset);

            const scale = absOffset === 0 ? 1 : absOffset === 1 ? 0.8 : 0.6;
            const x = offset === 0 ? "0%" : offset > 0 ? `${55 + absOffset * 15}%` : `-${55 + absOffset * 15}%`;
            const opacity = absOffset === 0 ? 1 : absOffset === 1 ? 0.6 : 0;
            const zIndex = 30 - absOffset * 10;
            const pointerEvents = "auto";
            const cursorStyle = absOffset !== 0 ? "cursor-pointer" : "";
            const blurFilter = absOffset !== 0 ? "blur(4px)" : "blur(0px)";

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ scale, x, opacity, zIndex, filter: blurFilter }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ type: "spring", stiffness: 100, damping: 25, mass: 1.2 }}
                className={`absolute w-[90%] max-w-[570px] bg-[#13162d] rounded-3xl overflow-hidden border border-white/10 shadow-2xl transition-shadow ${cursorStyle}`}
                style={{ pointerEvents: pointerEvents as any }}
                onClick={() => {
                  if (absOffset !== 0) setActiveCarouselIndex(index);
                }}
                drag={absOffset === 0 ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(e, { offset, velocity }) => {
                  if (offset.x > 50 || velocity.x > 500) {
                    setActiveCarouselIndex(prev => Math.max(0, prev - 1));
                  } else if (offset.x < -50 || velocity.x < -500) {
                    setActiveCarouselIndex(prev => Math.min(projects.length - 1, prev + 1));
                  }
                }}
              >
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#13162d]">
                  <div className="absolute inset-0 w-full h-full">
                    <Image
                      src="/bg.png"
                      alt="bg-img"
                      fill
                      className="object-cover opacity-50"
                    />
                  </div>

                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className={`absolute z-10 ${
                      (item.img as string) === '/grid.svg' ? 'object-contain p-8 opacity-50' : 'object-fill'
                    }`}
                  />
                  
                  {absOffset === 0 && (
                     <div className="absolute inset-0 opacity-0 hover:opacity-100 bg-black/60 backdrop-blur-sm transition-opacity duration-300 flex items-center justify-center z-20">
                      <Link
                        href={item.link || item.sourceCode}
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold text-sm transition-transform duration-300 transform translate-y-4 hover:translate-y-0 hover:scale-105 active:scale-95 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] group">
                          <FiGlobe className="text-lg" />
                          <span>Live Demo</span>
                          <FiArrowRight className="text-lg transition-transform duration-300 group-hover:translate-x-1" />
                        </button>
                      </Link>
                     </div>
                  )}
                </div>

                <div className="p-8 relative z-40 bg-[#13162d]">
                  <h1 className="line-clamp-1 text-base font-bold md:text-xl lg:text-2xl text-white mb-2">
                    {item.title}
                  </h1>
                  <p className="text-sm font-light lg:text-lg lg:font-normal text-[#c1c2d3]">
                    {item.des}
                  </p>
                  {item.sourceCode && (
                    <div className="mt-4 flex">
                      <a href={item.sourceCode} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-5 py-2 rounded-lg bg-purple-500/20 text-purple-300 font-medium text-sm transition-all hover:bg-purple-500 hover:text-white border border-purple-500/30 group">
                        View case study <FiArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>

        {/* Edge Navigation Arrows */}
        {projects.length > 1 && (
          <>
            <button
              onClick={() => setActiveCarouselIndex(prev => Math.max(0, prev - 1))}
              disabled={activeCarouselIndex === 0}
              className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 p-2 z-50 text-white/50 hover:text-white disabled:opacity-0 transition-colors focus:outline-none"
            >
              <FiChevronLeft className="w-12 h-12 md:w-16 md:h-16" />
            </button>
            <button
              onClick={() => setActiveCarouselIndex(prev => Math.min(projects.length - 1, prev + 1))}
              disabled={activeCarouselIndex === projects.length - 1}
              className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 p-2 z-50 text-white/50 hover:text-white disabled:opacity-0 transition-colors focus:outline-none"
            >
              <FiChevronRight className="w-12 h-12 md:w-16 md:h-16" />
            </button>
          </>
        )}
      </div>

      {projects.length > 1 && (
        <div className="flex justify-center items-center mt-8 gap-2.5 relative z-40">
          {projects.map((item, i) => (
            <button
              key={item.id}
              onClick={() => setActiveCarouselIndex(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${i === activeCarouselIndex ? 'bg-purple-400 w-10 shadow-[0_0_10px_rgba(192,132,252,0.5)]' : 'bg-white/30 hover:bg-white/60'}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
};
