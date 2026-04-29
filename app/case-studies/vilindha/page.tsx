import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import Link from 'next/link';

export default function VilindhaCaseStudy() {
  return (
    <main className="min-h-screen bg-black-100 text-white selection:bg-[#5ce1e6] selection:text-black py-20 px-5 font-sans relative overflow-hidden">
      
      {/* Background Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Back button */}
        <Link href="/" className="inline-flex items-center gap-2 text-[#a1a1aa] hover:text-white transition-colors mb-12 group">
          <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Portfolio</span>
        </Link>

        {/* Header Section */}
        <header className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-[#5ce1e6] tracking-wide uppercase mb-6">
            <span>Case Study</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
            <span className="mr-4">🧩</span> 
            Improving Product Engagement Through Research & Opportunity Mapping
          </h1>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-[#a1a1aa] text-lg">
            <p className="flex items-center gap-2">
              <span className="font-medium text-[#e2e2e5]">Associate Product Manager Intern</span>
              <span className="hidden sm:inline">·</span>
              <span>Vilindha Technologies</span>
            </p>
            <p className="hidden sm:block text-white/20">|</p>
            <p>Oct 2024 – Dec 2024 · Hyderabad</p>
          </div>
        </header>

        {/* Main Content Grid */}
        <div className="flex flex-col gap-8 md:gap-12">
          
          {/* Context & Problem Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SectionCard title="Context" icon="🔍">
              Vilindha Technologies aimed to improve user engagement and identify new feature opportunities within its product ecosystem. However, there was limited structured insight into user behavior, competitor positioning, and areas of friction impacting the user experience.
            </SectionCard>
            
            <SectionCard title="Problem" icon="🎯">
              <ul className="list-disc list-outside ml-4 space-y-2 text-[#c1c2d3]">
                <li>Lack of clarity on why users were dropping off in key journeys</li>
                <li>Limited visibility into competitor feature gaps and trends</li>
                <li>Need for structured inputs to support product roadmap decisions</li>
              </ul>
            </SectionCard>
          </div>

          {/* My Role */}
          <SectionCard title="My Role" icon="🧠">
            As an Associate Product Manager Intern, I focused on bridging this gap by combining market research, user behavior analysis, and product thinking to identify actionable opportunities and support product planning.
          </SectionCard>

          {/* Approach */}
          <SectionCard title="Approach" icon="⚙️" fullWidth>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
              <div className="space-y-3">
                <h4 className="text-white font-semibold text-lg flex items-center gap-3">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/10 text-xs text-[#5ce1e6]">1</span>
                  Market & Competitive Research
                </h4>
                <ul className="list-disc list-outside ml-10 space-y-2 text-[#c1c2d3]">
                  <li>Analyzed multiple competitor platforms to benchmark features and identify gaps</li>
                  <li>Mapped patterns in how similar products approached engagement and retention</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="text-white font-semibold text-lg flex items-center gap-3">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/10 text-xs text-[#5ce1e6]">2</span>
                  User Behavior Analysis
                </h4>
                <ul className="list-disc list-outside ml-10 space-y-2 text-[#c1c2d3]">
                  <li>Studied user journeys to identify drop-offs and friction points</li>
                  <li>Synthesized behavioral insights into clear problem areas</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="text-white font-semibold text-lg flex items-center gap-3">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/10 text-xs text-[#5ce1e6]">3</span>
                  Opportunity Identification
                </h4>
                <ul className="list-disc list-outside ml-10 space-y-2 text-[#c1c2d3]">
                  <li>Translated research findings into feature opportunities aligned with user needs</li>
                  <li>Evaluated ideas based on potential impact and feasibility</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="text-white font-semibold text-lg flex items-center gap-3">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/10 text-xs text-[#5ce1e6]">4</span>
                  Product Documentation
                </h4>
                <ul className="list-disc list-outside ml-10 space-y-2 text-[#c1c2d3]">
                  <li>Contributed to PRDs and feature specifications</li>
                  <li>Defined problem statements, scope, and expected outcomes for proposed features</li>
                </ul>
              </div>
            </div>
          </SectionCard>

          {/* Key Contributions & Impact Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SectionCard title="Key Contributions" icon="🚀">
              <ul className="list-disc list-outside ml-4 space-y-2 text-[#c1c2d3]">
                <li>Identified multiple high-impact feature opportunities to improve engagement</li>
                <li>Provided structured insights that supported product prioritization discussions</li>
                <li>Improved clarity in documentation, enabling smoother collaboration across teams</li>
                <li>Acted as a bridge between research insights and product execution</li>
              </ul>
            </SectionCard>

            <SectionCard title="Impact (Non-confidential)" icon="📈">
              <ul className="list-disc list-outside ml-4 space-y-2 text-[#c1c2d3]">
                <li>Enabled more data-informed decision-making for roadmap planning</li>
                <li>Helped align product, design, and engineering teams on well-defined requirements</li>
                <li>Strengthened the foundation for user-centric feature development</li>
              </ul>
            </SectionCard>
          </div>

          {/* Key Learnings */}
          <SectionCard title="Key Learnings" icon="🧩" fullWidth>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-4">
              <LearningCard text="Strong product decisions come from combining qualitative + quantitative insights" />
              <LearningCard text="Clear problem definition is critical for effective execution" />
              <LearningCard text="Cross-functional alignment is as important as the idea itself" />
              <LearningCard text="Prioritization requires balancing user value, business goals, and feasibility" />
            </div>
          </SectionCard>

          {/* Skills Demonstrated */}
          <div className="mt-8 mb-20">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <span className="text-3xl">🛠</span> Skills Demonstrated
            </h3>
            <div className="flex flex-wrap gap-3">
              {['Product Thinking', 'Prioritization', 'User Research', 'Competitive Analysis', 'PRD Writing', 'Cross-functional Collaboration'].map((skill, idx) => (
                <span key={idx} className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-[#e2e2e5] text-sm hover:bg-white/10 hover:border-[#5ce1e6]/40 transition-colors cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}

// Helper Components
function SectionCard({ title, icon, children, fullWidth = false }: { title: string, icon: string, children: React.ReactNode, fullWidth?: boolean }) {
  return (
    <section className={`bg-white/[0.03] border border-white/[0.05] rounded-3xl p-8 hover:bg-white/[0.05] transition-colors duration-500 ${fullWidth ? 'md:col-span-2' : ''}`}>
      <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3 text-white">
        <span className="text-3xl opacity-90">{icon}</span> {title}
      </h3>
      <div className="text-[#c1c2d3] leading-relaxed text-lg">
        {children}
      </div>
    </section>
  );
}

function LearningCard({ text }: { text: string }) {
  return (
    <div className="bg-black/40 border border-white/5 rounded-2xl p-6 hover:border-[#5ce1e6]/30 transition-colors duration-300">
      <p className="text-[#e2e2e5] font-medium leading-relaxed">{text}</p>
    </div>
  );
}
