export default function SectionLabel({ n, label }: { n: string; label: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="mono text-[11px] tracking-[0.3em] text-crimson">§ {n}</span>
      <span className="eyebrow">{label}</span>
      <span className="h-px flex-1 bg-paper/10" />
    </div>
  )
}
