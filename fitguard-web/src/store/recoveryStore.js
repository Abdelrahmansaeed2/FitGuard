import { create } from 'zustand'

const useRecoveryStore = create((set, get) => ({

  phases: [
    {
      id: 1,
      title: 'Phase 1: Rest',
      description: 'Complete rest, ice therapy, and pain management',
      completed: false,
      tasks: [
        { id: 1, title: 'Ice Therapy', duration: '15 min', completed: false },
        { id: 2, title: 'Rest',        duration: '30 min', completed: false },
      ]
    },
    {
      id: 2,
      title: 'Phase 2: Light Exercise',
      description: 'Gentle stretching and low-impact movement',
      completed: false,
      tasks: [
        { id: 3, title: 'Stretching', duration: '10 min', completed: false },
        { id: 4, title: 'Walking',    duration: '20 min', completed: false },
      ]
    },
    {
      id: 3,
      title: 'Phase 3: Return to Training',
      description: 'Gradual reintroduction to full sport activity',
      completed: false,
      tasks: [
        { id: 5, title: 'Light Jog',      duration: '15 min', completed: false },
        { id: 6, title: 'Strength Work',  duration: '20 min', completed: false },
      ]
    },
  ],

  currentPhase: 1,

  advancePhase: () => set((state) => ({
    currentPhase: Math.min(state.currentPhase + 1, state.phases.length + 1),
    phases: state.phases.map((p) =>
      p.id === state.currentPhase ? { ...p, completed: true } : p
    ),
  })),

  completeTask: (taskId) => set((state) => ({
    phases: state.phases.map(p =>
      p.id === state.currentPhase
        ? {
            ...p,
            tasks: p.tasks.map(t =>
              t.id === taskId ? { ...t, completed: true } : t
            )
          }
        : p
    ),
  })),

  resetTasks: () => set((state) => ({
    phases: state.phases.map(p =>
      p.id === state.currentPhase
        ? { ...p, tasks: p.tasks.map(t => ({ ...t, completed: false })) }
        : p
    ),
  })),

  getCurrentPhaseTasks: () => {
    const { phases, currentPhase } = get()
    return phases.find(p => p.id === currentPhase)?.tasks ?? []
  },

  getTasksByPhase: (phaseId) => {
    const { phases } = get()
    return phases.find(p => p.id === phaseId)?.tasks ?? []
  },

  getProgress: () => {
    const tasks = get().getCurrentPhaseTasks()
    if (tasks.length === 0) return 0
    const done = tasks.filter(t => t.completed).length
    return Math.round((done / tasks.length) * 100)
  },

  getPhaseProgress: () => {
    const { phases, currentPhase } = get()
    return Math.round(((currentPhase - 1) / phases.length) * 100)
  },

  history: [
    { date: 'May 1', task: 'Stretching',  status: 'completed' },
    { date: 'May 2', task: 'Walking',     status: 'completed' },
    { date: 'May 3', task: 'Ice Therapy', status: 'missed'    },
  ],

  logToHistory: (task, status) => set((state) => ({
    history: [
      ...state.history,
      {
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
        task,
        status,
      },
    ],
  })),

}))

export default useRecoveryStore