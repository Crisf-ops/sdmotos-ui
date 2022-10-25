import axios from 'axios'
import React, { useState } from 'react'
import { Dropdown, Form, Button } from 'react-bootstrap'
import { endpoints } from '../../setting/endpoints'

const MOTO = 'Moto'
const CAR = 'Carro'

const FormAddVehicle = ({ user }) => {

  const [selectTypeVehicle, setSelectTypeVehicle] = useState('')
  const [model, setModel] = useState('')
  const [placa, setPLaca] = useState('')

  const handleSubmitVehicle = async (e) => {
    e.preventDefault()
    const vehicle = selectTypeVehicle === MOTO ? 1 : 0
    const response = await axios.post(endpoints.addVehicle, createdBody(vehicle),
    {
      headers: { 'Content-Type': 'application/json' } 
    }).catch(err => console.log(err))

    if (response.status === 201) {
      e.target.reset()
      setSelectTypeVehicle('')
    }
  }

  const createdBody = (type) => {
    const body = JSON.stringify({
      typeVehicle: type,
      model: model,
      placa: placa,
      user: {
        id: user.id,
        documento: user.documento,
        name: user.name,
        lastName: user.lastName,
        contactNumber: user.contactNumber,
        email: user.email
      }
    })
    return body
  }

  return (
    <>
      <Form onSubmit={handleSubmitVehicle}>

        <Form.Group>
          <Form.Label>Modelo</Form.Label>
          <Form.Control
            autoComplete='off'
            type='text'
            max='6'
            placeholder='Ingresar el modelo del vehiculo'
            onChange={(e) => setModel(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Placa</Form.Label>
          <Form.Control
            autoComplete='off'
            type='text'
            placeholder='Ingresar el modelo del vehiculo'
            onChange={(e) => setPLaca(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Tipo de vehiculo</Form.Label>
          <Dropdown>
            <Dropdown.Toggle>
              {!!selectTypeVehicle ? selectTypeVehicle : 'Lista de tipos de vehiculos'} 
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => setSelectTypeVehicle(MOTO)}>Moto</Dropdown.Item>
              <Dropdown.Item onClick={() => setSelectTypeVehicle(CAR)}>Carro</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Form.Group>
        
        <Button variant="success" type="submit"> Guardar </Button>
      </Form>
    </>
  )
}

export default FormAddVehicle