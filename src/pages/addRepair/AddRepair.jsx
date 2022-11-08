import React from 'react'
import { useLocation } from 'react-router-dom'
import FormAddRepair from '../../components/formAddRepair/formAddRepair'

const AddRepair = () => {

  const {state} = useLocation()

  return (
    <>
      <FormAddRepair vehicle={state}/>
    </>
  )
}

export default AddRepair