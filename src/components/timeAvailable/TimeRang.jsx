import { useState } from "react";
import { Button, Accordion, Card } from "react-bootstrap";
import Booking from "./Booking.jsx";
function CustomToggle({ children, eventKey }) {
  return (
    <button type="button" style={{ backgroundColor: "pink" }}>
      {children}
    </button>
  );
}
const TimeRang = ({ id, range, toggle, onToggle }) => {
  const [booking, setBooking] = useState(false);

  return (
    <div className="col-lg-1 col-md-4 col-4">
      <Button
        id={id}
        className={`m-1 ${toggle === "0" ? "active-toggle" : ""}`}
        variant="outline-success"
        onClick={onToggle}
      >
        {range}
      </Button>
    </div>
  );
};

export default TimeRang;
