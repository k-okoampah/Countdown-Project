import React from 'react';
import { ArrowUp, Twitter, Github, Disc as Discord, Linkedin, ExternalLink } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="site-footer"
      className="w-full bg-slate-50 border-t border-slate-200/90 pt-10 sm:pt-12 pb-10 transition-all relative z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8 pb-8 border-b border-slate-200 text-center lg:text-left">
          {/* Brand Info */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="flex items-center gap-3 mb-2.5">
              <div className="w-8 h-8 rounded-xl bg-[var(--career-blue)] flex items-center justify-center shadow-md shadow-blue-500/20">
                <span className="font-bold text-white font-['Space_Grotesk'] text-sm" aria-hidden="true">
                  N
                </span>
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="font-extrabold text-lg tracking-tight text-slate-900 font-['Space_Grotesk']">
                  Nova
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--career-blue)] bg-blue-50 px-1.5 py-0.5 rounded border border-blue-200">
                  Platform
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 max-w-sm">
              The next-generation platform empowering ambitious talent with intelligent pathways, mentorship, and opportunity.
            </p>
          </div>

          {/* Connect With Me Section */}
          <section
            aria-labelledby="footer-connect-heading"
            className="flex flex-col items-center lg:items-start gap-2"
          >
            <h3
              id="footer-connect-heading"
              className="text-xs font-mono uppercase tracking-widest text-slate-500 font-bold"
            >
              Connect With Me
            </h3>
            <a
              href="https://linktr.ee/k_okoampah"
              target="_blank"
              rel="noopener noreferrer"
              id="footer-linktree-link"
              className="group inline-flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 hover:border-[var(--career-blue)]/50 text-xs font-semibold text-slate-800 hover:text-[var(--career-blue)] transition-all duration-200 shadow-xs hover:shadow-md hover:shadow-blue-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--career-blue)] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              aria-label="Connect with me on Linktree (opens in a new window)"
            >
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--career-green)] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--career-green)]" />
              </span>
              <span className="font-bold text-slate-900 group-hover:text-[var(--career-blue)] transition-colors">
                Linktree
              </span>
              <span className="text-slate-500 font-mono text-[11px]">
                /k_okoampah
              </span>
              <ExternalLink
                className="w-3.5 h-3.5 text-slate-400 group-hover:text-[var(--career-blue)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0"
                aria-hidden="true"
              />
            </a>
          </section>

          {/* Status & Social Media Channels */}
          <div className="flex flex-col items-center lg:items-end gap-3.5">
            {/* System Status */}
            <div
              role="status"
              aria-label="System status: Operational"
              className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-[11px] sm:text-xs font-mono text-slate-700 shadow-xs"
            >
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--career-green)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--career-green)]"></span>
              </span>
              <span className="truncate font-semibold">SYSTEM STATUS: ALL SERVICES ACTIVE</span>
            </div>

            {/* Social Media Links */}
            <nav
              aria-label="Social media channels"
              className="flex items-center gap-2.5 sm:gap-3 flex-wrap justify-center"
            >
              <a
                href="#social-x"
                id="social-x-link"
                onClick={(e) => e.preventDefault()}
                aria-label="Nova on X"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-[var(--career-blue)] hover:border-[var(--career-blue)]/40 flex items-center justify-center transition-colors shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--career-blue)] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                <Twitter className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href="#social-github"
                id="social-github-link"
                onClick={(e) => e.preventDefault()}
                aria-label="Nova on GitHub"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-[var(--career-blue)] hover:border-[var(--career-blue)]/40 flex items-center justify-center transition-colors shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--career-blue)] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                <Github className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href="#social-discord"
                id="social-discord-link"
                onClick={(e) => e.preventDefault()}
                aria-label="Nova Discord Community"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-[var(--career-blue)] hover:border-[var(--career-blue)]/40 flex items-center justify-center transition-colors shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--career-blue)] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                <Discord className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href="#social-linkedin"
                id="social-linkedin-link"
                onClick={(e) => e.preventDefault()}
                aria-label="Nova on LinkedIn"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-[var(--career-blue)] hover:border-[var(--career-blue)]/40 flex items-center justify-center transition-colors shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--career-blue)] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                <Linkedin className="w-4 h-4" aria-hidden="true" />
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left font-medium">
          <p>© 2026 Nova Technologies Inc. All rights reserved.</p>
          <nav
            aria-label="Legal and utilities"
            className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center"
          >
            <a
              href="#privacy"
              onClick={(e) => e.preventDefault()}
              className="py-1 px-1 rounded hover:text-[var(--career-blue)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--career-blue)] focus-visible:ring-offset-1 focus-visible:ring-offset-white"
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              onClick={(e) => e.preventDefault()}
              className="py-1 px-1 rounded hover:text-[var(--career-blue)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--career-blue)] focus-visible:ring-offset-1 focus-visible:ring-offset-white"
            >
              Terms of Service
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1.5 py-1 px-2 rounded hover:text-[var(--career-blue)] transition-colors cursor-pointer min-h-[32px] font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--career-blue)] focus-visible:ring-offset-1 focus-visible:ring-offset-white"
              aria-label="Back to top of page"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" aria-hidden="true" />
            </button>
          </nav>
        </div>
      </div>
    </footer>
  );
}
