import React, { useReducer, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Booking from "./Booking";
import ConfirmedBooking from "./ConfirmedBooking";
import Header from "./Header";

const Main = () => {
  // Function to fetch available booking times from API
  const fetchAPI = (date, dispatch) => {
    const result = [];
    for (let i = 17; i <= 23; i++) {
      if (Math.random() < 0.5) {
        result.push(i + ":00");
      }
      if (Math.random() < 0.5) {
        result.push(i + ":30");
      }
    }

    dispatch({ type: "UPDATE_TIMES", availableTimes: result });
  };

  // Function to submit booking form data to API
  const submitAPI = (formData) => {
    return true; // Mock implementation, always returns true
  };

  // Reducer function to update available booking times
  const reducer = (state, action) => {
    switch (action.type) {
      case "UPDATE_TIMES":
        return { ...state, availableTimes: action.availableTimes };
      default:
        return state;
    }
  };

  // Initial state for available booking times
  const initialState = { availableTimes: [] };

  // useReducer hook to manage state of available booking times
  const [state, dispatch] = useReducer(reducer, initialState);

  // Function to handle form submission
  const navigate = useNavigate();
  const submitForm = (formData) => {
    if (submitAPI(formData)) {
      navigate("/confirmed");
    }
  };

  // Fetch available booking times when component mounts
  useEffect(() => {
    fetchAPI(new Date(), dispatch);
  }, []);

  return (
    <main>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route
          path="/booking"
          element={
            <Booking
              availableTimes={state.availableTimes}
              submitForm={submitForm}
            />
          }
        />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </main>
  );
};

export default Main;
