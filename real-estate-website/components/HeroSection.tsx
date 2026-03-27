'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
      <div className="container relative grid gap-10 py-28 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex rounded-full bg-brand-400/20 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-brand-100">
            Exclusive coastal properties
          </span>
          <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-tight tracking-tight text-white sm:text-6xl">
            Spain’s premier real estate platform for luxury buyers.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-200">
            Search premium listings, book private viewings, and work with local agents who know Marbella, Alicante and Murcia.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link href="/listings" className="inline-flex items-center justify-center rounded-full bg-brand-500 px-8 py-4 text-sm font-semibold text-white transition hover:bg-brand-400">
              Explore listings
            </Link>
            <a href="/contact" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-4 text-sm font-semibold text-white transition hover:bg-white/20">
              Contact an agent
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-[2rem] bg-slate-950/90 p-6 shadow-soft sm:p-8"
        >
          <div className="rounded-[1.75rem] border border-white/10 bg-white/10 p-6">
            <p className="text-sm uppercase tracking-[0.28em] text-brand-300">Instant property search</p>
            <div className="mt-6 space-y-4">
              <div className="rounded-3xl bg-slate-900 p-4">
                <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Location</p>
                <p className="mt-2 text-lg font-semibold">Marbella, Costa del Sol</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { label: 'Minimum budget', value: '€300k' },
                  { label: 'Bedrooms', value: '3+' },
                ].map((item) => (
                  <div key={item.label} className="rounded-3xl bg-slate-900 p-4">
                    <p className="text-xs uppercase tracking-[0.28em] text-slate-400">{item.label}</p>
                    <p className="mt-2 text-lg font-semibold">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
