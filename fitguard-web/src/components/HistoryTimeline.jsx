// src/components/HistoryTimeline.jsx
import { useState } from 'react'
import Pagination from './Pagination'

const PAGE_SIZE = 5

const statusConfig = {
  completed: { dot: 'bg-emerald-500', badge: 'bg-emerald-50 text-emerald-800', label: 'Completed' },
  missed:    { dot: 'bg-rose-500',    badge: 'bg-rose-50 text-rose-800',       label: 'Missed'    },
}

export default function HistoryTimeline({ history }) {
  const [page, setPage] = useState(1)

  const totalPages = Math.ceil(history.length / PAGE_SIZE)
  const paginated = history.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  return (
    <div>
      <div className="flex flex-col">
        {paginated.map((entry, i) => {
          const cfg = statusConfig[entry.status]
          const isLast = i === paginated.length - 1

          return (
            <div key={i} className="flex gap-4 items-start">
              <div className="flex flex-col items-center w-8 flex-shrink-0">
                <div className={`w-3 h-3 rounded-full mt-1 flex-shrink-0 ${cfg.dot}`} />
                {!isLast && <div className="w-0.5 flex-1 min-h-6 bg-slate-200 my-1" />}
              </div>

              <div className="flex-1 flex items-center justify-between bg-white
                border border-slate-200 rounded-xl px-4 py-3 mb-3">
                <div>
                  <p className="text-xs text-slate-400 mb-0.5">{entry.date}</p>
                  <p className="text-sm font-medium text-slate-800">{entry.task}</p>
                </div>
                <span className={`text-xs font-medium px-3 py-1 rounded-full ${cfg.badge}`}>
                  {cfg.label}
                </span>
              </div>
            </div>
          )
        })}
      </div>

      {totalPages > 1 && (
        <Pagination
          page={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />
      )}
    </div>
  )
}