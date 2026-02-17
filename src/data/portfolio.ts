export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  year: string;
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

export const projects: Project[] = [
  {
    id: '1',
    slug: 'brand-reidentity',
    title: 'Brand Re-identity',
    category: 'Branding',
    description: 'Complete visual identity overhaul for a luxury fashion house, establishing a cohesive brand language across all touchpoints.',
    tags: ['Brand Strategy', 'Visual Identity', 'Art Direction'],
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop',
    link: '/work/brand-reidentity',
    year: '2024',
    client: 'Luxury Fashion',
    heroImage: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&h=1080&fit=crop',
    overview: 'A comprehensive brand re-identity project for an established luxury fashion house seeking to modernize its visual presence while honoring its heritage.',
    problem: 'The brand had lost relevance with younger consumers while maintaining a dated visual identity that no longer resonated with contemporary luxury markets.',
    solution: 'Developed a flexible design system that bridges heritage and modernity, with a bold typographic approach and refined color palette that works across digital and physical touchpoints.',
    process: [
      'Discovery & research phase',
      'Competitive analysis',
      'Brand strategy development',
      'Visual identity creation',
      'Design system implementation',
      'Rollout across all channels',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop',
    ],
    results: [
      '45% increase in brand recognition',
      '32% uplift in social engagement',
      'Award-winning campaign execution',
    ],
    nextProject: 'digital-experience',
  },
  {
    id: '2',
    slug: 'digital-experience',
    title: 'Digital Experience Platform',
    category: 'Digital Product',
    description: 'End-to-end design of a premium e-commerce experience that redefines digital luxury shopping.',
    tags: ['UX Design', 'Product Design', 'E-commerce'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    link: '/work/digital-experience',
    year: '2024',
    client: 'Premium Retail',
    heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=1080&fit=crop',
    overview: 'Designed a next-generation digital shopping experience that combines luxury aesthetics with seamless user flows and conversion optimization.',
    problem: 'The client\'s existing e-commerce platform had high bounce rates and poor conversion, with a dated design that didn\'t reflect their premium positioning.',
    solution: 'Created an immersive, editorial-style shopping experience with intuitive navigation, personalized recommendations, and a checkout flow that reduced friction by 60%.',
    process: [
      'User research & journey mapping',
      'Information architecture',
      'Wireframing & prototyping',
      'Visual design system',
      'Usability testing',
      'Handoff & design QA',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop',
    ],
    results: [
      '60% reduction in checkout abandonment',
      '2.3x increase in average session duration',
      'Featured in Design Week 2024',
    ],
    nextProject: 'motion-campaign',
  },
  {
    id: '3',
    slug: 'motion-campaign',
    title: 'Motion Campaign',
    category: 'Motion Design',
    description: 'Cinematic motion graphics and animated campaign assets for a global product launch.',
    tags: ['Motion Design', 'Animation', 'Campaign'],
    image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&h=600&fit=crop',
    link: '/work/motion-campaign',
    year: '2024',
    client: 'Tech Brand',
    heroImage: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=1920&h=1080&fit=crop',
    overview: 'A full-scale motion design campaign for a major tech product launch, creating cohesive animated assets across digital and broadcast channels.',
    problem: 'The brand needed to stand out in a crowded launch landscape with memorable, shareable content that could work across multiple formats.',
    solution: 'Developed a distinctive motion language with fluid transitions and bold typography that maintained brand consistency while maximizing impact.',
    process: [
      'Creative concept development',
      'Storyboard & animatic',
      'Motion design execution',
      'Asset adaptation for formats',
      'Delivery & optimization',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1611162616306-ca861f989230?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1611162616306-ca861f989230?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1611162616306-ca861f989230?w=800&h=600&fit=crop',
    ],
    results: [
      '15M+ campaign impressions',
      'Awwwards Site of the Day',
      'D&AD Pencil nomination',
    ],
    nextProject: 'brand-reidentity',
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
