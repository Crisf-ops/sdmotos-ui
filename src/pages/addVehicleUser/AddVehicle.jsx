import React from 'react'
import { useLocation } from 'react-router-dom'
import FormAddVehicle from '../../components/formAddVehicle/formAddVehicle'
import Nav from '../../components/nav/Nav'

const AddVehicle = () => {
  const query = useLocation()  
  return (
    <>
    <FormAddVehicle user={query.state}/>
    <Nav/>
    </>
  )
}

export default AddVehicle