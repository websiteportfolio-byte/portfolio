'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Navbar() {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 py-6 px-6"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <nav className="max-w-6xl mx-auto flex justify-between items-center glass-card rounded-full px-6 py-3 border border-glass-border backdrop-blur-xl">
        <Link href="/" className="font-bold text-lg">
          Portfolio
        </Link>
        <div className="flex gap-8">
          {['about', 'work', 'skills', 'contact'].map((item) => (
            <Link
              key={item}
              href={`#${item}`}
              className="text-slate-400 hover:text-slate-100 text-sm font-medium capitalize transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>
      </nav>
    </motion.header>
  );
}
