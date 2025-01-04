import apiClient from '../client';

const earningsService = {
  getSummary: async () => {
    const response = await apiClient.get('/earnings/summary/');
    return response.data;
  },

  getHistory: async (params) => {
    const response = await apiClient.get('/earnings/history/', { params });
    return response.data;
  },

  requestWithdrawal: async (withdrawalData) => {
    const response = await apiClient.post('/earnings/withdraw/', withdrawalData);
    return response.data;
  },

  getWithdrawals: async () => {
    const response = await apiClient.get('/earnings/withdrawals/');
    return response.data;
  }
};

export default earningsService; 