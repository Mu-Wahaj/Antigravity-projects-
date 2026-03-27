'use client';

import { useMemo, useState } from 'react';
import PropertyCard from './PropertyCard';
import type { Property } from '@/lib/types';

const locations = ['All locations', 'Costa del Sol', 'Costa Blanca', 'Costa Calida'];
const bedrooms = ['Any', '1', '2', '3', '4+'];
const prices = ['Any', '€300k+', '€500k+', '€800k+'];

interface PropertyFiltersProps {
  properties: Property[];
}

export default function PropertyFilters({ properties }: PropertyFiltersProps) {
  const [location, setLocation] = useState('All locations');
  const [bedroomCount, setBedroomCount] = useState('Any');
  const [priceRange, setPriceRange] = useState('Any');
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    return properties.filter((property) => {
      const matchesLocation = location === 'All locations' || property.location.includes(location);
      const matchesBedrooms = bedroomCount === 'Any' || (bedroomCount === '4+' ? property.bedrooms >= 4 : property.bedrooms === Number(bedroomCount));
      const matchesPrice =
        priceRange === 'Any' ||
        (priceRange === '€300k+' && property.price >= 300000) ||
        (priceRange === '€500k+' && property.price >= 500000) ||
        (priceRange === '€800k+' && property.price >= 800000);
      const matchesSearch = property.title.toLowerCase().includes(search.toLowerCase()) || property.location.toLowerCase().includes(search.toLowerCase());
      return matchesLocation && matchesBedrooms && matchesPrice && matchesSearch;
    });
  }, [properties, location, bedroomCount, priceRange, search]);

  return (
    <div className="space-y-10">
      <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
        <div className="grid gap-4 sm:grid-cols-4">
          <label className="block">
            <span className="text-sm font-semibold text-slate-900">Search</span>
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-brand-500"
              placeholder="Search by city or feature"
            />
          </label>
          <label className="block">
            <span className="text-sm font-semibold text-slate-900">Location</span>
            <select
              value={location}
              onChange={(event) => setLocation(event.target.value)}
              className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-brand-500"
            >
              {locations.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className="text-sm font-semibold text-slate-900">Bedrooms</span>
            <select
              value={bedroomCount}
              onChange={(event) => setBedroomCount(event.target.value)}
              className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-brand-500"
            >
              {bedrooms.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className="text-sm font-semibold text-slate-900">Price</span>
            <select
              value={priceRange}
              onChange={(event) => setPriceRange(event.target.value)}
              className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-brand-500"
            >
              {prices.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {filtered.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="rounded-[2rem] border border-slate-200 bg-white p-12 text-center text-slate-600 shadow-soft">
          No results match your search. Try broadening the filters or changing the location.
        </div>
      )}
    </div>
  );
}
