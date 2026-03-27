'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { loginAdmin, setAuthToken } from '@/lib/api';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await loginAdmin({ email, password });
      setAuthToken(response.token);
      router.push('/admin');
    } catch (err: any) {
      setError(err?.error?.message || err?.message || 'Login failed.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <section className="container py-24">
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-slate-200 bg-white p-10 shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-600">Admin login</p>
          <h1 className="mt-6 text-4xl font-semibold text-slate-950">Secure access for administrators.</h1>
          <p className="mt-4 text-slate-600">Log in to access lead data and manage property listings in the platform.</p>

          <form onSubmit={handleSubmit} className="mt-10 space-y-6">
            <label className="block">
              <span className="text-sm font-medium text-slate-900">Email</span>
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-brand-500"
              />
            </label>
            <label className="block">
              <span className="text-sm font-medium text-slate-900">Password</span>
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
                className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-brand-500"
              />
            </label>
            {error && <p className="text-sm text-red-600">{error}</p>}
            <button
              type="submit"
              disabled={loading}
              className="inline-flex w-full items-center justify-center rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? 'Signing in…' : 'Sign in'}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
