import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useRecoveryStore } from '../store/recoveryStore';

export default function RecoveryProtocolList() {
  const { activeProtocol, fetchActiveProtocol, loading } = useRecoveryStore();

  useEffect(() => {
    fetchActiveProtocol();
  }, []);

  const hasActiveProtocol = !!activeProtocol;

  return (
    <div className="p-margin-mobile md:p-margin-desktop max-w-container-max mx-auto w-full">
      
      {loading && <p className="text-on-surface-variant mb-6 text-center">Loading recovery protocols...</p>}

      {!loading && hasActiveProtocol ? (
        <>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
            <div>
              <h2 className="font-display-md text-display-md text-on-background">Recovery Protocol</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mt-1">Active Rehabilitation Phase</p>
            </div>
            <div className="flex space-x-3">
              <button className="px-4 py-2 border border-outline-variant rounded-lg font-label-md text-label-md text-on-surface hover:bg-surface-container transition-colors">
                Protocol History
              </button>
              <Link to="/recovery/generate" className="px-4 py-2 bg-primary text-on-primary rounded-lg font-label-md text-label-md hover:bg-on-primary-fixed-variant transition-colors flex items-center space-x-2">
                <span className="material-symbols-outlined text-[18px]">edit_document</span>
                <span>Adjust Protocol</span>
              </Link>
            </div>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Active Protocol Overview (Spans 8 columns) */}
            <div className="md:col-span-8 bg-surface-container-lowest border border-outline-variant rounded-xl p-6 relative overflow-hidden flex flex-col justify-between">
              {/* Decorative ambient gradient */}
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary-container opacity-20 blur-3xl rounded-full pointer-events-none"></div>
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="px-3 py-1 bg-surface-container-highest text-on-surface rounded-full font-label-md text-label-md mb-3 inline-block">Active Protocol</span>
                    <h3 className="font-headline-lg text-headline-lg text-on-background">{activeProtocol.title}</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant mt-2 max-w-lg">{activeProtocol.description}</p>
                  </div>
                  <div className="flex items-center space-x-2 bg-inverse-on-surface px-4 py-2 rounded-lg border border-outline-variant">
                    <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 0" }}>timeline</span>
                    <div>
                      <p className="font-label-md text-label-md text-on-surface-variant">Current Phase</p>
                      <p className="font-headline-sm text-headline-sm text-on-background">Wk 1 / 4</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Progress Timeline */}
              <div className="mt-8">
                <div className="flex justify-between font-label-md text-label-md text-on-surface-variant mb-2">
                  <span>Session Progress</span>
                  <span className="text-primary font-bold">{activeProtocol.progress}</span>
                </div>
                <div className="w-full h-2 bg-surface-variant rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-1/3 rounded-full relative">
                    <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-r from-transparent to-white opacity-30 animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Daily Status/Readiness (Spans 4 columns) */}
            <div className="md:col-span-4 bg-surface-container-lowest border border-outline-variant rounded-xl p-6 flex flex-col">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-headline-sm text-headline-sm text-on-background">Daily Readiness</h3>
                <button className="text-on-surface-variant hover:text-primary transition-colors">
                  <span className="material-symbols-outlined">more_horiz</span>
                </button>
              </div>
              <div className="flex-grow flex flex-col items-center justify-center">
                {/* Readiness Score Circle */}
                <div className="relative w-32 h-32 flex items-center justify-center mb-4">
                  <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle className="text-surface-variant" cx="50" cy="50" fill="none" r="45" stroke="currentColor" strokeWidth="8"></circle>
                    <circle className="text-primary-container" cx="50" cy="50" fill="none" r="45" stroke="currentColor" strokeDasharray="282.7" strokeDashoffset="56.5" strokeLinecap="round" strokeWidth="8"></circle>
                  </svg>
                  <div className="text-center">
                    <span className="font-display-md text-display-md text-on-background block leading-none">82</span>
                    <span className="font-label-md text-label-md text-on-surface-variant">Optimal</span>
                  </div>
                </div>
                <div className="w-full space-y-3 mt-4">
                  <div className="flex justify-between items-center p-3 bg-surface rounded-lg border border-surface-variant">
                    <div className="flex items-center space-x-3">
                      <span className="material-symbols-outlined text-primary-container">vital_signs</span>
                      <span className="font-mono-data text-mono-data text-on-surface">Inflammation</span>
                    </div>
                    <span className="px-2 py-1 bg-emerald-50 text-emerald-500 rounded font-label-md text-label-md">Low</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Daily Mobility Tasks (Spans 12 columns) */}
            <div className="md:col-span-12 bg-surface-container-lowest border border-outline-variant rounded-xl p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-headline-sm text-headline-sm text-on-background">Today's Protocol Tasks</h3>
                <span className="font-label-md text-label-md text-on-surface-variant">{activeProtocol.steps?.filter(s => !s.completed).length || 0} Tasks Remaining</span>
              </div>
              <div className="space-y-3">
                {activeProtocol.steps?.map((step, idx) => (
                  <label key={idx} className={`flex items-start space-x-4 p-4 rounded-lg border cursor-pointer transition-all ${step.completed ? 'border-outline-variant bg-surface opacity-60' : 'border-primary-container bg-surface-container-lowest shadow-sm hover:shadow-md'}`}>
                    <input type="checkbox" defaultChecked={step.completed} className="mt-1 w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary focus:ring-offset-surface" />
                    <div className="flex-grow">
                      <p className={`font-body-md text-body-md font-medium ${step.completed ? 'text-on-surface line-through decoration-outline' : 'text-on-background'}`}>{step.name}</p>
                    </div>
                    {!step.completed && (
                      <button className="text-on-surface-variant hover:text-primary" title="View Technique">
                        <span className="material-symbols-outlined">play_circle</span>
                      </button>
                    )}
                  </label>
                ))}
              </div>
            </div>

          </div>
        </>
      ) : !loading ? (
        <div className="mt-8 w-full bg-surface-container border border-outline-variant border-dashed rounded-2xl p-12 flex flex-col items-center justify-center text-center">
          <div className="w-16 h-16 bg-surface-variant rounded-full flex items-center justify-center mb-4">
            <span className="material-symbols-outlined text-outline text-3xl">health_and_safety</span>
          </div>
          <h3 className="font-headline-md text-headline-md text-on-background mb-2">No Active Recovery Protocol</h3>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md mb-6">You currently don't have any active rehabilitation programs assigned. Connect with your medical professional to initiate a new protocol.</p>
          <Link to="/recovery/generate" className="px-6 py-3 bg-secondary-container text-on-secondary-fixed rounded-xl font-label-md text-label-md hover:opacity-90 transition-opacity">
            Request Assessment
          </Link>
        </div>
      ) : null}
    </div>
  );
}
