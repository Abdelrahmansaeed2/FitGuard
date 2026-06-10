
const StreakCounter = ({ streak }) => {
    return (

        <div className="flex flex-col items-center justify-center bg-slate-800 border border-slate-700 rounded-2xl px-6 py-4">

            {/* Icon */}

            <span className="text-3xl mb-1">🔥</span>

            {/* Streak Count */}
            <span className="text-3xl font-extrabold text-orange-400 leading-none">
                {streak}
            </span>

            {/* Label */}

            <span className="text-xs text-slate-400 mt-1 tracking-wide uppercase">
                Day Streak
            </span>

        </div>
    );
};

export default StreakCounter;

