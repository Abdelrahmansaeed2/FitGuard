
import { useEffect } from "react"


const BadgeUnlockModal = ({badge, onClose})=>{

    useEffect(()=>{
        if(!badge) return
        const timer = setTimeout(onClose, 4000) 
        return ()=> clearTimeout(timer)
    },[badge,onClose])

    if(!badge) return null

    return(
        <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        >
            {/*card*/}

            <div
            className="relative flex flex-col items-center gap-4 bg-slate-900 border border-amber-400/40 rounded-3xl px-10 py-10 shadow-2xl shadow-amber-500/20 mx-4"
            onClick={(e)=>e.stopPropagation()}
            style={{animation: 'badgePop 0.5s cubic-bezier(0.34,1.56,0.64,1) both'}}
            >

                {/*glow*/}

                <div className="absolute inset-0 rounded-3xl bg-amber-400/5 blur-xl" />

                {/*emojeis*/}

                <span className="text-7xl drop-shadow-lg">
                    {badge.emoji}
                </span>

                {/*text*/}

                <div className="text-center">
                    <p className="text-xs text-amber-400 font-semibold uppercase tracking-widest mb-1">
                        Badge Unlocked!
                    </p>

                    <h2 className="text-2xl font-extrabold text-white">
                        {badge.badge}
                    </h2>

                    <p className="text-sm text-slate-400 mt-1">
                        You reached Day {badge.day} 🎉
                    </p>

                </div>

                <button onClick={onClose} className="mt-2 px-6 py-2 bg-amber-400 hover:bg-amber-300 active:scale-95 text-slate-900 font-bold rounded-xl text-sm transition-all">
                     Awesome! 🙌
                </button>
            
            </div>

            {/*animtion*/}

            <style>{`
        @keyframes badgePop {
          0%   { opacity: 0; transform: scale(0.5) translateY(30px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
     
        </div>


    )

}

export default BadgeUnlockModal
