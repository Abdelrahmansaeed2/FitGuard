export default function CircularProgress({ value }) {
  const radius = 68
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (value / 100) * circumference

  return (
    <div className="flex justify-center mb-8">
      <div className="relative w-40 h-40">
        <svg width="160" height="160" viewBox="0 0 160 160"
          className="-rotate-90">
          <circle
            cx="80" cy="80" r={radius}
            fill="none" stroke="#f1f5f9"
            strokeWidth="12"
          />
          <circle
            cx="80" cy="80" r={radius}
            fill="none" stroke="#10b981"
            strokeWidth="12"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="transition-all duration-500"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl font-medium text-slate-900">{value}%</span>
          <span className="text-xs text-slate-400 mt-1">recovered</span>
        </div>
      </div>
    </div>
  )
}