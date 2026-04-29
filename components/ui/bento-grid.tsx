"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import Lottie from "react-lottie";

import { companies } from "@/data";
import { socialMedia } from "@/data";
import Link from "next/link";
import { links } from "@/config";
import animationData from "@/data/confetti.json";
import { cn } from "@/lib/utils";

import { BackgroundGradientAnimation } from "./background-gradient-animation";
import { MagicButton } from "./magic-button";


export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-5",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  id,
  className,
  title,
  description,
  title2,
  description2,
  img,
  description3,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  id?: number;
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  title2?: string | React.ReactNode;
  description2?: string | React.ReactNode;
  img?: string;
  description3?: string | React.ReactNode;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(links.ownerEmail);
    setCopied(true);
  };

  useEffect(() => {
    if (!copied) return;

    const copyTimeout = setTimeout(() => {
      setCopied(false);
    }, 3500);

    return () => clearTimeout(copyTimeout);
  }, [copied]);

  return (
    <div
      className={cn(
        "group/bento relative row-span-1 flex flex-col justify-between space-y-4 overflow-hidden rounded-3xl border border-white/[0.1] shadow-input transition duration-200 hover:shadow-xl dark:shadow-none",
        className
      )}
      style={{
        background: "rgba(17, 17, 17, 0.69)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={cn("h-full", id === 6 && "flex justify-center")}>
        <div className="absolute h-full w-full">
          {img && (
            <Image
              width={689}
              height={541}
              src={img}
              alt={img}
              className={cn("object-cover object-center", imgClassName)}
            />
          )}
        </div>

        <div
          className={cn(
            "absolute left-0 -mb-5",
            id === 5 && "w-full opacity-80"
          )}
        >
          {spareImg && (
            <Image
              width={208}
              height={96}
              src={spareImg}
              alt={spareImg}
              className="h-full w-full object-cover object-center"
            />
          )}
        </div>

        {id === 6 && <BackgroundGradientAnimation />}

        <div
          className={cn(
            "relative flex min-h-40 flex-col p-5 px-5 transition duration-200 group-hover/bento:translate-x-2 md:h-full lg:p-10",
            titleClassName
          )}
        >
          
          {id === 1 ? (
            <div className="z-10 flex flex-col md:flex-row items-center justify-between text-sm font-medium text-[#c1c2d3] md:text-xs lg:text-base text-left w-full h-full gap-8 md:gap-12 mt-2">
              {/* Left Column (55%) */}
              <div className="flex flex-col justify-between h-full w-full md:w-[55%]">
                <div className="flex flex-col gap-4">
                  <div className="font-sans text-2xl font-bold lg:text-4xl text-white">
                    About Me
                  </div>
                  <div className="text-[#c1c2d3] leading-relaxed text-base">
                    I’m Manish Sunkishala, an aspiring Product Manager building 0→1 AI-powered products that solve real user problems.
                  </div>
                </div>

                <div className="flex flex-col gap-1 mt-6">
                  <div className="font-sans text-base font-bold text-white mb-1">Education</div>
                  <div className="font-semibold text-[#c1c2d3]">Vellore Institute of Technology</div>
                  <div className="text-sm">B.Tech – Computer Science and Engineering</div>
                  <div className="text-xs text-[#c1c2d3]/60">2021 - 2025 | Chennai, India</div>
                </div>

                <div className="flex items-center gap-3 mt-6">
                  {socialMedia.map((profile) => (
                    <Link
                      key={profile.name}
                      href={profile.link}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex size-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition backdrop-blur-md"
                      title={profile.name}
                    >
                      <Image src={profile.img} alt={`profile-${profile.name}`} width={18} height={18} />
                    </Link>
                  ))}
                  <a href="/pdf/Manish%20Resume%20.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-4 h-10 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition backdrop-blur-md text-sm text-white font-medium">
                    📄 Resume
                  </a>
                </div>
              </div>

              {/* Right Column (35%) */}
              <div className="flex flex-col justify-center h-full w-full md:w-[35%]">
                <div className="font-sans text-lg font-bold text-white mb-4">// HOW I BUILD</div>
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col gap-1 p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                    <span className="text-xs font-bold text-purple-400">01</span>
                    <span className="text-sm font-semibold text-white">Build AI-powered MVPs</span>
                  </div>
                  <div className="flex flex-col gap-1 p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                    <span className="text-xs font-bold text-purple-400">02</span>
                    <span className="text-sm font-semibold text-white">Translate ideas into products</span>
                  </div>
                  <div className="flex flex-col gap-1 p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                    <span className="text-xs font-bold text-purple-400">03</span>
                    <span className="text-sm font-semibold text-white">Focus on user-centric solutions</span>
                  </div>
                </div>
              </div>
            </div>
          ) : id === 4 ? (
            <div className="flex flex-col h-full">
              <div className="z-10 max-w-96 font-sans text-lg font-bold lg:text-3xl mb-4">
                {title}
              </div>
              <div className="z-10 flex flex-col gap-6 text-sm font-medium text-[#c1c2d3] md:text-xs lg:text-base text-left flex-grow">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                  <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-white font-bold"><span className="text-xl">🧠</span> Product</div>
                  <ul className="flex flex-col gap-2 pl-1">
                    <li className="flex items-center gap-2 whitespace-nowrap"><span className="text-base w-6 text-center">🎯</span> Product Strategy</li>
                    <li className="flex items-center gap-2 whitespace-nowrap"><span className="text-base w-6 text-center">🔍</span> User Research</li>
                    <li className="flex items-center gap-2 whitespace-nowrap"><span className="text-base w-6 text-center">🚀</span> MVP Development</li>
                    <li className="flex items-center gap-2 whitespace-nowrap"><span className="text-base w-6 text-center">📊</span> Feature Prioritization</li>
                    <li className="flex items-center gap-2 whitespace-nowrap"><span className="text-base w-6 text-center">🧩</span> UX Thinking</li>
                  </ul>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-white font-bold"><span className="text-xl">🤖</span> AI & Prototyping</div>
                  <ul className="flex flex-col gap-2 pl-1">
                    <li className="flex items-center gap-2 whitespace-nowrap"><span className="text-base w-6 text-center">🤖</span> Lovable AI</li>
                    <li className="flex items-center gap-2 whitespace-nowrap"><span className="text-base w-6 text-center">⚡</span> Rapid Prototyping</li>
                    <li className="flex items-center gap-2 whitespace-nowrap"><span className="text-base w-6 text-center">🧠</span> AI Product Thinking</li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col gap-3 mt-2">
                <div className="flex items-center gap-2 text-white font-bold"><span className="text-xl">🛠️</span> Tools</div>
                <div className="flex flex-nowrap items-center gap-3 w-full overflow-hidden">
                  {companies.map(({ id, img, name }) => (
                    <div key={id} className="flex justify-center items-center w-10 h-10 sm:w-12 sm:h-12 bg-white/5 rounded-xl border border-white/10 shadow-sm backdrop-blur-md">
                      <Image
                        height={24}
                        width={24}
                        src={img}
                        alt={`${name}'s logo`}
                        className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          ) : (
            <>
              <div className="z-10 max-w-96 font-sans text-lg font-bold lg:text-3xl">
                {title}
              </div>

              <div className="z-10 font-sans text-sm font-semibold text-[#c1c2d3] md:text-xs lg:text-base whitespace-pre-line mt-2">
                {description}
              </div>

              {title2 && (
                <div className="z-10 max-w-96 font-sans text-lg font-bold lg:text-3xl mt-3">
                  {title2}
                </div>
              )}

              {description2 && (
                <div className="z-10 font-sans text-sm font-semibold text-[#c1c2d3] md:text-xs lg:text-base whitespace-pre-line mt-1">
                  {description2}
                </div>
              )}

              {description3 && (
                <div className="z-10 font-sans text-sm font-light text-[#c1c2d3] md:text-xs lg:text-base whitespace-pre-line ml-10 mt-1">
                  {description3}
                </div>
              )}
              
              <div className="flex items-center gap-6 md:gap-3 mt-6">
                {socialMedia && socialMedia.map((profile) => (
                  <Link
                    key={profile.name}
                    href={profile.link}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="saturate-120 flex size-7 items-center justify-center rounded-lg border border-black-200 bg-black-100 bg-opacity-75 backdrop-blur-lg backdrop-filter"
                    title={profile.name}
                  >
                    <Image
                      src={profile.img}
                      alt={`profile-${profile.name}`}
                      width={12}
                      height={12}
                    />
                  </Link>
                ))}
              </div>
            </>
          )}





          {id === 6 && (
            <div className="group relative mt-5">
              <button
                tabIndex={-1}
                className="pointer-events-none absolute -bottom-5 right-0 cursor-default"
              >
                <Lottie
                  options={{
                    loop: copied,
                    autoplay: copied,
                    animationData,
                    rendererSettings: {
                      preserveAspectRatio: "xMidYMid slice",
                    },
                  }}
                />
              </button>

              <MagicButton
                title={copied ? "Email copied!" : "Copy my email"}
                icon={<IoCopyOutline />}
                otherClasses="!bg-[#161a31]"
                handleClick={handleCopy}
                asChild
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
