// import { useState } from "react";
import Header from "./Header.jsx";
// import Booking from "./Booking.jsx";
import TimeTable from "./TimeTable.jsx";

const Index = () => {
  // const [booking, setBooking] = useState(true);

  return (
    <div className="m-4 bg-light p-4">
     
        <Header></Header>

        <TimeTable></TimeTable>


         {/* {
          booking
          ?
          <Booking></Booking>
          :
          ""
        }  */}
     
    </div>
  );
};

export default Index;
  