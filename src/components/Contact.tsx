'use client';

import { motion } from 'framer-motion';

const CONTACT_EMAIL = 'aphotic.firefly.art@gmail.com';

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-violet-500/5 via-transparent to-transparent" />
      
      <div className="relative max-w-2xl mx-auto px-6">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get in <span className="text-violet-400">Touch</span>
          </h2>
          <p className="text-slate-400 text-lg mb-6">
            Have a project in mind? Let&apos;s create something exceptional together.
          </p>
          <p className="text-slate-400">
            You can email directly to{' '}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-violet-400 hover:text-violet-300 underline"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
