import { useNavigate } from 'react-router-dom'
import useRecoveryStore from '../store/recoveryStore'
import useUIStore from '../store/uiStore'
import ProgressBar from '../components/ProgressBar'
import PhaseList from '../components/PhaseList'
import AdvanceButton from '../components/AdvanceButton'
import RehabTasks from '../features/recovery/RehabTasks'
import RecoveryProgress from '../features/recovery/RecoveryProgress'
import RecoveryHistory from '../features/recovery/RecoveryHistory'

export default function RecoveryPage() {
  const { phases, currentPhase, advancePhase, getPhaseProgress } = useRecoveryStore()
  const { showToast } = useUIStore()
  const navigate = useNavigate()

  const handleAdvance = () => {
    const phase = phases.find(p => p.id === currentPhase)
    advancePhase()
    if (currentPhase >= phases.length) {
      showToast({ message: '🎉 Recovery complete!', type: 'success' })
    } else {
      showToast({ message: `✓ ${phase.title} complete, moving to next phase`, type: 'success' })
    }
  }

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-medium text-slate-900 mb-1">Recovery plan</h1>
      <p className="text-slate-500 text-sm mb-6">
        Follow each phase to return to full training safely
      </p>

      <ProgressBar value={getPhaseProgress()} />
      <PhaseList
        phases={phases}
        currentPhase={currentPhase}
        onPhaseClick={(id) => navigate(`/recovery/phase/${id}`)}
      />
      <AdvanceButton
        onClick={handleAdvance}
        disabled={currentPhase > phases.length}
      />

      <RehabTasks />
      <RecoveryProgress />
      <RecoveryHistory />
    </div>
  )
}