import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { Link, useLocation } from 'react-router-dom';

export default function Layout({ children }) {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <div className="text-on-background bg-surface-container-low antialiased pb-24 md:pb-0 min-h-screen">
      <Navbar />
      <div className="flex max-w-7xl mx-auto relative">
        <Sidebar />
        <main className="w-full md:ml-64 p-container-padding min-h-screen">
          {children}
        </main>
      </div>

      {/* BottomNavBar for Mobile */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 py-3 pb-safe bg-surface shadow-lg rounded-t-xl border-t-0">
        <Link 
          className={`flex flex-col items-center justify-center px-4 py-1 transition-all ${
            isActive('/') ? 'bg-secondary-container text-on-secondary-container rounded-full scale-90' : 'text-on-surface-variant'
          }`} 
          to="/"
        >
          <span className="material-symbols-outlined" data-icon="home">home</span>
          <span className="font-label-sm text-label-sm mt-1">Home</span>
        </Link>
        <Link 
          className={`flex flex-col items-center justify-center px-4 py-1 transition-all ${
            isActive('/profile') || isActive('/athlete-dashboard') ? 'bg-secondary-container text-on-secondary-container rounded-full scale-90' : 'text-on-surface-variant'
          }`} 
          to="/profile"
        >
          <span className="material-symbols-outlined" data-icon="edit_note" style={{fontVariationSettings: "'FILL' 1"}}>edit_note</span>
          <span className="font-label-sm text-label-sm mt-1">Logs</span>
        </Link>
        <Link 
          className={`flex flex-col items-center justify-center px-4 py-1 transition-all ${
            isActive('/recovery') ? 'bg-secondary-container text-on-secondary-container rounded-full scale-90' : 'text-on-surface-variant'
          }`} 
          to="/recovery"
        >
          <span className="material-symbols-outlined" data-icon="query_stats">query_stats</span>
          <span className="font-label-sm text-label-sm mt-1">Analysis</span>
        </Link>
        <Link 
          className={`flex flex-col items-center justify-center px-4 py-1 transition-all ${
            isActive('/profile') ? 'bg-secondary-container text-on-secondary-container rounded-full scale-90' : 'text-on-surface-variant'
          }`} 
          to="/profile"
        >
          <span className="material-symbols-outlined" data-icon="person">person</span>
          <span className="font-label-sm text-label-sm mt-1">Profile</span>
        </Link>
      </nav>
    </div>
  );
}
