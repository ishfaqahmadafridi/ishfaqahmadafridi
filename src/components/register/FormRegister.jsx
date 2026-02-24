import React from 'react'

const FormRegister = ({ setPage }) => {
    return (
        <div>

            <form className="auth-form">
                <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" required />
                </div>
                <div className="form-group">
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input type="password" id="confirm-password" required />
                </div>
                <button type="submit" className="primary-button">CREATE ACCOUNT</button>
                <p className="auth-link">
                    Already have an account? <a href="#" onClick={() => setPage("signin")}>Sign in</a>
                </p>
            </form>

        </div>
    )
}

export default FormRegister
