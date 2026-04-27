interface PricingCardProps {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  trial?: string;
  buttonText?: string;
  popularLabel?: string;
}

export default function PricingCard({
  name,
  price,
  period,
  description,
  features,
  popular = false,
  trial,
  buttonText,
  popularLabel,
}: PricingCardProps) {
  const ctaText = buttonText ?? "Commencer";
  const badgeText = popularLabel ?? "Le plus populaire";

  return (
    <div
      className={`relative rounded-2xl border p-6 sm:p-8 flex flex-col ${
        popular
          ? "border-accent shadow-xl shadow-accent/10 scale-105"
          : "border-glass-border shadow-sm"
      }`}
    >
      {popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-xs font-semibold text-white">
          {badgeText}
        </span>
      )}
      <h3 className="font-heading text-lg font-bold text-text">{name}</h3>
      <p className="mt-1 text-sm text-text-secondary">{description}</p>
      <div className="mt-6">
        <span className="font-heading text-4xl font-bold text-text">
          {price}
        </span>
        <span className="text-text-secondary">/{period}</span>
      </div>
      {trial && (
        <p className="mt-2 text-sm font-medium text-success">{trial}</p>
      )}
      <ul className="mt-6 space-y-3 flex-1">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2">
            <svg
              className="mt-0.5 h-5 w-5 text-success flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg>
            <span className="text-sm text-text-secondary">{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href="#"
        className={`mt-8 block w-full rounded-full py-3 text-center text-sm font-semibold transition-colors ${
          popular
            ? "bg-accent text-white hover:bg-accent-dark"
            : "bg-text text-white hover:bg-dark-secondary"
        }`}
      >
        {ctaText}
      </a>
    </div>
  );
}
