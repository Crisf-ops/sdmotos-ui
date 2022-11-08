import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { endpoints } from '../../setting/endpoints'
import './cardVehicle.css'

const CardVehicle = ({ user }) => {

  const { vehicles } = user
  const navigate = useNavigate()

  const handle = (e, vehicle) => {
    e.preventDefault()
    navigate(`/addRepair/${user.documento}`, {state: vehicle})
  }

  const handleDeleteVehicle = async (e, vehicle) => {
    const response = await axios.delete(`${endpoints.deleteVehicle}${vehicle.idVehicles}`).catch(err => console.log(err))
    if (response) {

    }
  }

  return (
    <div className="courses-container">
      {vehicles.map((item, index) => (
        <div className="course" id={index}>
          <div className="course-preview">
            <h6>{item.typeVehicle}</h6>
            <h2>{item.model}</h2>
          </div>
          <div className="course-info">
            <h6>Numero de reparaciones: {item.vehicles}</h6>
            <div className='container-btn'>
              <button onClick={(e) => handle(e, item) } className='btn-vehicle'>Agregar Reparacion</button>
              <button onClick={(e) => handleDeleteVehicle(e, item) } className='btn-vehicle'>Eliminar</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CardVehicle