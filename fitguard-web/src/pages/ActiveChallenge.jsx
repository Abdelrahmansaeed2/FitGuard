import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ActiveChallenge() {
  const [view, setView] = useState('dashboard'); // 'dashboard' | 'tasks'

  const renderDays = () => {
    const days = [];
    for (let i = 1; i <= 30; i++) {
      let statusClass = "";
      let icon = null;
      if (i < 14) {
        // Completed
        statusClass = "bg-primary-container text-on-primary-container border-transparent";
        icon = <span className="material-symbols-outlined text-[16px] opacity-50">check</span>;
      } else if (i === 14) {
        // Today
        statusClass = "bg-secondary-fixed text-on-secondary-fixed border-secondary shadow-sm ring-2 ring-secondary ring-offset-2 ring-offset-surface-container-lowest";
        icon = <span className="font-mono-data text-mono-data font-bold">{i}</span>;
      } else {
        // Locked
        statusClass = "bg-surface-container text-outline border-outline-variant opacity-50";
        icon = <span className="material-symbols-outlined text-[16px]">lock</span>;
      }
      days.push(
        <div key={i} className={`aspect-square rounded-lg border flex flex-col items-center justify-center relative group cursor-default transition-transform hover:scale-105 ${statusClass}`}>
          <span className="absolute top-1 left-1.5 text-[10px] font-bold opacity-40">{i < 14 ? i : ''}</span>
          {icon}
        </div>
      );
    }
    return days;
  };

  const [tasks, setTasks] = useState([
    { id: 1, title: '5km Tempo Run', desc: 'Zone 3 focused pacing. 4:30/km target.', icon: 'directions_run', completed: true },
    { id: 2, title: '15min Mobility Flow', desc: 'Dynamic stretching for hips and hamstrings.', icon: 'self_improvement', completed: true },
    { id: 3, title: 'Evening Cold Exposure', desc: '3 minutes at 10°C. Focus on breath control.', icon: 'ac_unit', completed: false },
  ]);

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const completedCount = tasks.filter(t => t.completed).length;

  return (
    <div className="p-margin-mobile md:p-margin-desktop bg-surface-bright min-h-[calc(100vh-64px)] overflow-y-auto">
      
      {view === 'dashboard' ? (
        <div className="max-w-container-max mx-auto space-y-8">
          {/* Header Section */}
          <div className="flex justify-between items-end mb-8">
            <div>
              <p className="font-label-md text-label-md text-secondary uppercase tracking-widest mb-1">AI Program Active</p>
              <h2 className="font-display-md text-display-md text-on-surface">30-Day Resilience Challenge</h2>
            </div>
            <Link to="/challenges/1" className="px-6 py-2 border border-outline-variant text-on-surface font-label-md text-label-md rounded-full hover:bg-surface-container-low transition-colors">
              View Guidelines
            </Link>
          </div>

          {/* Dashboard Grid (Bento Style) */}
          <div className="grid grid-cols-12 gap-6">
            
            {/* Progress Overview Card (Spans 8 cols) */}
            <div className="col-span-12 lg:col-span-8 bg-surface-container-lowest border border-outline-variant rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8 shadow-sm">
              {/* Circular Progress */}
              <div className="relative w-48 h-48 flex-shrink-0">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                  {/* Background Circle */}
                  <path className="text-surface-container-highest stroke-current" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" strokeWidth="3"></path>
                  {/* Progress Circle - Note: adding style inline since keyframes are not in module */}
                  <path className="text-secondary-container stroke-current" style={{ strokeDasharray: '45, 100', transition: 'stroke-dasharray 1.5s ease-out' }} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" strokeLinecap="round" strokeWidth="3"></path>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="font-display-md text-display-md text-on-surface">14</span>
                  <span className="font-label-md text-label-md text-on-surface-variant">/ 30 Days</span>
                </div>
              </div>
              
              {/* Stats & Streak */}
              <div className="flex-1 space-y-6">
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">Phase 2: Adaptation</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">You are maintaining a strong recovery baseline. Biometric strain is optimal for current workload.</p>
                </div>
                <div className="flex gap-4">
                  <div className="bg-surface p-4 rounded-xl border border-outline-variant flex-1 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-tertiary-container/20 flex items-center justify-center text-tertiary">
                      <span className="material-symbols-outlined">local_fire_department</span>
                    </div>
                    <div>
                      <p className="font-label-md text-label-md text-on-surface-variant">Current Streak</p>
                      <p className="font-headline-md text-headline-md text-on-surface">13 Days</p>
                    </div>
                  </div>
                  <div className="bg-surface p-4 rounded-xl border border-outline-variant flex-1 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary-container/20 flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined">task_alt</span>
                    </div>
                    <div>
                      <p className="font-label-md text-label-md text-on-surface-variant">Completion Rate</p>
                      <p className="font-headline-md text-headline-md text-on-surface">100%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Today's Task Card (Spans 4 cols) */}
            <div className="col-span-12 lg:col-span-4 bg-secondary-fixed text-on-secondary-fixed rounded-2xl p-6 flex flex-col shadow-sm border border-secondary-fixed-dim">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="inline-block px-3 py-1 bg-on-secondary-fixed text-secondary-fixed font-label-md text-label-md rounded-full mb-3">Day 14</span>
                  <h3 className="font-headline-md text-headline-md mb-1">Active Mobility Flow</h3>
                  <p className="font-body-sm text-body-sm opacity-80">Focus on thoracic spine and hips.</p>
                </div>
                <span className="material-symbols-outlined text-[32px] opacity-50">self_improvement</span>
              </div>
              <div className="mt-auto space-y-4">
                <div className="flex items-center gap-3 text-sm">
                  <span className="material-symbols-outlined text-[20px]">schedule</span>
                  <span className="font-mono-data text-mono-data">25 Minutes</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <span className="material-symbols-outlined text-[20px]">vital_signs</span>
                  <span className="font-mono-data text-mono-data">Low Intensity</span>
                </div>
                <button onClick={() => setView('tasks')} className="flex items-center justify-center w-full mt-4 py-3 bg-secondary text-on-secondary font-label-md text-label-md rounded-lg hover:opacity-90 transition-opacity">
                  Start Session
                </button>
              </div>
            </div>

            {/* 30-Day Grid (Spans 12 cols) */}
            <div className="col-span-12 bg-surface-container-lowest border border-outline-variant rounded-2xl p-8 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-headline-sm text-headline-sm text-on-surface">Journey Map</h3>
                <div className="flex gap-4 font-label-md text-label-md text-on-surface-variant">
                  <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-sm bg-primary"></div> Completed</div>
                  <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-sm bg-secondary-container"></div> Today</div>
                  <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-sm bg-surface-container-highest"></div> Locked</div>
                </div>
              </div>
              {/* Grid */}
              <div className="grid grid-cols-5 md:grid-cols-10 gap-3">
                {renderDays()}
              </div>
            </div>

          </div>
        </div>
      ) : (
        <div className="max-w-container-max mx-auto space-y-8">
          {/* Page Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <button onClick={() => setView('dashboard')} className="flex items-center text-secondary hover:underline font-label-md text-label-md mb-2">
                <span className="material-symbols-outlined text-[16px] mr-1">arrow_back</span>
                Back to Dashboard
              </button>
              <h1 className="font-display-md text-display-md text-on-surface">Daily Challenge</h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mt-1">Day 14 of 30: Foundation Phase</p>
            </div>
            <div className="flex items-center space-x-3 bg-secondary-container bg-opacity-10 px-4 py-2 rounded-full border border-secondary-container/20">
              <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>local_fire_department</span>
              <span className="font-mono-data text-mono-data text-secondary">14 Day Streak</span>
            </div>
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
            
            {/* Left Column: Tasks */}
            <div className="lg:col-span-8 space-y-6">
              {/* Today's Tasks Card */}
              <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 shadow-sm">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-headline-md text-headline-md text-on-surface">Today's Protocol</h3>
                  <span className="bg-primary-container text-on-primary-container font-label-md text-label-md px-3 py-1 rounded-full">{completedCount}/{tasks.length} Completed</span>
                </div>
                
                <div className="space-y-4">
                  {tasks.map(task => (
                    <div 
                      key={task.id} 
                      className={`flex items-center p-4 border rounded-lg transition-all ${task.completed ? 'bg-surface-container-low border-outline-variant' : 'bg-surface-container-lowest border-outline-variant hover:border-outline group'}`}
                    >
                      <div className="relative flex items-center justify-center mr-4">
                        <input 
                          type="checkbox" 
                          checked={task.completed}
                          onChange={() => toggleTask(task.id)}
                          className="w-6 h-6 border-outline text-primary rounded-sm focus:ring-primary focus:ring-opacity-50 cursor-pointer" 
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className={`font-headline-sm text-headline-sm text-on-surface ${task.completed ? 'line-through text-opacity-60' : ''}`}>{task.title}</h4>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">{task.desc}</p>
                      </div>
                      <span className={`material-symbols-outlined ${task.completed ? 'text-outline-variant' : 'text-secondary group-hover:scale-110 transition-transform'}`}>
                        {task.icon}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-outline-variant">
                  <button 
                    onClick={() => setView('dashboard')}
                    className="w-full bg-primary hover:bg-surface-tint text-on-primary font-headline-sm text-headline-sm py-4 rounded-lg transition-colors flex items-center justify-center space-x-2 disabled:opacity-50"
                    disabled={completedCount !== tasks.length}
                  >
                    <span className="material-symbols-outlined">check_circle</span>
                    <span>Complete Day</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Stats & Badges */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Daily Progress Ring Card */}
              <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 shadow-sm flex flex-col items-center justify-center">
                <h3 className="font-headline-sm text-headline-sm text-on-surface w-full text-left mb-4">Readiness Impact</h3>
                <div className="relative w-48 h-48 flex items-center justify-center">
                  {/* SVG Progress Ring */}
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle className="text-surface-container-high stroke-current" cx="50" cy="50" fill="transparent" r="40" strokeWidth="8"></circle>
                    <circle 
                      className="text-secondary stroke-current" 
                      cx="50" 
                      cy="50" 
                      fill="transparent" 
                      r="40" 
                      strokeDasharray="251.2" 
                      strokeDashoffset={251.2 - (251.2 * (completedCount / tasks.length))} 
                      strokeLinecap="round" 
                      strokeWidth="8"
                      style={{ transition: 'stroke-dashoffset 0.35s' }}
                    ></circle>
                  </svg>
                  <div className="absolute flex flex-col items-center justify-center">
                    <span className="font-display-md text-display-md text-on-surface">{Math.round((completedCount / tasks.length) * 100)}%</span>
                    <span className="font-label-md text-label-md text-on-surface-variant">Completed</span>
                  </div>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-4 text-center">Completing today's protocol will boost your readiness score by an estimated +4 points.</p>
              </div>

              {/* Achievements Card */}
              <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 shadow-sm">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">Current Badges</h3>
                  <a className="font-label-md text-label-md text-primary hover:underline" href="#">View All</a>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-surface-container flex flex-col items-center p-4 rounded-lg border border-outline-variant">
                    <span className="material-symbols-outlined text-4xl text-secondary mb-2" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
                    <span className="font-label-md text-label-md text-on-surface text-center">7 Day Warrior</span>
                  </div>
                  <div className="bg-surface-container flex flex-col items-center p-4 rounded-lg border border-outline-variant opacity-50 grayscale">
                    <span className="material-symbols-outlined text-4xl text-outline mb-2">military_tech</span>
                    <span className="font-label-md text-label-md text-on-surface text-center">21 Day Elite</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
}
