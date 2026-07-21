# EDUNOVAS — EdTech Platform Frontend

A modern, premium, futuristic promotional website for an EdTech platform selling
robot kits, AI kits, cloud computing programs, next-gen technology courses,
campus workshops and hardware development kits.

## Tech Stack

- **Next.js 15** (App Router) + **TypeScript**
- **Tailwind CSS** — dark futuristic theme, glassmorphism utilities
- **Framer Motion** — reveal animations, hover effects, staggered heroes
- **Three.js** via **@react-three/fiber + drei** — animated 3D AI core on the home page

## Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Pages

| Route           | Page                        |
| --------------- | --------------------------- |
| `/`             | Home (3D hero, stats, CTAs) |
| `/about`        | About Us                    |
| `/programs`     | Programs & Courses          |
| `/kits`         | Robot Kits & Hardware Kits  |
| `/workshops`    | Workshops & Training        |
| `/partnerships` | College Partnerships        |
| `/placements`   | Placements & Success        |
| `/contact`      | Contact / Enquiry           |

## Structure

```
src/
  app/            # one folder per route (App Router)
  components/
    layout/       # Navbar (sticky, mobile menu), Footer
    home/         # HeroSection, StatsSection
    three/        # RobotScene (client-only 3D canvas)
    ui/           # SectionHeading, PageHero, GlowButton, CTASection
    cards/        # CourseCard, ProductCard, PartnerCard, TestimonialCard
    contact/      # ContactForm (interest chips + demo submit state)
    motion/       # Reveal (scroll-into-view animation wrapper)
  data/site.ts    # shared content: nav, stats, courses, kits, partners, testimonials
```

All site content (courses, kits, prices, partners, contact details) lives in
`src/data/site.ts` — edit that one file to update the whole site.
