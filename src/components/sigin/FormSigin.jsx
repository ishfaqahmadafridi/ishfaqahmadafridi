import React from 'react'

const FormSigin = ({ setPage }) => {
    return (
        <div>
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
        </div>
    )
}

export default FormSigin
