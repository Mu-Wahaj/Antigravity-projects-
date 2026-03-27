'use client';

import { useEffect, useState } from 'react';
import SectionHeading from '@/components/SectionHeading';
import PropertyFilters from '@/components/PropertyFilters';
import { fetchProperties } from '@/lib/api';
import type { Property } from '@/lib/types';

export default function ListingsPage() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadProperties() {
      setLoading(true);
      setError(null);

      try {
        const response = await fetchProperties();
        setProperties(response);
      } catch (err: any) {
        setError(err?.error?.message || err?.message || 'Failed to load properties.');
      } finally {
        setLoading(false);
      }
    }

    loadProperties();
  }, []);

  return (
    <main>
      <section className="bg-slate-950 text-white">
        <div className="container py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-400">Listings</p>
          <h1 className="mt-6 text-5xl font-semibold tracking-tight">Search premium Spanish properties.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">Filter by region, budget, bedroom count and more. Every listing is curated for high-end buyers and investors.</p>
        </div>
      </section>

      <section className="container">
        <SectionHeading title="Find the right property" subtitle="Refine your search using modern filters, then browse full details for every listing." />

        {loading && <p className="text-center text-slate-600">Loading listings…</p>}
        {error && <p className="text-center text-red-600">{error}</p>}
        {!loading && !error && <PropertyFilters properties={properties} />}
      </section>
    </main>
  );
}
