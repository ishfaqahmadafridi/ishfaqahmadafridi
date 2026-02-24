import React from 'react'

const FormTracking = () => {
    return (
        <div>
            <form>
                <div className="form-group">
                    <label htmlFor="order-number">Order Number</label>
                    <input type="text" id="order-number" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" required />
                </div>
                <button type="submit" className="primary-button">TRACK ORDER</button>
            </form>
        </div>
    )
}

export default FormTracking
