import React from 'react'
import FormLogin from '../../components/formLogin/FormLogin'
import './login.css'

const Login = () => {
  return (
    <div>
      <img className='img-login' src="/src/assets/moped.svg"  />
      <FormLogin />
    </div>
  )
}

export default Login