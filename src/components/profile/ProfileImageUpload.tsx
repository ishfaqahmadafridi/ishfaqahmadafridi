import { useState, type ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uploadProfileImage } from '../redux/slices/profile/profileThunk';
import { selectProfileData, selectImageStatus, removeProfileImage } from '../redux/slices/profile/profileSlice';
import { selectUser } from '../redux/slices/auth/authSlice';
import type { AppDispatch } from '../redux/store';
import ProfileImageDisplay from './ProfileImageDisplay';
import ProfileImageRemoveButton from './ProfileImageRemoveButton';
import ProfileImageSelectButton from './ProfileImageSelectButton';
import ProfileImageUploadButton from './ProfileImageUploadButton';
import ProfileImageHint from './ProfileImageHint';

export default function ProfileImageUpload() {
    const dispatch = useDispatch<AppDispatch>();
    const profileData = useSelector(selectProfileData);
    const authUser = useSelector(selectUser);
    const imageStatus = useSelector(selectImageStatus);

    const [previewImage, setPreviewImage] = useState<string | null>(null);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const isUploading = imageStatus === 'loading';
    const profileImage = profileData.profileImage;

    const handleImageSelect = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setSelectedFile(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleImageUpload = async () => {
        if (!selectedFile) return;
        await dispatch(uploadProfileImage(selectedFile as any));
        setPreviewImage(null);
        setSelectedFile(null);
    };

    const handleRemoveImage = () => {
        dispatch(removeProfileImage());
        setPreviewImage(null);
        setSelectedFile(null);
    };

    const displayImage = previewImage || profileImage;
    const userName = profileData.name || profileData.username || authUser?.username || 'User';

    return (
        <div className="flex items-center gap-6">
            <div className="relative">
                <ProfileImageDisplay displayImage={displayImage} userName={userName} />
                <ProfileImageRemoveButton onRemove={handleRemoveImage} show={!!displayImage} />
            </div>
            <div className="flex-1">
                <div className="flex items-center gap-3">
                    <ProfileImageSelectButton onSelect={handleImageSelect} />
                    <ProfileImageUploadButton onUpload={handleImageUpload} isUploading={isUploading} show={!!previewImage} />
                </div>
                <ProfileImageHint />
            </div>
        </div>
    );
}
