import { useState, useEffect } from "react";
import TimeRang from "./TimeRang";
import api from "./TimeRangeApi";
import Booking from "./Booking.jsx";

// INDEX IS PARENT OF TimeTable
const TimeTable = ({ id }) => {
  const [timesAvailable, setTimesAvailable] = useState();
  const [toggle, setToggle] = useState("");

  useEffect(() => {
    // TODO: This should take id and call the API to get time range information for each club.
    setTimesAvailable(api);
  }, []);

  const onToggleHandler = (e, toggledItem) => {
    if (toggle === toggledItem) {
      setToggle("");
    } else {
      // TODO: call Api to get information for clubs and pass to Booking by props
      setToggle(toggledItem);
      console.log(e, toggledItem);
    }
  };

  return (
    <div className="container">
      <div className="row">
        {timesAvailable ? (
          timesAvailable.map((item, index) => (
            <TimeRang
              key={item.id}
              range={item.range}
              id={item.id}
              toggle={toggle === index ? "0" : "1"}
              onToggle={() => onToggleHandler(item.id, index)}
            />
          ))
        ) : (
          <h3>No times available</h3>
        )}
      </div>

      {toggle !== "" && (
        <Booking
          title={"booking"}
          clubs={[
            {
              name: "club1",
              availablePlan: "bana1",
              timeRange: "60min",
              price: "200",
            },
            {
              name: "club2",
              availablePlan: "bana2",
              timeRange: "60min",
              price: "205",
            },
          ]}
        />
      )}
    </div>
  );
};

export default TimeTable;
