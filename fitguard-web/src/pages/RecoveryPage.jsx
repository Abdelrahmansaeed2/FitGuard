// src/pages/RecoveryPage.jsx
import useRecoveryStore from '../store/recoveryStore'
import ProgressBar from '../components/ProgressBar'
import PhaseList from '../components/PhaseList'
import AdvanceButton from '../components/AdvanceButton'
import RehabTasks from '../features/recovery/RehabTasks'
import RecoveryProgress from '../features/recovery/RecoveryProgress'
import RecoveryHistory from '../features/recovery/RecoveryHistory'
export default function RecoveryPage() {
  const { phases, currentPhase, advancePhase, getProgress } = useRecoveryStore()

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-medium text-slate-900 mb-1">Recovery plan</h1>
      <p className="text-slate-500 text-sm mb-6">
        Follow each phase to return to full training safely
      </p>

      <ProgressBar value={getProgress()} />
      <PhaseList phases={phases} currentPhase={currentPhase} />
      <AdvanceButton
        onClick={advancePhase}
        disabled={currentPhase > phases.length}
      />

      <RehabTasks />
      <RecoveryProgress />
      <RecoveryHistory />
    </div>
  )
}