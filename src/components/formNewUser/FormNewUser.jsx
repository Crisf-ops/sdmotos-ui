import axios from 'axios'
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { endpoints } from '../../setting/endpoints'
import { validateFieldsIsEmpty, validateFieldsIsNumber } from '../../utils/utils'
import AlertCustom from '../alert/AlertCustom'
import './formNewUser.css'

const FormNewUser = () => {

  const [nameUser, setNameUser] = useState('')
  const [lastName, setLastName] = useState('')
  const [numDocument, setNumDocument] = useState('')
  const [numContact, setNumContact] = useState('')
  const [email, setEmail] = useState('')
  const [alert, setAlert] = useState(null)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (validateForm()) {
      const response = await axios.post(endpoints.saveUser, buildRequest(), 
      { 
        headers: { 'Content-Type': 'application/json' } 
      }).catch(err => console.error(err))
  
      if (response.status === 201) {
        e.target.reset()
        handleShowAlert(true,'success','Se a guardado el Cliente')
      } else {
        handleShowAlert(true,'danger','No se ha pudo guardado el vehiculo')
      }
    } else {
      handleShowAlert(true,'danger','Verifique los campos')
    }
  }

  const validateForm = () => {
    let valid = 0
    valid += validateFieldsIsEmpty(nameUser) ? 0 : 1
    valid += validateFieldsIsNumber(nameUser) ? 0 : 1
    valid += validateFieldsIsEmpty(lastName) ? 0 : 1
    valid += validateFieldsIsNumber(lastName) ? 0 : 1
    
    return valid === 0
  }

  const buildRequest = () => {
    return JSON.stringify({
      documento: numDocument,
      name: nameUser,
      lastName: lastName,
      contactNumber: numContact,
      email: email
    })
  }

  const handleBackList = () => {
    navigate('/listUser')
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

  (() => {
    document.body.classList.add('no-scroll')
  })()


  return (
    <div className='container-form'>
      <h2>NUEVO USUARIO</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            placeholder='Ingresar nombre del usuario'
            autoComplete='off'
            type='text'
            onChange={(e) => setNameUser(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            placeholder='Ingresar el apellido del usuario'
            autoComplete='off'
            type='text'
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Numero de documento</Form.Label>
          <Form.Control
            placeholder='CC'
            autoComplete='off'
            type='number'
            min='1'
            onChange={(e) => setNumDocument(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Telefono / Numero Celular</Form.Label>
          <Form.Control
            placeholder='Numero de contacto'
            autoComplete='off'
            type='number'
            min='1'
            onChange={(e) => setNumContact(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            placeholder='Ingrese un email'
            autoComplete='off'
            type='email'
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <div className='button-form'>
        <Button variant="success" type="submit"> Guardar </Button>
        <Button variant="warning" onClick={handleBackList}> Cancelar </Button>
        </div>
      </Form>
      <AlertCustom alert={alert}/>
    </div>
  )
}

export default FormNewUser