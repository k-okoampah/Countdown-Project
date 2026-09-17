import React from 'react';
import { Terminal, Cpu, Zap, Activity, Layers, Sparkles, Award, TrendingUp, Users } from 'lucide-react';

export default function ProductPreview() {
  return (
    <section
      id="product-preview"
      aria-labelledby="preview-heading"
      className="py-12 sm:py-16 md:py-24 max-w-6xl mx-auto px-3.5 sm:px-6 lg:px-8 relative w-full"
    >
      <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 px-2">
        <span className="text-xs font-mono font-bold tracking-widest uppercase text-[var(--career-blue)]">
          Platform Interface
        </span>
        <h2
          id="preview-heading"
          className="text-2xl sm:text-4xl md:text-5xl font-bold font-['Space_Grotesk'] text-slate-900 mt-2 tracking-tight"
        >
          Designed for career advancement & clarity
        </h2>
        <p className="text-slate-600 text-xs sm:text-sm md:text-base mt-2.5 sm:mt-3">
          A preview of Nova. Intelligent skills mapping, career trajectory analytics, and direct talent matching.
        </p>
      </div>

      {/* Interface Mockup Container with Clean Light Aesthetic */}
      <div className="relative rounded-2xl sm:rounded-3xl p-1 bg-gradient-to-b from-blue-100/70 via-slate-100 to-blue-50/50 shadow-[0_20px_60px_-15px_rgba(47,128,237,0.12)] border border-blue-200/70 w-full">
        {/* Glow backdrop behind frame */}
        <div
          className="absolute -top-12 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-blue-400/10 blur-[80px] rounded-full pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative rounded-[18px] sm:rounded-[22px] bg-white border border-slate-200 overflow-hidden shadow-sm">
          {/* Mock Window Title Bar */}
          <div className="h-10 sm:h-12 border-b border-slate-200 bg-slate-50/90 px-3.5 sm:px-5 flex items-center justify-between gap-2">
            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-rose-400 inline-block" aria-hidden="true" />
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-400 inline-block" aria-hidden="true" />
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-400 inline-block" aria-hidden="true" />
              <span className="ml-2 sm:ml-3 text-[11px] sm:text-xs font-mono text-slate-500 hidden min-[540px]:inline truncate font-medium">
                nova // workspace-platform-v1.0
              </span>
            </div>

            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[10px] sm:text-[11px] font-mono font-semibold text-emerald-700">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--career-green)] animate-pulse" aria-hidden="true" />
                TALENT PIPELINE ACTIVE
              </span>
            </div>
          </div>

          {/* Interface Body Grid */}
          <div className="p-4 sm:p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 bg-slate-50/40">
            {/* Left Panel: Real-time Career Telemetry */}
            <div className="rounded-xl sm:rounded-2xl bg-white border border-slate-200/90 p-4 sm:p-5 flex flex-col justify-between shadow-xs">
              <div>
                <div className="flex items-center justify-between text-xs text-slate-700 mb-4 font-mono">
                  <span className="flex items-center gap-1.5 font-bold text-slate-900">
                    <Activity className="w-3.5 h-3.5 text-[var(--career-blue)]" aria-hidden="true" />
                    CAREER METRICS
                  </span>
                  <span className="text-[var(--career-blue)] font-bold">98.4%</span>
                </div>
                <div className="space-y-3.5">
                  <div>
                    <div className="flex justify-between text-[11px] text-slate-600 mb-1 font-medium">
                      <span>Skills Match Index</span>
                      <span className="text-slate-900 font-mono font-semibold">98.4%</span>
                    </div>
                    <div
                      className="w-full bg-slate-100 h-2 rounded-full overflow-hidden"
                      role="progressbar"
                      aria-valuenow={98}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label="Skills Match Index"
                    >
                      <div className="bg-[var(--career-blue)] h-full rounded-full w-[98%]" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-[11px] text-slate-600 mb-1 font-medium">
                      <span>Youth Placement Rate</span>
                      <span className="text-slate-900 font-mono font-semibold">91.2%</span>
                    </div>
                    <div
                      className="w-full bg-slate-100 h-2 rounded-full overflow-hidden"
                      role="progressbar"
                      aria-valuenow={91}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label="Youth Placement Rate"
                    >
                      <div className="bg-[var(--career-orange)] h-full rounded-full w-[91%]" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-[11px] text-slate-600 mb-1 font-medium">
                      <span>Industry Readiness</span>
                      <span className="text-slate-900 font-mono font-semibold">95.0%</span>
                    </div>
                    <div
                      className="w-full bg-slate-100 h-2 rounded-full overflow-hidden"
                      role="progressbar"
                      aria-valuenow={95}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label="Industry Readiness"
                    >
                      <div className="bg-[var(--career-green)] h-full rounded-full w-[95%]" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 sm:mt-6 pt-3.5 sm:pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600 font-medium">
                <span>Verified Opportunities</span>
                <span className="text-emerald-700 font-mono font-bold">1,850+ Ready</span>
              </div>
            </div>

            {/* Center Panel: Spatial Canvas Node Visualizer */}
            <div className="md:col-span-2 rounded-xl sm:rounded-2xl bg-white border border-slate-200/90 p-4 sm:p-6 flex flex-col justify-between shadow-xs relative overflow-hidden">
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[var(--career-blue)]" aria-hidden="true" />
                  <span className="text-xs font-mono font-bold text-slate-800 uppercase">
                    Career Pathway Orchestrator
                  </span>
                </div>
                <span className="text-[10px] sm:text-[11px] font-mono text-[var(--career-orange)] bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-md font-bold">EMPOWERMENT</span>
              </div>

              {/* Node diagram representation (Stacks neatly on small screens) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 py-2 sm:py-6 relative">
                <div className="rounded-xl p-3 sm:p-3.5 bg-blue-50/50 border border-blue-200/80 text-center">
                  <TrendingUp className="w-5 h-5 text-[var(--career-blue)] mx-auto mb-1.5" aria-hidden="true" />
                  <p className="text-xs font-bold text-slate-900">Talent Ingest</p>
                  <p className="text-[10px] text-slate-500 font-medium mt-0.5">Skills Assessment</p>
                </div>
                <div className="rounded-xl p-3 sm:p-3.5 bg-amber-50/50 border border-amber-200/80 text-center relative">
                  <Sparkles className="w-5 h-5 text-[var(--career-orange)] mx-auto mb-1.5" aria-hidden="true" />
                  <p className="text-xs font-bold text-slate-900">Nova Match Engine</p>
                  <p className="text-[10px] text-slate-500 font-medium mt-0.5">Career Guidance</p>
                </div>
                <div className="rounded-xl p-3 sm:p-3.5 bg-emerald-50/50 border border-emerald-200/80 text-center">
                  <Award className="w-5 h-5 text-[var(--career-green)] mx-auto mb-1.5" aria-hidden="true" />
                  <p className="text-xs font-bold text-slate-900">Placement</p>
                  <p className="text-[10px] text-slate-500 font-medium mt-0.5">Job & Internship</p>
                </div>
              </div>

              {/* Terminal status line */}
              <div className="mt-4 pt-3.5 sm:pt-4 border-t border-slate-100 font-mono text-xs text-slate-600 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 truncate min-w-0">
                  <Terminal className="w-3.5 h-3.5 text-[var(--career-blue)] shrink-0" aria-hidden="true" />
                  <span className="text-[var(--career-blue)] font-semibold truncate">$ nova sync --pathway-empower</span>
                </div>
                <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-bold shrink-0 text-[10px] sm:text-xs">LAUNCH READY</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
