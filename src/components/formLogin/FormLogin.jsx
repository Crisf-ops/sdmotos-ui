import React from 'react'
import './formLogin.css'

const FormLogin = () => {
  return (
    <div className='login-box'>
    <h2>SDMOTOS</h2>
    <form>
      <div className='user-box'>
        <input type="text" name="user" id="user" required=""/>
        <label htmlFor="">User</label>
      </div>
      <div className='user-box'>
        <input type="password" name="user" id="user" required=""/>
        <label htmlFor="">Password</label>
      </div>
      <div className='button-form'>
        <a href="" id='subit'>Subit</a>
      </div>
    </form>
  </div>
  )
}

export default FormLogin