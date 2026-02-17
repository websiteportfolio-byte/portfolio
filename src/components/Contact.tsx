'use client';

import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-violet-500/5 via-transparent to-transparent" />
      
      <div className="relative max-w-2xl mx-auto px-6">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get in <span className="text-violet-400">Touch</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Have a project in mind? Let&apos;s create something exceptional together.
          </p>
        </motion.div>

        <motion.div
          className="glass-card rounded-2xl p-8 md:p-12 border border-glass-border"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-glass-border text-slate-100 placeholder-slate-500 focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/30 transition-all duration-300"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-glass-border text-slate-100 placeholder-slate-500 focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/30 transition-all duration-300"
                placeholder="hello@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-glass-border text-slate-100 placeholder-slate-500 focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/30 transition-all duration-300 resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <motion.a
              href="mailto:hello@example.com?subject=Portfolio%20Inquiry&body=Hi%2C%20I%20came%20across%20your%20portfolio%20and%20would%20love%20to%20discuss%20a%20project."
              className="block w-full py-4 rounded-xl bg-violet-500/20 border border-violet-500/50 text-violet-300 font-medium text-center hover:bg-violet-500/30 transition-colors"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              Send Message (Mailto Fallback)
            </motion.a>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
