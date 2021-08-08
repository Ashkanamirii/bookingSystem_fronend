import { useState, useEffect } from "react";
import TimeRang from "./TimeRang";
import api from "./TimeRangeApi";

const TimeTable = ({ id }) => {
  const [timesAvailable, setTimesAvailable] = useState();
  const [toggle, setToggle] = useState("");

  useEffect(() => {
    // TODO: This should take id and call the API to get time range information.
    setTimesAvailable(api);
  }, []);

  return (
    <div className="d-flex flex-row">
      {timesAvailable ? (
        timesAvailable.map((item, index) => (
          <TimeRang
            key={item.id}
            range={item.range}
            id={item.id}
            toggle={toggle === index ? "0" : "1"}
            onToggle={() => setToggle(index)}
          />
        ))
      ) : (
        <h3>No times available</h3>
      )}
    </div>
  );
};

export default TimeTable;
