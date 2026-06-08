// src/components/Navbar.jsx
import { useNavigate } from 'react-router-dom'
import useUIStore from '../store/uiStore'
import useAuthStore from '../store/authStore'

export default function Navbar() {
  const { unreadCount } = useUIStore()
  const { isAuthenticated, user, logout } = useAuthStore()
  const { showToast } = useUIStore()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    showToast({ message: 'Logged out successfully', type: 'info' })
    navigate('/login')
  }

  return (
    <header className="sticky top-0 z-50 flex justify-between items-center w-full px-container-padding py-4 max-w-7xl mx-auto bg-surface border-b border-outline-variant">
      <div className="font-headline-lg text-headline-lg font-bold text-primary">FitGuard</div>

      {isAuthenticated && (
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate('/notifications')}
            className="relative p-2 text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
            {unreadCount() > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 bg-violet-600 text-white
                text-xs rounded-full flex items-center justify-center">
                {unreadCount()}
              </span>
            )}
          </button>

          <button className="p-2 text-on-surface-variant hover:text-primary transition-colors cursor-pointer">
            <span className="material-symbols-outlined" data-icon="settings">settings</span>
          </button>

          <div className="relative group ml-2">
            <div className="w-10 h-10 rounded-full bg-surface-variant overflow-hidden border border-outline-variant cursor-pointer">
              {user?.avatar ? (
                <img
                  alt={`${user.name} profile picture`}
                  className="w-full h-full object-cover"
                  src={user.avatar}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center
                  bg-emerald-50 text-emerald-600 font-medium text-sm">
                  {user?.name?.charAt(0).toUpperCase()}
                </div>
              )}
            </div>

            {/* Dropdown */}
            <div className="absolute right-0 top-12 w-40 bg-white border border-slate-200
              rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100
              group-hover:visible transition-all z-50">
              <div className="px-4 py-3 border-b border-slate-100">
                <p className="text-sm font-medium text-slate-800 truncate">{user?.name}</p>
                <p className="text-xs text-slate-400 truncate">{user?.email}</p>
              </div>
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2.5 text-sm text-rose-500
                  hover:bg-rose-50 transition-colors rounded-b-xl"
              >
                Sign out
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}