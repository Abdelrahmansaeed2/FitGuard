import useUIStore from '../store/uiStore'

export default function Modal() {
  const { modal, hideModal } = useUIStore()

  if (!modal) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={hideModal}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-xl p-6 max-w-sm w-full mx-4 z-10">
        <h2 className="text-lg font-medium text-slate-900 mb-2">{modal.title}</h2>
        <p className="text-sm text-slate-500 mb-6">{modal.message}</p>

        <div className="flex gap-3 justify-end">
          <button
            onClick={hideModal}
            className="px-4 py-2 text-sm font-medium border border-slate-200
              rounded-lg hover:bg-slate-50 transition-colors"
          >
            Cancel
          </button>
          {modal.onConfirm && (
            <button
              onClick={() => { modal.onConfirm(); hideModal() }}
              className="px-4 py-2 text-sm font-medium bg-emerald-500 text-white
                rounded-lg hover:bg-emerald-600 transition-colors"
            >
              Confirm
            </button>
          )}
        </div>
      </div>
    </div>
  )
}