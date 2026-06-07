export default function Pagination({ page, totalPages, onPageChange }) {
  return (
    <div className="flex items-center justify-center gap-2 mt-4">
      <button
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
        className="w-8 h-8 flex items-center justify-center border border-slate-200
          rounded-lg text-slate-500 hover:bg-slate-50 transition-colors
          disabled:opacity-40 disabled:cursor-not-allowed"
      >
        ←
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map(num => (
        <button
          key={num}
          onClick={() => onPageChange(num)}
          className={`w-8 h-8 flex items-center justify-center rounded-lg
            text-sm font-medium transition-colors
            ${page === num
              ? 'bg-emerald-500 text-white border border-emerald-500'
              : 'border border-slate-200 text-slate-500 hover:bg-slate-50'
            }`}
        >
          {num}
        </button>
      ))}

      <button
        onClick={() => onPageChange(page + 1)}
        disabled={page === totalPages}
        className="w-8 h-8 flex items-center justify-center border border-slate-200
          rounded-lg text-slate-500 hover:bg-slate-50 transition-colors
          disabled:opacity-40 disabled:cursor-not-allowed"
      >
        →
      </button>
    </div>
  )
}