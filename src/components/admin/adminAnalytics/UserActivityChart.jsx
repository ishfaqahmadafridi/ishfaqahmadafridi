import React from 'react';
import { IoPeopleOutline } from 'react-icons/io5';
import UserActivityBarChart from './UserActivityBarChart';
import ActivityBreakdown from './ActivityBreakdown';

export default function UserActivityChart({ userAnalytics }) {
  const maxLogins = userAnalytics?.daily_logins?.reduce((max, day) => Math.max(max, day.logins), 0) || 1;

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center mb-6">
        <div className="p-3 bg-blue-100 rounded-lg mr-4">
          <IoPeopleOutline className="text-2xl text-blue-600" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900">User Activity</h3>
          <p className="text-sm text-gray-500">Daily login statistics</p>
        </div>
      </div>

      {userAnalytics?.daily_logins && userAnalytics.daily_logins.length > 0 ? (
        <div className="space-y-4">
          <UserActivityBarChart data={userAnalytics.daily_logins} maxValue={maxLogins} />
          <ActivityBreakdown activityBreakdown={userAnalytics.activity_breakdown} />
        </div>
      ) : (
        <p className="text-gray-500 text-center py-8">No user activity data available</p>
      )}
    </div>
  );
}
