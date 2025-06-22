import React, { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { CheckCircle, Clock, Building, BarChart, Award, Users } from 'lucide-react';
import StatsCard from './StatsCard';
import RecentActivity from './RecentActivity';

const Dashboard = () => {
  const { user } = useAuth();
  const [stats, setStats] = useState({
    totalVerifications: 1247,
    successRate: 94.2,
    activeUniversities: 45,
    pendingRequests: 23,
    totalDegrees: 567,
    monthlyRevenue: 12450
  });

  const getStatsForRole = () => {
    if (user?.role === 'employer') {
      return [
        {
          title: 'Total Verifications',
          value: stats.totalVerifications.toLocaleString(),
          icon: CheckCircle,
          color: 'green',
          description: 'Certificates verified'
        },
        {
          title: 'Success Rate',
          value: `${stats.successRate}%`,
          icon: BarChart,
          color: 'blue',
          description: 'Verification success rate'
        },
        {
          title: 'This Month',
          value: '89',
          icon: Clock,
          color: 'yellow',
          description: 'Verifications this month'
        },
        {
          title: 'Cost Savings',
          value: '$2,340',
          icon: BarChart,
          color: 'purple',
          description: 'Saved vs manual verification'
        }
      ];
    } else if (user?.role === 'university') {
      return [
        {
          title: 'Total Degrees',
          value: stats.totalDegrees.toLocaleString(),
          icon: Award,
          color: 'green',
          description: 'Degrees registered'
        },
        {
          title: 'Verifications',
          value: '1,234',
          icon: CheckCircle,
          color: 'blue',
          description: 'Times verified'
        },
        {
          title: 'This Month',
          value: '45',
          icon: Clock,
          color: 'yellow',
          description: 'New submissions'
        },
        {
          title: 'Active Students',
          value: '892',
          icon: Users,
          color: 'purple',
          description: 'Students with verified degrees'
        }
      ];
    } else {
      return [
        {
          title: 'Total Verifications',
          value: stats.totalVerifications.toLocaleString(),
          icon: CheckCircle,
          color: 'green',
          description: 'Platform verifications'
        },
        {
          title: 'Universities',
          value: stats.activeUniversities.toString(),
          icon: Building,
          color: 'blue',
          description: 'Active universities'
        },
        {
          title: 'Revenue',
          value: `${stats.monthlyRevenue.toLocaleString()}`,
          icon: BarChart,
          color: 'yellow',
          description: 'Monthly revenue'
        },
        {
          title: 'Success Rate',
          value: `${stats.successRate}%`,
          icon: BarChart,
          color: 'purple',
          description: 'Platform success rate'
        }
      ];
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">
          Welcome back, {user?.name}
        </h1>
        <p className="text-gray-600">
          Here's what's happening with your {user?.role === 'admin' ? 'platform' : 'account'} today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {getStatsForRole().map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      {/* Recent Activity */}
      <RecentActivity userRole={user?.role} />
    </div>
  );
};

export default Dashboard;
