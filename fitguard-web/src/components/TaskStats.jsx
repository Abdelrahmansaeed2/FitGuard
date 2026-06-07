export default function TaskStats({ done, total, progress }) {
  return (
    <div className="grid grid-cols-2 gap-3 mb-6">
      <div className="bg-slate-100 rounded-lg p-4">
        <p className="text-xs text-slate-500 mb-1">Completed</p>
        <p className="text-2xl font-medium text-slate-900">{done} / {total}</p>
      </div>
      <div className="bg-slate-100 rounded-lg p-4">
        <p className="text-xs text-slate-500 mb-1">Progress</p>
        <p className="text-2xl font-medium text-slate-900">{progress}%</p>
      </div>
    </div>
  )
}