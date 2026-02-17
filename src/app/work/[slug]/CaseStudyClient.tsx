'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import type { Project } from '@/data/portfolio';

export default function CaseStudyClient({
  project,
  nextProject,
}: {
  project: Project;
  nextProject: Project | null | undefined;
}) {
  return (
    <main>
      <Navbar />
      <motion.article
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Hero */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-glow opacity-40" />
          <div className="relative max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span className="text-violet-400 font-mono text-sm uppercase tracking-wider">
                {project.category} · {project.year}
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mt-4 mb-6">
                {project.title}
              </h1>
              {project.client && (
                <p className="text-slate-400 text-lg">Client: {project.client}</p>
              )}
            </motion.div>
            <motion.div
              className="relative mt-12 rounded-2xl overflow-hidden aspect-video"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Image
                src={project.heroImage || project.image}
                alt={project.title}
                fill
                className="object-cover"
                priority
                unoptimized
              />
            </motion.div>
          </div>
        </section>

        {/* Overview */}
        {project.overview && (
          <section className="py-20">
            <div className="max-w-3xl mx-auto px-6">
              <h2 className="text-2xl font-bold mb-6">Overview</h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                {project.overview}
              </p>
            </div>
          </section>
        )}

        {/* Problem & Solution */}
        <section className="py-20 bg-slate-900/30">
          <div className="max-w-3xl mx-auto px-6 space-y-16">
            {project.problem && (
              <div>
                <h2 className="text-2xl font-bold mb-6">Problem</h2>
                <p className="text-slate-400 text-lg leading-relaxed">
                  {project.problem}
                </p>
              </div>
            )}
            {project.solution && (
              <div>
                <h2 className="text-2xl font-bold mb-6">Solution</h2>
                <p className="text-slate-400 text-lg leading-relaxed">
                  {project.solution}
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Process */}
        {project.process && project.process.length > 0 && (
          <section className="py-20">
            <div className="max-w-3xl mx-auto px-6">
              <h2 className="text-2xl font-bold mb-12">Process</h2>
              <ol className="space-y-6">
                {project.process.map((step, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-violet-500/20 flex items-center justify-center text-violet-400 font-mono text-sm">
                      {i + 1}
                    </span>
                    <span className="text-slate-300">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </section>
        )}

        {/* Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <section className="py-20">
            <div className="max-w-6xl mx-auto px-6">
              <h2 className="text-2xl font-bold mb-12">Gallery</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.gallery.map((img, i) => (
                  <motion.div
                    key={i}
                    className="relative aspect-[4/3] rounded-xl overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Image
                      src={img}
                      alt={`Gallery ${i + 1}`}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Results */}
        {project.results && project.results.length > 0 && (
          <section className="py-20 bg-slate-900/30">
            <div className="max-w-3xl mx-auto px-6">
              <h2 className="text-2xl font-bold mb-12">Results</h2>
              <ul className="space-y-4">
                {project.results.map((result, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-slate-300"
                  >
                    <span className="w-2 h-2 rounded-full bg-violet-400" />
                    {result}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Next Project */}
        <section className="py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <Link href="/">
                <span className="text-slate-400 hover:text-slate-100 transition-colors">
                  ← Back to Home
                </span>
              </Link>
              {nextProject && (
                <Link href={nextProject.link}>
                  <motion.div
                    className="glass-card rounded-2xl p-8 border border-glass-border hover:border-violet-500/30 transition-colors"
                    whileHover={{ scale: 1.02 }}
                  >
                    <p className="text-slate-400 text-sm mb-2">Next Project</p>
                    <p className="text-xl font-bold">{nextProject.title}</p>
                  </motion.div>
                </Link>
              )}
            </div>
          </div>
        </section>
      </motion.article>
    </main>
  );
}
