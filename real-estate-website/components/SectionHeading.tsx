interface SectionHeadingProps {
  title: string;
  subtitle: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-600">Premium real estate</p>
      <h2 className="mt-4 text-3xl font-semibold text-slate-950 sm:text-4xl">{title}</h2>
      <p className="mt-4 text-slate-600">{subtitle}</p>
    </div>
  );
}
