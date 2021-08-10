import React from "react";
import TimeTable from "../../timeAvailable/TimeTable.jsx";
import { Link } from "react-router-dom";

const Index = ({ id, logo, name }) => {
  return (
    <div id={id} className="row bg-white p-3 mb-3 shadow rounded">
      <div className="col-lg-1 col-2">
        <div className="d-flex flex-column text-center">
          <Link to={`./bookTime/${id}`}>
            <img className="rounded" src={logo} alt="Logo"></img>
          </Link>

          <Link className="ms-1" to={`./bookTime/${id}`}>
            <span> {name}</span>
          </Link>
        </div>
      </div>
      <div className="col-lg-11 col-10">
        <TimeTable />
      </div>
    </div>
  );
};

export default Index;
