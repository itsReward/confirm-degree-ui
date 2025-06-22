import React, { useState, useEffect } from 'react';
import StatusBadge from '../common/StatusBadge';
import { formatDateTime } from '../../utils/helpers';

const RecentActivity = ({ userRole }) => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    // Mock data based on user role
    const getActivitiesForRole = () => {
      if (userRole === 'employer') {
        return [
          {
            id: 1,
            type: 'verification',
            title: 'Certificate BSc-12700 verified',
            timestamp: new Date(Date.now() - 2 * 60 * 1000).toISOString(),
            status: 'verified',
            details: 'John Doe - Computer Science'
          },
          {
            id: 2,
            type: 'verification',
            title: 'Certificate MSc-45678 verified',
            timestamp: new Date(Date.now() - 15 * 60 * 1000).toISOString(),
            status: 'verified',
            details: 'Jane Smith - Data Science'
          },
          {
            id: 3,
            type: 'verification',
            title: 'Certificate BSc-99999 failed verification',
            timestamp: new Date(Date.now() - 60 * 60 * 1000).toISOString(),
            status: 'failed',
            details: 'Invalid certificate detected'
          }
        ];
      } else if (userRole === 'university') {
        return [
          {
            id: 1,
            type: 'submission',
            title: 'New degree submitted: BSc Computer Science',
            timestamp: new Date(Date.now() - 30 * 60 * 1000).toISOString(),
            status: 'pending',
            details: 'Student ID: ST2024001'
          },
          {
            id: 2,
            type: 'verification_request',
            title: 'Verification request for MSc-45678',
            timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
            status: 'verified',
            details: 'Requested by Tech Solutions Inc.'
          },
          {
            id: 3,
            type: 'submission',
            title: 'Degree certificate uploaded',
            timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
            status: 'verified',
            details: 'Certificate BSc-12700'
          }
        ];
      } else {
        return [
          {
            id: 1,
            type: 'university_registration',
            title: 'New university registered: Tech Institute',
            timestamp: new Date(Date.now() - 15 * 60 * 1000).toISOString(),
            status: 'pending',
            details: 'Awaiting verification'
          },
          {
            id: 2,
            type: 'system_alert',
            title: 'System maintenance completed',
            timestamp: new Date(Date.now() - 60 * 60 * 1000).toISOString(),
            status: 'verified',
            details: 'All services operational'
          },
          {
            id: 3,
            type: 'verification',
            title: 'High verification volume detected',
            timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(),
            status: 'verified',
            details: '500+ verifications in last hour'
          }
        ];
      }
    };

    setActivities(getActivitiesForRole());
  }, [userRole]);

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
      </div>
      <div className="divide-y divide-gray-200 max-h-96 overflow-y-auto">
        {activities.map((activity) => (
          <div key={activity.id} className="px-6 py-4 hover:bg-gray-50">
            <div className="flex items-start justify-between">
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-3">
                  <div className={`w-2 h-2 rounded-full flex-shrink-0 ${
                    activity.status === 'verified' ? 'bg-green-400' :
                    activity.status === 'pending' ? 'bg-yellow-400' :
                    'bg-red-400'
                  }`} />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {activity.title}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {activity.details}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2 ml-4">
                <StatusBadge status={activity.status} size="small" />
                <span className="text-xs text-gray-500 whitespace-nowrap">
                  {formatDateTime(activity.timestamp)}
                </span>
              </div>
            </div>
          </div>
        ))}

        {activities.length === 0 && (
          <div className="px-6 py-8 text-center">
            <p className="text-gray-500">No recent activity</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecentActivity;
