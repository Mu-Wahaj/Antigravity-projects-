'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { fetchLeads, fetchCurrentUser } from '@/lib/api';

export default function AdminPage() {
  const [leads, setLeads] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      setLoading(true);
      setError(null);

      try {
        const userResponse = await fetchCurrentUser();
        setUserEmail(userResponse.user.email);
        const leadsResponse = await fetchLeads();
        setLeads(leadsResponse);
      } catch (err: any) {
        setError(err?.error?.message || err?.message || 'Unable to load admin data.');
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  return (
    <main>
      <section className="container py-24">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-soft">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-600">Admin dashboard</p>
                <h1 className="mt-4 text-4xl font-semibold text-slate-950">Manage leads and secure property data.</h1>
              </div>
              <Link href="/login" className="inline-flex items-center justify-center rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-50">
                Re-authenticate
              </Link>
            </div>

            {loading && <p className="mt-8 text-slate-600">Loading admin data…</p>}
            {error && <p className="mt-8 text-sm text-red-600">{error}</p>}

            {!loading && !error && (
              <div className="mt-8 space-y-6">
                <div className="rounded-[1.75rem] bg-slate-50 p-6">
                  <p className="text-sm text-slate-500">Logged in as</p>
                  <p className="mt-2 text-lg font-semibold text-slate-950">{userEmail}</p>
                </div>
                <div className="space-y-4">
                  {leads.length === 0 ? (
                    <div className="rounded-[1.75rem] bg-slate-50 p-8 text-slate-600">No leads found yet.</div>
                  ) : (
                    leads.map((lead) => (
                      <article key={lead.id} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                          <div>
                            <h2 className="text-xl font-semibold text-slate-950">{lead.name}</h2>
                            <p className="text-sm text-slate-500">{lead.email} · {lead.phone || 'No phone provided'}</p>
                          </div>
                          <span className="rounded-full bg-brand-100 px-4 py-2 text-sm font-semibold text-brand-700">{lead.interestedIn || 'General inquiry'}</span>
                        </div>
                        <p className="mt-4 text-slate-600">{lead.message}</p>
                        <p className="mt-4 text-xs uppercase tracking-[0.25em] text-slate-400">Submitted {new Date(lead.createdAt).toLocaleString()}</p>
                      </article>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
