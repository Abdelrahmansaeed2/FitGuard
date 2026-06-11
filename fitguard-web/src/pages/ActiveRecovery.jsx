import { useState } from 'react';

export default function ActiveRecovery() {
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  return (
    <div className="p-margin-mobile md:p-margin-desktop max-w-container-max mx-auto w-full relative">
      {/* Header Section */}
      <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <div className="flex items-center space-x-2 mb-2">
            <span className="px-2 py-1 rounded bg-error-container text-on-error-container font-label-md text-label-md">Active Protocol</span>
            <span className="text-on-surface-variant font-mono-data text-mono-data">ID: RC-8834-A</span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Right Achilles Tendinopathy</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-1">Week 3 of 8 • Moderate Load Phase</p>
        </div>
        <button 
          onClick={() => setShowSuccessModal(true)}
          className="bg-primary hover:bg-on-primary-container text-on-primary font-label-md text-label-md py-3 px-6 rounded-lg shadow-sm transition-colors flex items-center space-x-2"
        >
          <span className="material-symbols-outlined">check_circle</span>
          <span>Complete Phase</span>
        </button>
      </div>

      {/* Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        {/* Left Column: Protocol Details & Tasks (8 columns) */}
        <div className="lg:col-span-8 space-y-gutter">
          {/* Timeline/Phases Card */}
          <div className="bg-surface-container-lowest rounded-xl border border-outline-variant p-6 shadow-sm">
            <h3 className="font-headline-sm text-headline-sm mb-6 flex items-center">
              <span className="material-symbols-outlined mr-2 text-primary">timeline</span>
              Recovery Phases
            </h3>
            <div className="relative">
              {/* Connecting Line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-surface-variant ml-[-1px]"></div>
              <div className="space-y-6">
                {/* Phase 1: Complete */}
                <div className="relative flex items-start pl-10 opacity-60">
                  <div className="absolute left-2.5 top-1.5 w-3 h-3 rounded-full bg-outline-variant outline outline-4 outline-surface-container-lowest"></div>
                  <div>
                    <h4 className="font-label-md text-label-md text-outline">Phase 1: Acute Management</h4>
                    <p className="font-body-sm text-body-sm text-outline-variant mt-1">Inflammation control and tissue protection. (Weeks 1-2)</p>
                  </div>
                </div>
                {/* Phase 2: Active */}
                <div className="relative flex items-start pl-10">
                  <div className="absolute left-2 top-1 w-4 h-4 rounded-full bg-primary outline outline-4 outline-primary-container animate-pulse"></div>
                  <div className="bg-surface-container p-4 rounded-lg border border-outline-variant w-full">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-label-md text-label-md text-primary">Phase 2: Proliferation (Current)</h4>
                      <span className="px-2 py-0.5 rounded text-xs font-mono-data bg-surface-lowest text-on-surface-variant border border-outline-variant">Days 15-30</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mb-4">Gradual reintroduction of load. Focus on isometric holds and controlled eccentrics to stimulate collagen alignment.</p>
                    {/* Progress Bar */}
                    <div className="w-full bg-surface-variant rounded-full h-2.5 mb-1">
                      <div className="bg-primary h-2.5 rounded-full" style={{ width: '45%' }}></div>
                    </div>
                    <p className="text-right text-xs font-mono-data text-on-surface-variant">45% Complete</p>
                  </div>
                </div>
                {/* Phase 3: Upcoming */}
                <div className="relative flex items-start pl-10">
                  <div className="absolute left-2.5 top-1.5 w-3 h-3 rounded-full bg-surface-variant outline outline-4 outline-surface-container-lowest"></div>
                  <div>
                    <h4 className="font-label-md text-label-md text-on-surface-variant">Phase 3: Remodeling</h4>
                    <p className="font-body-sm text-body-sm text-outline mt-1">Heavy slow resistance training and dynamic loading.</p>
                  </div>
                </div>
                {/* Phase 4: Upcoming */}
                <div className="relative flex items-start pl-10">
                  <div className="absolute left-2.5 top-1.5 w-3 h-3 rounded-full bg-surface-variant outline outline-4 outline-surface-container-lowest"></div>
                  <div>
                    <h4 className="font-label-md text-label-md text-on-surface-variant">Phase 4: Return to Play</h4>
                    <p className="font-body-sm text-body-sm text-outline mt-1">Sport-specific drills and explosive movements.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Daily Tasks Card */}
          <div className="bg-surface-container-lowest rounded-xl border border-outline-variant p-6 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-headline-sm text-headline-sm flex items-center">
                <span className="material-symbols-outlined mr-2 text-primary">task_alt</span>
                Today's Protocol
              </h3>
              <span className="font-mono-data text-mono-data text-on-surface-variant">Oct 24, 2024</span>
            </div>
            <div className="space-y-3">
              {/* Task 1 */}
              <label className="flex items-center p-4 rounded-lg border border-outline-variant hover:bg-surface-container-low cursor-pointer transition-colors">
                <input type="checkbox" defaultChecked className="form-checkbox h-5 w-5 text-primary rounded border-outline-variant focus:ring-primary focus:ring-offset-0 bg-surface mr-4" />
                <div className="flex-grow">
                  <span className="font-body-md text-body-md text-on-surface line-through opacity-70">Morning Assessment Readiness</span>
                </div>
                <span className="font-label-md text-label-md text-on-surface-variant">Completed 08:00</span>
              </label>
              {/* Task 2 */}
              <label className="flex items-center p-4 rounded-lg border border-primary bg-primary-container bg-opacity-10 cursor-pointer transition-colors group">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-primary rounded border-outline-variant focus:ring-primary focus:ring-offset-0 bg-surface mr-4" />
                <div className="flex-grow">
                  <span className="font-body-md text-body-md text-on-surface group-hover:text-primary transition-colors">15min Contrast Bath Therapy</span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">3 min hot / 1 min cold. Repeat 3x. End on cold.</p>
                </div>
                <span className="material-symbols-outlined text-outline-variant group-hover:text-primary">info</span>
              </label>
              {/* Task 3 */}
              <label className="flex items-center p-4 rounded-lg border border-outline-variant hover:bg-surface-container-low cursor-pointer transition-colors group">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-primary rounded border-outline-variant focus:ring-primary focus:ring-offset-0 bg-surface mr-4" />
                <div className="flex-grow">
                  <span className="font-body-md text-body-md text-on-surface group-hover:text-primary transition-colors">Ankle ISO Holds (Seated)</span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">4 sets x 45 seconds. 2 min rest between sets.</p>
                </div>
                <span className="material-symbols-outlined text-outline-variant group-hover:text-primary">fitness_center</span>
              </label>
              {/* Task 4 */}
              <label className="flex items-center p-4 rounded-lg border border-outline-variant hover:bg-surface-container-low cursor-pointer transition-colors group">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-primary rounded border-outline-variant focus:ring-primary focus:ring-offset-0 bg-surface mr-4" />
                <div className="flex-grow">
                  <span className="font-body-md text-body-md text-on-surface group-hover:text-primary transition-colors">Biometric Data Sync</span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Upload HRV and Sleep data from wearable.</p>
                </div>
                <span className="material-symbols-outlined text-outline-variant group-hover:text-primary">sync</span>
              </label>
            </div>
          </div>
        </div>

        {/* Right Column: Visuals & Stats (4 columns) */}
        <div className="lg:col-span-4 space-y-gutter">
          {/* Imagery Card */}
          <div className="bg-surface-container-lowest rounded-xl border border-outline-variant overflow-hidden shadow-sm">
            <div className="h-48 bg-surface-variant relative w-full" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD8OWwSoZn52hzq05029UzzScwM4HT8UAFtoBW9dUOOD1UPmqPU3DhIu4YfjwLOyqV9PCJlj37LY8neSXPVadj4DbotStRYzJ12eifvj9ai0WfllOB-Td64KQJ5QGXe37bmXp3NguHEo3JUrVkSz_qCnppo3-PQTZO7yUf3GYlEaKK_b3LcV85Xjr9vfZ2jzWgQ-fSIaw9wp4QinybRTakVORiHK2YnsliOhnn8hhNVmOc3BX4izCnDRBxcxK8U3X3BZRktet7l1Ww')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <p className="text-on-tertiary font-label-md text-label-md">Reference: ISO Hold Form</p>
              </div>
            </div>
            <div className="p-4 bg-surface-container-lowest">
              <h4 className="font-label-md text-label-md text-on-surface mb-2">Physio Notes</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Ensure heel remains grounded during holds. Do not push past a 3/10 pain threshold. Focus on slow breathing to manage sympathetic tone.</p>
            </div>
          </div>

          {/* Key Metrics Bento */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-4 flex flex-col justify-center items-center text-center shadow-sm">
              <span className="material-symbols-outlined text-primary mb-2">vital_signs</span>
              <span className="font-display-md text-display-md text-on-surface">62<span className="text-sm">ms</span></span>
              <span className="font-label-md text-label-md text-on-surface-variant">Avg HRV</span>
            </div>
            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-4 flex flex-col justify-center items-center text-center shadow-sm">
              <span className="material-symbols-outlined text-secondary mb-2">bedtime</span>
              <span className="font-display-md text-display-md text-on-surface">8.2<span className="text-sm">h</span></span>
              <span className="font-label-md text-label-md text-on-surface-variant">Sleep Score</span>
            </div>
            
            <div className="col-span-2 bg-surface-container-lowest border border-outline-variant rounded-xl p-4 shadow-sm">
              <div className="flex justify-between items-center mb-2">
                <span className="font-label-md text-label-md text-on-surface-variant">Pain Trend (7 Day)</span>
                <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface text-xs font-mono-data">Improving</span>
              </div>
              {/* Placeholder for a mini chart/sparkline using a subtle background gradient to simulate data */}
              <div className="h-12 w-full bg-surface-variant rounded overflow-hidden flex items-end">
                <div className="w-[14.28%] h-full bg-outline-variant bg-opacity-20 mx-px"></div>
                <div className="w-[14.28%] h-4/5 bg-outline-variant bg-opacity-30 mx-px"></div>
                <div className="w-[14.28%] h-3/5 bg-outline-variant bg-opacity-40 mx-px"></div>
                <div className="w-[14.28%] h-3/5 bg-outline-variant bg-opacity-50 mx-px"></div>
                <div className="w-[14.28%] h-2/5 bg-outline-variant bg-opacity-60 mx-px"></div>
                <div className="w-[14.28%] h-1/5 bg-primary bg-opacity-70 mx-px"></div>
                <div className="w-[14.28%] h-1/5 bg-primary mx-px"></div>
              </div>
            </div>
          </div>

          {/* AI Insight */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-3 opacity-10">
              <span className="material-symbols-outlined text-6xl text-secondary">auto_awesome</span>
            </div>
            <h4 className="font-label-md text-label-md text-secondary flex items-center mb-2">
              <span className="material-symbols-outlined text-sm mr-1">auto_awesome</span>
              FitGuard AI Insight
            </h4>
            <p className="font-body-sm text-body-sm text-on-surface-variant relative z-10">
              Based on your elevated HRV over the last 48 hours, your systemic recovery is optimal. You are cleared to increase isometric load duration by 15% today if pain remains below 3/10.
            </p>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-on-background bg-opacity-50 backdrop-blur-sm">
          <div className="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-xl p-8 max-w-sm w-full mx-4 text-center transform transition-all scale-100 opacity-100">
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-primary-container mb-6">
              <span className="material-symbols-outlined text-on-primary-container text-4xl">verified</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-2">Phase Completed</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-6">
              Excellent work. Phase 2 data has been logged. Preparing Remodeling protocols for tomorrow.
            </p>
            <div className="flex flex-col space-y-3">
              <button 
                onClick={() => setShowSuccessModal(false)}
                className="w-full bg-primary text-on-primary font-label-md text-label-md py-3 rounded-lg hover:bg-on-primary-container transition-colors"
              >
                View Next Phase
              </button>
              <button 
                onClick={() => setShowSuccessModal(false)}
                className="w-full bg-transparent border border-outline-variant text-on-surface font-label-md text-label-md py-3 rounded-lg hover:bg-surface-container-low transition-colors"
              >
                Dismiss
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
