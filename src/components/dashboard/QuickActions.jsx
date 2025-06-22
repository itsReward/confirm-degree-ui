import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, Search, FileText, Plus } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const QuickActions = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const getActionsForRole = () => {
    if (user?.role === 'employer') {
      return [
        {
          title: 'Verify Certificate',
          description: 'Upload and verify a degree certificate',
          icon: Search,
          action: () => navigate('/verify'),
          color: 'green'
        },
        {
          title: 'View History',
          description: 'See your verification history',
          icon: FileText,
          action: () => navigate('/history'),
          color: 'blue'
        }
      ];
    } else if (user?.role === 'university') {
      return [
        {
          title: 'Submit Degree',
          description: 'Register a new degree certificate',
          icon: Plus,
          action: () => navigate('/submit'),
          color: 'green'
        },
        {
          title: 'Upload Certificate',
          description: 'Upload certificate image',
          icon: Upload,
          action: () => navigate('/submit'),
          color: 'blue'
        },
        {
          title: 'Manage Degrees',
          description: 'View and manage submitted degrees',
          icon: FileText,
          action: () => navigate('/manage'),
          color: 'purple'
        }
      ];
    } else {
      return [
        {
          title: 'System Health',
          description: 'Monitor system status',
          icon: Search,
          action: () => navigate('/system'),
          color: 'green'
        },
        {
          title: 'Universities',
          description: 'Manage university registrations',
          icon: FileText,
          action: () => navigate('/universities'),
          color: 'blue'
        }
      ];
    }
  };

  const actions = getActionsForRole();

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {actions.map((action, index) => {
          const Icon = action.icon;
          return (
            <button
              key={index}
              onClick={action.action}
              className="p-4 border border-gray-200 rounded-lg hover:border-green-300 hover:bg-green-50 transition-colors text-left"
            >
              <div className="flex items-center mb-2">
                <Icon className="w-5 h-5 text-green-600 mr-2" />
                <span className="font-medium text-gray-900">{action.title}</span>
              </div>
              <p className="text-sm text-gray-600">{action.description}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuickActions;
