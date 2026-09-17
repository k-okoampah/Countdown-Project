import React, { useState, useCallback } from 'react';
import { Calendar } from 'lucide-react';
import CountdownTimer, { LAUNCH_DATE, getActiveLaunchDate } from './CountdownTimer.jsx';
import NotifyForm from './NotifyForm.jsx';

export default function Hero() {
  const activeLaunchDate = getActiveLaunchDate();

  const [isLive, setIsLive] = useState(() => {
    const target = new Date(activeLaunchDate).getTime();
    return !isNaN(target) && target <= Date.now();
  });

  const handleLaunchComplete = useCallback(() => {
    setIsLive(true);
  }, []);

  // Format launch date dynamically from activeLaunchDate (defaults to LAUNCH_DATE)
  const launchDateObj = new Date(activeLaunchDate);
  const formattedLaunchDate = !isNaN(launchDateObj.getTime())
    ? launchDateObj.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      })
    : 'December 31, 2026';

  return (
    <section
      id="hero-section"
      aria-labelledby="hero-heading"
      className="relative pt-12 min-[380px]:pt-16 sm:pt-20 md:pt-24 lg:pt-28 pb-14 sm:pb-20 md:pb-24 text-center max-w-5xl mx-auto flex flex-col items-center px-2 sm:px-4"
    >
      {/* 1. Clean Status Badge - Only keeps "Something New Is Coming" */}
      <div
        id="hero-badge"
        role="status"
        className="animate-fade-in-up inline-flex items-center px-4 py-1.5 sm:py-2 rounded-full border border-[var(--career-blue)]/25 bg-blue-50/90 text-[var(--career-blue)] text-xs sm:text-sm font-semibold mt-1 sm:mt-2 mb-6 sm:mb-8 backdrop-blur-md shadow-xs transition-all duration-300 max-w-[95%] sm:max-w-none"
      >
        <span className="tracking-wide truncate">
          Something New Is Coming
        </span>
      </div>

      {/* 2. Monumental Heading (Fluidly scales from 320px to 1440px) */}
      <h1
        id="hero-heading"
        className="animate-fade-in-up animation-delay-100 text-4xl min-[360px]:text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight text-slate-900 font-['Space_Grotesk'] leading-[1.05] sm:leading-[0.95] mb-4 sm:mb-6 select-none max-w-full break-words"
      >
        Meet <span className="bg-gradient-to-r from-[var(--career-blue)] via-[#256bc7] to-blue-700 bg-clip-text text-transparent">Nova</span>
      </h1>

      {/* 3. Refined Short Description */}
      <p
        id="hero-description"
        className="animate-fade-in-up animation-delay-200 max-w-2xl text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 font-normal leading-relaxed mb-6 sm:mb-8 px-2 sm:px-4"
      >
        Nova is the next-generation digital platform designed to redefine creative and operational workflows, empowering ambitious minds with intelligent tools, mentorship, and transformative opportunities.
      </p>

      {/* 4. Launch Date Indicator */}
      <div
        id="hero-launch-date"
        className="animate-fade-in-up animation-delay-200 inline-flex items-center justify-center gap-2 sm:gap-2.5 text-xs sm:text-sm text-slate-600 font-medium mb-8 sm:mb-12 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-2xl bg-white/95 border border-blue-100/90 shadow-sm backdrop-blur-md max-w-[95%] sm:max-w-none flex-wrap"
      >
        <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[var(--career-blue)] shrink-0" aria-hidden="true" />
        <span className="text-center">
          {isLive ? 'Launched on: ' : 'Official Launch Date: '}
          <time dateTime={activeLaunchDate} className="text-slate-900 font-bold ml-1">
            {formattedLaunchDate}
          </time>
        </span>
      </div>

      {/* 5. The Prominent Countdown Timer Area */}
      <div id="hero-countdown-container" className="animate-fade-in-up animation-delay-300 w-full mb-10 sm:mb-14">
        <CountdownTimer targetDate={activeLaunchDate} onComplete={handleLaunchComplete} />
      </div>

      {/* 6. Functional Notify Me Form */}
      <div id="hero-notify-container" className="animate-fade-in-up animation-delay-400 w-full">
        <NotifyForm />
      </div>
    </section>
  );
}
