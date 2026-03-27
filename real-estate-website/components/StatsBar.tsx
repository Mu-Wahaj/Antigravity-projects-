const stats = [
  { value: '23k+', label: 'Properties listed' },
  { value: '30+', label: 'Years in Spain' },
  { value: '4.6/5', label: 'Trustpilot rating' },
  { value: '6', label: 'Languages supported' },
];

export default function StatsBar() {
  return (
    <div className="grid gap-4 rounded-[2rem] bg-white p-8 shadow-soft sm:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.label} className="rounded-3xl border border-slate-200 p-6 text-center">
          <p className="text-3xl font-semibold text-slate-950">{stat.value}</p>
          <p className="mt-3 text-sm text-slate-500">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
