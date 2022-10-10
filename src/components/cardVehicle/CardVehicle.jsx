import React, { useState } from 'react'
import ListRepair from '../listRepair/ListRepair';
import { Button, Modal, ModalHeader, ModalBody, ModalTitle, ModalFooter } from 'react-bootstrap'
import './cardVehicle.css'

const CardVehicle = ({ user }) => {

  const { vehicles } = user

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      {vehicles.map((item) => (
        <div className="courses-container">
          <div className="course">
            <div className="course-preview">
              <h6>{item.typeVehicle}</h6>
              <h2>{item.model}</h2>
            </div>
            <div className="course-info">
              <h6>Reparaciones</h6>
              <ListRepair key={item.idVehicles}
                vehicle={item} />
              <button onClick={handleShow} className='btn-vehicle'>Agregar Reparacion</button>
            </div>
          </div>
        </div>
      ))}
      {/* <ModalRepair show={show} handleClose={handleClose} /> */}
      <Modal show={show} onHide={handleClose}>
        <ModalHeader>
          <ModalTitle>Agregar una Reparacion</ModalTitle>
        </ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque totam deserunt placeat. Placeat laudantium aspernatur quos ratione voluptatem ut, aliquam quam alias debitis nobis fugit cumque perspiciatis totam ab tempore!
          <ModalFooter>
            <Button onClick={handleClose}>Close</Button>
            <Button>Guardar</Button>
          </ModalFooter>
        </ModalBody>
      </Modal>
    </>
  )
}

export default CardVehicle