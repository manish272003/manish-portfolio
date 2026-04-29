import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import Link from 'next/link';

export default function VijayTechCaseStudy() {
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
            <span className="mr-4">🚀</span> 
            Driving Product Vision & GTM Alignment for Better Execution
          </h1>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-[#a1a1aa] text-lg">
            <p className="flex items-center gap-2">
              <span className="font-medium text-[#e2e2e5]">Associate Product Manager Intern</span>
              <span className="hidden sm:inline">·</span>
              <span>Vijay Tech Solutions</span>
            </p>
            <p className="hidden sm:block text-white/20">|</p>
            <p>Jun 2024 – Aug 2024 · Bengaluru</p>
          </div>
        </header>

        {/* Main Content Grid */}
        <div className="flex flex-col gap-8 md:gap-12">
          
          {/* Context & Problem Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SectionCard title="Context" icon="🔍">
              Vijay Tech Solutions was focused on building and scaling product features while ensuring alignment between product development and go-to-market (GTM) strategy. There was a need to structure product thinking, define clearer roadmaps, and connect product execution with customer and business goals.
            </SectionCard>
            
            <SectionCard title="Problem" icon="🎯">
              <ul className="list-disc list-outside ml-4 space-y-2 text-[#c1c2d3]">
                <li>Need for clearer product direction and prioritization</li>
                <li>Gaps between product development and GTM strategy alignment</li>
                <li>Limited structured documentation for feature planning and execution</li>
              </ul>
            </SectionCard>
          </div>

          {/* My Role */}
          <SectionCard title="My Role" icon="🧠">
            As an Associate Product Manager Intern, I supported product vision definition, roadmap planning, and documentation, while ensuring that product decisions were aligned with customer needs and GTM objectives.
          </SectionCard>

          {/* Approach */}
          <SectionCard title="Approach" icon="⚙️" fullWidth>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
              <div className="space-y-3">
                <h4 className="text-white font-semibold text-lg flex items-center gap-3">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/10 text-xs text-[#5ce1e6]">1</span>
                  Customer Research
                </h4>
                <ul className="list-disc list-outside ml-10 space-y-2 text-[#c1c2d3]">
                  <li>Conducted research to understand user needs, expectations, and pain points</li>
                  <li>Synthesized insights to inform product direction and feature prioritization</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="text-white font-semibold text-lg flex items-center gap-3">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/10 text-xs text-[#5ce1e6]">2</span>
                  Product Roadmap Planning
                </h4>
                <ul className="list-disc list-outside ml-10 space-y-2 text-[#c1c2d3]">
                  <li>Assisted in structuring and refining the product roadmap</li>
                  <li>Prioritized features based on user value and business impact</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="text-white font-semibold text-lg flex items-center gap-3">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/10 text-xs text-[#5ce1e6]">3</span>
                  PRD Creation
                </h4>
                <ul className="list-disc list-outside ml-10 space-y-2 text-[#c1c2d3]">
                  <li>Created and contributed to Product Requirement Documents (PRDs)</li>
                  <li>Defined problem statements, feature scope, and success criteria</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="text-white font-semibold text-lg flex items-center gap-3">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/10 text-xs text-[#5ce1e6]">4</span>
                  GTM Alignment
                </h4>
                <ul className="list-disc list-outside ml-10 space-y-2 text-[#c1c2d3]">
                  <li>Ensured product features aligned with go-to-market strategy</li>
                  <li>Collaborated with stakeholders to connect product decisions with business goals</li>
                </ul>
              </div>
            </div>
          </SectionCard>

          {/* Key Contributions & Impact Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SectionCard title="Key Contributions" icon="🚀">
              <ul className="list-disc list-outside ml-4 space-y-2 text-[#c1c2d3]">
                <li>Supported development of a more structured and prioritized product roadmap</li>
                <li>Strengthened alignment between product execution and GTM strategy</li>
                <li>Improved clarity and quality of product documentation (PRDs & specs)</li>
                <li>Contributed to translating customer insights into actionable product decisions</li>
              </ul>
            </SectionCard>

            <SectionCard title="Impact (Non-confidential)" icon="📈">
              <ul className="list-disc list-outside ml-4 space-y-2 text-[#c1c2d3]">
                <li>Enabled better coordination between product and business teams</li>
                <li>Helped ensure product features were aligned with market needs and launch strategy</li>
                <li>Contributed to a more organized and execution-ready product planning process</li>
              </ul>
            </SectionCard>
          </div>

          {/* Key Learnings */}
          <SectionCard title="Key Learnings" icon="🧩" fullWidth>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-4">
              <LearningCard text="Product success depends on strong alignment between vision, execution, and GTM" />
              <LearningCard text="Roadmaps are most effective when grounded in customer insights" />
              <LearningCard text="Clear documentation is critical for scalable product development" />
              <LearningCard text="Collaboration across teams drives better, faster decisions" />
            </div>
          </SectionCard>

          {/* Skills Demonstrated */}
          <div className="mt-8 mb-20">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <span className="text-3xl">🛠</span> Skills Demonstrated
            </h3>
            <div className="flex flex-wrap gap-3">
              {['Product Strategy', 'Roadmap Planning', 'Customer Research', 'PRD Writing', 'GTM Alignment', 'Cross-functional Collaboration'].map((skill, idx) => (
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
