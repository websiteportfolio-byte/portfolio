'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/data/portfolio';

export default function FeaturedWork() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section id="work" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-fuchsia-500/5 via-transparent to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Featured <span className="text-violet-400">Work</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl">
            A selection of recent projects that showcase the breadth and depth of my design practice.
          </p>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.1 + index * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <Link href={project.link}>
                <motion.article
                  className="group relative rounded-2xl overflow-hidden glass-card border border-glass-border"
                  onMouseEnter={() => setHoveredCard(project.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="grid md:grid-cols-2 gap-0 min-h-[400px] md:min-h-[480px]">
                    {/* Image side */}
                    <div className="relative h-64 md:h-auto overflow-hidden">
                      <motion.div
                        className="absolute inset-0"
                        animate={{
                          scale: hoveredCard === project.id ? 1.08 : 1,
                        }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                      >
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                          unoptimized
                        />
                      </motion.div>
                      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/40 to-transparent md:from-slate-950/60 md:via-transparent md:to-transparent" />
                      <div className="absolute inset-0 bg-violet-500/0 group-hover:bg-violet-500/5 transition-colors duration-500" />
                    </div>

                    {/* Content side */}
                    <div className="relative p-8 md:p-12 flex flex-col justify-center">
                      <span className="text-violet-400 font-mono text-sm uppercase tracking-wider mb-4">
                        {project.category}
                      </span>
                      <h3 className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-violet-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-slate-400 mb-6 line-clamp-3">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 rounded-full text-xs bg-glass border border-glass-border text-slate-400"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <span className="inline-flex items-center gap-2 text-violet-400 font-medium group-hover:gap-4 transition-all">
                        View Case Study
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </div>
                  </div>

                  {/* Cursor-follow glow effect - decorative */}
                  {hoveredCard === project.id && (
                    <motion.div
                      className="absolute inset-0 pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 bg-violet-500/10 rounded-full blur-3xl" />
                    </motion.div>
                  )}
                </motion.article>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <a
            href="https://drive.google.com/drive/folders/11jU5dHbq4LtKD1Oh6WnpOPdL5OcpubP7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full glass-card border border-glass-border text-slate-200 font-medium hover:bg-glass-strong hover:border-violet-500/30 transition-all group"
          >
            View Previous Work on Google Drive
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          <p className="text-slate-500 text-sm mt-4">
            Graphic Design · Illustrated Artworks · Video Edits
          </p>
        </motion.div>
      </div>
    </section>
  );
}
