import { useEffect } from 'react';
import { useNotificationStore } from '../store/notificationStore';

export default function NotificationCenter() {
  const { notifications, unreadCount, fetchNotifications, markAllRead } = useNotificationStore();

  useEffect(() => {
    fetchNotifications();
  }, []);

  return (
    <div className="flex-1 p-margin-desktop max-w-container-max mx-auto w-full">
      {/* Page Header */}
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="font-display-md text-display-md text-on-surface tracking-tight">Notification Center</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-2">Manage your recovery alerts, insights, and system updates.</p>
        </div>
        <button 
          onClick={markAllRead}
          className="font-label-md text-label-md text-primary hover:text-surface-tint flex items-center transition-colors"
        >
          <span className="material-symbols-outlined mr-1 text-[16px]">done_all</span>
          Mark all as read
        </button>
      </div>

      {/* Bento Layout for Notifications */}
      <div className="grid grid-cols-12 gap-gutter">
        {/* Left Column: Filters/Categories (4 cols) */}
        <div className="col-span-12 md:col-span-4 lg:col-span-3">
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-4 sticky top-[96px]">
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-4">Categories</h3>
            <nav className="flex flex-col space-y-1">
              <button className="flex items-center justify-between w-full px-3 py-2.5 rounded-lg bg-surface-container text-on-surface font-body-md text-body-md text-left">
                <span className="flex items-center">
                  <span className="material-symbols-outlined mr-3 text-on-surface-variant text-[20px]">inbox</span>
                  All Notifications
                </span>
                <span className="bg-surface-variant text-on-surface-variant text-xs px-2 py-0.5 rounded-full font-mono-data">12</span>
              </button>
              <button className="flex items-center justify-between w-full px-3 py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container-low font-body-md text-body-md text-left transition-colors">
                <span className="flex items-center">
                  <span className="material-symbols-outlined mr-3 text-emerald-600 text-[20px]">vital_signs</span>
                  Recovery Reminders
                </span>
              </button>
              <button className="flex items-center justify-between w-full px-3 py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container-low font-body-md text-body-md text-left transition-colors">
                <span className="flex items-center">
                  <span className="material-symbols-outlined mr-3 text-secondary text-[20px]">smart_toy</span>
                  AI Insights
                </span>
                <span className="bg-secondary-fixed text-on-secondary-fixed text-xs px-2 py-0.5 rounded-full font-mono-data">3</span>
              </button>
              <button className="flex items-center justify-between w-full px-3 py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container-low font-body-md text-body-md text-left transition-colors">
                <span className="flex items-center">
                  <span className="material-symbols-outlined mr-3 text-rose-500 text-[20px]">warning</span>
                  System Alerts
                </span>
              </button>
            </nav>
          </div>
        </div>

        {/* Right Column: List (8 cols) */}
        <div className="col-span-12 md:col-span-8 lg:col-span-9 space-y-4">
          {/* Date Group: Today */}
          <h4 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-2">Today</h4>
          
          {/* AI Insight Card (Unread) */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 relative overflow-hidden group hover:border-outline transition-colors cursor-pointer">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-secondary"></div>
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-violet-50 flex items-center justify-center mr-4 flex-shrink-0">
                <span className="material-symbols-outlined text-secondary text-[20px]">auto_awesome</span>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-1">
                  <div className="flex items-center space-x-2">
                    <span className="bg-violet-50 text-secondary font-label-md text-label-md px-2 py-0.5 rounded-sm">AI Insight</span>
                    <h5 className="font-headline-sm text-headline-sm text-on-surface">Strain Load Warning</h5>
                  </div>
                  <span className="font-mono-data text-mono-data text-on-surface-variant text-sm">10:42 AM</span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Your cumulative strain over the last 3 days has exceeded baseline parameters by 14%. We recommend substituting today's high-intensity session with active recovery to mitigate injury risk.
                </p>
                <div className="mt-4 flex space-x-3">
                  <button className="bg-secondary text-white font-label-md text-label-md px-4 py-2 rounded-lg hover:bg-violet-700 transition-colors">View Adjusted Plan</button>
                </div>
              </div>
            </div>
          </div>

          {/* Recovery Reminder Card (Unread) */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 relative overflow-hidden group hover:border-outline transition-colors cursor-pointer">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-secondary"></div>
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center mr-4 flex-shrink-0">
                <span className="material-symbols-outlined text-emerald-600 text-[20px]">water_drop</span>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-1">
                  <div className="flex items-center space-x-2">
                    <span className="bg-emerald-50 text-emerald-700 font-label-md text-label-md px-2 py-0.5 rounded-sm">Recovery</span>
                    <h5 className="font-headline-sm text-headline-sm text-on-surface">Hydration Deficit Detected</h5>
                  </div>
                  <span className="font-mono-data text-mono-data text-on-surface-variant text-sm">8:15 AM</span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Post-workout biometric sweep indicates a slight dehydration trend. Consume at least 500ml of electrolytes within the next hour to optimize cellular recovery.
                </p>
              </div>
            </div>
          </div>

          {/* Date Group: Yesterday */}
          <h4 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-2 mt-8">Yesterday</h4>
          
          {/* System Alert Card (Read) */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 opacity-75 hover:opacity-100 transition-opacity cursor-pointer">
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-rose-50 flex items-center justify-center mr-4 flex-shrink-0">
                <span className="material-symbols-outlined text-rose-500 text-[20px]">sensors_off</span>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-1">
                  <div className="flex items-center space-x-2">
                    <span className="bg-rose-50 text-rose-600 font-label-md text-label-md px-2 py-0.5 rounded-sm">System</span>
                    <h5 className="font-headline-sm text-headline-sm text-on-surface">Wearable Sync Failed</h5>
                  </div>
                  <span className="font-mono-data text-mono-data text-on-surface-variant text-sm">Yesterday, 9:00 PM</span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  FitGuard Pro band disconnected during sleep. Sleep architecture data for last night may be incomplete. Please check bluetooth connection.
                </p>
              </div>
            </div>
          </div>

          {/* General Insight Card (Read) */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 opacity-75 hover:opacity-100 transition-opacity cursor-pointer">
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center mr-4 flex-shrink-0">
                <span className="material-symbols-outlined text-on-surface-variant text-[20px]">trending_up</span>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-1">
                  <div className="flex items-center space-x-2">
                    <h5 className="font-headline-sm text-headline-sm text-on-surface">Weekly Overview Ready</h5>
                  </div>
                  <span className="font-mono-data text-mono-data text-on-surface-variant text-sm">Yesterday, 8:00 AM</span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Your weekly biometric performance report is generated. HRV is trending upward by 5%, indicating excellent adaptation to current training load.
                </p>
                <div className="mt-4">
                  <button className="bg-transparent border border-outline-variant text-on-surface font-label-md text-label-md px-4 py-2 rounded-lg hover:border-outline transition-colors">View Report</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
