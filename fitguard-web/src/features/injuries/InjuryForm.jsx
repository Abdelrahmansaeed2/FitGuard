import { useState } from 'react';
import { useAthleteStore } from '../../store/useAthleteStore';
import { PlusCircle } from 'lucide-react';

export default function InjuryForm() {
  const addInjury = useAthleteStore((state) => state.addInjury);
  const [formData, setFormData] = useState({ muscle: '', severity: 'Low', status: 'Active' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.muscle) return;
    addInjury({ ...formData, date: new Date().toISOString().split('T')[0] });
    setFormData({ muscle: '', severity: 'Low', status: 'Active' });
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
      <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
        <PlusCircle className="text-danger" size={20} /> Log New Injury
      </h3>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input 
          type="text" 
          placeholder="Affected Muscle (e.g., Knee)" 
          className="border p-2 rounded-lg w-full focus:outline-none focus:border-primary"
          value={formData.muscle}
          onChange={(e) => setFormData({ ...formData, muscle: e.target.value })}
        />
        <select 
          className="border p-2 rounded-lg w-full focus:outline-none focus:border-primary"
          value={formData.severity}
          onChange={(e) => setFormData({ ...formData, severity: e.target.value })}
        >
          <option value="Low">Low Severity</option>
          <option value="Medium">Medium Severity</option>
          <option value="High">High Severity</option>
        </select>
        <button type="submit" className="bg-danger text-white p-2 rounded-lg font-bold hover:bg-rose-600 transition-colors">
          Save Record
        </button>
      </form>
    </div>
  );
}
