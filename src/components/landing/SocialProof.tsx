const stats = [
  { value: "100K+", label: "Utilisateurs actifs" },
  { value: "4.8", label: "Note App Store" },
  { value: "2M+", label: "Repas analysés" },
  { value: "500K+", label: "Scans réalisés" },
];

export default function SocialProof() {
  return (
    <section className="py-16 border-y border-glass-border bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-heading text-3xl sm:text-4xl font-bold text-text">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-text-secondary">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
