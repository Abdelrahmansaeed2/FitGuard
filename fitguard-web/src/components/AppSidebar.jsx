import { NavLink } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';

export default function AppSidebar() {
  const logout = useAuthStore((state) => state.logout);

  const getNavLinkClass = ({ isActive }) =>
    `flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-100 ${
      isActive
        ? 'bg-primary-container text-on-primary-container scale-95 origin-left'
        : 'text-on-surface-variant hover:bg-surface-container-highest'
    }`;

  return (
    <nav className="w-[260px] h-full fixed left-0 top-0 bg-surface-container hidden md:flex flex-col p-4 space-y-2 z-20">
      <div className="mb-8 px-4 flex items-center space-x-3 mt-4">
        <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
          health_and_safety
        </span>
        <div className="flex flex-col">
          <span className="font-headline-sm text-headline-sm font-black text-primary">FitGuard Pro</span>
          <span className="font-label-md text-label-md text-on-surface-variant">Elite Performance</span>
        </div>
      </div>
      
      <div className="flex-grow space-y-1 overflow-y-auto">
        <NavLink to="/dashboard" className={getNavLinkClass}>
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>dashboard</span>
          <span className="font-label-md text-label-md">Dashboard</span>
        </NavLink>
        <NavLink to="/injuries" className={getNavLinkClass}>
          <span className="material-symbols-outlined">monitor_heart</span>
          <span className="font-label-md text-label-md">Injuries</span>
        </NavLink>
        <NavLink to="/recovery" className={getNavLinkClass}>
          <span className="material-symbols-outlined">rebase_edit</span>
          <span className="font-label-md text-label-md">Recovery Plan</span>
        </NavLink>
        <NavLink to="/challenges" className={getNavLinkClass}>
          <span className="material-symbols-outlined">analytics</span>
          <span className="font-label-md text-label-md">Challenges</span>
        </NavLink>
        <NavLink to="/settings" className={getNavLinkClass}>
          <span className="material-symbols-outlined">settings</span>
          <span className="font-label-md text-label-md">Settings</span>
        </NavLink>
      </div>
      
      <button className="w-full mt-4 py-3 px-4 bg-primary text-on-primary font-label-md text-label-md rounded-lg hover:bg-surface-tint transition-colors shadow-sm flex items-center justify-center space-x-2">
        <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>add</span>
        <span>New Analysis</span>
      </button>
      
      <div className="mt-auto pt-4 border-t border-surface-container-low space-y-1">
        <button className="w-full flex items-center space-x-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-highest transition-colors rounded-xl">
          <span className="material-symbols-outlined">help</span>
          <span className="font-label-md text-label-md">Support</span>
        </button>
        <button onClick={logout} className="w-full flex items-center space-x-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-highest transition-colors rounded-xl">
          <span className="material-symbols-outlined">logout</span>
          <span className="font-label-md text-label-md">Logout</span>
        </button>
      </div>
    </nav>
  );
}
