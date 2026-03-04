import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '../redux/slices/profile/profileThunk';
import { selectProfileData, selectUpdateStatus, selectUpdateMessage, clearUpdateMessage } from '../redux/slices/profile/profileSlice';
import UpdateProfileMessage from './UpdateProfileMessage';
import UpdateProfileNameField from './UpdateProfileNameField';
import UpdateProfileUsernameField from './UpdateProfileUsernameField';
import UpdateProfileEmailField from './UpdateProfileEmailField';
import UpdateProfileSubmitButton from './UpdateProfileSubmitButton';

export default function UpdateProfileForm() {
  const dispatch = useDispatch();
  const profileData = useSelector(selectProfileData);
  const updateStatus = useSelector(selectUpdateStatus);
  const updateMessage = useSelector(selectUpdateMessage);
  
  const [formData, setFormData] = useState({
    name: profileData.name || '',
    email: profileData.email || '',
    username: profileData.username || '',
  });

  const isLoading = updateStatus === 'loading';
  const message = {
    type: updateStatus === 'succeeded' ? 'success' : updateStatus === 'failed' ? 'error' : '',
    text: updateMessage
  };

  useEffect(() => {
    // Clear message after 3 seconds
    if (updateMessage) {
      const timer = setTimeout(() => {
        dispatch(clearUpdateMessage());
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [updateMessage, dispatch]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(updateProfile(formData));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <UpdateProfileMessage message={message} />
      <UpdateProfileNameField value={formData.name} onChange={handleChange} />
      <UpdateProfileUsernameField value={formData.username} onChange={handleChange} />
      <UpdateProfileEmailField value={formData.email} onChange={handleChange} />
      <UpdateProfileSubmitButton isLoading={isLoading} />
    </form>
  );
}
