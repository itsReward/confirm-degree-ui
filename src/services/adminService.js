import apiClient from './api';
import { API_ENDPOINTS } from '../utils/constants';

export const adminService = {
  async getUniversities(params = {}) {
    try {
      const response = await apiClient.get(API_ENDPOINTS.LIST_UNIVERSITIES, { params });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch universities');
    }
  },

  async getSystemHealth() {
    try {
      const response = await apiClient.get(API_ENDPOINTS.SYSTEM_HEALTH);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch system health');
    }
  },

  async getAnalytics(params = {}) {
    try {
      const response = await apiClient.get(API_ENDPOINTS.ANALYTICS, { params });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch analytics');
    }
  },

  async approveUniversity(id) {
    try {
      const response = await apiClient.post(`/admin/universities/${id}/approve`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'University approval failed');
    }
  },

  async suspendUniversity(id, reason) {
    try {
      const response = await apiClient.post(`/admin/universities/${id}/suspend`, { reason });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'University suspension failed');
    }
  },
};

export default adminService;
