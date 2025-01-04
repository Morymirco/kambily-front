import apiClient from '../client';

const deliveriesService = {
  getAll: async (params) => {
    const response = await apiClient.get('/deliveries/', { params });
    return response.data;
  },

  getById: async (id) => {
    const response = await apiClient.get(`/deliveries/${id}/`);
    return response.data;
  },

  create: async (deliveryData) => {
    const response = await apiClient.post('/deliveries/', deliveryData);
    return response.data;
  },

  updateStatus: async (id, status) => {
    const response = await apiClient.patch(`/deliveries/${id}/status/`, { status });
    return response.data;
  },

  addProof: async (id, proofData) => {
    const formData = new FormData();
    for (const [key, value] of Object.entries(proofData)) {
      formData.append(key, value);
    }
    const response = await apiClient.post(`/deliveries/${id}/proofs/`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    return response.data;
  }
};

export default deliveriesService; 