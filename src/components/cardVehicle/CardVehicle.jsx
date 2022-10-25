import React, { useState } from 'react'
import ListRepair from '../listRepair/ListRepair';
import './cardVehicle.css'

const CardVehicle = ({ user }) => {

  const { vehicles } = user

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
    </>
  )
}

export default CardVehicle