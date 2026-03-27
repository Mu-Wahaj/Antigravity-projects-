import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="bg-brand-950 text-white">
      <div className="container flex flex-col gap-8 rounded-[2rem] border border-white/10 bg-brand-900/95 p-12 shadow-soft sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-300">Ready to move faster</p>
          <h2 className="mt-4 text-3xl font-semibold">Launch an elevated property experience for your clients.</h2>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100">
            Book a call
          </Link>
          <Link href="/listings" className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
            View listings
          </Link>
        </div>
      </div>
    </section>
  );
}
