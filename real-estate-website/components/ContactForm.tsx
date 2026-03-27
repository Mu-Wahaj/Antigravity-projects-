'use client';

import { useState, type FormEvent } from 'react';
import { submitLead } from '@/lib/api';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredRegion, setPreferredRegion] = useState('Any');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('loading');
    setError(null);

    try {
      await submitLead({
        name,
        email,
        phone: phone || undefined,
        message,
        interestedIn: preferredRegion === 'Any' ? undefined : preferredRegion,
      });
      setStatus('success');
      setName('');
      setEmail('');
      setPhone('');
      setPreferredRegion('Any');
      setMessage('');
    } catch (err: any) {
      setError(err?.error?.message || err?.message || 'Unable to send your message.');
      setStatus('idle');
    }
  };

  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
      <h2 className="text-2xl font-semibold text-slate-950">Get in touch</h2>
      <p className="mt-3 text-sm leading-6 text-slate-600">Send us a message and we will connect you with the best local agent for your search.</p>
      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="text-sm font-medium text-slate-900">Full name</span>
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
              className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-brand-500"
            />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-slate-900">Email address</span>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-brand-500"
            />
          </label>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="text-sm font-medium text-slate-900">Phone</span>
            <input
              type="tel"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-brand-500"
            />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-slate-900">Preferred region</span>
            <select
              value={preferredRegion}
              onChange={(event) => setPreferredRegion(event.target.value)}
              className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-brand-500"
            >
              <option>Any</option>
              <option>Costa del Sol</option>
              <option>Costa Blanca</option>
              <option>Costa Calida</option>
            </select>
          </label>
        </div>
        <label className="block">
          <span className="text-sm font-medium text-slate-900">Message</span>
          <textarea
            rows={5}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            required
            className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-brand-500"
          />
        </label>
        <button
          type="submit"
          disabled={status === 'loading'}
          className="inline-flex items-center justify-center rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {status === 'loading' ? 'Sending…' : 'Send message'}
        </button>
      </form>
      {status === 'success' && <p className="mt-5 text-sm text-brand-700">Thank you! Your request has been received.</p>}
      {error && <p className="mt-5 text-sm text-red-600">{error}</p>}
    </div>
  );
}
