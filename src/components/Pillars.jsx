import React from 'react';
import { Compass, Users, Briefcase } from 'lucide-react';

const pillars = [
  {
    icon: Compass,
    tag: 'OPPORTUNITY',
    title: 'Career Development & Pathways',
    description:
      'Structured pathways, dynamic career roadmaps, and verified opportunities that turn ambition into measurable professional achievements.',
    accentColor: 'text-[var(--career-blue)]',
    bgColor: 'bg-blue-50 border-blue-200/80',
    tagColor: 'text-[var(--career-blue)]',
  },
  {
    icon: Users,
    tag: 'EMPOWERMENT',
    title: 'Youth Empowerment Hub',
    description:
      'Equipping students, graduates, and rising professionals with high-impact digital competencies, mentorship, and leadership skills.',
    accentColor: 'text-[var(--career-orange)]',
    bgColor: 'bg-amber-50 border-amber-200/80',
    tagColor: 'text-amber-700',
  },
  {
    icon: Briefcase,
    tag: 'INNOVATION',
    title: 'Smart Employer Matching',
    description:
      'Direct talent pipelines connecting verified talent with premier employers, high-growth startups, and global organizations.',
    accentColor: 'text-[var(--career-green)]',
    bgColor: 'bg-emerald-50 border-emerald-200/80',
    tagColor: 'text-emerald-700',
  },
];

export default function Pillars() {
  return (
    <section
      id="pillars"
      aria-labelledby="pillars-heading"
      className="py-12 sm:py-16 md:py-24 max-w-6xl mx-auto px-3.5 sm:px-6 lg:px-8 w-full"
    >
      <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 px-2">
        <span className="text-xs font-mono font-bold tracking-widest uppercase text-[var(--career-blue)]">
          Core Pillars
        </span>
        <h2
          id="pillars-heading"
          className="text-2xl sm:text-4xl md:text-5xl font-bold font-['Space_Grotesk'] text-slate-900 mt-2 tracking-tight"
        >
          Built for the rising workforce
        </h2>
        <p className="text-slate-600 text-xs sm:text-sm md:text-base mt-2.5 sm:mt-3">
          Every dimension of Nova has been precision-designed to bridge education, skills, and meaningful careers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8" role="list" aria-label="Nova core pillars">
        {pillars.map((pillar) => {
          const Icon = pillar.icon;
          return (
            <div
              key={pillar.title}
              role="listitem"
              className="relative group rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 p-5 sm:p-7 md:p-8 flex flex-col justify-between hover:border-[var(--career-blue)]/50 hover:shadow-[0_20px_40px_-10px_rgba(47,128,237,0.12)] transition-all duration-300 shadow-sm overflow-hidden"
            >
              {/* Subtle top edge border shine */}
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--career-blue)]/30 to-transparent" aria-hidden="true" />

              <div>
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl ${pillar.bgColor} border flex items-center justify-center mb-4 sm:mb-6 ${pillar.accentColor} group-hover:scale-105 transition-transform duration-300 shadow-xs`}>
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
                </div>

                <span className={`text-[10px] sm:text-[11px] font-mono tracking-widest uppercase font-bold ${pillar.tagColor}`}>
                  {pillar.tag}
                </span>

                <h3 className="text-lg sm:text-xl md:text-2xl font-bold font-['Space_Grotesk'] text-slate-900 mt-1.5 sm:mt-2 mb-2 sm:mb-3">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 sm:mt-8 pt-3.5 sm:pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] sm:text-xs font-mono text-slate-500 font-medium">
                <span>NOVA VERIFIED</span>
                <span className="text-[var(--career-blue)] font-bold">● ACTIVE</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
