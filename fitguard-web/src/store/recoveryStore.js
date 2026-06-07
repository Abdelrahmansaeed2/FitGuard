import { create } from 'zustand'

const useRecoveryStore = create((set, get) => ({

  phases: [
    { id: 1, title: 'Phase 1: Rest',             completed: false },
    { id: 2, title: 'Phase 2: Light Exercise',   completed: false },
    { id: 3, title: 'Phase 3: Return to Training', completed: false },
  ],
  currentPhase: 1,

  advancePhase: () => set((state) => ({
    currentPhase: Math.min(state.currentPhase + 1, state.phases.length + 1),
    phases: state.phases.map((p) =>
    {
      console.log(state)
      return p.id === state.currentPhase ? { ...p, completed: true } : p
    }
    ),
  })),

  tasks: [
    { id: 1, title: 'Stretching',  duration: '10 min', completed: false },
    { id: 2, title: 'Walking',     duration: '20 min', completed: false },
    { id: 3, title: 'Ice Therapy', duration: '15 min', completed: false },
  ],

  completeTask: (taskId) => set((state) => ({
    tasks: state.tasks.map(t =>
      t.id === taskId ? { ...t, completed: true } : t
    ),
  })),

  resetTasks: () => set((state) => ({
    tasks: state.tasks.map(t => ({ ...t, completed: false })),
  })),

  getProgress: () => {
    const { tasks } = get()
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
        { date: 'May 1', task: 'Stretching',  status: 'completed' },
    { date: 'May 2', task: 'Walking',     status: 'completed' },
    { date: 'May 3', task: 'Ice Therapy', status: 'missed'    },
        { date: 'May 1', task: 'Stretching',  status: 'completed' },
    { date: 'May 2', task: 'Walking',     status: 'completed' },
    { date: 'May 3', task: 'Ice Therapy', status: 'missed'    },
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

  notifications: [
    { id: 1, message: "Complete today's rehab exercise", read: false },
    { id: 2, message: "Log today's injury status",       read: false },
    { id: 3, message: 'Recovery phase updated',          read: false },
  ],

  markAsRead: (id) => set((state) => ({
    notifications: state.notifications.map(n =>
      n.id === id ? { ...n, read: true } : n
    ),
  })),

  markAllAsRead: () => set((state) => ({
    notifications: state.notifications.map(n => ({ ...n, read: true })),
  })),

  addNotification: (message) => set((state) => ({
    notifications: [
      ...state.notifications,
      { id: Date.now(), message, read: false },
    ],
  })),

  unreadCount: () => get().notifications.filter(n => !n.read).length,

}))

export default useRecoveryStore