import React from 'react';
import"../styles/Signin.css";

export default function SignIn({setPage}) {
  return (
    <div className="page-container">
      <main className="auth-page">
        <h1>Sign In to Your Account</h1>
        <form className="auth-form">
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" required />
          </div>
          <button type="submit" className="primary-button">SIGN IN</button>
          <p className="auth-link">
            Don't have an account? <a href="#" onClick={() => setPage("register")}>Create one</a>
          </p>
        </form>
      </main>
    </div>
  );
}