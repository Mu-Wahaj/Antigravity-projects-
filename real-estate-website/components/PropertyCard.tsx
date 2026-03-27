import Link from 'next/link';
import type { Property } from '@/lib/types';

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

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative overflow-hidden">
        <img src={property.imageUrl} alt={property.title} className="h-64 w-full object-cover transition duration-500 group-hover:scale-105" />
        <div className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-800 shadow-sm">
          {typeLabels[property.type]}
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between gap-4">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-600">{statusLabels[property.status]}</span>
          <span className="text-sm font-semibold text-slate-900">{property.price.toLocaleString('en-US', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 })}</span>
        </div>
        <h3 className="mt-4 text-xl font-semibold text-slate-950">{property.title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-600">{property.summary}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {property.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-6 flex items-center justify-between text-sm text-slate-500">
          <span>{property.bedrooms} beds</span>
          <span>{property.bathrooms} baths</span>
          <span>{property.area}</span>
        </div>
        <Link href={`/properties/${property.id}`} className="mt-7 inline-flex items-center justify-center rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-700">
          View details
        </Link>
      </div>
    </article>
  );
}
