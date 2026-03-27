export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white py-10">
      <div className="container flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-600">Space Real Estate</p>
          <p className="mt-3 text-sm text-slate-600">Premium property experiences across Spain’s most desirable coastal markets.</p>
        </div>
        <div className="flex flex-col gap-2 text-sm text-slate-600 sm:flex-row sm:items-center sm:gap-6">
          <span>Marbella office</span>
          <span>sales@realestate-space.com</span>
          <span>+34 951 203 716</span>
        </div>
      </div>
    </footer>
  );
}
