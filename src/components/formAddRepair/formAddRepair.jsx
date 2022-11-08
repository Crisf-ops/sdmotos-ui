import axios from 'axios'
import React, { useState } from 'react'
import { Form, Button, Dropdown } from 'react-bootstrap'
import './formAddRepair.css'
import { endpoints } from '../../setting/endpoints'
import DataTableRepair from '../dataTableRepair/dataTableRepair'
import { validateFieldsIsEmpty, validateFieldsIsNumber } from '../../utils/utils'
import AlertCustom from '../alert/AlertCustom'

const STATES_REPAIRS = {
  Pendiente: 0,
  Pago: 1,
  'No pago': 2
}


const FormAddRepair = ({vehicle}) => {


  const [reapirs, setReapairs] = useState(vehicle.repair)
  const [remarks, setRemarks] = useState('')
  const [trouble, setTrouble] = useState('')
  const [amount, setAmount] = useState('')
  const [stateRecords, setStateRecords] = useState('')
  const [alert, setAlert] = useState(null)

  const handleSaveRepair = async (e) => {
    e.preventDefault()
    if(validateForm()){
      const response = await axios.post(endpoints.addRepair, buildRequestRepair(),
      {
        headers: { 'Content-Type': 'application/json' }
      }).catch(err => console.error(err))
      if (response.status === 201) {
        e.target.reset()
        handleGetVehicle()
      }
      handleShowAlert(true,'danger','No se ha podido guardar')
    } else {
      handleShowAlert(true,'danger','Verifique los campos')
    }
  }

  const handleGetVehicle = async () => {
    const response = await axios.get(endpoints.getVehicle, 
      {
        params: { id: vehicle.idVehicles }
      }
      ).catch(err => console.error(err))
      if (response.status === 200) {
        setReapairs(response.data.repair)
      }
  }

  const handleShowAlert = (status, variant ,text) => {
    setAlert({
      status: status,
      variant: variant,
      text: text
    })
    setTimeout(() => {
      setAlert(null)
    },'5000')
  }

  const validateForm = () => {
    let valid = 0
    valid += validateFieldsIsEmpty(remarks) ? 0 : 1
    valid += validateFieldsIsEmpty(trouble) ? 0 : 1
    valid += validateFieldsIsNumber(trouble) ? 0 : 1
    valid += validateFieldsIsEmpty(amount) ? 0 : 1
    return valid === 0
  }

  const buildRequestRepair = () => {
    const STATE_OF_DEFAULD = 0
    const stateAmount = STATES_REPAIRS[stateRecords] || STATE_OF_DEFAULD
    const body = JSON.stringify({
      remarks: remarks,
      trouble: trouble,
      amount: amount,
      stateRecords: stateAmount,
      vehicle: {
        "idVehicles": vehicle.idVehicles,
        "typeVehicle": vehicle.typeVehicle,
        "model": vehicle.model,
        "placa": vehicle.placa,
      },
    })
    return body
  }


  return (
    <div className='container-form'>
      <h1>Agragar Reparacion</h1>
      <br />
      <h4>Modelo del vehiculo: {vehicle.model}</h4>
      <Form onSubmit={handleSaveRepair}>
        <Form.Group>
          <Form.Label>Titulo de la reparacion</Form.Label>
          <Form.Control
            type='text'
            name='titulo de reparacion'
            autoCapitalize='on'
            placeholder='Se cambia el aseite'
            onChange={(e) => setTrouble(e.target.value)}
          />
        </Form.Group>
        <div className='container-amount'>
        <Form.Group>
          <Form.Label>Monto de la reparacion</Form.Label>
          <Form.Control
            type='number'
            name='titulo de reparacion'
            autoCapitalize='on'
            placeholder='15000'
            onChange={(e) => setAmount(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Estado</Form.Label>
          <Dropdown>
            <Dropdown.Toggle>
              {!!stateRecords ? stateRecords : 'Estado'}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => setStateRecords('Pendiente')}>Pendiente</Dropdown.Item>
              <Dropdown.Item onClick={() => setStateRecords('Pago')}>Pago</Dropdown.Item>
              <Dropdown.Item onClick={() => setStateRecords('No pago')}>No pago</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Form.Group>
        </div>


        <Form.Group>
          <Form.Label>Descripcion</Form.Label>
          <textarea 
            className="form-control" 
            rows="3"
            maxLength='100'
            placeholder='Se realiza el cambio del aceite'
            onChange={(e) => setRemarks(e.target.value)}
          />
        </Form.Group>

        <div className='button-form m-3'>
          <Button variant="success" type="submit"> Guardar </Button>
          <Button variant="warning"> Calcelar </Button>
        </div>
        <AlertCustom alert={alert}/>
      </Form>
      <DataTableRepair reapirs={reapirs}/>
    </div>
  )
}

export default FormAddRepair