import axios from 'axios'
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { endpoints } from '../../setting/endpoints'

const FormNewUser = () => {

  const [nameUser, setNameUser] = useState('')
  const [lastName, setLastName] = useState('')
  const [numDocument, setNumDocument] = useState('')
  const [numContact, setNumContact] = useState('')
  const [email, setEmail] = useState('')
  const navegate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await axios.post(endpoints.saveUser, JSON.stringify({
      documento: numDocument,
      name: nameUser,
      lastName: lastName,
      contactNumber: numContact,
      email: email
    }), 
    { 
      headers: { 'Content-Type': 'application/json' } 
    }).catch(err => console.error(err))

    if (response.status === 201) {
      e.target.reset()
    }

    console.log(response);
  }

  const handleBackList = () => {
    navegate('/listUser')
  }



  return (
    <>
      <Form id='formNewUser'>
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
            max='10'
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
            max='11'
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

        <Button variant="success" type="submit"> Guardar </Button>
        <Button variant="warning" onClick={handleBackList}> Cancelar </Button>
      </Form>
    </>
  )
}

export default FormNewUser