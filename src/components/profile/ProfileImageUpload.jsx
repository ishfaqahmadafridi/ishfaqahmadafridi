import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uploadProfileImage } from '../redux/slices/profile/profileThunk';
import { selectProfileData, selectImageStatus, removeProfileImage } from '../redux/slices/profile/profileSlice';
import ProfileImageDisplay from './ProfileImageDisplay';
import ProfileImageRemoveButton from './ProfileImageRemoveButton';
import ProfileImageSelectButton from './ProfileImageSelectButton';
import ProfileImageUploadButton from './ProfileImageUploadButton';
import ProfileImageHint from './ProfileImageHint';

export default function ProfileImageUpload() {
  const dispatch = useDispatch();
  const profileData = useSelector(selectProfileData);
  const imageStatus = useSelector(selectImageStatus);
  
  const [previewImage, setPreviewImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const isUploading = imageStatus === 'loading';
  const profileImage = profileData.profileImage;

  const handleImageSelect = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageUpload = async () => {
    if (!selectedFile) return;
    
    // Dispatch Redux thunk with the file
    await dispatch(uploadProfileImage(selectedFile));
    
    // Clear preview after successful upload
    setPreviewImage(null);
    setSelectedFile(null);
  };

  const handleRemoveImage = () => {
    dispatch(removeProfileImage());
    setPreviewImage(null);
    setSelectedFile(null);
  };

  const displayImage = previewImage || profileImage;
  const userName = profileData.name || 'User';

  return (
    <div className="flex items-center gap-6">
      <div className="relative">
        <ProfileImageDisplay displayImage={displayImage} userName={userName} />
        <ProfileImageRemoveButton onRemove={handleRemoveImage} show={!!displayImage} />
      </div>

      <div className="flex-1">
        <div className="flex items-center gap-3">
          <ProfileImageSelectButton onSelect={handleImageSelect} />
          <ProfileImageUploadButton 
            onUpload={handleImageUpload} 
            isUploading={isUploading} 
            show={!!previewImage} 
          />
        </div>
        <ProfileImageHint />
      </div>
    </div>
  );
}
