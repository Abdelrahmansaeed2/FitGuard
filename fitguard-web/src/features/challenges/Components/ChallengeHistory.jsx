
const ChallengeHistory= ({history})=>{
    if(!history || history.length ===0){
        return(
            <div className="w-full">
                <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-4">
                    Challenge History

                </h2>
                <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 text-center">
                    <span className="text-4xl">📋</span>
                    <p className="text-slate-500 mt-3 text-sm">
                        No past challenges yet.
                    </p>
                </div>
            </div>

        
        )
    }

    const getSportEmoji=(sport)=>{
        const map={
            Running:'🏃',
            Strength:'💪',
            Yoga:'🧘',
            Cycling:'🚴',
            Swimming:'🏊'
        }

        return map[sport] || '🏅'
    }

    const getRatecolor= (rate)=>{
        if(rate>=80)  return 'text-emerald-400'
        if(rate>=50) return 'text-amber-400'
        return 'text-rose-400'
    }

    const getRateBarcolor= (rate)=>{
        if(rate>=80) return 'bg-emerald-500'
        if(rate>=50) return 'bg-amber-400'
        return  'bg-rose-500'
    }

    return(
        <div className="w-full">
            <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-4">
                Challenge History
            </h2>

            <div className="flex flex-col gap-3">
                {history.map((item)=>(
                    <div
                      key={item.id}
                      className="bg-slate-800 border border-slate-700 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center gap-4 hover:border-slate-600 transition-all duration-200">

                        {/*sport emoji*/}

                        <div className="flex items-center justify-center w-12 h-12 bg-slate-700 rounded-xl text-2xl shrink-0">
                            {getSportEmoji(item.sport)}
                            </div>

                            {/*info*/}

                            <div className="flex-1 min-w-0">
                                <h3 className="text-white font-bold text-sm truncate">
                                    {item.name}
                                </h3>
                                <p className="text-slate-500 text-xs mt-0.5">
                                    {item.startDate} → {item.endDate}
                                </p>

                                {/*progressbar*/}

                                <div className="mt-2 w-full h-1.5 bg-slate-700 rounded-full overflow-hidden">
                                    <div 
                                    className={`h-full rounded-full transition-all duration-700 ${getRateBarcolor(item.completionRate)}`}
                                    style={{width:`${item.completionRate}%`}}
                                    />
                                </div>        
                                </div>

                                {/*completion rate*/}

                                <div className="flex flex-col items-center shrink-0">
                                    <span className={`text-2xl font-extrabold ${getRatecolor(item.completionRate)}`}>
                                        {item.completionRate}%
                                        </span>      
                                        <span className="text-xs text-slate-500">completed</span>
                                        </div>
                                        </div>       
                                        
                ))}

                </div>
                </div>
    
    )

}

export default ChallengeHistory