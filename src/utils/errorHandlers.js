export const handleApiError = (error) => {
  if (error.response) {
    // Server responded with error status
    const { status, data } = error.response;

    switch (status) {
      case 400:
        return data.message || 'Bad request. Please check your input.';
      case 401:
        return 'Authentication required. Please log in.';
      case 403:
        return 'You do not have permission to perform this action.';
      case 404:
        return 'The requested resource was not found.';
      case 409:
        return data.message || 'A conflict occurred. The resource may already exist.';
      case 422:
        return data.message || 'Validation failed. Please check your input.';
      case 429:
        return 'Too many requests. Please try again later.';
      case 500:
        return 'Internal server error. Please try again later.';
      case 502:
        return 'Bad gateway. The service is temporarily unavailable.';
      case 503:
        return 'Service unavailable. Please try again later.';
      default:
        return data.message || 'An unexpected error occurred.';
    }
  } else if (error.request) {
    // Network error
    return 'Network error. Please check your connection and try again.';
  } else {
    // Other error
    return error.message || 'An unexpected error occurred.';
  }
};

export const logError = (error, context = '') => {
  console.error(`[Error${context ? ` - ${context}` : ''}]:`, error);

  // In production, you might want to send errors to a monitoring service
  if (process.env.NODE_ENV === 'production') {
    // Send to error tracking service (e.g., Sentry)
    // sentry.captureException(error);
  }
};

export const retryOperation = async (operation, maxRetries = 3, delay = 1000) => {
  let lastError;

  for (let i = 0; i < maxRetries; i++) {
    try {
      return await operation();
    } catch (error) {
      lastError = error;

      if (i < maxRetries - 1) {
        await new Promise(resolve => setTimeout(resolve, delay * Math.pow(2, i)));
      }
    }
  }

  throw lastError;
};

export default {
  handleApiError,
  logError,
  retryOperation,
};
