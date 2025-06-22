import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import CertificateVerification from '../../src/components/verification/CertificateVerification';
import { AuthContext } from '../../src/contexts/AuthContext';
import { NotificationContext } from '../../src/contexts/NotificationContext';

const createWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { retry: false },
      mutations: { retry: false },
    },
  });

  const authContextValue = {
    user: { id: '1', name: 'Test User', role: 'employer' },
    loading: false,
  };

  const notificationContextValue = {
    showSuccess: jest.fn(),
    showError: jest.fn(),
    showInfo: jest.fn(),
    showLoading: jest.fn(),
    dismiss: jest.fn(),
  };

  return ({ children }) => (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AuthContext.Provider value={authContextValue}>
          <NotificationContext.Provider value={notificationContextValue}>
            {children}
          </NotificationContext.Provider>
        </AuthContext.Provider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

describe('CertificateVerification', () => {
  it('renders verification form', () => {
    const Wrapper = createWrapper();
    render(<CertificateVerification />, { wrapper: Wrapper });

    expect(screen.getByText('Certificate Verification')).toBeInTheDocument();
    expect(screen.getByText('Upload a degree certificate to verify its authenticity')).toBeInTheDocument();
  });

  it('shows placeholder content', () => {
    const Wrapper = createWrapper();
    render(<CertificateVerification />, { wrapper: Wrapper });

    expect(screen.getByText(/Certificate verification component will be implemented here/)).toBeInTheDocument();
  });
});
