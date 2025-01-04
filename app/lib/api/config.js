// Configuration de base pour l'API
const API_CONFIG = {
  BASE_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1',
  TIMEOUT: 15000,
  DEFAULT_HEADERS: {
    'Content-Type': 'application/json',
  }
};

export default API_CONFIG; 