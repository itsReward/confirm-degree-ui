export const API_ENDPOINTS = {
  // Authentication
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
  LOGOUT: '/auth/logout',
  REFRESH: '/auth/refresh',
  PROFILE: '/auth/profile',

  // Certificate Verification
  VERIFY_CERTIFICATE: '/verify/',
  VERIFY_BATCH: '/verify/batch',
  EXTRACT_HASH: '/verify/extract-hash',
  
  // Certificate Management
  UPLOAD_CERTIFICATE: '/certificates/upload',
  LIST_CERTIFICATES: '/certificates/',
  GET_CERTIFICATE: '/certificates/:id',
  DELETE_CERTIFICATE: '/certificates/:id',
  
  // University Portal
  SUBMIT_DEGREE: '/degrees/submit',
  LIST_DEGREES: '/degrees/',
  UPDATE_DEGREE: '/degrees/:id',
  REVOKE_DEGREE: '/degrees/:id/revoke',
  
  // Employer Portal
  VERIFICATION_HISTORY: '/verifications/',
  GET_VERIFICATION: '/verifications/:id',
  
  // Admin
  LIST_UNIVERSITIES: '/admin/universities',
  SYSTEM_HEALTH: '/admin/health',
  ANALYTICS: '/admin/analytics',
};

export const USER_ROLES = {
  ADMIN: 'admin',
  UNIVERSITY: 'university',
  EMPLOYER: 'employer',
};

export const VERIFICATION_STATUS = {
  VERIFIED: 'VERIFIED',
  FAILED: 'FAILED',
  PENDING: 'PENDING',
  EXPIRED: 'EXPIRED',
  REVOKED: 'REVOKED',
};

export const PAYMENT_METHODS = {
  CREDIT_CARD: 'CREDIT_CARD',
  BANK_TRANSFER: 'BANK_TRANSFER',
  CRYPTO: 'CRYPTO',
};

export const FILE_CONSTRAINTS = {
  MAX_SIZE: 10 * 1024 * 1024, // 10MB
  ALLOWED_TYPES: ['.png', '.jpg', '.jpeg', '.pdf'],
  MIME_TYPES: ['image/png', 'image/jpeg', 'image/jpg', 'application/pdf'],
};

export const DEGREE_CLASSIFICATIONS = [
  'First Class',
  'Second Class Upper',
  'Second Class Lower',
  'Third Class',
  'Pass',
  'Distinction',
  'Merit',
];
