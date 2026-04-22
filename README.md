# Accredian Enterprise Page (Partial Clone)

This project recreates the Accredian Enterprise landing experience using Next.js App Router with reusable components and responsive sections.

## Live Link and Repository

- Vercel Deployment: https://internship-assignment-fawn.vercel.app
- GitHub Repository: https://github.com/godslayer-king/accredian-assignment

## Tech Stack

- Next.js 16 (App Router)
- React functional components + hooks
- Tailwind CSS (via global Tailwind import)
- Next.js API routes for mock backend integration

## Implemented Scope

- Full landing page with all requested sections:
	- Home
	- Stats
	- Clients
	- Accredian Edge
	- CAT
	- How It Works
	- FAQs
	- Testimonials
- Sticky responsive navigation and footer
- Smooth anchor-based section navigation
- Reusable UI sections (`SectionHeading`, `Navbar`, `Footer`, `EnterpriseMetrics`)
- Bonus lead capture form with API submission

## API Integration

- `GET /api/enterprise-content`
	- Provides mock stats and testimonial content
- `POST /api/leads`
	- Stores submitted leads in memory for demo purposes
- `GET /api/leads`
	- Returns captured leads and count

## Setup Instructions

1. Install dependencies:

	 `npm install`

2. Start development server:

	 `npm run dev`

3. Open:

	 `http://localhost:3000`

## Approach Taken

- Built section-wise page structure based on the reference flow.
- Kept layout and content modular with reusable components.
- Used clean responsive spacing, typography, and cards for mobile + desktop.
- Added API-driven dynamic data for stats/testimonial and form submission.

## AI Usage Explanation

### Where AI helped

- Initial structuring of component layout and page section breakdown.
- Drafting section copy and consistent UI text.
- Refactoring repeated UI patterns into reusable components.
- Iterative styling and responsiveness adjustments.

### What was modified manually

- Final section ordering and anchor navigation behavior.
- Visual tuning of spacing, typography, and card hierarchy.
- Section-specific content refinement to better match the assignment intent.
- API response shape adjustments and integration wiring.

## Improvements with More Time

- Add brand-accurate assets and icons for closer visual parity.
- Add animation and micro-interactions for scroll and cards.
- Persist lead form entries to a database.
- Add unit/integration tests for sections and API routes.
- Add accessibility audit pass and Lighthouse optimization.
