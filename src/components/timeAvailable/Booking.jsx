import React, { useState } from 'react'
import BookingModal from './BookingModal.jsx'

const Booking = (props) => {
  const { title, clubs } = props
  const [show, setShow] = useState(false)
  const [modalBody, setModalBody] = useState()

  const bookingHandler = (club) => {
    // TODO: Show modal to the user for verify and payment
    setShow(true)
    setModalBody([ club ,props.bookingTime])
  }
  const modalHandler = (x) => {
    setShow(x)
  }
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
                <td>{club.availablePlan}</td>
                <td>{club.timeRange}</td>
                <td>{club.price}</td>
                <td>
                  <button
                    onClick={() => bookingHandler(club)}
                    className="btn btn-primary btn-sm"
                  >
                    Book
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      {show ? (
        <BookingModal
          modalHandler={modalHandler}
          show={show}
          modalBody={modalBody}
        ></BookingModal>
      ) : (
        <></>
      )}
    </div>
  )
}

export default Booking
