import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8000/api/v1';
const GATEWAY_URL = process.env.REACT_APP_GATEWAY_URL || 'http://localhost:8080';

// Create axios instances
export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const gatewayClient = axios.create({
  baseURL: GATEWAY_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptors
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

gatewayClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptors
const handleResponse = (response) => response;
const handleError = (error) => {
  if (error.response?.status === 401) {
    localStorage.removeItem('authToken');
    window.location.href = '/login';
  }
  return Promise.reject(error);
};

apiClient.interceptors.response.use(handleResponse, handleError);
gatewayClient.interceptors.response.use(handleResponse, handleError);

export default apiClient;
