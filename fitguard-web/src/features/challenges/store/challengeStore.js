
import {create} from 'zustand';

const useChallengeStore = create((set, get)=>({

    currentDay:12,
    totalDays:30,
    streak:5,

    tasks: Array.from({length: 30}, (_, i) => {
        const day = i + 1;
        const exercises = [
            { exercise: 'warm-up Run', duration: '10 min', reps:null},
            { exercise: 'Squats', duration: null, reps: 20 },
            { exercise: 'Push-ups', duration: null, reps: 15 },
            { exercise: 'Plank Hold ', duration: '30 sec', reps:null },
            { exercise: 'Lunges', duration: null, reps: 20 },
            { exercise: 'Jump Rope', duration: '5 min', reps:null },
            {exercise: 'Burpees', duration: null, reps: 10 },
            {exercise: 'Mountain Climbers', duration: null, reps: 20 },
            {exercise: 'Cool-down Stretch', duration: '10 min', reps:null },
            {exercise: 'Box Jumps', duration: null, reps: 15 },
            {exercise: 'Bicycle Crunches', duration: null, reps: 25 },
            {exercise: 'High Knees', duration: '1 min', reps:null },
        ];

       return {
    day,
    exercises,
    description: `Day ${day} - ${
        exercises.map((e) =>
            e.duration
                ? `${e.exercise}. Duration: ${e.duration}`
                : `${e.exercise}. Reps: ${e.reps}`
        ).join(' | ')
    } Stay focused and keep pushing the streak alive!`,
    completed: day < 12,
};
        
    
        }),
        
        milestone: [
            { day: 7, badge: 'Week  Warrior', emoji: '🥇' , unlocked: true},
            { day: 15, badge: 'Halfway Hero', emoji: ' ⚡️', unlocked: false },
            { day: 30, badge:'FitGuard Elite', emoji: '🏆', unlocked:false},
        ],

        history: [
            {
            id: 1,
            name: '30-Day Running Challenge',
            startDate: '2026-11-01',
            endDate: '2026-11-30',
            completionRate: 87,
        },

         {
            id: 2,
            name: '30-Day Strength Challenge',
            sport: 'Strength ',
            startDate: '2026-12-01',
            endDate: '2026-12-30',
            completionRate: 73,

        },

        {
            id: 3,
            name: '30-Day Flexibility Challenge',
            sport: 'Yoga',
            startDate: '2027-01-01',
            endDate: '2027-01-30',
            completionRate: 93,


        },
        ],

        unlockBadge: null,

        completeTask: (day) => {
            const {tasks, milestone, currentDay}= get()

            const updatedTasks = tasks.map((task) => 
                task.day === day ? {...task, completed: true} : task
            )

            let newStreak = 0
            for(let i=currentDay-1; i>=0; i--){
                if(updatedTasks[i]?.completed)
                     newStreak++
                else break
}

            const completedCount = updatedTasks.filter((task) => task.completed).length
            let newUnlockBadge = null
            const updatedMilestone = milestone.map((m) => {
                if(!m.unlocked && completedCount >= m.day){
                    newUnlockBadge = m
                    return {...m, unlocked: true}
                }

                return m
            })

            set({
                tasks: updatedTasks,
                streak: newStreak,
                milestone: updatedMilestone,
                unlockBadge: newUnlockBadge
            })
        },

        clearUnlockBadge: () => set({unlockBadge: null}),
}))

export default useChallengeStore;


                

