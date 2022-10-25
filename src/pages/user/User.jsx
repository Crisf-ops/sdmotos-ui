import React from 'react'
import { useLocation } from 'react-router-dom'
import CardUser from '../../components/cardUser/CardUser'
import CardVehicle from '../../components/cardVehicle/CardVehicle'
import Nav from '../../components/nav/Nav'
import './user.css'

const User = () => {

  const  query  = useLocation()
  
  return (
    <div className='container__user'>
      <CardUser user={query.state}/>
      <div>
        {query.state.vehicles.length > 0 ? 
          <CardVehicle user={query.state}/> : 
          <h1 className='title-noVehicles'>No hay Vehiculos Registrados, para este usuario: {query.state.name}</h1> 
        }
      </div>
      <Nav />
    </div>
  )
}

export default User