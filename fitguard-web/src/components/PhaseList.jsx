// src/components/PhaseList.jsx
const statusConfig = {
  completed: { icon: '✓', badge: 'Done',       color: 'text-emerald-600 bg-emerald-50' },
  active:    { icon: '●', badge: 'In progress', color: 'text-emerald-600 bg-emerald-50' },
  locked:    { icon: '🔒', badge: 'Locked',     color: 'text-slate-400 bg-slate-100'   },
}

export default function PhaseList({ phases, currentPhase, onPhaseClick}) {
  const getStatus = (phaseId) => {
    if (phaseId < currentPhase) return 'completed'
    if (phaseId === currentPhase) return 'active'
    return 'locked'
  }

  return (
    <div className="flex flex-col gap-3">
      {phases.map((phase, i) => {
        const status = getStatus(phase.id)
        const cfg = statusConfig[status]

        return (
          <div key={phase.id}>
            {i > 0 && (
              <div className={`w-0.5 h-4 ml-5 ${
                status !== 'locked' ? 'bg-emerald-400' : 'bg-slate-200'
              }`} />
            )}
            <div
             onClick={() => onPhaseClick(phase.id)}
             className={`flex items-center gap-4 p-4 rounded-xl border bg-white
              ${status === 'active' ? 'border-emerald-400' : 'border-slate-200'}`}
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center
                text-lg flex-shrink-0
                ${status === 'locked' ? 'bg-slate-100 text-slate-400' : 'bg-emerald-50 text-emerald-600'}`}
              >
                {cfg.icon}
              </div>

              <div className="flex-1">
                <p className="text-xs font-medium text-slate-400 uppercase tracking-wide mb-0.5">
                  Phase {phase.id}
                </p>
                <p className="text-sm font-medium text-slate-800">{phase.title}</p>
              </div>

              <span className={`text-xs font-medium px-3 py-1 rounded-full ${cfg.color}`}>
                {cfg.badge}
              </span>
            </div>
          </div>
        )
      })}
    </div>
  )
}