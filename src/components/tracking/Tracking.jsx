import React from "react";
import "../../styles/Tracking.css"; // Ensure the path is correct
import trackImage from '../../assets/track.jpeg';
export default function Tracking() {
  return (
    <div className="page-container">
      <main className="tracking-page"
       style={{
    backgroundImage: `url(${trackImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
  >
        <h1>Order Tracking</h1>

        <div className="tracking-form">
          <p>Enter your order number and email to track your order</p>

          < FormTracking />
        </div>
      </main>
    </div>
  );
}
