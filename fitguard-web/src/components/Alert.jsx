import useUIStore from '../store/uiStore'

const typeConfig = {
  info:    { bg: 'bg-violet-50', border: 'border-violet-200', text: 'text-violet-800', icon: 'ℹ️' },
  success: { bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-800', icon: '✓' },
  warning: { bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-800', icon: '⚠️' },
  error:   { bg: 'bg-rose-50', border: 'border-rose-200', text: 'text-rose-800', icon: '✕' },
}

export default function Alert() {
  const { alert, hideAlert } = useUIStore()

  if (!alert) return null

  const cfg = typeConfig[alert.type] ?? typeConfig.info

  return (
    <div className={`flex items-center gap-3 px-4 py-3 rounded-xl border
      ${cfg.bg} ${cfg.border} ${cfg.text} mb-4`}
    >
      <span>{cfg.icon}</span>
      <p className="text-sm font-medium flex-1">{alert.message}</p>
      <button
        onClick={hideAlert}
        className="opacity-60 hover:opacity-100 transition-opacity"
      >
        ✕
      </button>
    </div>
  )
}