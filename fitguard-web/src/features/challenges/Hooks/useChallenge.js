
import useChallengeStore from '../store/challengeStore';

const useChallenge = () => {
    const { currentDay, totalDays, streak, tasks, milestone, history, 
        unlockBadge, completeTask, clearUnlockBadge } = useChallengeStore();

   
    const completedCount = tasks.filter((t) => t.completed).length || 0
    const progressPercent = Math.round((completedCount / totalDays) * 100)
    const todayTask = tasks?.find((t) => t.day === currentDay) || null
    const nextMilestone = milestone?.find((m) => !m.unlocked) || null


    const getDayStatus = (day) => {
        if(day < currentDay) return tasks?.[day - 1]?.completed ? 'completed' : 'missed'
        if(day === currentDay) return 'current'
        return 'upcoming'
    }

    return {
        currentDay,
        totalDays,
        streak,
        tasks,
        milestones: milestone,
        history,
        unlockBadge,
        completedCount,
        progressPercent,
        todayTask,
        nextMilestone,
        getDayStatus,
        completeTask,
        clearUnlockBadge,
    }
}

export default useChallenge;
