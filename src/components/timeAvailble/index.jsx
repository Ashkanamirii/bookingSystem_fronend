import { useState } from "react";
import Header from "./Header.jsx";
import Booking from "./Booking.jsx";
import TimeTable from "./TimeTable.jsx";
import BookingContext from "./../../context/BookingContext";

const Index = () => {
  const [booking, setBooking] = useState(false);

  return (
    <div className="m-4 bg-light p-4">
      <BookingContext.Provider value={[booking, setBooking]}>
        <Header></Header>

        <TimeTable></TimeTable>


         {
          booking
          ?
          <Booking></Booking>
          :
          ""
        } 
      </BookingContext.Provider>
    </div>
  );
};

export default Index;
  