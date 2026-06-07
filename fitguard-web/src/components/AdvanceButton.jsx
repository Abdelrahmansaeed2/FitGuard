export default function AdvanceButton({ onClick, disabled }) {
  return (
    <div className="flex justify-end mt-6">
      <button
        onClick={onClick}
        disabled={disabled}
        className="px-5 py-2 bg-emerald-500 text-white text-sm font-medium
          rounded-lg hover:bg-emerald-600 transition-colors disabled:opacity-40
          disabled:cursor-not-allowed"
      >
        Complete phase & advance →
      </button>
    </div>
  )
}