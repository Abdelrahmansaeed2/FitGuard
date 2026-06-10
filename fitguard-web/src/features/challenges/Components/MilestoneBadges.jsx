


const MilestoneBadges = ({milestones})=>{
    return(
        <div className="w-fll">
            <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-4">
                Milestones
            </h2>

            <div className="flex flex-col sm:flex-row gap-3">
                {milestones.map((m)=>(
                    <div
                     key={m.day}
            className={`flex-1 flex flex-col items-center justify-center gap-2 rounded-2xl py-5 border transition-all duration-300
              ${m.unlocked
                ? 'bg-gradient-to-br from-amber-500/20 to-amber-400/10 border-amber-400/40 shadow-lg shadow-amber-500/10'
                : 'bg-slate-800 border-slate-700 opacity-50'
              }`}
          >

            {/*lock*/}

            <span className="text-3xl">
                {m.unlocked? m.emoji:'🔒'}
            </span>

            {/*badge name*/}

            <span className={`text-sm font-bold ${m.unlocked ? 'text-amber-400' : 'text-slate-500'}`}>
                {m.badge}
            </span>

            {/*nmber of da*/}

            <span className="text-xs text-slate-500" >
                Day {m.day}
            </span>

            {/*unlocked label*/}

            {m.unlocked &&(
                <span className="text-[10px] bg-amber-400/20 text-amber-300 px-2 py-0.5 rounded-full font-semibold">
                    Unlocked
                </span>
            )}

            </div>

                ))}
            </div>
        </div>
    )
}

export default MilestoneBadges