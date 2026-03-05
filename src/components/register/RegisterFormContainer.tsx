import { useState, type FormEvent, type ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../redux/slices/auth/authThunk';
import { selectAuthStatus, selectAuthError } from '../redux/slices/auth/authSlice';
import type { AppDispatch } from '../redux/store';
import RegisterErrorAlert from './RegisterErrorAlert';
import RegisterUsernameField from './RegisterUsernameField';
import RegisterEmailField from './RegisterEmailField';
import RegisterPasswordField from './RegisterPasswordField';
import RegisterSubmitButton from './RegisterSubmitButton';

export default function RegisterFormContainer() {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const status = useSelector(selectAuthStatus);
    const error = useSelector(selectAuthError);
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const result = await dispatch(registerUser(formData as any));
        if (registerUser.fulfilled.match(result)) {
            navigate('/signin');
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
