import Link from 'next/link';
import { notFound } from 'next/navigation';
import SectionHeading from '@/components/SectionHeading';
import PropertyGallery from '@/components/PropertyGallery';
import type { Property } from '@/lib/types';

interface PropertyDetailPageProps {
  params: { id: string };
}

const typeLabels: Record<Property['type'], string> = {
  APARTMENT: 'Apartment',
  VILLA: 'Villa',
  TOWNHOUSE: 'Townhouse',
  NEW_BUILD: 'New build',
};

const statusLabels: Record<Property['status'], string> = {
  FOR_SALE: 'For sale',
  SOLD: 'Sold',
  UNDER_CONTRACT: 'Under contract',
};

export default async function PropertyDetailPage({ params }: PropertyDetailPageProps) {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://localhost:3000';
  const response = await fetch(`${baseUrl}/api/properties/${params.id}`, {
    cache: 'no-store',
  });

  if (!response.ok) {
    notFound();
  }

  const property: Property = await response.json();

  return (
    <main>
      <section className="bg-slate-950 text-white">
        <div className="container py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-400">Property details</p>
          <h1 className="mt-6 text-5xl font-semibold tracking-tight">{property.title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            {property.location} · {property.price.toLocaleString('en-US', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 })}
          </p>
        </div>
      </section>

      <section className="container">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr]">
          <div className="space-y-10">
            <PropertyGallery gallery={property.gallery} />

            <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-soft">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-sm uppercase tracking-[0.28em] text-brand-600">Summary</span>
                  <h2 className="mt-4 text-3xl font-semibold text-slate-950">Luxury living in {property.location.split(',')[0]}</h2>
                </div>
                <div className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-600">{typeLabels[property.type]}</div>
              </div>
              <p className="mt-6 text-slate-600">{property.summary}</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl bg-slate-50 p-6 text-center">
                  <p className="text-2xl font-semibold text-slate-950">{property.bedrooms}</p>
                  <p className="mt-2 text-sm text-slate-500">Bedrooms</p>
                </div>
                <div className="rounded-3xl bg-slate-50 p-6 text-center">
                  <p className="text-2xl font-semibold text-slate-950">{property.bathrooms}</p>
                  <p className="mt-2 text-sm text-slate-500">Bathrooms</p>
                </div>
                <div className="rounded-3xl bg-slate-50 p-6 text-center">
                  <p className="text-2xl font-semibold text-slate-950">{property.area}</p>
                  <p className="mt-2 text-sm text-slate-500">Internal area</p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-soft">
              <SectionHeading title="Booking & agent support" subtitle="Book a viewing, request a private tour or ask for purchase guidance." />
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <Link href="/contact" className="rounded-3xl bg-brand-600 px-6 py-4 text-center text-sm font-semibold text-white transition hover:bg-brand-700">
                  Book a visit
                </Link>
                <a href="mailto:sales@realestate-space.com" className="rounded-3xl border border-slate-200 px-6 py-4 text-center text-sm font-semibold text-slate-950 transition hover:bg-slate-50">
                  Contact agent
                </a>
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
              <p className="text-sm uppercase tracking-[0.28em] text-brand-600">Agent</p>
              <h3 className="mt-4 text-xl font-semibold text-slate-950">{property.agentName}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">Local expert in luxury sales across the coastal markets.</p>
              <div className="mt-6 space-y-3 text-sm text-slate-600">
                <p><strong className="text-slate-950">Phone:</strong> +34 951 203 716</p>
                <p><strong className="text-slate-950">Email:</strong> sales@realestate-space.com</p>
              </div>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
              <p className="text-sm uppercase tracking-[0.28em] text-brand-600">Property highlights</p>
              <ul className="mt-6 space-y-3 text-slate-600">
                {property.tags.map((tag) => (
                  <li key={tag} className="rounded-2xl bg-slate-50 px-4 py-3">{tag}</li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
