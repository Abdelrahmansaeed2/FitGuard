import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useInjuryStore } from '../store/injuryStore';

export default function InjuryDetails() {
  const { id } = useParams();
  const { selectedInjury, fetchInjury, loading } = useInjuryStore();

  useEffect(() => {
    fetchInjury(id);
  }, [id, fetchInjury]);

  if (loading || !selectedInjury) {
    return <div className="p-8 text-center text-on-surface-variant">Loading injury details...</div>;
  }

  return (
    <div className="flex-1 p-margin-mobile md:p-margin-desktop max-w-container-max mx-auto w-full">
      {/* Breadcrumbs & Actions */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <div className="flex items-center space-x-2 text-body-sm text-on-surface-variant mb-2">
            <Link className="hover:text-primary transition-colors" to="/injuries">Recovery Plan</Link>
            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
            <span className="text-on-background font-medium capitalize">{selectedInjury.injuryType}</span>
          </div>
          <div className="flex items-center gap-3">
            <h2 className="font-headline-lg text-headline-lg text-on-background capitalize">{selectedInjury.muscleGroup} {selectedInjury.injuryType}</h2>
            <span className="px-3 py-1 bg-error-container text-on-error-container font-label-md text-label-md rounded border border-error/20 uppercase">{selectedInjury.severity}</span>
          </div>
        </div>
        <div className="flex space-x-3 w-full sm:w-auto">
          <Link to={`/injuries/${id}/edit`} className="flex-1 sm:flex-none px-4 py-2 border border-outline-variant text-on-background font-label-md text-label-md rounded hover:border-outline transition-colors flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-[18px]">edit</span>
            Edit Details
          </Link>
          <button className="flex-1 sm:flex-none px-4 py-2 bg-primary text-on-primary font-label-md text-label-md rounded hover:opacity-90 transition-opacity shadow-sm flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-[18px]">add_task</span>
            Log Session
          </button>
        </div>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        
        {/* Clinical Summary Card (Spans 8 cols) */}
        <div className="md:col-span-8 bg-surface-container-lowest border border-outline-variant rounded-xl p-6 shadow-sm">
          <div className="flex justify-between items-center mb-6 border-b border-surface-container pb-4">
            <h3 className="font-headline-sm text-headline-sm text-on-background flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">clinical_notes</span>
              Clinical Summary
            </h3>
            <span className="font-mono-data text-mono-data text-on-surface-variant">ID: {selectedInjury.id.substring(0,8)}</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
            <div>
              <p className="font-label-md text-label-md text-on-surface-variant mb-1">MUSCLE GROUP</p>
              <p className="font-body-md text-body-md text-on-background font-medium capitalize">{selectedInjury.muscleGroup}</p>
            </div>
            <div>
              <p className="font-label-md text-label-md text-on-surface-variant mb-1">INJURY TYPE</p>
              <p className="font-body-md text-body-md text-on-background font-medium capitalize">{selectedInjury.injuryType}</p>
            </div>
            <div>
              <p className="font-label-md text-label-md text-on-surface-variant mb-1">DATE OF INJURY</p>
              <p className="font-body-md text-body-md text-on-background font-medium">{new Date(selectedInjury.dateOccurred).toLocaleDateString()}</p>
            </div>
            <div>
              <p className="font-label-md text-label-md text-on-surface-variant mb-1">STATUS</p>
              <p className="font-body-md text-body-md text-on-background font-medium capitalize">{selectedInjury.recoveryStatus}</p>
            </div>
          </div>
          <div>
            <p className="font-label-md text-label-md text-on-surface-variant mb-2">CLINICIAN NOTES</p>
            <p className="font-body-sm text-body-sm text-on-background leading-relaxed bg-surface-container-low p-4 rounded-lg border border-surface-container">
              {selectedInjury.notes || 'No notes provided.'}
            </p>
          </div>
        </div>

        {/* AI Insights / Biometric Impact (Spans 4 cols) */}
        <div className="md:col-span-4 flex flex-col gap-gutter">
          {/* Anatomy Visual Placeholder */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-1 relative overflow-hidden h-48 flex items-center justify-center">
            <div className="absolute inset-0 bg-surface-container-highest opacity-20"></div>
            <img 
              alt="Anatomy Visual Placeholder" 
              className="w-full h-full object-cover mix-blend-multiply opacity-80" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCySHjqxPrRl06EyA-Q0gq_MMudyfAyKCxX7RIdA8MGTMhgdraLHOkFYKHYeMJUyudGbqEespX3pL4eOTiUs_HFZ77GY5CpJsW-9Cz92la5TILm6INj78EJDBqqS5EFZx7zw-zN6LPr_5isZ9Rc1kSYXKNDX4JzBY4JqdQafHn2padiIYlaCQAldpxGGNc7xjo0SWNLo_-hIRNRykbtSTH4C0aCKp5Hs7uwewYwnBEP4Frq6aQhxZDtzO2Y4n0Sek5-SSPBwQAAMEQ"
            />
            <div className="absolute bottom-2 right-2 px-2 py-1 bg-surface-container-lowest/80 backdrop-blur rounded border border-outline-variant font-label-md text-label-md text-on-background flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">visibility</span>
              Anterior View
            </div>
          </div>
          
          {/* AI Insight Card */}
          <div className="bg-[#f5f3ff] border border-[#d8b4fe] rounded-xl p-5 flex-1 shadow-sm relative overflow-hidden">
            {/* Abstract bg graphic */}
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-[#e9d5ff] rounded-full blur-3xl opacity-50"></div>
            <div className="flex items-center gap-2 mb-3 relative z-10">
              <span className="material-symbols-outlined text-secondary">psychiatry</span>
              <h4 className="font-headline-sm text-headline-sm text-on-secondary-fixed">AI Prognosis</h4>
            </div>
            <p className="font-body-sm text-body-sm text-on-secondary-fixed-variant mb-4 relative z-10">
              Based on biometric load data and historical recovery models for Grade II ATFL sprains, projected Return to Play is <strong>14 days ahead</strong> of standard clinical timelines if adherence to the current proprioception protocol remains &gt;90%.
            </p>
            <button className="w-full bg-secondary text-on-secondary py-2 rounded font-label-md text-label-md hover:opacity-90 transition-opacity relative z-10">
              Update Recovery Protocol
            </button>
          </div>
        </div>

        {/* Recovery Timeline (Spans 12 cols) */}
        <div className="md:col-span-12 bg-surface-container-lowest border border-outline-variant rounded-xl p-6 shadow-sm mt-4">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h3 className="font-headline-sm text-headline-sm text-on-background">Recovery Timeline</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Progress tracked against clinical milestones.</p>
            </div>
            <div className="flex items-center gap-2 bg-surface-container-low px-3 py-1.5 rounded-full border border-surface-container">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="font-label-md text-label-md text-primary">Currently: Phase 3</span>
            </div>
          </div>
          
          {/* Stepper Visual */}
          <div className="relative pt-4 pb-8 px-4 sm:px-12">
            {/* Track Line */}
            <div className="absolute top-8 left-12 right-12 h-1 bg-surface-container-highest rounded-full z-0"></div>
            {/* Progress Line */}
            <div className="absolute top-8 left-12 h-1 bg-primary rounded-full z-0 transition-all duration-1000 w-[60%]"></div>
            
            <div className="flex justify-between relative z-10">
              {/* Phase 1 (Completed) */}
              <div className="flex flex-col items-center group cursor-default">
                <div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center border-4 border-surface-container-lowest shadow-sm mb-3">
                  <span className="material-symbols-outlined text-[16px]">check</span>
                </div>
                <div className="text-center">
                  <p className="font-label-md text-label-md text-on-background">Acute</p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant text-[11px] mt-1">Weeks 1-2</p>
                </div>
              </div>
              {/* Phase 2 (Completed) */}
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center border-4 border-surface-container-lowest shadow-sm mb-3">
                  <span className="material-symbols-outlined text-[16px]">check</span>
                </div>
                <div className="text-center">
                  <p className="font-label-md text-label-md text-on-background">Proliferation</p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant text-[11px] mt-1">Weeks 3-4</p>
                </div>
              </div>
              {/* Phase 3 (Active) */}
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-surface-container-lowest border-4 border-primary text-primary flex items-center justify-center shadow-sm mb-3 relative">
                  <span className="absolute inset-0 rounded-full border-2 border-primary animate-ping opacity-20"></span>
                  <span className="material-symbols-outlined text-[16px]">directions_run</span>
                </div>
                <div className="text-center">
                  <p className="font-label-md text-label-md text-primary font-bold">Remodeling</p>
                  <p className="font-body-sm text-body-sm text-primary text-[11px] mt-1">Weeks 5-8</p>
                </div>
              </div>
              {/* Phase 4 (Upcoming) */}
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-surface-container-lowest border-4 border-surface-container-highest text-surface-container-highest flex items-center justify-center mb-3">
                  <span className="material-symbols-outlined text-[16px]">sports_score</span>
                </div>
                <div className="text-center opacity-50">
                  <p className="font-label-md text-label-md text-on-background">Return to Play</p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant text-[11px] mt-1">Week 9+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
