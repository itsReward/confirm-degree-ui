import React from 'react';
import { Search } from 'lucide-react';

const Logo = ({ size = 'default' }) => {
  const sizes = {
    small: { icon: 'w-6 h-6', text: 'text-lg', subtitle: 'text-xs' },
    default: { icon: 'w-8 h-8', text: 'text-xl', subtitle: 'text-sm' },
    large: { icon: 'w-12 h-12', text: 'text-3xl', subtitle: 'text-base' },
  };

  const { icon, text, subtitle } = sizes[size];

  return (
    <div className="flex items-center space-x-2">
      <div className="relative">
        <Search className={`${icon} text-green-600`} strokeWidth={2} />
      </div>
      <span className={`${text} font-bold text-gray-900`}>Con-firm</span>
      <span className={`${subtitle} text-gray-500 hidden sm:block`}>
        Degree Attestation Made Easy
      </span>
    </div>
  );
};

export default Logo;
