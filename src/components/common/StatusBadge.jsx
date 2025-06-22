import React from 'react';
import { CheckCircle, XCircle, Clock, AlertCircle } from 'lucide-react';

const StatusBadge = ({ status, confidence, size = 'default' }) => {
  const getStatusConfig = () => {
    switch (status?.toLowerCase()) {
      case 'verified':
        return {
          color: 'bg-green-100 text-green-800 border-green-200',
          icon: CheckCircle,
        };
      case 'failed':
        return {
          color: 'bg-red-100 text-red-800 border-red-200',
          icon: XCircle,
        };
      case 'pending':
        return {
          color: 'bg-yellow-100 text-yellow-800 border-yellow-200',
          icon: Clock,
        };
      case 'expired':
        return {
          color: 'bg-gray-100 text-gray-800 border-gray-200',
          icon: AlertCircle,
        };
      case 'revoked':
        return {
          color: 'bg-red-100 text-red-800 border-red-200',
          icon: XCircle,
        };
      default:
        return {
          color: 'bg-gray-100 text-gray-800 border-gray-200',
          icon: Clock,
        };
    }
  };

  const { color, icon: Icon } = getStatusConfig();
  const iconSize = size === 'small' ? 'w-3 h-3' : 'w-4 h-4';
  const textSize = size === 'small' ? 'text-xs' : 'text-sm';
  const padding = size === 'small' ? 'px-2 py-1' : 'px-3 py-1';

  return (
    <div className={`inline-flex items-center ${padding} rounded-full ${textSize} font-medium border ${color}`}>
      <Icon className={iconSize} />
      <span className="ml-1 capitalize">{status}</span>
      {confidence && (
        <span className="ml-1 text-xs">({Math.round(confidence * 100)}%)</span>
      )}
    </div>
  );
};

export default StatusBadge;
