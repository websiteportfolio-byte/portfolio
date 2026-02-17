# Digital Designer Portfolio

A premium, award-style portfolio built with Next.js (App Router), Tailwind CSS, and Framer Motion. Fully static and deployable to GitHub Pages.

## Tech Stack

- **Next.js 14** (App Router)
- **Tailwind CSS** (Glassmorphism, dark mode)
- **Framer Motion** (Animations)
- **TypeScript**

## Getting Started

### Install dependencies

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build (Static Export)

```bash
npm run build
```

Output is generated in the `out/` directory.

## Deploying to GitHub Pages

### Option 1: Deploy to `username.github.io` (root)

1. Build the project:
   ```bash
   npm run build
   ```

2. The `out/` folder contains the static site. Deploy it to the root of your `username.github.io` repository.

3. Push the contents of `out/` to the `main` branch (or `gh-pages` if configured).

### Option 2: Deploy to `username.github.io/repo-name` (subpath)

1. Set the base path before building:
   ```bash
   BASE_PATH=/portfolio-designer npm run build
   ```
   Replace `portfolio-designer` with your repository name.

2. Deploy the `out/` folder to the `gh-pages` branch of your repository.

3. Enable GitHub Pages in repo Settings → Pages → Source: Deploy from branch → Branch: `gh-pages` → Root.

### GitHub Actions (Included)

A workflow is included at `.github/workflows/deploy.yml`. To use it:

1. **Enable GitHub Pages** in your repo: Settings → Pages → Build and deployment → Source: **GitHub Actions**.

2. **For subpath deployment** (`username.github.io/repo-name`): The workflow uses `BASE_PATH: /${{ github.event.repository.name }}` by default.

3. **For root deployment** (`username.github.io`): Edit the workflow and change the build step to:
   ```yaml
   - run: npm run build
   ```
   (remove the `env` block with `BASE_PATH`).

## Where to Replace Content

| Location | File | What to Update |
|----------|------|----------------|
| **Projects** | `src/data/portfolio.ts` | Add/edit projects, case study content, gallery images |
| **Skills** | `src/data/portfolio.ts` | Update `skills` array with your expertise |
| **About** | `src/components/About.tsx` | Bio text, counters (years, projects, clients), profile image |
| **Hero** | `src/components/Hero.tsx` | Headline, tagline, CTA text |
| **Contact** | `src/components/Contact.tsx` | Social links, mailto email |
| **Metadata** | `src/app/layout.tsx` | Site title and description |

### Adding New Projects

1. Add a new object to the `projects` array in `src/data/portfolio.ts`.
2. Include: `id`, `slug`, `title`, `category`, `description`, `tags`, `image`, `link`, and case study fields (`overview`, `problem`, `solution`, `process`, `gallery`, `results`).
3. Set `nextProject` to the slug of the next project for navigation.

### Replacing Placeholder Images

Replace Unsplash URLs in `src/data/portfolio.ts` with your own images. Place images in `public/` and reference as `/your-image.jpg`.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── work/[slug]/
│       ├── page.tsx
│       └── CaseStudyClient.tsx
├── components/
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── FeaturedWork.tsx
│   ├── Skills.tsx
│   ├── Contact.tsx
│   ├── Navbar.tsx
│   ├── PageTransition.tsx
│   └── ScrollReveal.tsx
└── data/
    └── portfolio.ts
```

## License

MIT
