// src/pages/PhaseDetailPage.jsx
import { useParams, useNavigate } from 'react-router-dom'
import useRecoveryStore from '../store/recoveryStore'
import TaskList from '../components/TaskList'
import RedFlagWarning from '../components/RedFlagWarning'

export default function PhaseDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { phases, currentPhase, completeTask, getTasksByPhase } = useRecoveryStore()

  const phase = phases.find(p => p.id === Number(id))
  const tasks = getTasksByPhase(Number(id))

  if (!phase) return (
    <div className="p-6 text-center text-slate-400">Phase not found</div>
  )

  const status = phase.id < currentPhase ? 'completed'
    : phase.id === currentPhase ? 'active'
    : 'locked'

  const statusConfig = {
    completed: { badge: 'Completed',   color: 'bg-emerald-50 text-emerald-700' },
    active:    { badge: 'In progress', color: 'bg-emerald-50 text-emerald-700' },
    locked:    { badge: 'Locked',      color: 'bg-slate-100 text-slate-400'    },
  }

  const cfg = statusConfig[status]

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <button
        onClick={() => navigate('/recovery')}
        className="text-sm text-slate-400 hover:text-slate-600 transition-colors mb-6 flex items-center gap-1"
      >
        ← Back to recovery
      </button>

      <div className="flex items-center justify-between mb-2">
        <h1 className="text-2xl font-medium text-slate-900">{phase.title}</h1>
        <span className={`text-xs font-medium px-3 py-1 rounded-full ${cfg.color}`}>
          {cfg.badge}
        </span>
      </div>
      <p className="text-slate-500 text-sm mb-2">Phase {phase.id} of {phases.length}</p>
      <p className="text-slate-400 text-sm mb-8">{phase.description}</p>

      <h2 className="text-sm font-medium text-slate-700 mb-3">Tasks for this phase</h2>
      {status === 'locked' ? (
        <p className="text-sm text-slate-400 py-6 text-center">
          Complete previous phases to unlock these tasks
        </p>
      ) : (
        <TaskList tasks={tasks} onComplete={completeTask} />
      )}

      {status === 'active' && <RedFlagWarning />}
    </div>
  )
}