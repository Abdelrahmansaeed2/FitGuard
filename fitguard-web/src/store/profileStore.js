import { create } from 'zustand';
import { profileService } from '../services/profileService';

export const useProfileStore = create((set) => ({
  profile: null,
  loading: false,
  error: null,

  fetchProfile: async () => {
    set({ loading: true, error: null });
    try {
      const data = await profileService.getProfile();
      set({ profile: data, loading: false });
    } catch (err) {
      set({ error: err.message || 'Failed to fetch profile', loading: false });
    }
  },

  updateProfile: async (profileData) => {
    set({ loading: true, error: null });
    try {
      const updatedProfile = await profileService.updateProfile(profileData);
      set({ profile: updatedProfile, loading: false });
    } catch (err) {
      set({ error: err.message || 'Failed to update profile', loading: false });
      throw err;
    }
  }
}));
