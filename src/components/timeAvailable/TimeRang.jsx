import {useContext} from "react";
import { Button } from "react-bootstrap";
import BookingContext from "../../context/BookingContext";

const TimeRang = ({id,range}) => {
    const [booking, setBooking] = useContext(BookingContext)

  return (
    
      <Button id={id} className="ml-1" variant="outline-success"
      onClick={(e) => setBooking(true)}
      >{range}</Button>
   
  );
};

export default TimeRang;
