import useRecoveryStore from '../../store/recoveryStore'
import HistoryTimeline from '../../components/HistoryTimeline'

export default function RecoveryHistory() {
  const { history } = useRecoveryStore()

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-medium text-slate-900 mb-1">Recovery history</h1>
      <p className="text-slate-500 text-sm mb-6">A log of your past rehab activity</p>

      <HistoryTimeline history={history} />
    </div>
  )
}