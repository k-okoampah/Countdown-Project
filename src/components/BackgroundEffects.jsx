import React from 'react';

// 12 subtle micro-particles with soft blue and warm gold accents
const particles = [
  { id: 'p1', top: '15%', left: '12%', size: '3px', delay: '0s', duration: '18s', opacity: 0.25, drift: '15px', color: 'bg-[var(--career-blue)]' },
  { id: 'p2', top: '28%', left: '84%', size: '2px', delay: '2s', duration: '22s', opacity: 0.2, drift: '-20px', color: 'bg-[var(--career-orange)]' },
  { id: 'p3', top: '45%', left: '22%', size: '4px', delay: '5s', duration: '19s', opacity: 0.2, drift: '25px', color: 'bg-[var(--career-blue)]' },
  { id: 'p4', top: '62%', left: '78%', size: '2px', delay: '1s', duration: '24s', opacity: 0.18, drift: '-15px', color: 'bg-[var(--career-orange)]' },
  { id: 'p5', top: '75%', left: '35%', size: '3px', delay: '7s', duration: '16s', opacity: 0.22, drift: '20px', color: 'bg-[var(--career-blue)]' },
  { id: 'p6', top: '20%', left: '48%', size: '2px', delay: '4s', duration: '20s', opacity: 0.2, drift: '-10px', color: 'bg-[var(--career-blue)]' },
  { id: 'p7', top: '88%', left: '60%', size: '3px', delay: '3s', duration: '17s', opacity: 0.2, drift: '18px', color: 'bg-[var(--career-orange)]' },
  { id: 'p8', top: '35%', left: '68%', size: '2px', delay: '8s', duration: '21s', opacity: 0.25, drift: '-25px', color: 'bg-[var(--career-blue)]' },
  { id: 'p9', top: '52%', left: '8%', size: '3px', delay: '6s', duration: '23s', opacity: 0.15, drift: '12px', color: 'bg-[var(--career-blue)]' },
  { id: 'p10', top: '82%', left: '90%', size: '4px', delay: '9s', duration: '18s', opacity: 0.2, drift: '-15px', color: 'bg-[var(--career-orange)]' },
  { id: 'p11', top: '10%', left: '72%', size: '2px', delay: '3.5s', duration: '25s', opacity: 0.2, drift: '14px', color: 'bg-[var(--career-blue)]' },
  { id: 'p12', top: '68%', left: '18%', size: '3px', delay: '1.5s', duration: '19s', opacity: 0.2, drift: '-18px', color: 'bg-[var(--career-blue)]' },
];

/**
 * Lightweight, hardware-accelerated ambient background visual effects:
 * - Subtle gradient meshes in vibrant blue (#2F80ED) and soft orange (#F59E0B)
 * - Light engineering pattern
 * - Soft geometric outline accents
 * - Full prefers-reduced-motion safety
 */
export default function BackgroundEffects() {
  return (
    <div
      id="ambient-background-effects"
      className="pointer-events-none fixed inset-0 overflow-hidden z-0"
      aria-hidden="true"
    >
      {/* 1. Subtle Engineering Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-80" />

      {/* 2. Animated Gradient Mesh Orbs (Soft, flowing ambient lighting) */}
      {/* Primary Blue orb centered near hero */}
      <div
        className="absolute -top-36 left-1/2 -translate-x-1/2 w-[850px] h-[550px] bg-gradient-to-b from-blue-400/12 via-sky-300/10 to-transparent blur-[120px] rounded-full animate-orb-slow"
      />

      {/* Subtle warm orange accent orb drifting on the right */}
      <div
        className="absolute top-1/3 -right-24 w-[480px] h-[480px] bg-gradient-to-bl from-amber-400/8 via-orange-300/5 to-transparent blur-[130px] rounded-full animate-orb-reverse"
      />

      {/* Blue accent orb lower left */}
      <div
        className="absolute -bottom-24 -left-20 w-[550px] h-[480px] bg-gradient-to-tr from-blue-500/8 via-cyan-400/5 to-transparent blur-[140px] rounded-full animate-orb-slow"
      />

      {/* 3. Subtle Floating Ambient Geometric Shapes */}
      {/* Soft rounded diamond outline */}
      <div className="absolute top-1/4 left-[8%] w-64 h-64 border border-blue-500/10 rounded-[42px] animate-shape-spin opacity-40 pointer-events-none" />

      {/* Soft circular accent */}
      <div className="absolute top-[55%] right-[10%] w-80 h-80 border border-amber-500/10 rounded-full animate-shape-spin opacity-30 pointer-events-none" />

      {/* 4. Subtle Floating Micro-Particles */}
      {particles.map((p) => (
        <span
          key={p.id}
          className={`absolute rounded-full ${p.color} shadow-xs animate-particle`}
          style={{
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            '--float-delay': p.delay,
            '--float-duration': p.duration,
            '--target-opacity': p.opacity,
            '--x-drift': p.drift,
          }}
        />
      ))}
    </div>
  );
}
