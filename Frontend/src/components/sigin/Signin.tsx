import { useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../zustand/auth/authStore';
import SigninBackground from './SigninBackground';
import SigninHeader from './SigninHeader';
import SigninForm from './SigninForm';
import { useEffect } from 'react';
import api from '../../api/client';

export default function Signin() {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Log view_signin activity
    api.post('/activity/log/', { activity_type: 'view_signin' })
       .catch(err => console.error('Failed to log signin view', err));
  }, []);

  const status = useAuthStore((state) => state.status);
  const error = useAuthStore((state) => state.error);
  const loginUser = useAuthStore((state) => state.loginUser);
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await loginUser({ username: email, password });
      // Redirect occurs within the component once auth succeeds (we could check if we throw to stay here)
      // Actually we should navigate when useAuthStore finishes without throwing.
      navigate('/');
    } catch(err) {
       // Ignore, the store handles the error state which `error` will pick up
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background dark:bg-black pt-28 md:pt-32 px-4 pb-8 transition-colors duration-500">
      <div className="max-w-md w-full">
        <SigninBackground />

        <div className="relative bg-background/90 dark:bg-black/90 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border-2 border-border transition-all duration-500">
          <SigninHeader />
          <SigninForm
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handleSubmit={handleSubmit}
            status={status}
            error={error}
          />
        </div>
      </div>
    </div>
  );
}
