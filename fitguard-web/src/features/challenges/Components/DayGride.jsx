

const DayGride = ({ tasks, currentDay, milestones, getDayStatus, onSelectDay, selectedDay }) => {
    const milestoneMap = {}
    ;(milestones || []).forEach((m) => { milestoneMap[m.day] = m })

    return (
        <div className="w-full">
            <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-4">
                30-Day Challenge 
            </h2>

            <div className="grid grid-cols-6 sm:grid-cols-10 gap-2">
                {(tasks || []).map((t) => {
                    const status = getDayStatus(t.day)
                    const milestone = milestoneMap[t.day]
                    const isSelected = selectedDay === t.day

                    const base = 'relative flex flex-col items-center justify-center rounded-xl cursor-pointer transition-all duration-200 select-none'
                    const sizeclass = 'h-10 w-full text-xs font-bold'

                    const statusClass = status === 'completed'
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 hover:bg-emerald-500/30'
                    : status === 'current'
                    ? 'bg-violet-600/30 text-violet-300 border border-violet-500 shadow-lg shadow-violet-500/20 scale-105'
                    : status === 'missed'
                    ? 'bg-rose-500/10 text-rose-400 border border-rose-500/30'
                    : 'bg-slate-800 text-slate-500 border border-slate-700 hover:border-slate-500'

                    const selectedClass = isSelected ? 'ring-2 ring-white/30' : ''

                    return(
                        <div
                          key={t.day}
                          onClick={() => onSelectDay(t.day)}
                          className={`${base} ${sizeclass} ${statusClass} ${selectedClass}`}
                        >
                            <span>{t.day}</span>

                            {milestone && (
                                <span className="absolute -top-1 -right-1 text-[10px]" title={milestone.badge}>
                                    {milestone.unlocked ? milestone.emoji : '🔒'}
                                </span>
                            )}

                            {status === 'completed' && (
                                <span className="absolute -bottom-0.5 text-[8px] text-emerald-400">✓</span>
                            )}

                        </div>
                    )
                })}

                </div>

                {/*legend*/}

               <div className="flex flex-wrap gap-4 mt-4 text-xs text-slate-500">
                <span className="flex items-center gap-1">
                    <span className="w-3 h-3 rounded bg-emerald-500/30 inline-block" /> Completed
                    </span>

                    <span className="flex items-center gap-1">
                       <span className="w-3 h-3 rounded bg-violet-600/30 inline-block" /> Today
                       </span>

                       <span className="flex items-center gap-1">
                         <span className="w-3 h-3 rounded bg-slate-800 border border-slate-600 inline-block" /> Upcoming
                         </span>

                         <span className="flex items-center gap-1">
                            <span className= "w-3 h-3 rounded bg-rose-500/20 inline-block" /> Missed
                            </span>

                            </div>
                            </div>
    )
}

export default DayGride


           