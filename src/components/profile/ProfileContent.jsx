import React from 'react';
import UpdateProfileForm from './UpdateProfileForm';
import ChangePasswordForm from './ChangePasswordForm';

export default function ProfileContent({ activeTab }) {
  return (
    <div className="mt-6">
      {activeTab === 'profile' ? (
        <UpdateProfileForm />
      ) : (
        <ChangePasswordForm />
      )}
    </div>
  );
}
