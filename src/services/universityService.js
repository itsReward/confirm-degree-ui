import apiClient from './api';
import { API_ENDPOINTS } from '../utils/constants';

export const universityService = {
  async submitDegree(degreeData) {
    try {
      const response = await apiClient.post(API_ENDPOINTS.SUBMIT_DEGREE, degreeData);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Degree submission failed');
    }
  },

  async getDegrees(params = {}) {
    try {
      const response = await apiClient.get(API_ENDPOINTS.LIST_DEGREES, { params });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch degrees');
    }
  },

  async updateDegree(id, degreeData) {
    try {
      const endpoint = API_ENDPOINTS.UPDATE_DEGREE.replace(':id', id);
      const response = await apiClient.put(endpoint, degreeData);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Degree update failed');
    }
  },

  async revokeDegree(id, reason) {
    try {
      const endpoint = API_ENDPOINTS.REVOKE_DEGREE.replace(':id', id);
      const response = await apiClient.post(endpoint, { reason });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Degree revocation failed');
    }
  },

  async uploadCertificate(formData) {
    try {
      const response = await apiClient.post(API_ENDPOINTS.UPLOAD_CERTIFICATE, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Certificate upload failed');
    }
  },
};

export default universityService;
