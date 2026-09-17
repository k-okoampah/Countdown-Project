import React from 'react';
import { CheckCircle2, Clock, Rocket } from 'lucide-react';

const milestones = [
  {
    phase: 'Phase 01',
    title: 'Platform Architecture & Core Engine',
    date: 'Q2 2026',
    status: 'Completed',
    description: 'Validated core pathways and infrastructure with leading partner organizations and beta institutions.',
    current: false,
    done: true,
  },
  {
    phase: 'Phase 02',
    title: 'Partner & Mentor Pilot',
    date: 'Q3 2026',
    status: 'Completed',
    description: 'Onboarded premier technology firms, high-growth startups, and 120+ verified executive industry mentors.',
    current: false,
    done: true,
  },
  {
    phase: 'Phase 03',
    title: 'Talent Beta & Priority Access',
    date: 'Autumn 2026',
    status: 'In Progress',
    description: 'Final stress testing, user onboarding, and early toolkit access for priority registrants.',
    current: true,
    done: false,
  },
  {
    phase: 'Phase 04',
    title: 'Official Worldwide Launch',
    date: 'December 31, 2026',
    status: 'Target Date',
    description: 'Full global deployment across all platforms with access to verified talent and workflow tools.',
    current: false,
    done: false,
  },
];

export default function Roadmap() {
  return (
    <section
      id="roadmap"
      aria-labelledby="roadmap-heading"
      className="py-12 sm:py-16 md:py-24 max-w-6xl mx-auto px-3.5 sm:px-6 lg:px-8 w-full"
    >
      <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 px-2">
        <span className="text-xs font-mono font-bold tracking-widest uppercase text-[var(--career-blue)]">
          Launch Progression
        </span>
        <h2
          id="roadmap-heading"
          className="text-2xl sm:text-4xl md:text-5xl font-bold font-['Space_Grotesk'] text-slate-900 mt-2 tracking-tight"
        >
          The road to global impact
        </h2>
        <p className="text-slate-600 text-xs sm:text-sm md:text-base mt-2.5 sm:mt-3">
          Track our milestones as we finalize the final deployment phase before December 31, 2026.
        </p>
      </div>

      <ol
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6 list-none p-0 m-0"
        aria-label="Launch progression milestones"
      >
        {milestones.map((step) => (
          <li
            key={step.phase}
            className={`rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-7 flex flex-col justify-between transition-all duration-300 relative border ${
              step.current
                ? 'bg-white border-2 border-[var(--career-blue)] shadow-[0_15px_35px_-5px_rgba(47,128,237,0.18)] ring-4 ring-blue-50'
                : step.done
                ? 'bg-white border-slate-200 shadow-xs hover:border-slate-300'
                : 'bg-slate-50/80 border-slate-200 shadow-xs opacity-90'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <span className="text-xs font-mono font-bold text-slate-500">
                  {step.phase}
                </span>
                {step.done ? (
                  <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-mono font-bold text-emerald-700 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200">
                    <CheckCircle2 className="w-3 h-3 text-[var(--career-green)]" aria-hidden="true" />
                    <span>DONE</span>
                  </span>
                ) : step.current ? (
                  <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-mono font-bold text-[var(--career-blue)] px-2.5 py-0.5 rounded-full bg-blue-50 border border-[var(--career-blue)]/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--career-blue)] animate-ping" aria-hidden="true" />
                    <span>ACTIVE</span>
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-mono font-semibold text-slate-500 px-2 py-0.5 rounded-full bg-slate-100 border border-slate-200">
                    <Clock className="w-3 h-3" aria-hidden="true" />
                    <span>TARGET</span>
                  </span>
                )}
              </div>

              <h3 className="text-base sm:text-lg font-bold font-['Space_Grotesk'] text-slate-900 mb-2">
                {step.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {step.description}
              </p>
            </div>

            <div className="mt-5 sm:mt-6 pt-3.5 sm:pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono font-medium text-slate-500">
              <span className="font-semibold text-slate-700">{step.date}</span>
              {step.phase === 'Phase 04' && <Rocket className="w-4 h-4 text-[var(--career-orange)]" aria-hidden="true" />}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
