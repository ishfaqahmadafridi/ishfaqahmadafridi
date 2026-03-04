import React from 'react';

export default function ActivityBreakdown({ activityBreakdown }) {
  if (!activityBreakdown || activityBreakdown.length === 0) return null;

  return (
    <div className="pt-4 border-t border-gray-200">
      <h4 className="text-sm font-semibold text-gray-700 mb-3">Activity Breakdown</h4>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {activityBreakdown.map((activity) => (
          <div key={activity.activity_type} className="bg-gray-50 rounded-lg p-3">
            <p className="text-xs text-gray-500 capitalize">
              {activity.activity_type.replace('_', ' ')}
            </p>
            <p className="text-xl font-bold text-gray-900">{activity.count}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
