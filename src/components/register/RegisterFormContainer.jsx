import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../redux/slices/uiSlice/uiSlice';
import { registerUser } from '../redux/slices/auth/authThunk';
import { selectAuthStatus, selectAuthError } from '../redux/slices/auth/authSlice';
import RegisterErrorAlert from './RegisterErrorAlert';
import RegisterUsernameField from './RegisterUsernameField';
import RegisterEmailField from './RegisterEmailField';
import RegisterPasswordField from './RegisterPasswordField';
import RegisterSubmitButton from './RegisterSubmitButton';

export default function RegisterFormContainer() {
  const dispatch = useDispatch();
  const status = useSelector(selectAuthStatus);
  const error = useSelector(selectAuthError);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await dispatch(registerUser(formData));
    if (registerUser.fulfilled.match(result)) {
      dispatch(setPage('signin'));
    }
  };

  const handleChange = (e) => {
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
