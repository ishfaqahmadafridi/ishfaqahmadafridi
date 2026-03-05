import { useState, type FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../redux/slices/auth/authThunk';
import { selectAuthStatus, selectAuthError } from '../redux/slices/auth/authSlice';
import type { AppDispatch } from '../redux/store';
import SigninBackground from './SigninBackground';
import SigninHeader from './SigninHeader';
import SigninForm from './SigninForm';

export default function Signin() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const status = useSelector(selectAuthStatus);
  const error = useSelector(selectAuthError);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const result = await dispatch(loginUser({ username: email, password } as any));
    if (loginUser.fulfilled.match(result)) {
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-rose-50/30 to-purple-50/30 pt-28 md:pt-32 px-4 pb-8">
      <div className="max-w-md w-full">
        <SigninBackground />

        <div className="relative bg-white/90 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border-2 border-rose-200/60 hover:border-rose-300 hover:shadow-rose-300/30 transition-all duration-500">
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
