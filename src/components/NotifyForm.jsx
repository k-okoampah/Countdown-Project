import React, { useState, useEffect, useRef } from 'react';
import { Bell, ArrowRight, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

/**
 * Validates whether an email string follows standard email format.
 */
function isValidEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(String(email).trim());
}

/**
 * Reusable NotifyForm component
 * Polished, high-contrast email subscription form with client-side validation,
 * simulated 1-second loading state, and accessible feedback.
 */
export default function NotifyForm({ placeholder = "Enter your work or personal email", buttonText = "Notify Me" }) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const handleInputChange = (e) => {
    setEmail(e.target.value);
    if (error) {
      setError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLoading) {
      return;
    }

    const trimmedEmail = email.trim();

    // 1. Validate non-empty
    if (!trimmedEmail) {
      setError('Email address is required. Please enter your email.');
      return;
    }

    // 2. Validate email format
    if (!isValidEmail(trimmedEmail)) {
      setError('Please enter a valid email address (e.g. name@domain.com).');
      return;
    }

    setError('');
    setIsLoading(true);

    // 3. 1-second simulated async loading state
    timerRef.current = setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      setEmail(''); // Clear input after submission
    }, 1000);
  };

  return (
    <div id="notify-form-wrapper" className="w-full max-w-xl mx-auto px-1 sm:px-0">
      {isSuccess ? (
        <div
          id="notify-success-state"
          className="animate-success-pop p-4 sm:p-6 rounded-2xl bg-emerald-50 border border-[var(--career-green)]/40 text-emerald-950 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 shadow-[0_15px_35px_-10px_rgba(16,185,129,0.2)] backdrop-blur-md transition-all relative overflow-hidden"
          role="status"
          aria-live="polite"
          aria-atomic="true"
        >
          {/* Subtle success top highlight */}
          <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--career-green)] to-transparent" aria-hidden="true" />
          <div className="flex items-center gap-3 sm:gap-3.5">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emerald-100 border border-[var(--career-green)]/40 flex items-center justify-center shrink-0 shadow-xs">
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--career-green)] animate-check-bounce" aria-hidden="true" />
            </div>
            <p className="text-xs sm:text-base font-semibold text-emerald-900 text-left">
              You're on the priority list! We'll notify you when Nova officially launches.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setIsSuccess(false)}
            className="text-xs text-[var(--career-blue)] hover:text-blue-800 underline font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--career-blue)] focus-visible:rounded py-1 px-1.5 shrink-0"
          >
            Notify another email
          </button>
        </div>
      ) : (
        <form
          id="notify-form"
          onSubmit={handleSubmit}
          noValidate
          className="flex flex-col gap-2.5 w-full"
        >
          <div className="p-1.5 sm:p-2 rounded-2xl bg-white border border-slate-200 shadow-xl shadow-blue-900/5 backdrop-blur-xl flex flex-col sm:flex-row gap-2 transition-all duration-300 focus-within:border-[var(--career-blue)] focus-within:ring-2 focus-within:ring-[var(--career-blue)]/20 focus-within:shadow-[0_10px_30px_-5px_rgba(47,128,237,0.15)]">
            <div className="relative flex-1 flex items-center min-w-0">
              {/* Semantic Form Label for Screen Readers */}
              <label htmlFor="notify-email-input" className="sr-only">
                Work or personal email address
              </label>
              <input
                id="notify-email-input"
                name="email"
                type="email"
                value={email}
                onChange={handleInputChange}
                disabled={isLoading}
                placeholder={placeholder}
                autoComplete="email"
                spellCheck="false"
                required
                aria-required="true"
                aria-invalid={error ? "true" : "false"}
                aria-describedby={error ? "notify-error-message" : "notify-hint-text"}
                className="w-full px-3.5 sm:px-4 py-3 sm:py-3.5 bg-transparent text-slate-900 placeholder-slate-400 text-sm sm:text-base focus:outline-none transition-all disabled:opacity-60 min-h-[48px]"
              />
            </div>

            <button
              id="notify-submit-button"
              type="submit"
              disabled={isLoading}
              aria-busy={isLoading}
              className="button-glow-hover group w-full sm:w-auto px-6 sm:px-7 py-3.5 rounded-xl bg-[var(--career-blue)] hover:bg-[#256bc7] active:bg-[#1f5cb0] text-white font-bold text-sm sm:text-base transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-blue-500/25 disabled:opacity-75 disabled:cursor-wait shrink-0 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/35 active:translate-y-0 active:scale-[0.99] min-h-[48px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--career-blue)] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-white" aria-hidden="true" />
                  <span>Joining...</span>
                </>
              ) : (
                <>
                  <Bell className="w-4 h-4 text-white group-hover:rotate-12 transition-transform duration-200" aria-hidden="true" />
                  <span>{buttonText}</span>
                  <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true" />
                </>
              )}
            </button>
          </div>

          {/* Screen-reader friendly validation error message */}
          {error && (
            <div
              id="notify-error-message"
              className="flex items-center gap-2 text-xs sm:text-sm text-rose-700 bg-rose-50 border border-rose-200 rounded-xl py-2 px-3.5 mt-1 text-left font-medium"
              role="alert"
              aria-live="assertive"
              aria-atomic="true"
            >
              <AlertCircle className="w-4 h-4 shrink-0 text-rose-500" aria-hidden="true" />
              <span>{error}</span>
            </div>
          )}
        </form>
      )}

      {/* Accessible reassurance text with WCAG AA passing contrast */}
      <div
        id="notify-hint-text"
        className="flex items-center justify-center gap-4 text-xs text-slate-500 mt-4 select-none flex-wrap font-medium"
      >
        <span>🔒 Zero spam</span>
        <span aria-hidden="true" className="text-slate-300">•</span>
        <span>Instant launch notification</span>
        <span aria-hidden="true" className="text-slate-300">•</span>
        <span>Unsubscribe anytime</span>
      </div>
    </div>
  );
}
