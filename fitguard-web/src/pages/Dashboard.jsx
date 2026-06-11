import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useProfileStore } from '../store/profileStore';
import { useChallengeStore } from '../store/challengeStore';
import { useRecoveryStore } from '../store/recoveryStore';
import { useInjuryStore } from '../store/injuryStore';

export default function Dashboard() {
  const { profile, fetchProfile } = useProfileStore();
  const { activeChallenge, fetchActiveChallenge } = useChallengeStore();
  const { activeProtocol, fetchActiveProtocol } = useRecoveryStore();
  const { injuries, fetchInjuries } = useInjuryStore();

  useEffect(() => {
    fetchProfile();
    fetchActiveChallenge();
    fetchActiveProtocol();
    fetchInjuries();
  }, []);

  return (
    <div className="max-w-container-max mx-auto space-y-6">
      {/* Welcome Header */}
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="font-display-md text-display-md text-on-surface mb-2">Welcome back, {profile?.name?.split(' ')[0] || 'Alex'}</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">Here is your daily performance and recovery briefing.</p>
        </div>
        <div className="flex space-x-3 hidden sm:flex">
          <Link to="/injuries/create" className="px-4 py-2 bg-transparent border border-outline-variant text-on-surface font-label-md text-label-md rounded-lg hover:border-outline transition-colors flex items-center space-x-2">
            <span className="material-symbols-outlined text-sm">healing</span>
            <span>Log Injury</span>
          </Link>
          <Link to="/challenges/generate" className="px-4 py-2 bg-secondary text-on-secondary font-label-md text-label-md rounded-lg hover:bg-secondary-container hover:text-on-secondary-container transition-colors shadow-sm flex items-center space-x-2">
            <span className="material-symbols-outlined text-sm">auto_awesome</span>
            <span>Generate Challenge</span>
          </Link>
          <Link to="/recovery/generate" className="px-4 py-2 bg-primary-container text-on-primary-container font-label-md text-label-md rounded-lg hover:bg-primary hover:text-on-primary transition-colors shadow-sm flex items-center space-x-2">
            <span className="material-symbols-outlined text-sm">bolt</span>
            <span>Recovery Protocol</span>
          </Link>
        </div>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* Athlete Summary Card (4 columns) */}
        <div className="md:col-span-4 bg-surface-container-lowest border border-surface-variant hover:border-outline-variant transition-colors rounded-xl p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-headline-sm text-headline-sm text-on-surface">Athlete Status</h2>
              <span className="material-symbols-outlined text-on-surface-variant">more_horiz</span>
            </div>
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-surface-container-high border border-outline-variant overflow-hidden flex-shrink-0">
                <img 
                  alt="Athlete" 
                  className="w-full h-full object-cover" 
                  src={profile?.avatarUrl || "https://lh3.googleusercontent.com/aida-public/AB6AXuCZ6SepZ_tYsVdDL-CYOVFDTSdgbO8ua93VcEraBsC9tMgQk_zMJWktzB9RnAlLw9PY-kzfe7Ks6EWHQIWFPL_H97gYm1bXYDh9ZnLA1B03iLCVclEBSjoOHlWOV04ltoE99bDizZRiC4uUnmQzwHN5kPQryhyhtbTSQ6BXpuBUsNPaMO1bPnYvIljqQziMXx5YNHrg-NbIwk2qdpRWASyA1sEfwXwceywocRXOaR_Zh6UIaEp27OJjMVWt0BmRPx-UwxEu8abhjw0"}
                />
              </div>
              <div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface">{profile?.name || 'Alex Mercer'}</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">{profile?.role || 'Professional Football'}</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-surface-variant">
                <span className="font-body-sm text-body-sm text-on-surface-variant">Current Phase</span>
                <span className="font-label-md text-label-md text-on-surface bg-surface-container-high px-2 py-1 rounded">{profile?.currentPhase || 'In-Season'}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-surface-variant">
                <span className="font-body-sm text-body-sm text-on-surface-variant">Fatigue Index</span>
                <span className="font-mono-data text-mono-data text-on-surface">{profile?.fatigueIndex || 'Moderate'}</span>
              </div>
            </div>
          </div>
          
          <div className="mt-6">
            <div className="flex justify-between items-end mb-2">
              <span className="font-headline-sm text-headline-sm text-on-surface">Recovery Score</span>
              <span className="font-display-md text-display-md text-primary-container leading-none">{profile?.recoveryScore || 85}<span className="text-headline-sm text-on-surface-variant ml-1">%</span></span>
            </div>
            <div className="w-full h-2 bg-surface-variant rounded-full overflow-hidden">
              <div className="h-full bg-primary-container rounded-full" style={{ width: `${profile?.recoveryScore || 85}%` }}></div>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Optimal readiness for high-intensity training.</p>
          </div>
        </div>

        {/* Health Overview Chart (8 columns) */}
        <div className="md:col-span-8 bg-surface-container-lowest border border-surface-variant hover:border-outline-variant transition-colors rounded-xl p-6 relative overflow-hidden">
          <div className="flex justify-between items-center mb-6 relative z-10">
            <div>
              <h2 className="font-headline-sm text-headline-sm text-on-surface">Biometric Trends</h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant">HRV vs. Sleep Quality (Last 7 Days)</p>
            </div>
            <div className="flex space-x-2">
              <span className="flex items-center text-body-sm font-body-sm text-on-surface-variant"><span className="w-2 h-2 rounded-full bg-secondary mr-2"></span>HRV</span>
              <span className="flex items-center text-body-sm font-body-sm text-on-surface-variant"><span className="w-2 h-2 rounded-full bg-primary-container mr-2"></span>Sleep</span>
            </div>
          </div>
          
          {/* Chart Bars/Lines Simulation */}
          <div className="h-[240px] w-full flex items-end justify-between space-x-2 relative z-10 pb-6 border-b border-surface-variant">
            <div className="w-full flex justify-between items-end h-full px-4">
              <div className="flex flex-col items-center space-y-2"><div className="w-4 h-16 bg-primary-container/80 rounded-t-sm"></div><span className="font-mono-data text-[10px] text-on-surface-variant">Mon</span></div>
              <div className="flex flex-col items-center space-y-2"><div className="w-4 h-24 bg-primary-container/80 rounded-t-sm"></div><span className="font-mono-data text-[10px] text-on-surface-variant">Tue</span></div>
              <div className="flex flex-col items-center space-y-2"><div className="w-4 h-20 bg-primary-container/80 rounded-t-sm"></div><span className="font-mono-data text-[10px] text-on-surface-variant">Wed</span></div>
              <div className="flex flex-col items-center space-y-2 relative group">
                <div className="absolute -top-10 bg-on-background text-surface px-2 py-1 rounded text-[10px] font-mono-data opacity-0 group-hover:opacity-100 transition-opacity">Score: 68</div>
                <div className="w-4 h-32 bg-secondary/80 rounded-t-sm"></div><span className="font-mono-data text-[10px] text-on-surface-variant">Thu</span>
              </div>
              <div className="flex flex-col items-center space-y-2"><div className="w-4 h-28 bg-primary-container/80 rounded-t-sm"></div><span className="font-mono-data text-[10px] text-on-surface-variant">Fri</span></div>
              <div className="flex flex-col items-center space-y-2"><div className="w-4 h-40 bg-primary-container/80 rounded-t-sm"></div><span className="font-mono-data text-[10px] text-on-surface-variant">Sat</span></div>
              <div className="flex flex-col items-center space-y-2"><div className="w-4 h-36 bg-primary-container rounded-t-sm"></div><span className="font-mono-data text-[10px] text-on-surface-variant">Sun</span></div>
            </div>
            
            {/* Background grid lines */}
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none pb-6">
              <div className="w-full border-t border-surface-variant border-dashed"></div>
              <div className="w-full border-t border-surface-variant border-dashed"></div>
              <div className="w-full border-t border-surface-variant border-dashed"></div>
              <div className="w-full border-t border-surface-variant border-dashed"></div>
            </div>
          </div>
        </div>

        {/* Active Challenge Card (4 columns) */}
        <div className="md:col-span-4 bg-surface-container-lowest border border-surface-variant hover:border-outline-variant transition-colors rounded-xl p-6 border-t-4 border-t-secondary">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-secondary/10 rounded-lg text-secondary">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>directions_run</span>
            </div>
            <span className="px-2 py-1 bg-secondary/10 text-secondary font-label-md text-label-md rounded">Active AI Insight</span>
          </div>
          <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">{activeChallenge?.title || 'Sprint Load Optimization'}</h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant mb-6">{activeChallenge?.description || 'Reduce max velocity sprints by 15% today to mitigate identified hamstring tension risk.'}</p>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="font-body-sm text-body-sm text-on-surface">Target Velocity</span>
              <span className="font-mono-data text-mono-data text-secondary">{activeChallenge?.targetVelocity || '< 8.5 m/s'}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-body-sm text-body-sm text-on-surface">Volume Limit</span>
              <span className="font-mono-data text-mono-data text-secondary">{activeChallenge?.volumeLimit || '1200m'}</span>
            </div>
          </div>
          <Link to="/challenges/active" className="block w-full mt-6 py-2 bg-surface-container hover:bg-surface-variant text-on-surface font-label-md text-label-md rounded-lg transition-colors text-center">
            View Protocol Details
          </Link>
        </div>

        {/* Active Recovery Protocol (4 columns) */}
        <div className="md:col-span-4 bg-surface-container-lowest border border-surface-variant hover:border-outline-variant transition-colors rounded-xl p-6 border-t-4 border-t-primary-container">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-primary-container/10 rounded-lg text-primary-container">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>spa</span>
            </div>
            <span className="px-2 py-1 bg-primary-container/10 text-primary-container font-label-md text-label-md rounded">In Progress</span>
          </div>
          <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">{activeProtocol?.title || 'Cryotherapy & Compression'}</h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant mb-4">{activeProtocol?.description || 'Post-match lower body protocol.'}</p>
          
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-body-sm font-body-sm mb-1">
                <span className="text-on-surface">Session Progress</span>
                <span className="text-on-surface-variant font-mono-data">{activeProtocol?.progress || '25/45'} min</span>
              </div>
              <div className="w-full h-1.5 bg-surface-variant rounded-full overflow-hidden">
                <div className="h-full bg-primary-container rounded-full" style={{ width: `${activeProtocol?.progressPercentage || 55}%` }}></div>
              </div>
            </div>
            
            <ul className="space-y-2 mt-4 border-t border-surface-variant pt-4">
              {(activeProtocol?.steps || [
                { id: 1, title: 'Ice Bath (10 min)', completed: true },
                { id: 2, title: 'Pneumatic Compression (30 min)', completed: false },
                { id: 3, title: 'Mobility Flow (5 min)', completed: false }
              ]).map((step) => (
                <li key={step.id} className={`flex items-center space-x-2 text-body-sm ${step.completed ? 'text-on-surface-variant' : 'text-on-surface'}`}>
                  <span className={`material-symbols-outlined text-sm ${step.completed ? 'text-primary-container' : 'text-surface-variant'}`}>
                    {step.completed ? 'check_circle' : 'radio_button_unchecked'}
                  </span>
                  <span>{step.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Recent Injuries (4 columns) */}
        <div className="md:col-span-4 bg-surface-container-lowest border border-surface-variant hover:border-outline-variant transition-colors rounded-xl p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-headline-sm text-headline-sm text-on-surface">Clinical Alerts</h2>
            <Link to="/injuries" className="text-on-surface-variant hover:text-on-surface transition-colors">
              <span className="material-symbols-outlined text-sm">open_in_new</span>
            </Link>
          </div>
          <div className="space-y-4">
            {(injuries.length > 0 ? injuries.slice(0, 2).map(i => ({
              id: i.id,
              title: `${i.muscleGroup} ${i.injuryType}`,
              desc: i.description || i.notes || '',
              type: i.severity === 'High' || i.severity === 'severe' ? 'error' : 'info',
              status: i.severity
            })) : [
              { id: '1', title: 'R. Hamstring Microtear', desc: 'Reported 2 days ago. Load management enforced.', type: 'error', status: 'High Risk' },
              { id: '2', title: 'L. Ankle Sprain (Grade 1)', desc: 'Cleared for play. Continuing preventative taping.', type: 'info', status: 'Resolved - 3 weeks ago' }
            ]).map((injury, idx) => (
              <div key={injury.id || idx} className={`p-3 rounded-lg flex items-start space-x-3 ${injury.type === 'error' ? 'bg-error-container/10 border border-error-container/30' : 'bg-surface-container'}`}>
                <span className={`material-symbols-outlined mt-0.5 ${injury.type === 'error' ? 'text-error' : 'text-on-surface-variant'}`}>
                  {injury.type === 'error' ? 'warning' : 'info'}
                </span>
                <div>
                  <h4 className={`font-label-md text-label-md mb-1 ${injury.type === 'error' ? 'text-error' : 'text-on-surface'}`}>{injury.title}</h4>
                  <p className="font-body-sm text-[11px] text-on-surface-variant">{injury.desc}</p>
                  {injury.type !== 'error' && injury.status && (
                    <span className="inline-block mt-2 font-mono-data text-[10px] bg-surface-variant text-on-surface-variant px-1.5 py-0.5 rounded">{injury.status}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
