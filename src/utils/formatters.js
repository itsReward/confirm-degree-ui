export const formatDate = (dateString, options = {}) => {
  if (!dateString) return 'N/A';

  try {
    const date = new Date(dateString);
    const defaultOptions = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    };

    return date.toLocaleDateString('en-US', { ...defaultOptions, ...options });
  } catch (error) {
    return 'Invalid Date';
  }
};

export const formatDateTime = (dateString, options = {}) => {
  if (!dateString) return 'N/A';

  try {
    const date = new Date(dateString);
    const defaultOptions = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    };

    return date.toLocaleString('en-US', { ...defaultOptions, ...options });
  } catch (error) {
    return 'Invalid Date';
  }
};

export const formatTimeAgo = (dateString) => {
  if (!dateString) return 'N/A';

  try {
    const date = new Date(dateString);
    const now = new Date();
    const diffInMs = now - date;
    const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);

    if (diffInMinutes < 1) return 'Just now';
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    if (diffInHours < 24) return `${diffInHours}h ago`;
    if (diffInDays < 7) return `${diffInDays}d ago`;

    return formatDate(dateString);
  } catch (error) {
    return 'Invalid Date';
  }
};

export const formatFileSize = (bytes) => {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

export const formatCurrency = (amount, currency = 'USD') => {
  if (amount == null) return '$0.00';

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
  }).format(amount);
};

export const formatPercentage = (value, decimals = 1) => {
  if (value == null) return '0%';
  return `${parseFloat(value).toFixed(decimals)}%`;
};

export const formatNumber = (number, decimals = 0) => {
  if (number == null) return '0';
  return parseFloat(number).toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
};

export const truncateText = (text, maxLength = 50) => {
  if (!text) return '';
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

export const capitalizeFirst = (str) => {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

export const formatPhoneNumber = (phoneNumber) => {
  if (!phoneNumber) return '';

  const cleaned = phoneNumber.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);

  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }

  return phoneNumber;
};

export default {
  formatDate,
  formatDateTime,
  formatTimeAgo,
  formatFileSize,
  formatCurrency,
  formatPercentage,
  formatNumber,
  truncateText,
  capitalizeFirst,
  formatPhoneNumber,
};
