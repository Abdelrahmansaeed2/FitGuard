// src/store/uiStore.js
import { create } from 'zustand'

const useUIStore = create((set, get) => ({

  notifications: [
    { id: 1, message: "Complete today's rehab exercise", type: 'rehab',  time: '2 min ago', read: false },
    { id: 2, message: "Log today's injury status",       type: 'injury', time: '1 hr ago',  read: false },
    { id: 3, message: 'Recovery phase updated',          type: 'phase',  time: '3 hrs ago', read: false },
    { id: 4, message: 'Great job completing Phase 1!',   type: 'phase',  time: 'Yesterday', read: true  },
  ],

  addNotification: (message, type = 'phase') => set((state) => ({
    notifications: [
      { id: Date.now(), message, type, time: 'Just now', read: false },
      ...state.notifications,
    ],
  })),

  markAsRead: (id) => set((state) => ({
    notifications: state.notifications.map(n =>
      n.id === id ? { ...n, read: true } : n
    ),
  })),

  markAllAsRead: () => set((state) => ({
    notifications: state.notifications.map(n => ({ ...n, read: true })),
  })),

  removeNotification: (id) => set((state) => ({
    notifications: state.notifications.filter(n => n.id !== id),
  })),

  unreadCount: () => get().notifications.filter(n => !n.read).length,

  toasts: [],

  showToast: ({ message, type = 'success', duration = 3000 }) => {
    const id = Date.now()
    set((state) => ({
      toasts: [...state.toasts, { id, message, type }],
    }))
    setTimeout(() => get().hideToast(id), duration)
  },

  hideToast: (id) => set((state) => ({
    toasts: state.toasts.filter(t => t.id !== id),
  })),

  alert: null,

  showAlert: ({ message, type = 'info' }) => set({
    alert: { message, type }
  }),

  hideAlert: () => set({ alert: null }),

  modal: null,

  showModal: ({ title, message, onConfirm = null }) => set({
    modal: { title, message, onConfirm }
  }),

  hideModal: () => set({ modal: null }),

}))

export default useUIStore