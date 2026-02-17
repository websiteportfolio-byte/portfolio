'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';

const CONTACT_EMAIL = 'aphotic.firefly.art@gmail.com';

export default function Contact() {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleSendMessage = (e: React.MouseEvent) => {
    e.preventDefault();
    const name = nameRef.current?.value || '';
    const email = emailRef.current?.value || '';
    const message = messageRef.current?.value || '';
    const subject = 'Portfolio Inquiry';
    const body = [
      message || 'Hi, I came across your portfolio and would love to discuss a project.',
      '',
      '---',
      `Name: ${name}`,
      `Email: ${email}`,
    ].join('\n');
    const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

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
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">
                Name
              </label>
              <input
                ref={nameRef}
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
                ref={emailRef}
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-glass-border text-slate-100 placeholder-slate-500 focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/30 transition-all duration-300"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">
                Message
              </label>
              <textarea
                ref={messageRef}
                id="message"
                name="message"
                rows={5}
                className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-glass-border text-slate-100 placeholder-slate-500 focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/30 transition-all duration-300 resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <motion.button
              type="button"
              onClick={handleSendMessage}
              className="block w-full py-4 rounded-xl bg-violet-500/20 border border-violet-500/50 text-violet-300 font-medium hover:bg-violet-500/30 transition-colors cursor-pointer"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              Send Message
            </motion.button>
            <p className="text-slate-500 text-sm text-center mt-4">
              Or email directly:{' '}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-violet-400 hover:text-violet-300 underline"
              >
                {CONTACT_EMAIL}
              </a>
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
