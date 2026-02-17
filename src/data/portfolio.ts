export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  external?: boolean;
  year?: string;
  client?: string;
  heroImage?: string;
  overview?: string;
  problem?: string;
  solution?: string;
  process?: string[];
  gallery?: string[];
  results?: string[];
  nextProject?: string;
}

const GOOGLE_DRIVE_URL = 'https://drive.google.com/drive/folders/11jU5dHbq4LtKD1Oh6WnpOPdL5OcpubP7';

export const projects: Project[] = [
  {
    id: '1',
    slug: 'logo-brand-identity',
    title: 'Logo & Brand Identity',
    category: 'Branding',
    description: 'Logo design and visual identity for Blindside and Moco. Clean, memorable marks that establish strong brand recognition across touchpoints.',
    tags: ['Logo Design', 'Brand Identity', 'Visual Identity'],
    image: '/work/blindside-logo.png',
    link: GOOGLE_DRIVE_URL,
    external: true,
    year: '2025',
  },
  {
    id: '2',
    slug: 'email-marketing-design',
    title: 'Email Marketing Design',
    category: 'Digital Marketing',
    description: 'Opt-in and re-engagement email campaigns for LinkUs. Responsive layouts with clear CTAs and on-brand visual hierarchy.',
    tags: ['Email Design', 'Marketing', 'UX'],
    image: '/work/linkus-email.png',
    link: GOOGLE_DRIVE_URL,
    external: true,
    year: '2025',
  },
  {
    id: '3',
    slug: 'social-media-graphics',
    title: 'Social Media Graphics',
    category: 'Content Design',
    description: 'Scroll-stopping social content and campaign graphics. Bold typography, cohesive aesthetics, and platform-optimized formats.',
    tags: ['Social Media', 'Content Design', 'Campaign'],
    image: '/work/social-post.png',
    link: GOOGLE_DRIVE_URL,
    external: true,
    year: '2025',
  },
  {
    id: '4',
    slug: 'retro-vintage-graphics',
    title: 'Retro & Vintage Graphics',
    category: 'Graphic Design',
    description: 'Vintage-inspired graphics with distressed textures and nostalgic typography. Perfect for apparel, merchandise, and brand campaigns.',
    tags: ['Retro', 'Typography', 'Print'],
    image: '/work/retro-design.png',
    link: GOOGLE_DRIVE_URL,
    external: true,
    year: '2025',
  },
  {
    id: '5',
    slug: 'motorsport-f1-design',
    title: 'Motorsport & F1 Design',
    category: 'Sports Graphics',
    description: 'High-octane Formula 1 and motorsport graphics. Dynamic compositions, racing aesthetics, and Monte Carlo-inspired visuals.',
    tags: ['F1', 'Motorsport', 'Poster Design'],
    image: '/work/f1-design.png',
    link: GOOGLE_DRIVE_URL,
    external: true,
    year: '2025',
  },
  {
    id: '6',
    slug: 'old-money-aesthetic',
    title: 'Old Money Aesthetic',
    category: 'Fashion Graphics',
    description: 'Sophisticated, heritage-inspired designs with a refined color palette. Elegant typography and timeless visual language.',
    tags: ['Fashion', 'Luxury', 'Editorial'],
    image: '/work/old-money-design.png',
    link: GOOGLE_DRIVE_URL,
    external: true,
    year: '2025',
  },
];

export const skills = [
  { name: 'Brand Strategy', level: 95 },
  { name: 'Visual Design', level: 98 },
  { name: 'UX/UI Design', level: 92 },
  { name: 'Motion Design', level: 88 },
  { name: 'Art Direction', level: 94 },
  { name: 'Design Systems', level: 90 },
];
