import React from "react";

const ConfirmedBooking = () => {
  return (
    <header aria-labelledby="confirmation-message">
      <section>
        <div className="confirmation-message">
          <h1>Booking Confirmed!</h1>
          <p>Your booking has been successfully confirmed.</p>
          <p>Thank you for choosing Little Lemon Restaurant!</p>
        </div>
      </section>
    </header>
  );
};

export default ConfirmedBooking;
