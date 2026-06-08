// src/components/NotificationList.jsx
const typeConfig = {
  rehab:  { icon: '🧘', bg: 'bg-emerald-50' },
  injury: { icon: '⚠️', bg: 'bg-rose-50'    },
  phase:  { icon: '🔄', bg: 'bg-violet-50'  },
}

export default function NotificationList({ notifications, onMarkRead, onRemove }) {
  if (notifications.length === 0) {
    return (
      <p className="text-center text-slate-400 text-sm py-12">
        No notifications yet
      </p>
    )
  }

  return (
    <div className="flex flex-col gap-2">
      {notifications.map(n => {
        const cfg = typeConfig[n.type] ?? { icon: '🔔', bg: 'bg-slate-100' }

        return (
          <div key={n.id}
            className={`flex items-center gap-4 p-4 bg-white rounded-xl border
              transition-opacity
              ${n.read ? 'opacity-50 border-slate-200' : 'border-l-4 border-l-violet-600 border-slate-200'}`}
          >
            <div className={`w-9 h-9 rounded-xl flex items-center justify-center
              text-base flex-shrink-0 ${cfg.bg}`}>
              {cfg.icon}
            </div>

            <div className="flex-1">
              <p className="text-sm font-medium text-slate-800 mb-0.5">{n.message}</p>
              <p className="text-xs text-slate-400">{n.time}</p>
            </div>

            <div className="flex items-center gap-2 flex-shrink-0">
              {!n.read && (
                <button
                  onClick={() => onMarkRead(n.id)}
                  className="text-xs font-medium text-violet-600 hover:underline"
                >
                  Mark as read
                </button>
              )}
              <button
                onClick={() => onRemove(n.id)}
                className="text-xs font-medium text-rose-400 hover:text-rose-600
                  hover:underline transition-colors"
              >
                Remove
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}