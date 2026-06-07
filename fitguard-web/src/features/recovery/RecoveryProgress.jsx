import useRecoveryStore from '../../store/recoveryStore'
import CircularProgress from '../../components/CircularProgress'
import PhaseProgressList from '../../components/PhaseProgressList'

export default function RecoveryProgress() {
  const { phases, currentPhase, getPhaseProgress } = useRecoveryStore()

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-medium text-slate-900 mb-1">Recovery progress</h1>
      <p className="text-slate-500 text-sm mb-6">
        Track your overall recovery across all phases
      </p>

      <CircularProgress value={getPhaseProgress()} />
      <PhaseProgressList phases={phases} currentPhase={currentPhase} />
    </div>
  )
}