

const Progressbar = ({ percent, completedCount, totalDays }) => {
    return (
        <div className="w-full">

            {/* Header */}

            <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-slate-300">
                    Overall Progress
                </span>
                <span className="text-sm font-bold text-emerald-400">
                    {completedCount}/{totalDays} days
                </span>
            </div>

            {/* Progress Bar */}

            <div className="w-full h-3 bg-slate-700 rounded-full overflow-hidden">
                <div
                    className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full transition-all duration-700 ease-out"
                    style={{ width: `${percent}%` }}
                />
            </div>

            {/* Percentage Label */}

            <p className="mt-1 text-xs text-slate-500 text-right">
                {percent}% complete
            </p>
        </div>
    );

};

export default Progressbar;