import React from 'react'
import { Link } from 'react-router-dom'
import Silder from '../../components/silder/Silder'

const Home = () => {
  return (
    <>
    <Silder/>
    <h1>MENU</h1>
    <Link to='/listUser' >Lista de usuarios</Link>
    </>
  )
}

export default Home