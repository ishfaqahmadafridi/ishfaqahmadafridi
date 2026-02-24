import React from 'react';
import"../../styles/Signin.css";
import FormSigin from './FormSigin';

export default function SignIn() {
  return (
    <div className="page-container">
      <main className="auth-page">
        <h1>Sign In to Your Account</h1>

        < FormSigin />

      </main>
    </div>
  );
}