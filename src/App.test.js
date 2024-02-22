import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
}));

test("Renders Header and Opens Booking Form", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const headingElement = screen.getByText("Reserve Table");
  expect(headingElement).toBeInTheDocument();

  const reserveButton = screen.getByRole("button");
  fireEvent.click(reserveButton);

  const headingElementNew = screen.getByText("Choose Date");
  expect(headingElementNew).toBeInTheDocument();
});

test("Displays Confirmation Message After Form Submission", () => {
  const navigate = jest.fn();
  const useNavigateMock = jest.spyOn(
    require("react-router-dom"),
    "useNavigate"
  );
  useNavigateMock.mockReturnValue(navigate);

  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  const reserveButton = screen.getByRole("button");
  fireEvent.click(reserveButton);

  // Fill the form before submitting
  const dateInput = screen.getByLabelText("Choose Date");
  fireEvent.change(dateInput, { target: { value: "2024-02-25" } });

  const timeSelect = screen.getByLabelText("Choose Time");
  fireEvent.change(timeSelect, { target: { value: "17:00" } });

  const guestsInput = screen.getByLabelText("Number of Guests");
  fireEvent.change(guestsInput, { target: { value: "2" } });

  const occasionSelect = screen.getByLabelText("Occasion");
  fireEvent.change(occasionSelect, { target: { value: "Birthday" } });

  // Submit the form
  const submitButton = screen.getByText("Make Your Reservation");
  fireEvent.click(submitButton);

  expect(navigate).toHaveBeenCalledWith("/confirmed");
});
