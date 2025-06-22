import React from 'react';

const LoadingSpinner = ({ size = 'default', message }) => {
  const sizes = {
    small: 'h-4 w-4',
    default: 'h-8 w-8',
    large: 'h-12 w-12',
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className={`animate-spin rounded-full border-b-2 border-green-600 ${sizes[size]}`}></div>
      {message && <p className="mt-2 text-sm text-gray-600">{message}</p>}
    </div>
  );
};

export default LoadingSpinner;
