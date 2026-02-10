## LumeSonic

LumeSonic is a modern, single-page marketing site for a **professional sound system, lighting, and DJ service**.  
It showcases services, equipment, references, a simple blog, and a booking flow so clients can quickly understand what you offer and get in touch.

The app is built with **React + TypeScript + Vite**, styled with **Tailwind CSS** and **shadcn/ui**, and is ready to be deployed to **Cloudflare Pages/Workers** via `wrangler.toml`.

---

### Live demo

- **Video demo**: [`YouTube – LumeSonic Walkthrough`](https://youtu.be/ki7MArFSt-I)

- **Live site:** [https://lumesonic.pages.dev/](https://lumesonic.pages.dev/)

---

### Screenshots

All screenshots are stored in `public/Screenshots`. Below is an overview of the main views:

- **Landing page & hero**

  ![LumeSonic – Landing Hero](./public/Screenshots/Screenshot%202026-02-09%20205455.png)

- **Services overview**

  ![LumeSonic – Services Overview](./public/Screenshots/Screenshot%202026-02-09%20205508.png)

- **Service detail & equipment**

  ![LumeSonic – Service Detail](./public/Screenshots/Screenshot%202026-02-09%20205529.png)

- **Additional services grid**

  ![LumeSonic – Additional Services](./public/Screenshots/Screenshot%202026-02-09%20205543.png)

- **References / testimonials**

  ![LumeSonic – References](./public/Screenshots/Screenshot%202026-02-09%20205551.png)

- **Booking / call-to-action section**

  ![LumeSonic – Booking CTA](./public/Screenshots/Screenshot%202026-02-09%20205611.png)

---

### What this project does

- **Showcases event services**  
  - Sound system rentals (Funktion One, Martin Audio, KWS Pi‑Horn, etc.)  
  - Lighting setups (moving heads, LED wash, stage spots, lasers)  
  - DJ services and additional equipment (PA, microphones, monitoring, visuals, effects)

- **Highlights your expertise & references**  
  - `Services` page detailing main and additional services  
  - `References` page for past events/clients  
  - `Blog` and `BlogDetail` pages for articles and updates

- **Provides a clear booking path**  
  - `Booking` page with a dedicated booking flow  
  - Prominent CTAs such as **“Hire Me”** and **“View Services”** across the site

- **Delivers a premium, animated UI**  
  - Responsive layout optimized for desktop and mobile  
  - Tailwind-based design with custom colors (psyco-green & dark theme)  
  - shadcn/ui components (buttons, dialogs, toasts, tooltips, carousel, etc.)  
  - Smooth animations, glassmorphism cards, and an interactive, audio‑visual brand feel

---

### Tech stack

- **Frontend framework**: React 18 + TypeScript
- **Bundler/dev server**: Vite
- **Routing**: `react-router-dom`
- **UI library**: shadcn/ui (Radix primitives + Tailwind)
- **Styling**: Tailwind CSS, custom utility classes, `App.css`/`index.css`
- **Icons**: `lucide-react`
- **State & data**: `@tanstack/react-query` for async data patterns
- **Forms & validation**: `react-hook-form`, `zod`
- **Notifications**: `sonner` + shadcn `toast`
- **Deployment**: Cloudflare Pages/Workers via `wrangler.toml` (output from `dist`)

---

### Project structure (high level)

- `src/main.tsx` – Vite/React entry point
- `src/App.tsx` – App shell: routing, layout, providers (React Query, toasts, tooltips)
- `src/pages/`
  - `Index.tsx` – Landing page with hero, featured services, specialties, CTA
  - `Services.tsx` – Detailed services (sound, lighting, DJ, additional services)
  - `Booking.tsx` – Booking flow and contact section
  - `Blog.tsx` / `BlogDetail.tsx` – Simple blog listing and article detail
  - `References.tsx` – References/testimonials page
  - `NotFound.tsx` – 404 fallback
- `src/components/`
  - Layout: `Navbar`, `Footer`, `HeroSection`, `InteractiveCursor`, `Logo`
  - Content: `ServiceCard`, `BookingCalendar`, `BlogPost`, `TestimonialCard`
  - `ui/` – shadcn/ui components (accordion, dialog, button, card, toast, etc.)
- `public/` – Static assets (favicons, OG image, `lovable-uploads` images, `_redirects`)
- `tailwind.config.ts`, `postcss.config.js` – Styling configuration
- `wrangler.toml` – Cloudflare build and routing configuration

---

### Getting started (local development)

**Requirements**

- Node.js 18+ (recommended)  
- npm (comes with Node) or another package manager

**1. Clone the repository**

```bash
git clone <REPO_URL>
cd LumeSonic
```

**2. Install dependencies**

```bash
npm install
```

**3. Run the development server**

```bash
npm run dev
```

By default Vite will print a local development URL (often `http://localhost:5173`).  
Open it in your browser to view the LumeSonic site while you work.

---

### Available npm scripts

- **`npm run dev`** – Start the Vite dev server with hot reloading.
- **`npm run build`** – Create a production build in the `dist` folder.
- **`npm run build:dev`** – Build using Vite’s `development` mode (useful for debugging).
- **`npm run preview`** – Preview the production build locally (serves from `dist`).
- **`npm run lint`** – Run ESLint over the project.

---

### Deployment

This project is configured to deploy to **Cloudflare Pages/Workers** using Wrangler:

- `wrangler.toml`:
  - `pages_build_output_dir = "./dist"` – Cloudflare will serve the built Vite app from `dist`.
  - `[build] command = "npm run build"` – Cloudflare runs your production build.
  - `[[redirects]] from = "/*" to = "/index.html" status = 200` – Ensures SPA routing works (all routes fall back to `index.html`).

**Typical Cloudflare Pages deployment flow (high level):**

1. Push your code to a Git provider (GitHub, GitLab, etc.).
2. Create a new Cloudflare Pages project and connect this repo.
3. Use:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
4. Cloudflare will automatically build and deploy on each push to the configured branch.

You can also use `wrangler` locally if you prefer a Workers-based deployment or more advanced configuration.

---

### Customization tips

- **Branding**: Update colors and typography in `tailwind.config.ts`, `index.css`, and component classes.
- **Services & content**: Edit copy and equipment lists in `src/pages/Services.tsx`, hero text in `HeroSection`, and CTA text in `Index.tsx` / `Booking.tsx`.
- **Images**: Replace files in `public/lovable-uploads` and update paths where needed.
- **SEO & meta**: Update titles, descriptions, and Open Graph image references in `index.html` and any meta helpers you add.

---

### License & usage

This repository is intended as the codebase for the LumeSonic website.  
If you plan to reuse parts of the design or code in other projects, make sure that any third‑party assets (fonts, images, icons, etc.) are used in accordance with their respective licenses.
