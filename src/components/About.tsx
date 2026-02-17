'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import ScrollReveal from './ScrollReveal';

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
            Passionate about creating meaningful digital experiences that resonate.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left" delay={0.2}>
            <div className="glass-card rounded-2xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="relative">
                {/* Profile image placeholder */}
                <div className="aspect-square max-w-sm mx-auto rounded-2xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 border border-glass-border flex items-center justify-center">
                  <span className="text-6xl text-violet-500/50">JD</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <div className="space-y-8">
            <ScrollReveal delay={0.3}>
              <p className="text-slate-300 text-lg leading-relaxed">
                With over a decade of experience in digital design, I specialize in 
                creating premium brand experiences that blend strategic thinking with 
                exceptional aesthetics. My work spans brand identity, digital products, 
                and motion design for clients worldwide.
              </p>
            </ScrollReveal>

            {/* Animated counters */}
            <ScrollReveal delay={0.4}>
              <div className="grid grid-cols-3 gap-6">
                <motion.div
                  className="glass-card rounded-xl p-6 text-center"
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="text-4xl font-bold text-violet-400 mb-1">
                    <AnimatedCounter value={12} />
                    <span className="text-2xl">+</span>
                  </div>
                  <div className="text-slate-400 text-sm">Years Experience</div>
                </motion.div>
                <motion.div
                  className="glass-card rounded-xl p-6 text-center"
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="text-4xl font-bold text-violet-400 mb-1">
                    <AnimatedCounter value={150} />
                    <span className="text-2xl">+</span>
                  </div>
                  <div className="text-slate-400 text-sm">Projects Delivered</div>
                </motion.div>
                <motion.div
                  className="glass-card rounded-xl p-6 text-center"
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="text-4xl font-bold text-violet-400 mb-1">
                    <AnimatedCounter value={80} />
                    <span className="text-2xl">+</span>
                  </div>
                  <div className="text-slate-400 text-sm">Happy Clients</div>
                </motion.div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
