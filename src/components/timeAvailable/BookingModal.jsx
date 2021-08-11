import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'

const BookingModal = (props) => {
    
  const handleClose = () => {
    props.modalHandler(false)
  }

  return (
    <>
      <Modal show={props.show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-center">
            You are booking
            <strong className="text-uppercase">
              *{props.modalBody[0].name}*
            </strong>
            please check your choice and verify your booking
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Your venue : {props.modalBody[0].availablePlan}
          <hr />
          Price: {props.modalBody[0].price}
          <hr /> Durations: {props.modalBody[0].timeRange}
          <hr /> Time = {props.modalBody[1]}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default BookingModal
