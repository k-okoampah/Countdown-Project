import React from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import ProductPreview from './components/ProductPreview.jsx';
import Pillars from './components/Pillars.jsx';
import Roadmap from './components/Roadmap.jsx';
import Footer from './components/Footer.jsx';
import BackgroundEffects from './components/BackgroundEffects.jsx';

export default function App() {
  return (
    <div
      id="app-container"
      className="relative min-h-screen bg-slate-50 text-slate-900 flex flex-col justify-between overflow-x-hidden selection:bg-[var(--career-blue)]/20 selection:text-[var(--career-blue)]"
    >
      {/* Accessible Skip Link for keyboard and screen-reader users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-5 focus:py-2.5 focus:bg-[var(--career-blue)] focus:text-white focus:font-bold focus:text-sm focus:rounded-xl focus:shadow-[0_0_25px_rgba(47,128,237,0.4)] focus:outline-none focus:ring-2 focus:ring-[var(--career-blue)] focus:ring-offset-2 focus:ring-offset-white transition-all"
      >
        Skip to main content
      </a>

      {/* Dynamic, lightweight ambient visual effects */}
      <BackgroundEffects />

      {/* Header Landmark */}
      <Header />

      {/* Main Landmark Area */}
      <main id="main-content" tabIndex="-1" className="relative z-10 flex-1 flex flex-col focus:outline-none">
        {/* 1. Hero Section - The Visual Focus */}
        <div className="px-3 min-[380px]:px-4 sm:px-6 lg:px-8 w-full max-w-full">
          <Hero />
        </div>

        {/* 2. System Interface Mockup Preview */}
        <ProductPreview />

        {/* 3. Architectural Pillars */}
        <Pillars />

        {/* 4. Launch Progression Roadmap */}
        <Roadmap />
      </main>

      {/* Footer Landmark */}
      <Footer />
    </div>
  );
}
