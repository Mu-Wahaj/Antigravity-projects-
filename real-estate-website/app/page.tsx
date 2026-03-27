'use client';

import { motion } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import SectionHeading from '@/components/SectionHeading';
import PropertyCard from '@/components/PropertyCard';
import CTASection from '@/components/CTASection';
import StatsBar from '@/components/StatsBar';
import { featuredProperties } from '@/lib/mockProperties';

export default function HomePage() {
  return (
    <main>
      <HeroSection />

      <section className="container">
        <SectionHeading title="Why buyers choose Space" subtitle="Luxury property search designed for confidence and clarity." />
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              title: 'Verified availability',
              description: 'Ensure each listing is confirmed and ready for viewing, reducing wasted tours.',
            },
            {
              title: 'Local guidance',
              description: 'Experienced agents in Marbella, Costa Blanca and Murcia provide real insight.',
            },
            {
              title: 'White-glove service',
              description: 'End-to-end support from search to purchase and closing.',
            },
          ].map((item) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft"
            >
              <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-4 text-slate-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="container bg-slate-950/5 rounded-[2rem] border border-slate-200 p-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-600">Featured listings</p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-950">Handpicked homes across the coast.</h2>
            <p className="mt-4 max-w-xl text-slate-600">Explore a curated selection of luxury villas, beachside apartments, and investment-ready properties.</p>
          </div>
          <a href="/listings" className="inline-flex items-center justify-center rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700">
            Browse all listings
          </a>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {featuredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>

      <section className="container">
        <SectionHeading title="Designed for premium buyers" subtitle="A differentiated product experience for international property search." />
        <StatsBar />
      </section>

      <CTASection />
    </main>
  );
}
