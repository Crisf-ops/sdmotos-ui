import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import CardUser from '../../components/cardUser/CardUser'
import CardVehicle from '../../components/cardVehicle/CardVehicle'
import Nav from '../../components/nav/Nav'
import { endpoints } from '../../setting/endpoints'
import './user.css'

export const getUser = async () => {
  await getUser()
}


const User = () => {

  const  query  = useLocation()
  const [user, setUser] = useState(query.state)

  const getUser = async () => {
    const response = await axios.get(endpoints.getUser, {params: { document: user.id } })
    if (response) {
      console.log("🚀 ~ file: User.jsx ~ line 12 ~ getUser ~ response", response)
      // setUser(response.data)
    }
  }
  
  useEffect(() => {
    getUser()
  },[])

  return (
    <div className='container__user'>
      <CardUser user={user}/>
      <div>
        {user.vehicles.length > 0 ? 
          <CardVehicle user={user}/> : 
          <h1 className='title-noVehicles'>No hay Vehiculos Registrados, para este usuario: {query.state.name}</h1> 
        }
      </div>
      <Nav />
    </div>
  )
}

export default User