import { Link } from 'react-router-dom';

export default function RecoveryDetails() {
  return (
    <div className="p-margin-mobile md:p-margin-desktop max-w-container-max mx-auto w-full pb-24">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
        <div>
          <div className="inline-flex items-center space-x-2 bg-secondary-fixed text-on-secondary-fixed font-label-md text-label-md px-3 py-1 rounded-full mb-3">
            <span className="material-symbols-outlined text-[14px]">auto_awesome</span>
            <span>AI-Generated Protocol</span>
          </div>
          <h2 className="font-display-md text-display-md text-on-surface mb-2">ACL Reconstruction Phase 1</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            A clinical, data-driven 12-week recovery timeline optimized based on your recent biomechanical stress test and historical injury data.
          </p>
        </div>
        <div className="flex space-x-4">
          <button className="px-6 py-2 border border-outline-variant text-on-surface font-label-md text-label-md rounded-lg hover:bg-surface-container transition-colors">
            Edit Parameters
          </button>
          <Link to="/recovery/active" className="px-6 py-2 bg-primary-container text-on-primary font-label-md text-label-md rounded-lg hover:opacity-90 transition-opacity flex items-center shadow-sm">
            Accept Protocol
            <span className="material-symbols-outlined ml-2 text-[18px]">check_circle</span>
          </Link>
        </div>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Timeline Overview (Spans 12 columns) */}
        <div className="md:col-span-12 bg-surface-container-lowest border border-outline-variant rounded-xl p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-full bg-gradient-to-l from-surface-container-low to-transparent pointer-events-none"></div>
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-headline-sm text-headline-sm text-on-surface flex items-center">
              <span className="material-symbols-outlined mr-2 text-primary">timeline</span>
              12-Week Trajectory
            </h3>
            <span className="font-mono-data text-mono-data text-on-surface-variant hidden md:block">Estimated Full Clearence: Oct 14</span>
          </div>
          <div className="relative w-full h-32 flex items-center justify-between px-4 overflow-x-auto pb-4 md:pb-0">
            {/* Connecting Line */}
            <div className="absolute left-8 right-8 top-1/2 h-1 bg-surface-variant -z-10 rounded-full min-w-[600px] md:min-w-0"></div>
            <div className="absolute left-8 w-1/4 top-1/2 h-1 bg-primary-container -z-10 rounded-full"></div> {/* Progress indicator */}
            
            {/* Phase Nodes */}
            <div className="flex w-[600px] md:w-full justify-between items-center px-4">
              {/* Node 1: Active */}
              <div className="flex flex-col items-center group cursor-pointer shrink-0 w-24">
                <div className="w-12 h-12 bg-surface-container-lowest border-2 border-primary rounded-full flex items-center justify-center shadow-sm relative z-10">
                  <div className="w-8 h-8 bg-primary-container rounded-full flex items-center justify-center text-on-primary">
                    <span className="material-symbols-outlined text-[16px]">hotel</span>
                  </div>
                </div>
                <div className="mt-3 text-center">
                  <p className="font-label-md text-label-md text-primary">Phase 1</p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Weeks 1-3</p>
                  <p className="font-mono-data text-[10px] text-primary mt-1 opacity-100">ACTIVE</p>
                </div>
              </div>
              
              {/* Node 2: Pending */}
              <div className="flex flex-col items-center group cursor-pointer opacity-70 hover:opacity-100 transition-opacity shrink-0 w-24">
                <div className="w-10 h-10 bg-surface-container border border-outline-variant rounded-full flex items-center justify-center relative z-10 bg-surface-container-lowest">
                  <span className="material-symbols-outlined text-outline text-[18px]">directions_walk</span>
                </div>
                <div className="mt-3 text-center">
                  <p className="font-label-md text-label-md text-on-surface">Phase 2</p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Weeks 4-6</p>
                </div>
              </div>
              
              {/* Node 3: Pending */}
              <div className="flex flex-col items-center group cursor-pointer opacity-70 hover:opacity-100 transition-opacity shrink-0 w-24">
                <div className="w-10 h-10 bg-surface-container border border-outline-variant rounded-full flex items-center justify-center relative z-10 bg-surface-container-lowest">
                  <span className="material-symbols-outlined text-outline text-[18px]">fitness_center</span>
                </div>
                <div className="mt-3 text-center">
                  <p className="font-label-md text-label-md text-on-surface">Phase 3</p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Weeks 7-9</p>
                </div>
              </div>
              
              {/* Node 4: Pending */}
              <div className="flex flex-col items-center group cursor-pointer opacity-70 hover:opacity-100 transition-opacity shrink-0 w-24">
                <div className="w-10 h-10 bg-surface-container border border-outline-variant rounded-full flex items-center justify-center relative z-10 bg-surface-container-lowest">
                  <span className="material-symbols-outlined text-outline text-[18px]">sports_martial_arts</span>
                </div>
                <div className="mt-3 text-center">
                  <p className="font-label-md text-label-md text-on-surface">Phase 4</p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Weeks 10-12</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Current Phase Clinical Instructions (Spans 8 columns) */}
        <div className="md:col-span-8 bg-surface-container-lowest border border-outline-variant rounded-xl p-6 flex flex-col">
          <div className="flex justify-between items-center mb-6 pb-4 border-b border-surface-container-high">
            <div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">Phase 1: Protection & ROM</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Primary Goal: Reduce inflammation, achieve 90° flexion.</p>
            </div>
            <div className="bg-error-container text-on-error-container px-3 py-1 rounded font-mono-data text-mono-data flex items-center">
              <span className="material-symbols-outlined text-[14px] mr-1">warning</span>
              High Risk Period
            </div>
          </div>
          
          <div className="space-y-6 flex-1">
            {/* Instruction Group 1 */}
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 rounded bg-surface-container-low border border-outline-variant flex items-center justify-center shrink-0 mt-1">
                <span className="font-mono-data text-mono-data text-on-surface">01</span>
              </div>
              <div>
                <h4 className="font-label-md text-label-md text-on-surface mb-1">Brace Management</h4>
                <p className="font-body-md text-body-md text-on-surface-variant">Keep brace locked in full extension during ambulation and sleep. Only unlock during approved ROM exercises.</p>
              </div>
            </div>
            
            {/* Instruction Group 2 */}
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 rounded bg-surface-container-low border border-outline-variant flex items-center justify-center shrink-0 mt-1">
                <span className="font-mono-data text-mono-data text-on-surface">02</span>
              </div>
              <div>
                <h4 className="font-label-md text-label-md text-on-surface mb-1">Weight Bearing</h4>
                <p className="font-body-md text-body-md text-on-surface-variant">Weight-bearing as tolerated (WBAT) with crutches. Aim for 50% body weight transition by day 10.</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-surface-container text-on-surface-variant font-mono-data text-[11px] rounded">CRUTCHES REQ</span>
                  <span className="px-2 py-1 bg-surface-container text-on-surface-variant font-mono-data text-[11px] rounded">SYMMETRY &lt; 30%</span>
                </div>
              </div>
            </div>
            
            {/* Instruction Group 3 */}
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 rounded bg-surface-container-low border border-outline-variant flex items-center justify-center shrink-0 mt-1">
                <span className="font-mono-data text-mono-data text-on-surface">03</span>
              </div>
              <div>
                <h4 className="font-label-md text-label-md text-on-surface mb-1">Cryotherapy Regimen</h4>
                <p className="font-body-md text-body-md text-on-surface-variant">Apply compression icing 20 minutes every 2 hours while awake to manage effusion.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Biometric Target Card (Spans 4 columns) */}
        <div className="md:col-span-4 bg-surface-container-lowest border border-outline-variant rounded-xl p-6 flex flex-col relative overflow-hidden group">
          {/* Subtle background graphic */}
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-surface-container-low rounded-full opacity-50 pointer-events-none group-hover:scale-110 transition-transform duration-500"></div>
          
          <h3 className="font-headline-sm text-headline-sm text-on-surface mb-6 flex items-center z-10">
            <span className="material-symbols-outlined mr-2 text-on-surface-variant">target</span>
            Phase Targets
          </h3>
          
          <div className="space-y-5 z-10">
            {/* Target 1 */}
            <div>
              <div className="flex justify-between font-label-md text-label-md mb-2">
                <span className="text-on-surface">Knee Flexion ROM</span>
                <span className="font-mono-data text-primary">90°</span>
              </div>
              <div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
                <div className="bg-primary h-full rounded-full" style={{ width: '45%' }}></div>
              </div>
              <p className="font-mono-data text-[10px] text-on-surface-variant mt-1 text-right">Current: 40°</p>
            </div>
            
            {/* Target 2 */}
            <div>
              <div className="flex justify-between font-label-md text-label-md mb-2">
                <span className="text-on-surface">Quad Activation</span>
                <span className="font-mono-data text-primary">Voluntary SLR</span>
              </div>
              <div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
                <div className="bg-surface-variant h-full rounded-full w-full relative">
                  <div className="absolute left-[20%] top-0 bottom-0 w-[2px] bg-error"></div>
                </div>
              </div>
              <p className="font-mono-data text-[10px] text-error mt-1 text-right">Lag Present</p>
            </div>
            
            {/* Target 3 */}
            <div>
              <div className="flex justify-between font-label-md text-label-md mb-2">
                <span className="text-on-surface">Pain Scale (Avg)</span>
                <span className="font-mono-data text-primary">&lt; 4/10</span>
              </div>
              <div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
                <div className="bg-tertiary h-full rounded-full" style={{ width: '60%' }}></div>
              </div>
              <p className="font-mono-data text-[10px] text-on-surface-variant mt-1 text-right">Current: 6/10</p>
            </div>
          </div>
          
          <div className="mt-auto pt-6 z-10">
            <div className="bg-primary-container/10 p-3 rounded-lg border border-primary-container/20">
              <p className="font-label-md text-label-md text-on-primary-container mb-1">AI Insight</p>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-tight">Focus on quad sets to overcome lag before progressing WBAT.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
