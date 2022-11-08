import axios from 'axios'
import React, { useState } from 'react'
import { Button, Form, } from 'react-bootstrap'
import { endpoints } from '../../setting/endpoints.js'
import { enviroment } from '../../environment/environment.js'
import './formLogin.css'
import { useNavigate } from 'react-router-dom'
import AlertCustom from '../alert/AlertCustom.jsx'

const FormLogin = () => {

  
  const [user, setUser] = useState('')
  const [pwd, setPwd] = useState('')
  const [alert, setAlert] = useState(null)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await axios.post(endpoints.login,
      JSON.stringify({email: user, pwd: pwd}),
      {
        headers: { 'Content-Type': 'application/json' }
      }).catch(err => console.error(err))

      const status = response?.data

      if (status === 'Ok') {
        window.localStorage.setItem(enviroment.MY_AUTH,true)
        navigate('/home')
      }
      handleShowAlert(true,'danger','Usuario no valido')
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

  return (
    <div className='login-box'>
      <h2>SDMOTOS</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" >
          <Form.Label>User</Form.Label>
          <Form.Control
            type="text"
            name='user'
            autoComplete='on'
            placeholder="Enter user"
            onChange={(e) => setUser(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPwd(e.target.value)} />
        </Form.Group>
        <div>
          <Button className='button-form' id='subit' type="submit" >
            Ingresar
          </Button>
        </div>
      </Form>
      <AlertCustom alert={alert} />
    </div>
  )
}

export default FormLogin