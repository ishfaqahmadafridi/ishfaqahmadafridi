import { useState, useEffect, type FormEvent, type ChangeEvent } from 'react';
import { useProfileStore } from '../zustand/profile/profileStore';
import ChangePasswordMessage from './ChangePasswordMessage';
import ChangePasswordCurrentField from './ChangePasswordCurrentField';
import ChangePasswordNewField from './ChangePasswordNewField';
import ChangePasswordConfirmField from './ChangePasswordConfirmField';
import ChangePasswordSubmitButton from './ChangePasswordSubmitButton';

export default function ChangePasswordForm() {
    const passwordStatus = useProfileStore((state) => state.passwordStatus);
    const passwordMessage = useProfileStore((state) => state.passwordMessage);
    const clearPasswordMessage = useProfileStore((state) => state.clearPasswordMessage);
    const changePassword = useProfileStore((state) => state.changePassword);

    const [passwords, setPasswords] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
    });
    const [validationError, setValidationError] = useState('');

    const isLoading = passwordStatus === 'loading';
    const message = {
        type: passwordStatus === 'succeeded' ? 'success' : (passwordStatus === 'failed' || validationError) ? 'error' : '',
        text: validationError || passwordMessage
    };

    useEffect(() => {
        if (passwordMessage) {
            const timer = setTimeout(() => {
                clearPasswordMessage();
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [passwordMessage, clearPasswordMessage]);

    useEffect(() => {
        if (passwordStatus === 'succeeded') {
            setPasswords({ currentPassword: '', newPassword: '', confirmPassword: '' });
        }
    }, [passwordStatus]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPasswords({ ...passwords, [e.target.name]: e.target.value });
        setValidationError('');
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setValidationError('');

        if (passwords.newPassword !== passwords.confirmPassword) {
            setValidationError('New passwords do not match!');
            return;
        }

        if (passwords.newPassword.length < 6) {
            setValidationError('Password must be at least 6 characters long!');
            return;
        }

        await changePassword({
            current_password: passwords.currentPassword,
            new_password: passwords.newPassword,
        });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6 max-w-lg">
            {message.text && <ChangePasswordMessage message={message} />}
            <ChangePasswordCurrentField value={passwords.currentPassword} onChange={handleChange} />
            <ChangePasswordNewField value={passwords.newPassword} onChange={handleChange} />
            <ChangePasswordConfirmField value={passwords.confirmPassword} onChange={handleChange} />
            <ChangePasswordSubmitButton isLoading={isLoading} />
        </form>
    );
}
