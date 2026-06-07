export default function ProgressBar({ value }) {
  return (
    <div className="h-1.5 bg-slate-100 rounded-full mb-8 overflow-hidden">
      <div
        className="h-full bg-emerald-500 rounded-full transition-all duration-500"
        style={{ width: `${value}%` }}
      />
    </div>
  )
}