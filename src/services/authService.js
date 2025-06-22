import apiClient from './api';
import { API_ENDPOINTS } from '../utils/constants';

export const authService = {
  async login(credentials) {
    try {
      const response = await apiClient.post(API_ENDPOINTS.LOGIN, credentials);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Login failed');
    }
  },

  async register(userData) {
    try {
      const response = await apiClient.post(API_ENDPOINTS.REGISTER, userData);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Registration failed');
    }
  },

  async logout() {
    try {
      await apiClient.post(API_ENDPOINTS.LOGOUT);
    } catch (error) {
      console.error('Logout error:', error);
    }
  },

  async getCurrentUser() {
    try {
      const response = await apiClient.get(API_ENDPOINTS.PROFILE);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to get user profile');
    }
  },

  async refreshToken() {
    try {
      const response = await apiClient.post(API_ENDPOINTS.REFRESH);
      return response.data;
    } catch (error) {
      throw new Error('Token refresh failed');
    }
  },
};

export default authService;
