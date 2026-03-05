import type { ChangeEvent } from 'react';

export interface ProfileContainerProps {
    activeTab: string;
    setActiveTab: (tab: string) => void;
}

export interface ProfileContentProps {
    activeTab: string;
}

export interface ProfileTabsProps {
    activeTab: string;
    setActiveTab: (tab: string) => void;
}

export interface ProfileImageDisplayProps {
    displayImage: string | null;
    userName: string;
}

export interface ProfileImageRemoveButtonProps {
    onRemove: () => void;
    show: boolean;
}

export interface ProfileImageSelectButtonProps {
    onSelect: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface ProfileImageUploadButtonProps {
    onUpload: () => void;
    isUploading: boolean;
    show: boolean;
}

export interface ProfileMessage {
    type: string;
    text: string;
}

export interface ProfileMessageProps {
    message: ProfileMessage;
}

export interface ProfileFieldProps {
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface ProfileSubmitButtonProps {
    isLoading: boolean;
}
