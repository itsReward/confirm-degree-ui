import apiClient from './api';
import { API_ENDPOINTS } from '../utils/constants';

export const verificationService = {
  async verifyCertificate(formData) {
    try {
      const response = await apiClient.post(API_ENDPOINTS.VERIFY_CERTIFICATE, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Verification failed');
    }
  },

  async batchVerify(formData) {
    try {
      const response = await apiClient.post(API_ENDPOINTS.VERIFY_BATCH, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Batch verification failed');
    }
  },

  async extractHash(formData) {
    try {
      const response = await apiClient.post(API_ENDPOINTS.EXTRACT_HASH, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Hash extraction failed');
    }
  },

  async getVerificationHistory(params = {}) {
    try {
      const response = await apiClient.get(API_ENDPOINTS.VERIFICATION_HISTORY, { params });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch verification history');
    }
  },

  async getVerification(id) {
    try {
      const endpoint = API_ENDPOINTS.GET_VERIFICATION.replace(':id', id);
      const response = await apiClient.get(endpoint);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch verification');
    }
  },
};

export default verificationService;
