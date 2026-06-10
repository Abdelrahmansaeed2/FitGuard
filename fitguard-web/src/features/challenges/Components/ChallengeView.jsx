

import { useState } from "react";
import useChallenge from "../Hooks/useChallenge";
import Progressbar from "./Progressbar";
import StreakCounter from "./StreakCounter";
import DayGride from "./DayGride";
import DailyTaskCard from "./Dailytaskcard";
import MilestoneBadges from "./MilestoneBadges";
import BadgeUnlockModal from "./BadgeUnlockModal";
import ChallengeHistory from "./ChallengeHistory";

const ChallengeView= ()=>{
    const{
        currentDay, totalDays, streak, tasks, milestones, history,
        unlockBadge, completedCount, progressPercent, getDayStatus,
        completeTask, clearUnlockBadge,

    } = useChallenge()


    const [selectedDay, setSelectedDay]= useState(currentDay)
    const selectedTask= tasks.find((t)=>t.day===selectedDay) || null
    const isToday= selectedDay===currentDay

    return(
        <div className="min-h-screen bg-slate-900 text-white">
             {/* Badge Modal */}

             <BadgeUnlockModal badge={unlockBadge} onClose={clearUnlockBadge}/>

             <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-8">
                 {/* Header */}

                 <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                        <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
                            My Challenge 🏆
                        </h1>
                        <p className="text-slate-400 text-sm mt-1">
                            Day {currentDay} of {totalDays} — Keep going!
                        </p>
                    </div>

                    <StreakCounter streak={streak}/>

                 </div>

                 {/* Progress Bar */}
                 <Progressbar percent={progressPercent}
                 completedCount={completedCount}
                 totalDays={totalDays}
                 />

                 {/* Day Grid */}

                 <DayGride tasks={tasks}
                 currentDay={currentDay}
                 milestones={milestones}
                 getDayStatus={getDayStatus}
                 onSelectDay={setSelectedDay}
                 selectedDay={selectedDay}
                 />

                 {/* Task Card */}

                 <div>
                    <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-4">
                        {isToday? "Today's Task": `Day ${selectedDay} Task`}
                    </h2>
                    <DailyTaskCard task={selectedTask}
                    isToday={isToday}
                    onComplete={completeTask}
                    />
                 </div>

                 {/* Milestones */}

                 <MilestoneBadges milestones={milestones}/>



                 <div className="border-t border-slate-800"/>

                 {/*history*/}

                 <ChallengeHistory history={history}/>



             </div>
        </div>
    )


}

export default ChallengeView