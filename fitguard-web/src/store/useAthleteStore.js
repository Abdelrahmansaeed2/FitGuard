import { create } from 'zustand';

export const useAthleteStore = create((set) => ({
  // بيانات اللاعب الأساسية
  profile: {
    name: 'Abd Elrahman Saeed',
    role: 'ITI Software Engineer & Athlete',
    level: 'Pro',
    primarySport: 'Football',
    gpaSync: '3.43', // Just a fun easter egg metric for fitness tracking
  },
  
  // تاريخ الإصابات المبدئي
  injuries: [
    { id: 1, date: '2026-05-10', muscle: 'Hamstring', severity: 'High', status: 'Recovering' },
    { id: 2, date: '2026-03-15', muscle: 'Ankle', severity: 'Medium', status: 'Healed' },
    { id: 3, date: '2025-11-20', muscle: 'Hamstring', severity: 'Low', status: 'Healed' },
  ],

  // دالة لإضافة إصابة جديدة
  addInjury: (newInjury) => set((state) => ({
    injuries: [{ id: Date.now(), ...newInjury }, ...state.injuries]
  })),
}));
