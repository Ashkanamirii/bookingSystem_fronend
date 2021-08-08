import { useState } from "react";
import { Button } from "react-bootstrap";

const TimeRang = ({ id, range }) => {
  const [booking, setBooking] = useState(false);

  return (
    <Button
      id={id}
      className="ml-1"
      variant="outline-success"
      onClick={() => setBooking(true)}
    >
      {range}
    </Button>
  );
};

export default TimeRang;
