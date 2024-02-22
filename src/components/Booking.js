// Booking.js
import React from "react";
import BookingForm from "./BookingForm";

const Booking = ({ availableTimes, submitForm }) => {
  return (
    <BookingForm availableTimes={availableTimes} submitForm={submitForm} />
  );
};

export default Booking;
