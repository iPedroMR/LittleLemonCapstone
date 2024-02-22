import React, { useReducer, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Booking from "./Booking";
import ConfirmedBooking from "./ConfirmedBooking";
import Header from "./Header";

const Main = () => {
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

    !result.includes("17:00") && result.push("17:00");

    dispatch({ type: "UPDATE_TIMES", availableTimes: result });
  };

  const submitAPI = (formData) => {
    return true;
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "UPDATE_TIMES":
        return { ...state, availableTimes: action.availableTimes };
      default:
        return state;
    }
  };

  const initialState = { availableTimes: [] };
  const [state, dispatch] = useReducer(reducer, initialState);

  const navigate = useNavigate();
  const submitForm = (formData) => {
    if (submitAPI(formData)) {
      navigate("/confirmed");
    }
  };

  useEffect(() => {
    fetchAPI(new Date(), dispatch);
  }, []);

  return (
    <main role="main">
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
