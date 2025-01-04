import apiClient from '../client';

const categoriesService = {
  // Gestion des catégories
  getAll: async (params) => {
    const response = await apiClient.get('/categories/', { params });
    return response.data;
  },

  getById: async (id) => {
    const response = await apiClient.get(`/categories/${id}/`);
    return response.data;
  },

  create: async (categoryData) => {
    const response = await apiClient.post('/categories/', categoryData);
    return response.data;
  },

  update: async (id, categoryData) => {
    const response = await apiClient.put(`/categories/${id}/`, categoryData);
    return response.data;
  },

  delete: async (id) => {
    const response = await apiClient.delete(`/categories/${id}/`);
    return response.data;
  },

  // Gestion de la hiérarchie
  getTree: async () => {
    const response = await apiClient.get('/categories/tree/');
    return response.data;
  },

  updateOrder: async (orderData) => {
    const response = await apiClient.post('/categories/reorder/', orderData);
    return response.data;
  },

  // Gestion des attributs de catégorie
  getAttributes: async (categoryId) => {
    const response = await apiClient.get(`/categories/${categoryId}/attributes/`);
    return response.data;
  },

  updateAttributes: async (categoryId, attributes) => {
    const response = await apiClient.put(`/categories/${categoryId}/attributes/`, {
      attributes
    });
    return response.data;
  },

  // Statistiques par catégorie
  getStatistics: async (categoryId, params) => {
    const response = await apiClient.get(`/categories/${categoryId}/statistics/`, {
      params
    });
    return response.data;
  }
};

export default categoriesService; 