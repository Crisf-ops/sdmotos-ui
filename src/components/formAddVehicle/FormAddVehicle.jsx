import axios from 'axios'
import React, { useState } from 'react'
import { Dropdown, Form, Button } from 'react-bootstrap'
import AlertCustom from '../alert/AlertCustom'
import { endpoints } from '../../setting/endpoints'
import './formAddVehicle.css'
import { useNavigate } from 'react-router-dom'
import { validateFieldsIsEmpty } from '../../utils/utils'

const TYPE_VEHICLE = {
  Moto: 1,
  Carro: 0
}

const FormAddVehicle = ({ user }) => {

  const [selectTypeVehicle, setSelectTypeVehicle] = useState('')
  const [model, setModel] = useState('')
  const [placa, setPLaca] = useState('')
  const [alert, setAlert] = useState(null)
  const navigate = useNavigate()

  const handleSubmitVehicle = async (e) => {
    e.preventDefault()
    if (validDateForm()) {
      const response = await axios.post(endpoints.addVehicle, createdBody(),
      {
        headers: { 'Content-Type': 'application/json' } 
      }).catch(err => console.log(err))
  
      if (response.status === 201) {
        e.target.reset()
        setSelectTypeVehicle('')
        handleShowAlert(true,'success','Se a guardado el vehiculo')
      } else {
        setSelectTypeVehicle('')
        handleShowAlert(true,'danger','No se ha podido guardar el vehiculo')
      }
    } else {
      handleShowAlert(true,'danger','Verifique los campos')
    }
  }

  const validDateForm = () => {
    let valid = 0
    valid += validateFieldsIsEmpty(placa) ? 0 : 1
    valid += validateFieldsIsEmpty(model) ? 0 : 1
    return valid === 0
  }

  const createdBody = () => {
    const TYPE_VEHICLE_DEFAULD = 0
    const typeVehicle = TYPE_VEHICLE[selectTypeVehicle] || TYPE_VEHICLE_DEFAULD
    const body = JSON.stringify({
      typeVehicle: typeVehicle,
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

  const handleBlack = () => {
    navigate(`/listUser`)
  }

  return (
    <div className='container-form'>
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

        <Form.Group className='container-form-dropdown'>
          <Form.Label>Tipo de vehiculo</Form.Label>
          <Dropdown>
            <Dropdown.Toggle>
              {!!selectTypeVehicle ? selectTypeVehicle : 'Lista de tipos de vehiculos'} 
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => setSelectTypeVehicle('Moto')}>Moto</Dropdown.Item>
              <Dropdown.Item onClick={() => setSelectTypeVehicle('Carro')}>Carro</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Form.Group>

        <div className='button-form'>
          <Button variant="success" type="submit"> Guardar </Button>
          <Button variant="warning" onClick={handleBlack}> Calcelar </Button>
        </div>
      </Form>
      <AlertCustom alert={alert} />
    </div>
  )
}

export default FormAddVehicle