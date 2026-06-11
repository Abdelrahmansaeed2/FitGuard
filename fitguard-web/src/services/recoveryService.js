import apiClient from './apiClient';

export const recoveryService = {
  generateRecovery: async (params) => {
    const response = await apiClient.post('/recovery/generate', params);
    return response.data;
  },

  getRecoveryProtocols: async () => {
    const response = await apiClient.get('/recovery');
    return response.data;
  },

  getActiveRecovery: async () => {
    const response = await apiClient.get('/recovery/active');
    return response.data;
  },

  completeRecoveryPhase: async (id, phaseNumber) => {
    const response = await apiClient.put(`/recovery/${id}/phase/${phaseNumber}/complete`);
    return response.data;
  }
};
