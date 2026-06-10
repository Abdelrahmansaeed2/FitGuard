

import { ClockIcon, ArrowPathIcon } from "@heroicons/react/24/outline";

const DailyTaskCard = ({ task, isToday, onComplete }) => {
    if (!task) return null

    const { day, exercises, description, completed } = task

    const cardBorder = completed ? 'border-emerald-500/40' : isToday ? 'border-violet-500/60' : 'border-slate-700'
    const badgeBg = completed 
    ? 'bg-emerald-500/20 text-emerald-400' : isToday 
    ? 'bg-violet-500/20 text-violet-400'
    : 'bg-slate-700 text-slate-400'

    const badgeLabel = completed ? '✓ Completed' : isToday ? '⚡ Today' : ' Upcoming'

    return (
        <div className={`bg-slate-800 border ${cardBorder} rounded-2xl p-5 flex flex-col gap-3 transition-all duration-300`}>

            {/* top row */}
        <div className="flex items-start justify-between ">
            <div>
                <p className="text-xs text-slate-500 mb-1">Day {day}</p>
                <h3 className="text-lg font-bold text-white">Day {day} Workout</h3>
            </div>
            <span className={`text-xs font-semibold px-3 py-1 rounded-full ${badgeBg}`}>
                {badgeLabel}
            </span>
        </div>

        {/* Description */}
        <p className="text-sm text-slate-400 leading-relaxed">{description}</p>

        {/* Exercises List */}
        <div className="flex flex-col gap-2">
            {(exercises || []).map((ex, idx) => (
                <div key={idx} className="flex items-center justify-between bg-slate-700/50 rounded-lg px-3 py-2">
                    <span className="text-sm text-white font-medium">{ex.exercise}</span>
                    <div className="flex items-center gap-1 text-xs text-slate-300">
                        {ex.duration ? (
                            <>
                                <ClockIcon className="w-3.5 h-3.5" />
                                <span>{ex.duration}</span>
                            </>
                        ) : (
                            <>
                                <ArrowPathIcon className="w-3.5 h-3.5" />
                                <span>{ex.reps} reps</span>
                            </>
                        )}
                    </div>
                </div>
            ))}
        </div>

        {/* mark as done */}
        {isToday && !completed && (
            <button onClick={() => onComplete(day)} 
            className="mt-1 w-full py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 active:scale-95 text-white font-semibold transition-all duration-200">
               ✓ Mark as Done
            </button>
        )}

        {completed && (
            <div className="mt-1 w-full py-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-semibold text-sm text-center">
                 ✓ Completed
            </div>
        )}

        </div>

    );

};

export default DailyTaskCard;

