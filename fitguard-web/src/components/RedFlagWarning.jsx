export default function RedFlagWarning() {
  return (
    <div className="mt-6 p-4 bg-rose-50 border border-rose-200 rounded-xl flex gap-3 items-start">
      <span className="text-rose-500 text-lg mt-0.5">⚠️</span>
      <div>
        <p className="text-sm font-medium text-rose-800 mb-0.5">Red-flag symptoms</p>
        <p className="text-xs text-rose-600">
          Stop immediately if you feel sharp pain, swelling, or dizziness.
          Contact your medical team.
        </p>
      </div>
    </div>
  )
}