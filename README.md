# Nova Launch

An official countdown and early-access platform for **Nova**, built with React, Vite, and Tailwind CSS. Designed to showcase intelligent digital workflow features, empower ambitious talent and creators, generate early-access signups, and transition into an active launch state once the countdown timer reaches zero.

---

## Brand System & Colors

The application adheres to a clean, high-contrast visual identity and color guidelines:

- **Primary Blue (`#2F80ED`)**: Dominant brand color for CTAs, countdown numbers, key headings, navigation highlights, and interactive states (`var(--career-blue)`).
- **Secondary Orange (`#F59E0B`)**: Accent color for launch badges, highlights, and secondary visual indicators (`var(--career-orange)`).
- **Success Green (`#10B981`)**: Dedicated indicator for positive confirmations, successful email subscriptions, and the "We're Live!" state (`var(--career-green)`).
- **Light & Professional Canvas**: Clean white and light neutral backgrounds with high WCAG AA contrast, subtle blue-tinted panels, and refined typography.

---

## Features

- **Accurate Real-Time Countdown**: Calculates days, hours, minutes, and seconds remaining with wall-clock precision and zero state drift.
- **Modern Brand Styling**: White countdown cards with subtle blue borders and `#2F80ED` tabular digits.
- **Dynamic Launch Transition**: Automatically stops at `00:00:00:00` and displays the celebratory `"We're Live!"` state styled in `#10B981` Success Green with direct action buttons.
- **Responsive Fluid Layout**:
  - **Desktop (≥ 640px)**: 4 prominent countdown cards in a single row.
  - **Mobile (< 640px)**: 2 × 2 grid with proportionate padding and zero horizontal scrolling.
- **Accessible & Screen-Reader Friendly**: Semantic HTML landmarks, polite live announcements, and WCAG AA contrast compliance.
- **Interactive Waitlist Notification Form**: Client-side validated form with responsive feedback states for career priority registration.
- **Production-Ready & Static**: Zero backend dependencies required; builds cleanly into static assets ready for Vercel, Netlify, or any modern CDN.
- **In-Browser Test Presets**: Easily test edge cases and countdown scenarios via URL parameters (e.g., `?test=seconds`, `?test=minutes`, `?test=days`, `?test=past`).

---

## Technologies Used

- **Framework**: [React 19](https://react.dev/)
- **Build Tool / Bundler**: [Vite 6](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: Space Grotesk (Display) & Roboto (Body)
- **Deployment Platform**: [Vercel](https://vercel.com/)

---

## Getting Started

### Prerequisites

Ensure you have Node.js installed on your machine:
- Node.js version `18.x` or higher
- `npm` (comes with Node.js) or `pnpm` / `yarn` / `bun`

### Installation

1. Clone or download the repository:
   ```bash
   git clone <repository-url>
   cd nova-launch
   ```

2. Install project dependencies:
   ```bash
   npm install
   ```

---

## How to Run Locally

1. Start the local Vite development server:
   ```bash
   npm run dev
   ```

2. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

3. To create a production build and test the static output locally:
   ```bash
   npm run build
   npm run preview
   ```

---

## How to Change the Launch Date

The launch date is configured in a single, clearly identifiable constant.

1. Open **`src/components/CountdownTimer.jsx`**.
2. Locate the `LAUNCH_DATE` constant at the top of the file (Line 11):
   ```javascript
   // ============================================================
   // 🚀 NOVA LAUNCH CONFIGURATION
   // Change the target date and time below (ISO 8601 string format).
   // Example: "2026-12-31T18:00:00"
   // To test the completed state, set this to a past date, e.g.:
   // "2024-01-01T00:00:00"
   // ============================================================
   export const LAUNCH_DATE = "2026-12-31T18:00:00";
   ```
3. Update the date string to your desired ISO 8601 target date and time (e.g., `"2027-01-15T12:00:00"`).
4. Save the file. The hero date badge, semantic `<time>` tags, and the countdown timer will automatically synchronize.

---

## How to Deploy to Vercel

This project is pre-configured for one-click deployment on Vercel as a static single-page application.

### Option 1: Deploy via Vercel Web Dashboard (Recommended)

1. Push your code to GitHub, GitLab, or Bitbucket.
2. Log in to [Vercel](https://vercel.com/) and click **"Add New..."** > **"Project"**.
3. Import your repository.
4. Vercel will automatically detect the **Vite** framework preset with the following default build settings:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build` (or `vite build`)
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. Click **"Deploy"**. Your site will be live within seconds with a global CDN URL.

### Option 2: Deploy via Vercel CLI

1. Install the Vercel CLI globally:
   ```bash
   npm install -g vercel
   ```

2. Log in to your Vercel account:
   ```bash
   vercel login
   ```

3. Deploy from the root of your project:
   ```bash
   vercel
   ```

4. For production deployment:
   ```bash
   vercel --prod
   ```

---

## Project Structure

```
├── public/                 # Static assets
├── src/
│   ├── components/
│   │   ├── BackgroundEffects.jsx   # Ambient background animations
│   │   ├── CountdownTimer.jsx      # Countdown engine & LAUNCH_DATE configuration
│   │   ├── Footer.jsx              # Site footer with brand info & social links
│   │   ├── Header.jsx              # Navigation and Nova logo
│   │   ├── Hero.jsx                # Hero section with brand headline and date badge
│   │   ├── NotifyForm.jsx          # Email capture waitlist form with brand states
│   │   ├── Pillars.jsx             # Core platform pillars
│   │   ├── ProductPreview.jsx      # Product UI preview showcase
│   │   └── Roadmap.jsx             # Launch progression roadmap
│   ├── App.jsx                     # Root application container
│   ├── index.css                   # Global styles, CSS brand variables & Tailwind
│   └── main.jsx                    # React entry point
├── index.html                      # HTML entry point with meta tags & Roboto/Space Grotesk
├── package.json                    # Project dependencies and npm scripts
├── tsconfig.json                   # TypeScript configuration
├── vercel.json                     # Vercel SPA rewrites configuration
└── vite.config.ts                  # Vite build configuration
```
