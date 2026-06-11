import React, { useState, useEffect } from 'react';
import { useAthleteStore } from '../store/useAthleteStore';
import { useProfileStore } from '../store/profileStore';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function AthleteProfileDashboard() {
  const { profile, fetchProfile } = useProfileStore();
  const { injuries, addInjury } = useAthleteStore();
  const [formData, setFormData] = useState({ muscle: '', severity: 'low' });

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.muscle) return;
    
    addInjury({ 
      muscle: formData.muscle, 
      severity: formData.severity.charAt(0).toUpperCase() + formData.severity.slice(1),
      date: new Date().toISOString().split('T')[0], // Save as YYYY-MM-DD
      status: 'Active' 
    });
    setFormData({ muscle: '', severity: 'low' });
  };

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return dateStr;
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  // Process data for the Recharts BarChart
  const dataMap = injuries.reduce((acc, curr) => {
    acc[curr.muscle] = (acc[curr.muscle] || 0) + 1;
    return acc;
  }, {});
  const chartData = Object.keys(dataMap).map(key => ({ name: key, count: dataMap[key] }));

  return (
    <div className="max-w-5xl mx-auto space-y-section-gap">
      {/* Profile Header */}
      <section className="bg-surface rounded-xl shadow-sm p-6 flex flex-col md:flex-row items-center md:items-start gap-6 border border-outline-variant/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-surface shadow-sm shrink-0 z-10">
          <img alt="Athlete portrait focusing on athletic build" className="w-full h-full object-cover" data-alt="A striking portrait of a male athlete in modern athletic wear, looking determined. Bright, clear high-key lighting creates a modern sports tech aesthetic. The background is a very subtle, clean slate color. The image feels professional, focused, and high-performance, fitting for a premium health tracking dashboard." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAn4_Zhjtw9IEjY4eyUjLrdqtbthFzYKsNdqR-zD4hlsBQmWG-Zz3S6mWsV01EhiN-dLaDNr_xO0i091s1ySiO6wSBEitMMAcaR7Bnmtvly5vf-UlZUPItAsi4TK5Xtn5U-COV5e-FXtxwM6-yQBqWCmhp8VPWTPn95WpGt2C8zv92COhbDrZiHWLQfNZaz2G_fLioRCO38fYcYZoIuo4Q9nzwYC8z4E3uZi21zAsWwRFqL8IcYhIABhM4EiFc2AwNUIQqdRUrUr-HD"/>
        </div>
        <div className="text-center md:text-left z-10 flex-1">
          <div className="flex flex-col md:flex-row md:items-center gap-3 mb-2">
            <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">{profile.name}</h1>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 font-label-sm text-label-sm border border-emerald-100 self-center md:self-auto">
              <span className="material-symbols-outlined text-[16px] mr-1" data-icon="verified" style={{fontVariationSettings: "'FILL' 1"}}>verified</span>
              {profile.level} Level
            </span>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant flex items-center justify-center md:justify-start gap-2">
            <span className="material-symbols-outlined text-[18px]" data-icon="work">work</span> {profile.role}
            <span className="w-1 h-1 rounded-full bg-outline-variant mx-1"></span>
            <span className="material-symbols-outlined text-[18px]" data-icon="sports_soccer">sports_soccer</span> Athlete • {profile.primarySport}
          </p>
        </div>
      </section>

      {/* Grid Layout for Dashboard Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-stack-gap">
        {/* Left Column: Action & History */}
        <div className="space-y-stack-gap flex flex-col">
          {/* Log New Injury */}
          <div className="bg-surface rounded-xl shadow-sm p-6 border border-outline-variant/30 flex-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-error-container text-on-error-container flex items-center justify-center">
                <span className="material-symbols-outlined" data-icon="warning">warning</span>
              </div>
              <h2 className="font-headline-md text-headline-md text-on-surface">Log New Injury</h2>
            </div>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block font-label-md text-label-md text-on-surface-variant mb-1" htmlFor="muscle">Affected Muscle</label>
                <input 
                  className="w-full rounded-lg border-outline-variant bg-surface px-4 py-2 font-body-md text-body-md focus:border-primary focus:ring-1 focus:ring-primary transition-colors outline-none" 
                  id="muscle" 
                  placeholder="e.g. Right Hamstring" 
                  type="text"
                  value={formData.muscle}
                  onChange={(e) => setFormData({ ...formData, muscle: e.target.value })}
                />
              </div>
              <div>
                <label className="block font-label-md text-label-md text-on-surface-variant mb-1" htmlFor="severity">Severity</label>
                <select 
                  className="w-full rounded-lg border-outline-variant bg-surface px-4 py-2 font-body-md text-body-md focus:border-primary focus:ring-1 focus:ring-primary transition-colors outline-none appearance-none cursor-pointer" 
                  id="severity"
                  value={formData.severity}
                  onChange={(e) => setFormData({ ...formData, severity: e.target.value })}
                >
                  <option value="low">Low (Minor discomfort)</option>
                  <option value="medium">Medium (Requires rest)</option>
                  <option value="high">High (Needs medical attention)</option>
                </select>
              </div>
              <button 
                className="w-full mt-4 bg-tertiary text-on-tertiary rounded-lg py-3 font-label-md text-label-md hover:bg-tertiary/90 transition-colors flex items-center justify-center gap-2 cursor-pointer" 
                type="submit"
              >
                <span className="material-symbols-outlined" data-icon="save">save</span>
                Save Record
              </button>
            </form>
          </div>

          {/* Injury History Timeline */}
          <div className="bg-surface rounded-xl shadow-sm p-6 border border-outline-variant/30">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary" data-icon="history">history</span>
              Injury History
            </h2>
            <div className="relative pl-4 space-y-6 before:absolute before:inset-y-0 before:left-[11px] before:w-0.5 before:bg-surface-variant">
              {injuries.map((inj) => {
                const isHigh = inj.severity.toLowerCase() === 'high';
                const isMedium = inj.severity.toLowerCase() === 'medium';
                
                let dotColor = 'bg-emerald-400 shadow-[0_0_0_4px_rgba(52,211,153,0.1)]';
                let labelClass = 'bg-emerald-100 text-emerald-800';
                
                if (isHigh) {
                  dotColor = 'bg-tertiary shadow-[0_0_0_4px_rgba(188,11,59,0.1)]';
                  labelClass = 'bg-tertiary-fixed text-on-tertiary-fixed-variant';
                } else if (isMedium) {
                  dotColor = 'bg-orange-400 shadow-[0_0_0_4px_rgba(251,146,60,0.1)]';
                  labelClass = 'bg-orange-100 text-orange-800';
                }

                return (
                  <div key={inj.id} className="relative">
                    <div className={`absolute -left-4 w-3 h-3 rounded-full ${dotColor}`}></div>
                    <div className="pl-6">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-label-md text-label-md text-on-surface">{inj.muscle}</h4>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">{formatDate(inj.date)}</span>
                      </div>
                      <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${labelClass}`}>{inj.severity}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: AI Analysis */}
        <div className="h-full">
          <div className="bg-surface rounded-xl shadow-sm p-6 border border-outline-variant/30 h-full flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center">
                <span className="material-symbols-outlined" data-icon="psychology">psychology</span>
              </div>
              <div>
                <h2 className="font-headline-md text-headline-md text-on-surface">Recurring Injury Pattern</h2>
                <p className="font-body-md text-body-md text-on-surface-variant text-sm">AI Prediction Model</p>
              </div>
            </div>
            
            {/* Recharts Area Chart */}
            <div className="flex-1 w-full bg-slate-50 border-2 border-dashed border-outline-variant rounded-xl flex items-center justify-center min-h-[300px] p-4">
              {chartData.length > 0 ? (
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData}>
                    <XAxis dataKey="name" stroke="#6c7a71" fontSize={12} tickLine={false} axisLine={false} />
                    <Tooltip cursor={{ fill: '#e7eeff' }} contentStyle={{ borderRadius: '8px', border: 'none' }} />
                    <Bar dataKey="count" fill="#8a4cfc" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              ) : (
                <div className="text-center text-on-surface-variant">
                  <span className="material-symbols-outlined text-4xl mb-2 opacity-50" data-icon="bar_chart">bar_chart</span>
                  <p className="font-label-md text-label-md">No Injury Records Yet</p>
                </div>
              )}
            </div>

            <div className="mt-6 p-4 bg-secondary-fixed rounded-lg">
              <p className="font-body-md text-body-md text-on-secondary-fixed text-sm">
                <strong>AI Insight:</strong> Data indicates a 68% correlation between training load spikes and your recurrent hamstring issues. Consider increasing recovery days after high-intensity sprint sessions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
