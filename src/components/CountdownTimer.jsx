import React, { useState, useEffect, useRef } from 'react';
import { Rocket, ArrowRight } from 'lucide-react';

// ============================================================
// 🚀 NOVA LAUNCH CONFIGURATION
// Change the target date and time below (ISO 8601 string format).
// Example: "2026-12-31T18:00:00"
// To test the completed state, set this to a past date, e.g.:
// "2024-01-01T00:00:00"
// ============================================================
export const LAUNCH_DATE = "2026-12-31T18:00:00";

/**
 * Returns the effective launch date string.
 * Defaults to LAUNCH_DATE.
 * Also supports optional testing in browser via query params:
 * - ?test=days    (14 days in future)
 * - ?test=minutes (5 minutes in future)
 * - ?test=seconds (8 seconds in future - watch the live transition!)
 * - ?test=past    (date in past - test completed state)
 * - ?launch=YYYY-MM-DDTHH:mm:ss (arbitrary ISO timestamp)
 */
export function getActiveLaunchDate() {
  if (typeof window !== 'undefined' && window.location && window.location.search) {
    const params = new URLSearchParams(window.location.search);
    const test = params.get('test');
    if (test) {
      const storageKey = `nova_test_target_${test}`;
      try {
        const saved = sessionStorage.getItem(storageKey);
        if (saved && !isNaN(new Date(saved).getTime())) {
          return saved;
        }
      } catch {
        // Fallback gracefully if storage is restricted
      }

      let testTarget;
      if (test === 'days') {
        testTarget = new Date(Date.now() + 14 * 86400000 + 6 * 3600000 + 25 * 60000 + 40000).toISOString();
      } else if (test === 'minutes') {
        testTarget = new Date(Date.now() + 4 * 60000 + 30000).toISOString();
      } else if (test === 'seconds') {
        testTarget = new Date(Date.now() + 8000).toISOString();
      } else if (test === 'past') {
        testTarget = new Date(Date.now() - 86400000).toISOString();
      }

      if (testTarget) {
        try {
          sessionStorage.setItem(storageKey, testTarget);
        } catch {
          // ignore storage quota error
        }
        return testTarget;
      }
    }

    const custom = params.get('launch');
    if (custom && !isNaN(new Date(custom).getTime())) {
      return custom;
    }
  }
  return LAUNCH_DATE;
}

/**
 * Calculates remaining time until target date.
 * Returns days, hours, minutes, and seconds as padded 2-digit strings.
 * Sets isCompleted: true when the target time has been reached or passed.
 * Strictly guarantees non-negative countdown values.
 */
export function calculateTimeLeft(target) {
  const targetTime = new Date(target).getTime();
  const now = Date.now();
  const difference = targetTime - now;

  // Prevent negative values and mark completed when target date has arrived or passed
  if (isNaN(difference) || difference <= 0) {
    return {
      days: '00',
      hours: '00',
      minutes: '00',
      seconds: '00',
      isCompleted: true,
    };
  }

  // Safe non-negative difference value
  const safeDiff = Math.max(0, difference);
  const days = Math.floor(safeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((safeDiff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((safeDiff / (1000 * 60)) % 60);
  const seconds = Math.floor((safeDiff / 1000) % 60);

  return {
    days: String(Math.max(0, days)).padStart(2, '0'),
    hours: String(Math.max(0, hours)).padStart(2, '0'),
    minutes: String(Math.max(0, minutes)).padStart(2, '0'),
    seconds: String(Math.max(0, seconds)).padStart(2, '0'),
    isCompleted: false,
  };
}

/**
 * Reusable CountdownTimer Component
 * - Large, prominent typography and rounded glassmorphic cards
 * - Real-time countdown calculation with clean interval disposal
 * - Interactive completion mode with "We're Live!" announcement
 */
export default function CountdownTimer({ targetDate = LAUNCH_DATE, onComplete }) {
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(targetDate));
  const onCompleteRef = useRef(onComplete);

  // Keep onCompleteRef updated without restarting the timer interval
  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    // Recalculate immediately on mount or targetDate change
    const initial = calculateTimeLeft(targetDate);
    setTimeLeft(initial);

    if (initial.isCompleted) {
      if (onCompleteRef.current) onCompleteRef.current(true);
      return; // Target date already in the past, no interval needed
    }

    // Set 1-second interval to update remaining time
    const intervalId = setInterval(() => {
      const nextTime = calculateTimeLeft(targetDate);
      setTimeLeft(nextTime);

      // Stop countdown interval immediately upon completion
      if (nextTime.isCompleted) {
        clearInterval(intervalId);
        if (onCompleteRef.current) onCompleteRef.current(true);
      }
    }, 1000);

    // Clean up interval when component unmounts
    return () => clearInterval(intervalId);
  }, [targetDate]);

  // When countdown is completed: Hide Days/Hours/Minutes/Seconds and show "We're Live!"
  if (timeLeft.isCompleted) {
    return (
      <div
        id="launch-completed-container"
        role="region"
        aria-label="Official Launch Completed"
        className="w-full max-w-3xl mx-auto my-6 p-8 sm:p-12 md:p-14 rounded-3xl bg-white border border-emerald-200 shadow-[0_25px_60px_-15px_rgba(16,185,129,0.15)] backdrop-blur-xl relative overflow-hidden transition-all duration-700"
      >
        {/* Screen-reader polite live announcement for launch completion */}
        <div role="status" aria-live="polite" className="sr-only">
          Nova has officially launched worldwide. Welcome to the future of career intelligence.
        </div>

        {/* Ambient Top Glow */}
        <div
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-80 h-80 bg-emerald-500/10 blur-[90px] rounded-full pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 flex flex-col items-center text-center">
          {/* Live Worldwide Badge */}
          <div
            id="live-status-badge"
            role="status"
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-50 border border-[var(--career-green)]/30 text-emerald-700 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-6"
          >
            <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--career-green)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--career-green)]"></span>
            </span>
            <span>Worldwide Launch Active</span>
          </div>

          {/* Large Animated Heading */}
          <div className="flex items-center justify-center gap-2.5 sm:gap-4 mb-4">
            <Rocket className="w-8 h-8 sm:w-12 sm:h-12 text-[var(--career-orange)] animate-bounce shrink-0" aria-hidden="true" />
            <h2
              id="launch-live-heading"
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight font-['Space_Grotesk'] bg-gradient-to-r from-[var(--career-blue)] via-blue-600 to-[var(--career-green)] bg-clip-text text-transparent drop-shadow-xs"
            >
              We're Live!
            </h2>
          </div>

          {/* Supporting Message */}
          <p
            id="launch-live-subheading"
            className="text-base sm:text-xl md:text-2xl font-normal text-slate-600 max-w-xl leading-relaxed mb-8 px-2"
          >
            Nova has officially launched. Welcome to the next-generation digital platform.
          </p>

          {/* Action Button */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a
              id="launch-access-btn"
              href="#product-preview"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('product-preview');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="button-glow-hover w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 rounded-2xl bg-[var(--career-blue)] hover:bg-[#256bc7] text-white font-bold text-sm sm:text-base tracking-wide transition-all duration-300 shadow-xl shadow-blue-500/25 flex items-center justify-center gap-2.5 cursor-pointer hover:scale-[1.02] active:scale-[0.98] min-h-[48px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--career-blue)] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              <span>Explore Nova 1.0</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    );
  }

  // Active Countdown Grid (Visible when not completed)
  const units = [
    { id: 'countdown-days', label: 'Days', value: timeLeft.days },
    { id: 'countdown-hours', label: 'Hours', value: timeLeft.hours },
    { id: 'countdown-minutes', label: 'Minutes', value: timeLeft.minutes },
    { id: 'countdown-seconds', label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <div
      id="countdown-timer-container"
      role="region"
      aria-label="Launch countdown timer"
      className="w-full max-w-4xl mx-auto px-1 sm:px-0"
    >
      {/* Screen-reader accessible representation: clearly readable without repetitive 1-second ticks */}
      <div className="sr-only" role="timer" aria-atomic="true">
        <p>
          Countdown to official launch: {parseInt(timeLeft.days, 10)} days, {parseInt(timeLeft.hours, 10)} hours, {parseInt(timeLeft.minutes, 10)} minutes, and {parseInt(timeLeft.seconds, 10)} seconds remaining.
        </p>
      </div>

      {/* Prominent High-Contrast Visual Timer Grid (hidden from screen reader chatter so it does not interrupt speech every second) */}
      <div
        id="countdown-timer-grid"
        aria-hidden="true"
        className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 w-full"
      >
        {units.map((unit) => (
          <div
            key={unit.label}
            id={unit.id}
            className="relative group rounded-2xl sm:rounded-3xl bg-white border border-blue-100/90 p-4 min-[380px]:p-5 sm:p-5 md:p-6 lg:p-7 flex flex-col items-center justify-center shadow-[0_10px_30px_-5px_rgba(47,128,237,0.08)] hover:border-[var(--career-blue)]/50 hover:shadow-[0_15px_35px_-5px_rgba(47,128,237,0.18)] hover:-translate-y-0.5 transition-all duration-300"
          >
            {/* Top delicate reflective highlight */}
            <div
              className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--career-blue)]/40 to-transparent rounded-t-2xl sm:rounded-t-3xl pointer-events-none"
              aria-hidden="true"
            />
            {/* Subtle inner hover glow */}
            <div
              className="absolute -inset-px rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-radial from-blue-500/5 via-transparent to-transparent pointer-events-none"
              aria-hidden="true"
            />

            {/* Fully visible, vertically and horizontally centered digit container */}
            <div className="relative z-10 flex items-center justify-center w-full py-1 sm:py-1.5">
              <span
                key={`${unit.id}-${unit.value}`}
                className="font-['Space_Grotesk'] font-bold text-4xl min-[360px]:text-5xl sm:text-5xl md:text-6xl lg:text-7xl text-[var(--career-blue)] tracking-tight tabular-nums animate-digit-fade leading-none select-none text-center"
              >
                {unit.value}
              </span>
            </div>

            <span className="relative z-10 text-[10px] sm:text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-slate-500 mt-2 sm:mt-3 group-hover:text-[var(--career-blue)] transition-colors duration-200 select-none text-center">
              {unit.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
