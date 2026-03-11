import { useState, type FormEvent, type ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../zustand/auth/authStore';
import RegisterErrorAlert from './RegisterErrorAlert';
import RegisterUsernameField from './RegisterUsernameField';
import RegisterEmailField from './RegisterEmailField';
import RegisterPasswordField from './RegisterPasswordField';
import RegisterSubmitButton from './RegisterSubmitButton';

export default function RegisterFormContainer() {
    const navigate = useNavigate();
    const status = useAuthStore((state) => state.status);
    const error = useAuthStore((state) => state.error);
    const registerUser = useAuthStore((state) => state.registerUser);
    
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            await registerUser(formData);
            navigate('/signin');
        } catch (err) {
            // handle error smoothly via store state
        }
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <form className="space-y-5" onSubmit={handleSubmit}>
            <RegisterErrorAlert error={error} />
            <RegisterUsernameField onChange={handleChange} />
            <RegisterEmailField onChange={handleChange} />
            <RegisterPasswordField onChange={handleChange} />
            <RegisterSubmitButton status={status} />
        </form>
    );
}
