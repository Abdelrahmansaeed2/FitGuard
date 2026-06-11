import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAthleteStore } from '../store/useAthleteStore';
import { useNotificationStore } from '../store/notificationStore';
import { useAuthStore } from '../store/authStore';
import Sidebar from './Sidebar';
export default function AppLayout({ children }) {
  const { profile } = useAthleteStore();
  const { unreadCount } = useNotificationStore();
  const location = useLocation();
  const logout = useAuthStore((state) => state.logout);

  const isActive = (path) => location.pathname === path || location.pathname.startsWith(`${path}/`);

  return (
    <div className="flex bg-surface min-h-screen font-body-md text-body-md text-on-surface">
      {/* SideNavBar */}
      <Sidebar />

      {/* Main Content Area Wrapper */}
      <div className="ml-[260px] w-[calc(100%-260px)] flex flex-col min-h-screen">
        {/* TopNavBar */}
        <header className="h-[64px] sticky top-0 bg-surface border-b border-outline-variant flex justify-between items-center px-8 z-10">
          <div className="flex items-center bg-surface-container-low rounded-full px-4 py-2 border border-surface-variant focus-within:border-outline transition-colors w-64">
            <span className="material-symbols-outlined text-on-surface-variant text-sm mr-2">search</span>
            <input className="bg-transparent border-none focus:ring-0 text-body-sm font-body-sm w-full placeholder-on-surface-variant text-on-surface outline-none" placeholder="Search athletes, metrics..." type="text" />
          </div>
          <div className="flex items-center space-x-2">
            <Link to="/notifications" className="text-on-surface-variant hover:bg-surface-container-high rounded-full p-2 transition-transform duration-200 hover:scale-105 active:scale-95 flex items-center justify-center relative">
              <span className="material-symbols-outlined text-primary">notifications</span>
              {unreadCount > 0 && (
                <span className="absolute top-1 right-2 w-2 h-2 bg-error rounded-full border border-surface-container-lowest"></span>
              )}
            </Link>
            <Link to="/profile" className="text-on-surface-variant hover:bg-surface-container-high rounded-full p-2 transition-transform duration-200 hover:scale-105 active:scale-95 flex items-center justify-center overflow-hidden">
              <img alt="Athlete Profile Image" className="w-8 h-8 rounded-full object-cover" data-alt="A close-up profile portrait of a focused, athletic man with short dark hair in a modern, brightly lit gymnasium setting. He is wearing high-performance athletic gear. The lighting is crisp and cool, highlighting the texture of the fabric and a light sheen of sweat, conveying intense physical effort and peak performance." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCF0Uu2YajOO33g6fjIKQjK8obJDier1d243ay8PfxRzQVXjlVXPXKKID7AGPKxSDLCLTrOu9e17Bg1RQtuu4dzvkHjG0St2Pm-MOakCHKpfEXoxatwOcGOt7q3Lt6gqsxC9jV6Vuc9FaYPtJWs4n4E9VVXBL8UFYDm2W29-iSWDqXQUbVArOf1FMvffryFX4CQdktkzZRo6G3fBNO0-kokClbN7mTyCUT2Qdsipyg6ezC18zAiIBxvCOieTNQhIrMLLfvUC-3duJs" />
            </Link>
          </div>
        </header>

        {/* Canvas */}
        <main className="flex-grow p-8 bg-surface">
          {children}
        </main>
      </div>
    </div>
  );
}
