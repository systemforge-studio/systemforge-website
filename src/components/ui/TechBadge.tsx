type TechBadgeProps = {
  label: string;
};

export function TechBadge({ label }: TechBadgeProps) {
  return (
    <span className="rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-100">
      {label}
    </span>
  );
}
