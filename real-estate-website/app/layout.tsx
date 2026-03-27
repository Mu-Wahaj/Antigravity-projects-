import type { Metadata } from 'next';
import './globals.css';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

export const metadata: Metadata = {
  title: 'Space Premium Real Estate',
  description: 'Luxury real estate experiences across Costa del Sol, Costa Blanca and Costa Calida.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 text-slate-950">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
