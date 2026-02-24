import React from 'react';

import"../../styles/Register.css";
import FormRegister from './FormRegister';

export default function Register() {
  return (
    <div className="page-container">
     
      <main className="auth-page">
        <h1>Create Your Account</h1>
        < FormRegister />
      </main>
      
    </div>
  );
}