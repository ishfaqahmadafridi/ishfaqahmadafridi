import React from 'react';
import ProfileHeader from './ProfileHeader';
import ProfileImageUpload from './ProfileImageUpload';
import ProfileTabs from './ProfileTabs';
import ProfileContent from './ProfileContent';

export default function ProfileContainer({ activeTab, setActiveTab }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <ProfileHeader />

      <div className="p-8">
        {/* Profile Image Upload Section */}
        <div className="mb-8 pb-8 border-b border-gray-200">
          <h2 className="text-xl font-bold mb-4">Profile Picture</h2>
          <ProfileImageUpload />
        </div>

        {/* Tabs */}
        <ProfileTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Tab Content */}
        <ProfileContent activeTab={activeTab} />
      </div>
    </div>
  );
}
