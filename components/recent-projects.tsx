"use client";

import Image from "next/image";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";

import { projects } from "@/data";

import { PinContainer } from "./ui/3d-pin";

export const RecentProjects = () => {
  return (
    <section id="projects" className="pt-4 pb-20">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
        className="flex flex-col items-center mb-10"
      >
        <div className="relative group cursor-pointer flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-[0.05em] transition-all duration-500 ease-out group-hover:scale-[1.02] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-[linear-gradient(90deg,#0A84FF,#5E5CE6,#BF5AF2,#FF2D55,#FF6A00)] bg-[length:200%_auto] bg-left group-hover:bg-right group-hover:drop-shadow-[0_0_20px_rgba(191,90,242,0.5)]">
            RECENT PROJECTS
          </h2>
          <div className="absolute -bottom-4 left-1/2 w-20 h-1 bg-[#bed7d9]/30 rounded-full transition-all duration-500 ease-out group-hover:w-full group-hover:left-0 group-hover:bg-[linear-gradient(90deg,#0A84FF,#5E5CE6,#BF5AF2,#FF2D55,#FF6A00)] group-hover:shadow-[0_0_15px_rgba(191,90,242,0.6)]"></div>
        </div>
      </motion.div>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-x-24 gap-y-8 p-4">
        {projects.map(
          (item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              key={item.id}
              className="flex h-[32rem] w-[90vw] items-center justify-center sm:h-[41rem] sm:w-[570px] lg:min-h-[32.5rem]"
            >
              <PinContainer title="Visit" href={item.link}>
                <div className="relative mb-10 flex w-[80vw] sm:w-[570px] aspect-[16/10] items-center justify-center overflow-hidden rounded-2xl lg:rounded-3xl bg-[#13162d]">
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
                </div>

                <h1 className="line-clamp-1 text-base font-bold md:text-xl lg:text-2xl">
                  {item.title}
                </h1>

                <p className="line-clamp-2 text-sm font-light lg:text-xl lg:font-normal text-[#c1c2d3]">
                  {item.des}
                </p>

                <div className="mb-3 mt-7 flex items-center justify-end">
                  <Link
                    href={item.sourceCode || item.link}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-white/20 text-black font-medium text-sm transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] group">
                      <span>{item.ctaText || "View case"}</span>
                      <FiArrowRight className="text-lg transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </Link>
                </div>
              </PinContainer>
            </motion.div>
          )
        )}
      </div>
    </section>
  );
};
