import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Header() {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="site-header"
      className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-xl border-b border-slate-200/80 transition-all duration-200"
    >
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-2">
        {/* Nova Logo & Identity */}
        <a
          href="#hero-section"
          id="header-logo"
          aria-label="Nova homepage"
          className="flex items-center gap-2.5 sm:gap-3.5 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--career-blue)] focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded-xl shrink-0 transition-shadow"
        >
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-gradient-to-tr from-[var(--career-blue)] via-[#256bc7] to-blue-600 flex items-center justify-center shadow-md shadow-blue-500/20 ring-1 ring-blue-400/30 group-hover:ring-[var(--career-blue)] transition-all">
            <span className="font-bold text-white font-['Space_Grotesk'] text-base sm:text-lg tracking-wider" aria-hidden="true">
              N
            </span>
            {/* Accent Dot */}
            <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[var(--career-orange)] ring-2 ring-white" aria-hidden="true" />
          </div>
          <div className="flex flex-col text-left">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="font-bold text-lg sm:text-xl tracking-tight text-slate-900 font-['Space_Grotesk']">
                Nova
              </span>
              <span className="text-[9px] sm:text-[10px] font-mono font-semibold px-1.5 sm:px-2 py-0.5 rounded-full bg-blue-50 text-[var(--career-blue)] border border-blue-200 tracking-widest uppercase">
                v1.0
              </span>
            </div>
            <span className="text-[10px] sm:text-[11px] text-slate-500 tracking-wide hidden min-[440px]:block font-medium">
              Next-Gen Platform
            </span>
          </div>
        </a>

        {/* Minimal Navigation (Hidden on mobile, visible on desktop) */}
        <nav
          id="header-nav"
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-slate-600"
        >
          <a
            href="#hero-section"
            onClick={(e) => scrollToSection(e, 'hero-section')}
            className="hover:text-[var(--career-blue)] transition-colors py-1 px-1.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--career-blue)] focus-visible:ring-offset-1 focus-visible:ring-offset-white"
          >
            Countdown
          </a>
          <a
            href="#product-preview"
            onClick={(e) => scrollToSection(e, 'product-preview')}
            className="hover:text-[var(--career-blue)] transition-colors py-1 px-1.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--career-blue)] focus-visible:ring-offset-1 focus-visible:ring-offset-white"
          >
            Platform
          </a>
          <a
            href="#pillars"
            onClick={(e) => scrollToSection(e, 'pillars')}
            className="hover:text-[var(--career-blue)] transition-colors py-1 px-1.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--career-blue)] focus-visible:ring-offset-1 focus-visible:ring-offset-white"
          >
            Opportunities
          </a>
          <a
            href="#roadmap"
            onClick={(e) => scrollToSection(e, 'roadmap')}
            className="hover:text-[var(--career-blue)] transition-colors py-1 px-1.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--career-blue)] focus-visible:ring-offset-1 focus-visible:ring-offset-white"
          >
            Roadmap
          </a>
        </nav>

        {/* Right Action Badge / Coming Soon */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <div
            id="header-coming-soon-badge"
            role="status"
            aria-label="Product status: Coming soon"
            className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-amber-50/80 border border-amber-200/80 text-[11px] sm:text-xs font-semibold text-amber-800 shadow-xs whitespace-nowrap"
          >
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--career-orange)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--career-orange)]"></span>
            </span>
            <span className="text-[var(--career-orange)] font-mono tracking-wide hidden min-[360px]:inline font-bold">COMING SOON</span>
            <span className="text-[var(--career-orange)] font-mono tracking-wide min-[360px]:hidden font-bold">SOON</span>
          </div>

          <a
            href="#notify-form-wrapper"
            onClick={(e) => scrollToSection(e, 'notify-form-wrapper')}
            className="button-glow-hover group hidden sm:inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-xl bg-[var(--career-blue)] hover:bg-[#256bc7] text-white text-xs font-semibold transition-all duration-200 hover:-translate-y-0.5 shadow-sm hover:shadow-md hover:shadow-blue-500/25 min-h-[36px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--career-blue)] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            <span>Get Early Access</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-white/90 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" aria-hidden="true" />
          </a>
        </div>
      </div>
    </header>
  );
}
