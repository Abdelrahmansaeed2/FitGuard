import useUIStore from '../store/uiStore'

const typeConfig = {
  success: 'bg-emerald-500',
  error:   'bg-rose-500',
  warning: 'bg-amber-400',
  info:    'bg-violet-600',
}

export default function Toast() {
  const { toasts, hideToast } = useUIStore()

  if (toasts.length === 0) return null

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-2 z-50">
      {toasts.map(toast => (
        <div key={toast.id}
          className={`flex items-center gap-3 px-4 py-3 rounded-xl text-white
            shadow-lg min-w-64 animate-fade-in ${typeConfig[toast.type] ?? typeConfig.info}`}
        >
          <span className="text-sm font-medium flex-1">{toast.message}</span>
          <button
            onClick={() => hideToast(toast.id)}
            className="text-white/70 hover:text-white transition-colors"
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  )
}