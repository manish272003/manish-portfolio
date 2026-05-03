import { links } from "@/config";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Experience", link: "#experience" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
] as const;

export const gridItems = [
  {
    id: 1,
    title: "About Me",
    description: "I am Manish Sunkishala Aspiring Product Manager building 0→1 AI-powered products focused on solving real user problems. Experienced in translating ideas into functional MVPs with strong product thinking, user empathy, and rapid iteration.",
    title2: "Education",
    description2: "2021 - 2025 \u00A0\u00A0 Vellore Institute of Technology Chennai, India",
    description3: "B.Tech \u2013 Computer Science and Engineering",
    className: "lg:col-span-3 md:col-span-3 md:row-span-1",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/grid.svg",
    spareImg: "",
  },
  
  {
    id: 4,
    title: "Product Toolkit",
    description: "🧠 Product\n🎯 Product Strategy • 🔍 User Research • 🚀 MVP Development • 📊 Feature Prioritization • 🧩 UX Thinking\n\n🤖 AI & Prototyping\n🤖 Lovable AI • ⚡ Rapid Prototyping • 🧠 AI Product Thinking\n\n🛠️ Tools",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "",
  },

 
] as const;

export const projects = [
  {
    id: 1,
    title: "MapCareerAI",
    des: "An AI-powered platform designed to help students and early professionals discover structured career paths, required skills, and growth trajectories.",
    img: "/mapcareerai.png",
    iconLists: ["/notion.svg", "/figma.svg"],
    link: "https://mapcareerai.lovable.app/",
    sourceCode: "/project case study/CareerMap_AI_Case_Study.html",
    ctaText: "View case study",
  },
  {
    id: 2,
    title: "PlanoraWeds",
    des: "A digital wedding planning platform that centralizes vendor discovery, budgeting, and planning workflows to reduce stress and improve efficiency.",
    img: "/planoraweds.png",
    iconLists: ["/notion.svg", "/figma.svg"],
    link: "https://planoraweds.lovable.app/",
    sourceCode: "/project case study/planora-case-study.html",
    ctaText: "View case study",
  },
  {
    id: 3,
    title: "AeternaVault",
    des: "A digital legacy platform that allows users to securely store and preserve personal memories, messages, and important data.",
    img: "/aeterna-vault.png",
    iconLists: ["/notion.svg", "/figma.svg"],
    link: "https://aeternavault.lovable.app/",
    sourceCode: "/project case study/Aeterna_Case_Study.html",
    ctaText: "View case study",
  },
  {
    id: 4,
    title: "Mini-IRA",
    des: "Mini Ira is an emotionally-aware AI companion that listens, reads the room, and gently nudges users toward calm.",
    img: "/mini-ira.png",
    iconLists: ["/notion.svg", "/figma.svg"],
    link: "https://mini-ira.lovable.app/",
    sourceCode: "/project case study/Mini_Ira_PM_CaseStudy.html",
    ctaText: "View case study",
  },
];

export const testimonials = [
  {
    quote: `Collaborating with ${links.ownerName} was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote: `Collaborating with ${links.ownerName} was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote: `Collaborating with ${links.ownerName} was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote: `Collaborating with ${links.ownerName} was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote: `Collaborating with ${links.ownerName} was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ${links.ownerName}'s enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, ${links.ownerName} is the ideal partner.`,
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
] as const;

export const companies = [
  {
    id: 1,
    name: "Notion",
    img: "/brand-logos/notion.svg",
  },
  {
    id: 2,
    name: "Mixpanel",
    img: "/brand-logos/mixpanel.svg",
  },
  {
    id: 3,
    name: "Jira",
    img: "/brand-logos/jira.svg",
  },
  {
    id: 4,
    name: "Google Analytics",
    img: "/brand-logos/google-analytics.svg",
  },
  {
    id: 5,
    name: "Figma",
    img: "/brand-logos/figma.svg",
  },
] as const;


export const socialMedia = [
  {
    name: "LinkedIn",
    img: "/link.svg",
    link: "https://www.linkedin.com/in/sunkishala-manish-b36742245/",
  },
] as const;

export const techStack = {
  stack1: ["Jira", "Tableau", "Figma"],
  stack2: ["Notion", "Miro", "Analytics"],
} as const;
