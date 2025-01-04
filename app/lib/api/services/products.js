import apiClient from '../client';

const productsService = {
  getAll: async (params) => {
    const response = await apiClient.get('/products/', { params });
    return response.data;
  },

  getById: async (id) => {
    const response = await apiClient.get(`/products/${id}/`);
    return response.data;
  },

  create: async (productData) => {
    const response = await apiClient.post('/products/', productData);
    return response.data;
  },

  update: async (id, productData) => {
    const response = await apiClient.put(`/products/${id}/`, productData);
    return response.data;
  },

  delete: async (id) => {
    const response = await apiClient.delete(`/products/${id}/`);
    return response.data;
  },

  getCategories: async () => {
    const response = await apiClient.get('/products/categories/');
    return response.data;
  },

  getAttributes: async () => {
    const response = await apiClient.get('/products/attributes/');
    return response.data;
  }
};

export default productsService; 