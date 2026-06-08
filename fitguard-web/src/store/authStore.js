import { create } from 'zustand'

const useAuthStore = create((set) => ({

  user: null,
  token: null,
  isAuthenticated: false,

  login: (user, token) => {
    set({ user, token, isAuthenticated: true })
  },

  logout: () => {
    set({ user: null, token: null, isAuthenticated: false })
  },

  register: (user, token) => {
    set({ user, token, isAuthenticated: true })
  },

  updateUser: (updates) => set((state) => ({
    user: { ...state.user, ...updates }
  })),

}))

export default useAuthStore