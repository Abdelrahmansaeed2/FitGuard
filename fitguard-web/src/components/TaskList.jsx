const taskIcons = {
  Stretching:    '🧘',
  Walking:       '🚶',
  'Ice Therapy': '🧊',
}

export default function TaskList({ tasks, onComplete }) {
  return (
    <div className="flex flex-col gap-3">
      {tasks.map(task => (
        <div key={task.id}
          className={`flex items-center gap-4 p-4 bg-white rounded-xl border
            border-slate-200 transition-opacity ${task.completed ? 'opacity-60' : ''}`}
        >
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center
            text-lg flex-shrink-0
            ${task.completed ? 'bg-emerald-50' : 'bg-slate-100'}`}
          >
            {task.completed ? '✓' : taskIcons[task.title] ?? '💪'}
          </div>

          <div className="flex-1">
            <p className={`text-sm font-medium ${task.completed
              ? 'line-through text-slate-400'
              : 'text-slate-800'}`}
            >
              {task.title}
            </p>
            <p className="text-xs text-slate-400">{task.duration}</p>
          </div>

          {task.completed ? (
            <span className="text-xs font-medium px-3 py-1 rounded-full
              bg-emerald-50 text-emerald-700">
              Completed
            </span>
          ) : (
            <button
              onClick={() => onComplete(task.id)}
              className="px-4 py-1.5 text-sm font-medium border border-slate-200
                rounded-lg hover:bg-slate-50 transition-colors"
            >
              Complete task
            </button>
          )}
        </div>
      ))}
    </div>
  )
}