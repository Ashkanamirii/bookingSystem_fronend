import { useState } from "react";
import { Button, Accordion, Card } from "react-bootstrap";
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
    <Accordion activeKey={toggle}>
      <Button
        id={id}
        className="m-1"
        variant="outline-success"
        onClick={onToggle}
      >
        {range}
      </Button>

      <Accordion.Collapse eventKey={"0"}>
        <Card.Body>Hello! I'm the body</Card.Body>
      </Accordion.Collapse>
    </Accordion>
  );
};

export default TimeRang;
