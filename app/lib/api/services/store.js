import apiClient from '../client';

const storeService = {
  // Gestion de la boutique
  getStoreInfo: async () => {
    const response = await apiClient.get('/store/info/');
    return response.data;
  },

  updateStoreInfo: async (storeData) => {
    const response = await apiClient.put('/store/info/', storeData);
    return response.data;
  },

  // Gestion des commandes
  getOrders: async (params) => {
    const response = await apiClient.get('/store/orders/', { params });
    return response.data;
  },

  getOrderById: async (id) => {
    const response = await apiClient.get(`/store/orders/${id}/`);
    return response.data;
  },

  updateOrderStatus: async (id, status) => {
    const response = await apiClient.patch(`/store/orders/${id}/status/`, { status });
    return response.data;
  },

  // Gestion du catalogue
  getCatalog: async (params) => {
    const response = await apiClient.get('/store/catalog/', { params });
    return response.data;
  },

  // Gestion des promotions
  getPromotions: async () => {
    const response = await apiClient.get('/store/promotions/');
    return response.data;
  },

  createPromotion: async (promotionData) => {
    const response = await apiClient.post('/store/promotions/', promotionData);
    return response.data;
  },

  updatePromotion: async (id, promotionData) => {
    const response = await apiClient.put(`/store/promotions/${id}/`, promotionData);
    return response.data;
  },

  deletePromotion: async (id) => {
    const response = await apiClient.delete(`/store/promotions/${id}/`);
    return response.data;
  },

  // Gestion des stocks
  getInventory: async (params) => {
    const response = await apiClient.get('/store/inventory/', { params });
    return response.data;
  },

  updateStock: async (productId, quantity) => {
    const response = await apiClient.patch(`/store/inventory/${productId}/`, {
      quantity
    });
    return response.data;
  },

  // Gestion des statistiques
  getStatistics: async (params) => {
    const response = await apiClient.get('/store/statistics/', { params });
    return response.data;
  },

  // Gestion des clients
  getCustomers: async (params) => {
    const response = await apiClient.get('/store/customers/', { params });
    return response.data;
  },

  getCustomerById: async (id) => {
    const response = await apiClient.get(`/store/customers/${id}/`);
    return response.data;
  },

  // Gestion des avis
  getReviews: async (params) => {
    const response = await apiClient.get('/store/reviews/', { params });
    return response.data;
  },

  respondToReview: async (id, response) => {
    const response = await apiClient.post(`/store/reviews/${id}/respond/`, {
      response
    });
    return response.data;
  },

  // Gestion des paiements
  getPayments: async (params) => {
    const response = await apiClient.get('/store/payments/', { params });
    return response.data;
  },

  processRefund: async (orderId, refundData) => {
    const response = await apiClient.post(`/store/orders/${orderId}/refund/`, refundData);
    return response.data;
  }
};

export default storeService; 