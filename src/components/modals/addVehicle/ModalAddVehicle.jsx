import React, { useState } from 'react'
import { Button, Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle } from 'react-bootstrap'

const ModalAddVehicle = ({show}) => {

  return (
      <Modal show={show} size='lg'>
        <ModalHeader>
          <ModalTitle>
            Agregar Vehiculo
          </ModalTitle>
        </ModalHeader>
        <ModalBody>
          <h1>holi</h1>
          <ModalFooter>
            <Button> Guardar </Button>
            <Button> Cerrar </Button>
          </ModalFooter>
        </ModalBody>
      </Modal>
  )
}

export default ModalAddVehicle