import React from "react";

const Booking = (props) => {
  const { title, clubs } = props;
  return (
    <div className="booking">
      <h6>{title}</h6>

      <table className="table table-success table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">Plane</th>
            <th scope="col">Durations</th>
            <th scope="col-2">Price</th>
          </tr>
        </thead>

        <tbody>
          {clubs.map((club, index) => {
            return (
              <tr key={index}>
                <td >{club.availablePlan}</td>
                <td>{club.timeRange}</td>
                <td>{club.price}</td>
                <td>
                  <button type="submit" className="btn btn-primary btn-sm">
                    Book
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Booking;
