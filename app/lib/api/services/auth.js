import apiClient from '../client';

const authService = {
  login: async (credentials) => {
    const response = await apiClient.post('/auth/login/', credentials);
    return response.data;
  },

  register: async (userData) => {
    const response = await apiClient.post('/auth/register/', userData);
    return response.data;
  },

  forgotPassword: async (email) => {
    const response = await apiClient.post('/auth/forgot-password/', { email });
    return response.data;
  },

  resetPassword: async (token, newPassword) => {
    const response = await apiClient.post('/auth/reset-password/', {
      token,
      new_password: newPassword
    });
    return response.data;
  },

  verifyToken: async () => {
    const response = await apiClient.post('/auth/verify-token/');
    return response.data;
  }
};

export default authService; 