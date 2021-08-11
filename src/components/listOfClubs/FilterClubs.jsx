import React, { useState } from 'react'

import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
// This component will filter the clubs by date and sport
const FilterClubs = () => {
  const [selectedDate, handleDateChange] = useState(new Date())

  return (
    <div className="row bg-white p-3 mb-3 shadow rounded">
      <h3>Find available time</h3>

      <div className="row">
        <div className="col-sm-6 col-md-6 col-lg-3">
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
              format="yyyy/MM/dd"
            />
          </MuiPickersUtilsProvider>
        </div>
      </div>
    </div>
  )
}

export default FilterClubs
