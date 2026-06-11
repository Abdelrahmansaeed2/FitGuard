export default function InjuryAnalytics() {
  return (
    <div className="p-margin-mobile md:p-margin-desktop max-w-container-max mx-auto w-full flex flex-col gap-8">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4">
        <div>
          <h2 className="font-headline-lg text-headline-lg text-on-background tracking-tight">Injury Analytics</h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-1">Pattern recognition and longitudinal severity assessment.</p>
        </div>
        <button className="bg-surface-container-lowest border border-outline-variant text-on-surface font-label-md text-label-md px-4 py-2 rounded-lg flex items-center justify-center gap-2 hover:border-outline transition-colors shadow-sm">
          <span className="material-symbols-outlined text-[18px]">download</span>
          Export PDF
        </button>
      </div>

      {/* AI Insight Highlight */}
      <div className="bg-secondary-fixed border border-secondary-fixed-dim rounded-xl p-6 flex flex-col sm:flex-row gap-5 items-start shadow-sm">
        <div className="p-3 bg-secondary rounded-full text-on-secondary shrink-0">
          <span className="material-symbols-outlined text-[24px]">psychology</span>
        </div>
        <div>
          <h3 className="font-headline-sm text-headline-sm text-secondary mb-1">AI Predictive Insight</h3>
          <p className="font-body-md text-body-md text-on-surface leading-relaxed">
            High probability <span className="font-label-md text-label-md bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded ml-1">84%</span> of recurring hamstring strain detected in right leg based on recent asymmetric biomechanical load data. Recommended 48h reduction in high-velocity sprinting protocols.
          </p>
        </div>
      </div>

      {/* Analytics Grid */}
      <div className="grid grid-cols-12 gap-6">
        
        {/* Heat Map (Recurring Injury Pattern) */}
        <div className="col-span-12 lg:col-span-8 bg-surface-container-lowest border border-outline-variant rounded-xl p-6 flex flex-col shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-headline-sm text-headline-sm text-on-background">Recurring Injury Pattern</h3>
            <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary">more_horiz</span>
          </div>
          <div className="flex-grow w-full rounded-lg bg-surface-container flex items-center justify-center min-h-[340px] relative overflow-hidden border border-outline-variant">
            {/* Abstract Placeholder for Heatmap */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-error-container/40 via-surface-container to-surface-container"></div>
            <div className="relative z-10 flex flex-col items-center gap-2">
              <span className="material-symbols-outlined text-[48px] text-error opacity-80">body_system</span>
              <span className="font-mono-data text-mono-data text-on-surface-variant bg-surface px-3 py-1 rounded border border-outline-variant shadow-sm">Map Data Loading...</span>
            </div>
          </div>
        </div>

        {/* Severity Breakdown (Pie/Donut Concept) */}
        <div className="col-span-12 lg:col-span-4 bg-surface-container-lowest border border-outline-variant rounded-xl p-6 flex flex-col shadow-sm">
          <h3 className="font-headline-sm text-headline-sm text-on-background mb-6">Severity Breakdown</h3>
          <div className="flex-grow flex flex-col items-center justify-center min-h-[200px] mb-6">
            {/* CSS Donut Representation */}
            <div className="relative w-48 h-48 rounded-full border-[16px] border-surface-container-high flex items-center justify-center">
              {/* Simulated segments using clip-paths (standard professional trick without complex SVG) */}
              <div className="absolute inset-0 rounded-full border-[16px] border-error" style={{ clipPath: 'polygon(50% 50%, 100% 0, 100% 100%, 50% 100%, 0 100%, 0 50%)' }}></div>
              <div className="absolute inset-0 rounded-full border-[16px] border-primary" style={{ clipPath: 'polygon(50% 50%, 0 50%, 0 0, 100% 0)' }}></div>
              <div className="text-center flex flex-col bg-surface-container-lowest w-32 h-32 rounded-full items-center justify-center shadow-inner z-10">
                <span className="font-display-md text-display-md text-on-background">18</span>
                <span className="font-label-md text-label-md text-on-surface-variant">Total Incidents</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 mt-auto border-t border-outline-variant pt-4">
            <div className="flex justify-between items-center text-body-sm font-body-sm">
              <span className="flex items-center gap-2 text-on-surface"><div className="w-3 h-3 rounded bg-error"></div> Grade III (Severe)</span>
              <span className="font-mono-data text-mono-data">65%</span>
            </div>
            <div className="flex justify-between items-center text-body-sm font-body-sm">
              <span className="flex items-center gap-2 text-on-surface"><div className="w-3 h-3 rounded bg-primary"></div> Grade I-II (Mild)</span>
              <span className="font-mono-data text-mono-data">35%</span>
            </div>
          </div>
        </div>

        {/* Most Affected Muscle Groups (Bar Chart) */}
        <div className="col-span-12 lg:col-span-6 bg-surface-container-lowest border border-outline-variant rounded-xl p-6 flex flex-col shadow-sm">
          <h3 className="font-headline-sm text-headline-sm text-on-background mb-6">Most Affected Muscle Groups</h3>
          <div className="flex-grow flex flex-col gap-5 justify-center min-h-[220px]">
            {/* Bar Item 1 */}
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-label-md text-label-md text-on-surface">Hamstring Complex</span>
                <span className="font-mono-data text-mono-data text-error">8 Cases</span>
              </div>
              <div className="w-full bg-surface-container-highest rounded-full h-2.5 overflow-hidden">
                <div className="bg-error h-full rounded-full transition-all duration-1000" style={{ width: '80%' }}></div>
              </div>
            </div>
            {/* Bar Item 2 */}
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-label-md text-label-md text-on-surface">Gastrocnemius (Calf)</span>
                <span className="font-mono-data text-mono-data text-on-surface-variant">4 Cases</span>
              </div>
              <div className="w-full bg-surface-container-highest rounded-full h-2.5 overflow-hidden">
                <div className="bg-primary-container h-full rounded-full transition-all duration-1000" style={{ width: '45%' }}></div>
              </div>
            </div>
            {/* Bar Item 3 */}
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-label-md text-label-md text-on-surface">Achilles Tendon</span>
                <span className="font-mono-data text-mono-data text-on-surface-variant">2 Cases</span>
              </div>
              <div className="w-full bg-surface-container-highest rounded-full h-2.5 overflow-hidden">
                <div className="bg-primary-container h-full rounded-full transition-all duration-1000" style={{ width: '25%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Injury Frequency (Line Chart) */}
        <div className="col-span-12 lg:col-span-6 bg-surface-container-lowest border border-outline-variant rounded-xl p-6 flex flex-col shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-headline-sm text-headline-sm text-on-background">Injury Frequency (12m)</h3>
            <div className="bg-surface-container border border-outline-variant rounded px-2 py-1 flex items-center gap-1 cursor-pointer">
              <span className="font-label-md text-label-md text-on-surface">Monthly</span>
              <span className="material-symbols-outlined text-[16px]">expand_more</span>
            </div>
          </div>
          {/* Chart Area */}
          <div className="flex-grow w-full relative min-h-[220px] flex items-end">
            {/* Y-Axis Grid */}
            <div className="absolute inset-0 flex flex-col justify-between pb-6">
              <div className="w-full border-t border-outline-variant border-dashed"></div>
              <div className="w-full border-t border-outline-variant border-dashed"></div>
              <div className="w-full border-t border-outline-variant border-dashed"></div>
              <div className="w-full border-t border-outline"></div>
            </div>
            {/* Simple SVG Line Chart representation */}
            <div className="absolute inset-0 pb-6 pt-2">
              <svg className="w-full h-full text-primary" preserveAspectRatio="none" viewBox="0 0 100 50">
                {/* Line */}
                <path d="M0,45 C15,40 25,10 40,25 C55,40 70,30 100,35" fill="none" stroke="currentColor" strokeWidth="2" vectorEffect="non-scaling-stroke"></path>
                {/* Gradient Fill */}
                <path d="M0,45 C15,40 25,10 40,25 C55,40 70,30 100,35 L100,50 L0,50 Z" fill="currentColor" fillOpacity="0.1"></path>
              </svg>
            </div>
            {/* X-Axis Labels */}
            <div className="absolute bottom-0 left-0 w-full flex justify-between px-2 text-label-md font-label-md text-on-surface-variant">
              <span>Jan</span>
              <span>Apr</span>
              <span>Jul</span>
              <span>Oct</span>
              <span>Dec</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
