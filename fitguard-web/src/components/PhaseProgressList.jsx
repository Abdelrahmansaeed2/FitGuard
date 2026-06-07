const statusColor = {
  done:   'bg-emerald-500',
  active: 'bg-amber-400',
  locked: 'bg-slate-200',
}

export default function PhaseProgressList({ phases, currentPhase }) {
  const getStatus = (phaseId) => {
    if (phaseId < currentPhase) return 'done'
    if (phaseId === currentPhase) return 'active'
    return 'locked'
  }

  const getPhaseProgress = (phaseId) => {
    if (phaseId < currentPhase) return 100
    if (phaseId === currentPhase) return 50
    return 0
  }

  return (
    <div className="flex flex-col gap-4">
      {phases.map(phase => {
        const status = getStatus(phase.id)
        const pct = getPhaseProgress(phase.id)

        return (
          <div key={phase.id} className="flex flex-col gap-1.5">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-slate-800">{phase.title}</span>
              <span className="text-sm text-slate-400">{pct}%</span>
            </div>
            <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-500 ${statusColor[status]}`}
                style={{ width: `${pct}%` }}
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}