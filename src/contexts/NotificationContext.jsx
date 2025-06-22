import React, { createContext, useContext } from 'react';
import toast, { Toaster } from 'react-hot-toast';

// Export the context so it can be imported by separate hook files
export const NotificationContext = createContext();

// Keep the hook here as well for direct import
export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotification must be used within a NotificationProvider');
  }
  return context;
};

export const NotificationProvider = ({ children }) => {
  const showSuccess = (message) => {
    toast.success(message, {
      duration: 4000,
      position: 'top-right',
      style: {
        background: '#059669',
        color: 'white',
      },
    });
  };

  const showError = (message) => {
    toast.error(message, {
      duration: 6000,
      position: 'top-right',
    });
  };

  const showInfo = (message) => {
    toast(message, {
      duration: 4000,
      position: 'top-right',
      icon: 'ℹ️',
    });
  };

  const showLoading = (message) => {
    return toast.loading(message, {
      position: 'top-right',
    });
  };

  const dismiss = (toastId) => {
    toast.dismiss(toastId);
  };

  const value = {
    showSuccess,
    showError,
    showInfo,
    showLoading,
    dismiss,
  };

  return (
      <NotificationContext.Provider value={value}>
        {children}
        <Toaster />
      </NotificationContext.Provider>
  );
};