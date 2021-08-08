import React from "react";
import TimeTable from "../../timeAvailable/TimeTable.jsx";
import { Link } from "react-router-dom";

const Index = ({ id, logo, name }) => {
  return (
    <div
      id={id}
      className="d-flex flex-row bg-white p-3 mb-3 shadow rounded space-between "
    >
      <div className="d-flex flex-column text-center me-2">
        <Link to={`./bookTime/${id}`}>
          <img className="rounded" src={logo} alt="Logo"></img>
        </Link>

        <Link className="ms-1" to={`./bookTime/${id}`}>
          <span> {name}</span>
        </Link>
      </div>
      <TimeTable />
    </div>
  );
};

export default Index;
