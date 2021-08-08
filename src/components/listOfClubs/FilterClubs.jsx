import React, { useState } from "react";

import {
  DatePicker,
  KeyboardDatePicker,
  TimePicker,
  DateTimePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const FilterClubs = () => {
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <div className="bg-white p-3 mb-3 shadow rounded container">
      <h3>Find available time</h3>

      <div className="row">
        <div className="col-6">
          <select className="w-100">
            <option value>All Sports</option>
            <option value>Badminton</option>
            <option value>Tennis</option>
            <option value>Padel</option>
          </select>
        </div>
        <div className="col-6">
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              clearable
              value={selectedDate}
              placeholder="10/10/2018"
              onChange={(date) => handleDateChange(date)}
              minDate={new Date()}
              format="MM/dd/yyyy"
            />
          </MuiPickersUtilsProvider>
        </div>
      </div>
    </div>
  );
};

export default FilterClubs;
