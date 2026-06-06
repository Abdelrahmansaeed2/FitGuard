import { useAthleteStore } from '../store/useAthleteStore';
import InjuryForm from '../features/injuries/InjuryForm';
import MuscleChart from '../features/injuries/MuscleChart';
import InjuryTimeline from '../features/injuries/InjuryTimeline';

export default function ProfilePage() {
  const profile = useAthleteStore((state) => state.profile);

  return (
    <div className="flex flex-col gap-6">
      {/* رأس الصفحة */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">{profile.name}</h2>
          <p className="text-slate-500">{profile.role} • {profile.primarySport}</p>
        </div>
        <div className="bg-primary/10 text-primary px-4 py-2 rounded-lg font-bold border border-primary/20">
          {profile.level} Level
        </div>
      </div>

      {/* الجريد الخاص بالـ Components */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 flex flex-col gap-6">
          <InjuryForm />
          <InjuryTimeline />
        </div>
        <div className="lg:col-span-2">
          <MuscleChart />
        </div>
      </div>
    </div>
  );
}
