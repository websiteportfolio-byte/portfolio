'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import ScrollReveal from './ScrollReveal';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
    const stepValue = value / steps;
    const stepDuration = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += stepValue;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-violet-500/5 via-transparent to-transparent" />
      
      <div className="relative max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-violet-400">Me</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mb-16">
            Digital Artist and Illustrator specializing in 2d designs. Aiming to secure a position for the continuous development of skills in a creative work environment.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left" delay={0.2}>
            <div className="glass-card rounded-2xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="relative aspect-square max-w-sm mx-auto rounded-2xl overflow-hidden border border-glass-border">
                <img
                  src={`${basePath}/profile.png`}
                  alt="Profile photo"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </ScrollReveal>

          <div className="space-y-8">
            <ScrollReveal delay={0.3}>
              <p className="text-slate-300 text-lg leading-relaxed">
                Digital Artist and Illustrator specializing in 2d designs. Aiming to secure a position for the continuous development of skills in a creative work environment.
              </p>
              <a
                href="https://drive.google.com/drive/folders/11jU5dHbq4LtKD1Oh6WnpOPdL5OcpubP7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 text-violet-400 hover:text-violet-300 font-medium transition-colors"
              >
                View previous work on Google Drive
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </ScrollReveal>

            {/* Experience breakdown */}
            <ScrollReveal delay={0.4}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <motion.div
                  className="glass-card rounded-xl p-6 text-center"
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="text-4xl font-bold text-violet-400 mb-1">
                    <AnimatedCounter value={6} />
                  </div>
                  <div className="text-slate-400 text-sm">Years Experience</div>
                </motion.div>
                <motion.div
                  className="glass-card rounded-xl p-6 text-center"
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="text-4xl font-bold text-violet-400 mb-1">
                    <AnimatedCounter value={1} />
                  </div>
                  <div className="text-slate-400 text-sm">Year in Film</div>
                </motion.div>
                <motion.div
                  className="glass-card rounded-xl p-6 text-center"
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="text-4xl font-bold text-violet-400 mb-1">
                    <AnimatedCounter value={2} />
                  </div>
                  <div className="text-slate-400 text-sm">Years in Agency</div>
                </motion.div>
                <motion.div
                  className="glass-card rounded-xl p-6 text-center"
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="text-4xl font-bold text-violet-400 mb-1">
                    <AnimatedCounter value={3} />
                  </div>
                  <div className="text-slate-400 text-sm">Years Freelance</div>
                </motion.div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
