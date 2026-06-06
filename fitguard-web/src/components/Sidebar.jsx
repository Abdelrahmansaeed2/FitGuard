import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAthleteStore } from '../store/useAthleteStore';

export default function Sidebar() {
  const { profile } = useAthleteStore();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="hidden md:flex flex-col fixed left-0 top-0 h-screen p-stack-gap border-r border-outline-variant bg-surface-container-low shadow-sm docked left-0 h-full w-64 pt-24 z-40">
      <div className="flex flex-col items-center mb-8 pb-6 border-b border-outline-variant w-full">
        <div className="w-20 h-20 rounded-full bg-surface-variant mb-4 overflow-hidden border-2 border-primary">
          <img alt="Abd Elrahman Saeed" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBygUACEKSrCclslEBRcMtygxvoUhlRFozmFalbi37r2Y3zF4-xQk6VT5HXbrLkalb6oW1FbfoAvYdMyJc3XwlibHl78Adi-pTHOQrs2adSO_Yz9hXTTyJYpASh3edqX8YqtfODY5MuYUTf-F0COthGW7EuTZ8W5cQj04QqMftxvzp5M7a7tk4bU6GGGcfWs7yrOv7w6P3sGj4812UJvjzLS_XsZWbdnp6N3LI1-957yd-WsnXaQi4JfUCir5tiJ2F0mNp9DdXwA97r"/>
        </div>
        <h3 className="font-headline-md text-headline-md text-on-surface text-center mb-1">{profile.name}</h3>
        <p className="font-body-md text-body-md text-on-surface-variant text-center mb-3">{profile.role}</p>
        <span className="px-3 py-1 bg-primary-container text-on-primary-container font-label-sm text-label-sm rounded-full">{profile.level} Level</span>
      </div>
      
      <ul className="flex flex-col gap-2 w-full">
        <li>
          <Link 
            className={`flex items-center gap-3 p-3 rounded-lg font-label-md text-label-md transition-all ${
              isActive('/') 
                ? 'bg-primary-container text-on-primary-container font-bold scale-95' 
                : 'text-on-surface-variant hover:bg-surface-variant'
            }`} 
            to="/"
          >
            <span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link 
            className={`flex items-center gap-3 p-3 rounded-lg font-label-md text-label-md transition-all ${
              isActive('/profile') || isActive('/athlete-dashboard')
                ? 'bg-primary-container text-on-primary-container font-bold scale-95' 
                : 'text-on-surface-variant hover:bg-surface-variant'
            }`} 
            to="/profile"
          >
            <span className="material-symbols-outlined" data-icon="healing" style={{fontVariationSettings: "'FILL' 1"}}>healing</span>
            <span>Injury Logs</span>
          </Link>
        </li>
        <li>
          <Link 
            className={`flex items-center gap-3 p-3 rounded-lg font-label-md text-label-md transition-all ${
              isActive('/recovery') 
                ? 'bg-primary-container text-on-primary-container font-bold scale-95' 
                : 'text-on-surface-variant hover:bg-surface-variant'
            }`} 
            to="/recovery"
          >
            <span className="material-symbols-outlined" data-icon="monitoring">monitoring</span>
            <span>Health Metrics</span>
          </Link>
        </li>
        <li>
          <Link 
            className={`flex items-center gap-3 p-3 rounded-lg font-label-md text-label-md transition-all ${
              isActive('/challenges') 
                ? 'bg-primary-container text-on-primary-container font-bold scale-95' 
                : 'text-on-surface-variant hover:bg-surface-variant'
            }`} 
            to="/challenges"
          >
            <span className="material-symbols-outlined" data-icon="psychology">psychology</span>
            <span>AI Predictions</span>
          </Link>
        </li>
        <li className="mt-auto">
          <Link 
            className="flex items-center gap-3 p-3 rounded-lg text-on-surface-variant hover:bg-surface-variant transition-all font-label-md text-label-md" 
            to="/profile"
          >
            <span className="material-symbols-outlined" data-icon="settings">settings</span>
            <span>Settings</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
