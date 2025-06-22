export const validateEmail = (email) => {
  if (!email) return 'Email is required';
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return 'Please enter a valid email address';
  return null;
};

export const validatePassword = (password) => {
  if (!password) return 'Password is required';
  if (password.length < 8) return 'Password must be at least 8 characters long';
  if (!/(?=.*[a-z])/.test(password)) return 'Password must contain at least one lowercase letter';
  if (!/(?=.*[A-Z])/.test(password)) return 'Password must contain at least one uppercase letter';
  if (!/(?=.*\d)/.test(password)) return 'Password must contain at least one number';
  return null;
};

export const validateRequired = (value, fieldName) => {
  if (!value || (typeof value === 'string' && value.trim() === '')) {
    return `${fieldName} is required`;
  }
  return null;
};

export const validateFileUpload = (file) => {
  const errors = [];
  
  if (!file) {
    errors.push('Please select a file');
    return errors;
  }
  
  // Check file type
  const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg', 'application/pdf'];
  if (!allowedTypes.includes(file.type)) {
    errors.push('File must be PNG, JPEG, or PDF format');
  }
  
  // Check file size (10MB limit)
  const maxSize = 10 * 1024 * 1024;
  if (file.size > maxSize) {
    errors.push('File size must be less than 10MB');
  }
  
  return errors;
};

export const validateCertificateNumber = (certificateNumber) => {
  if (!certificateNumber) return 'Certificate number is required';
  if (certificateNumber.length < 3) return 'Certificate number must be at least 3 characters';
  return null;
};

export const validateStudentId = (studentId) => {
  if (!studentId) return 'Student ID is required';
  if (studentId.length < 3) return 'Student ID must be at least 3 characters';
  return null;
};

export const validateForm = (data, rules) => {
  const errors = {};
  
  Object.keys(rules).forEach(field => {
    const rule = rules[field];
    const value = data[field];
    
    if (rule.required && !value) {
      errors[field] = `${rule.label || field} is required`;
    } else if (value && rule.validator) {
      const error = rule.validator(value);
      if (error) {
        errors[field] = error;
      }
    }
  });
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};
