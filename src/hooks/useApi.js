import { useState, useEffect } from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import apiClient from '../services/api';

export const useApi = (endpoint, options = {}) => {
  return useQuery(endpoint, () => apiClient.get(endpoint).then(res => res.data), options);
};

export const useApiMutation = (endpoint, method = 'POST') => {
  const queryClient = useQueryClient();

  return useMutation(
    (data) => {
      switch (method.toUpperCase()) {
        case 'POST':
          return apiClient.post(endpoint, data).then(res => res.data);
        case 'PUT':
          return apiClient.put(endpoint, data).then(res => res.data);
        case 'DELETE':
          return apiClient.delete(endpoint).then(res => res.data);
        default:
          throw new Error(`Unsupported method: ${method}`);
      }
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries();
      },
    }
  );
};

export default useApi;
