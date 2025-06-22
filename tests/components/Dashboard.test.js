import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import Dashboard from '../../src/components/dashboard/Dashboard';
import { AuthContext } from '../../src/contexts/AuthContext';

const createWrapper = (user) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { retry: false },
      mutations: { retry: false },
    },
  });

  const authContextValue = {
    user,
    loading: false,
    login: jest.fn(),
    logout: jest.fn(),
  };

  return ({ children }) => (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AuthContext.Provider value={authContextValue}>
          {children}
        </AuthContext.Provider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

describe('Dashboard', () => {
  it('renders welcome message for employer', () => {
    const user = { name: 'John Doe', role: 'employer' };
    const Wrapper = createWrapper(user);

    render(<Dashboard />, { wrapper: Wrapper });

    expect(screen.getByText('Welcome back, John Doe')).toBeInTheDocument();
    expect(screen.getByText(/what's happening with your account today/)).toBeInTheDocument();
  });

  it('renders welcome message for university', () => {
    const user = { name: 'Jane Smith', role: 'university' };
    const Wrapper = createWrapper(user);

    render(<Dashboard />, { wrapper: Wrapper });

    expect(screen.getByText('Welcome back, Jane Smith')).toBeInTheDocument();
    expect(screen.getByText(/what's happening with your account today/)).toBeInTheDocument();
  });

  it('renders welcome message for admin', () => {
    const user = { name: 'Admin User', role: 'admin' };
    const Wrapper = createWrapper(user);

    render(<Dashboard />, { wrapper: Wrapper });

    expect(screen.getByText('Welcome back, Admin User')).toBeInTheDocument();
    expect(screen.getByText(/what's happening with your platform today/)).toBeInTheDocument();
  });

  it('displays recent activity section', () => {
    const user = { name: 'Test User', role: 'employer' };
    const Wrapper = createWrapper(user);

    render(<Dashboard />, { wrapper: Wrapper });

    expect(screen.getByText('Recent Activity')).toBeInTheDocument();
  });
});
