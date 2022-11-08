import React from 'react'
import { Link } from 'react-router-dom'
import Silder from '../../components/silder/Silder'
import './home.css'
import imagenCliente from '../../assets/cliente.png'

const Home = () => {
  return (
    <>
    <Silder/>
    <div className='menu'>
    <h1>MENU</h1>
      <div className='btns-menu'>

        <div className='btn-menu'>
          <Link to='/listUser' className='circulo'>
            <img className='icon-img' src={imagenCliente} />
          </Link>
          <span>Lista de clientes</span>
        </div>

        <div className='btn-menu'>
          <Link className='circulo'>
            <img className='icon-img' src={imagenCliente} />
          </Link>
          <span>Lorem</span>
        </div>

        <div className='btn-menu'>
          <Link className='circulo'>
            <img className='icon-img' src={imagenCliente} />
          </Link>
          <span>Lorem</span>
        </div>

        <div className='btn-menu'>
          <Link className='circulo'>
            <img className='icon-img' src={imagenCliente} />
          </Link>
          <span>Lorem</span>
        </div>

        <div className='btn-menu'>
          <Link className='circulo'>
            <img className='icon-img' src={imagenCliente} />
          </Link>
          <span>Lorem</span>
        </div>

      </div>
    </div>
    </>
  )
}

export default Home