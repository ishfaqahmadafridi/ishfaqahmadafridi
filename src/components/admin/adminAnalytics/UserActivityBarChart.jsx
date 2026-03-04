import React from 'react';

export default function UserActivityBarChart({ data, maxValue }) {
  return (
    <div className="h-64 flex items-end space-x-2">
      {data.map((day, index) => {
        const height = (day.logins / maxValue) * 100;
        return (
          <div key={index} className="flex-1 flex flex-col items-center">
            <div
              className="w-full bg-linear-to-t from-blue-500 to-blue-400 rounded-t-lg hover:from-blue-600 hover:to-blue-500 transition-all cursor-pointer relative group"
              style={{ height: `${height}%`, minHeight: '8px' }}
            >
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {day.logins} logins
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-2 rotate-45 origin-left">
              {new Date(day.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
            </p>
          </div>
        );
      })}
    </div>
  );
}
