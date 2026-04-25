interface ScreenshotPlaceholderProps {
  label: string;
  className?: string;
}

export default function ScreenshotPlaceholder({
  label,
  className = "",
}: ScreenshotPlaceholderProps) {
  return (
    <div
      className={`rounded-[28px] bg-gradient-to-br from-hero-from to-hero-to border border-glass-border shadow-lg flex flex-col items-center justify-center gap-3 ${className}`}
    >
      <svg
        className="h-10 w-10 text-text-muted/40"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3 3h18a1.5 1.5 0 0 1 1.5 1.5v15a1.5 1.5 0 0 1-1.5 1.5H3A1.5 1.5 0 0 1 1.5 19.5v-15A1.5 1.5 0 0 1 3 3Z"
        />
      </svg>
      <span className="text-sm font-medium text-text-muted/60 text-center px-4">
        {label}
      </span>
    </div>
  );
}
