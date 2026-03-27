import Link from 'next/link';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Listings', href: '/listings' },
  { label: 'Contact', href: '/contact' },
  { label: 'Login', href: '/login' },
  { label: 'Admin', href: '/admin' },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-lg">
      <div className="container flex items-center justify-between py-5">
        <Link href="/" className="text-lg font-semibold text-slate-950">
          Space Real Estate
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-slate-700 transition hover:text-slate-950">
              {item.label}
            </Link>
          ))}
        </nav>
        <a href="tel:+34951023716" className="rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-700">
          +34 951 203 716
        </a>
      </div>
    </header>
  );
}
