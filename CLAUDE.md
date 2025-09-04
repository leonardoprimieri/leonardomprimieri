# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

**Development Server**
```bash
pnpm dev          # Start Next.js development server
```

**Building**
```bash
pnpm build        # Build production application
pnpm start        # Start production server
```

**Code Quality**
```bash
pnpm lint         # Run ESLint
```

**Testing**
```bash
pnpm exec playwright test     # Run E2E tests with Playwright
```

**Package Management**
```bash
pnpm i            # Install dependencies (uses pnpm, not npm)
```

## Project Architecture

This is a **Next.js 15** portfolio website built with **TypeScript** and **React 19**, featuring internationalization support and modern UI components.

### Key Architecture Patterns

**App Router Structure**: Uses Next.js App Router with dynamic routing for internationalization
- `src/app/[lang]/` - Language-specific routes (English and Portuguese)
- `src/middleware.ts` - Handles locale detection and redirects

**Section-Based Architecture**: The portfolio is organized into modular sections
- `src/sections/` - Each portfolio section (hero, about, work experience, etc.)
- Each section follows the pattern: `section-name/section-name.tsx` with supporting components, services, and validation

**Internationalization (i18n)**
- Supports English (`en`) and Portuguese Brazilian (`pt-br`) locales
- Dictionary files in `src/dictionaries/` (en.json, pt-br.json)
- `src/helpers/get-dictionaries.ts` handles dictionary loading
- Locale detection via `@formatjs/intl-localematcher` and `negotiator`

**Component Organization**
- `src/components/` - Reusable UI components
- Uses **shadcn/ui** components with **Radix UI** primitives
- **Magic UI** and **Aceternity UI** for advanced animations
- **Framer Motion** for smooth transitions

**Styling & Theming**
- **Tailwind CSS** with custom configuration
- **next-themes** for dark/light mode support
- Custom fonts: Geist Sans and Inter

**State Management & Data Fetching**
- **TanStack React Query** for server state management
- **React Hook Form** with **Zod** validation for forms
- **Resend** for email functionality (contact form)

### Important Files

- `src/middleware.ts` - Locale routing logic, critical for i18n functionality
- `i18n-config.ts` - Internationalization configuration
- `src/app/[lang]/layout.tsx` - Main layout with providers (Theme, PostHog, React Query)
- `src/sections/` - Portfolio content sections, each self-contained
- `src/helpers/get-dictionaries.ts` - Dictionary loading utility

### Development Notes

**Font Loading**: Uses Next.js font optimization with Geist and Inter fonts
**Analytics**: PostHog integration for user analytics
**Email**: Contact form uses Resend API via `/api/send-contact-email/route.ts`
**PDF Resume**: Static resume file served from `/public/resume_leonardo_primieri.pdf`

### Component Patterns

Components follow a consistent pattern:
- Props interface with dictionary typing for i18n
- Async data fetching where needed (GitHub API for projects)
- Animation wrappers (BlurFade, Framer Motion)
- Responsive design with mobile-first approach