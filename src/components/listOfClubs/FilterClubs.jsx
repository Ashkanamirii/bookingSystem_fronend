import React from "react";

const FilterClubs = () => {

    
  return (
    <div className="bg-white p-3 mb-3 shadow rounded">
      <h3>Find available time</h3>
      <form className=" container">
        <div className="form-row">
          <div className="form-group col-lg-6 ">
            <select className="w-100">
              <option value>All Sports</option>
              <option value>Badminton</option>
              <option value>Tennis</option>
              <option value>Padel</option>
            </select>
          </div>

          <div className="form-group col-lg-6">
            <input type="date" className="w-100" />
          </div>
        </div>

        <div className="form-group">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FilterClubs;
