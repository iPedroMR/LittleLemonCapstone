import React, { useState } from "react";
import "./bookingForm.css";

const BookingForm = ({ availableTimes, submitForm }) => {
  const [occasion, setOccasion] = useState("");
  const [guests, setGuests] = useState("");
  const [date, setDate] = useState("");
  const [times, setTimes] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!date || !times || !guests || !occasion) {
      setError("Please fill out all fields.");
    } else {
      submitForm({ date, times, guests, occasion });
      setError("");
    }
  };

  const handleChange = (e) => {
    setDate(e.target.value);
  };

  return (
    <header>
      <section className="booking-form">
        <form onSubmit={handleSubmit}>
          <fieldset>
            <div>
              <label htmlFor="book-date">Choose Date</label>
              <input
                id="book-date"
                value={date}
                onChange={handleChange}
                type="date"
                required
                aria-label="Choose Date"
              />
            </div>
            <div>
              <label htmlFor="book-time">Choose Time</label>
              <select
                id="book-time"
                value={times}
                onChange={(e) => setTimes(e.target.value)}
                required
                aria-label="Choose Time"
              >
                <option value="">Select a Time</option>
                {availableTimes.map((time, index) => (
                  <option key={index}>{time}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="book-guests">Number of Guests</label>
              <input
                id="book-guests"
                min="1"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                type="number"
                placeholder="0"
                max="10"
                required
                aria-label="Number of Guests"
              />
            </div>
            <div>
              <label htmlFor="book-occasion">Occasion</label>
              <select
                id="book-occasion"
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
                required
                aria-label="Occasion"
              >
                <option value="">Select an Option</option>
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Graduation</option>
                <option>Wedding</option>
                <option>Family Gathering</option>
              </select>
            </div>
            <div>
              <input
                type="submit"
                value="Make Your Reservation"
                aria-label="Submit Reservation Form"
              />
            </div>
            {error && <p role="alert">{error}</p>}
          </fieldset>
        </form>
      </section>
    </header>
  );
};

export default BookingForm;
