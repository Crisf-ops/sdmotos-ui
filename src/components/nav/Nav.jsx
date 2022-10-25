import React, { useState } from 'react'
import {CgUserList} from 'react-icons/cg'
import {AiOutlineHome} from 'react-icons/ai'
import {FiLogOut} from 'react-icons/fi'
import { Link } from "react-router-dom";
import './nav.css'
import { enviroment } from '../../environment/environment';

const Nav = () => {

  const [activeNav, setActiveNav] = useState('/')

  const logOut = () => {
    window.localStorage.setItem(enviroment.MY_AUTH,false)
  }

  return (
    <nav id='menu'>
      <Link to='/home' onClick={() => setActiveNav('/')} className={activeNav === '/' ? 'active' : ''}> <AiOutlineHome /> </Link>
      <Link to='/listUser' onClick={() => setActiveNav('/listUser')} className={activeNav === '/listUser' ? 'active' : ''}> <CgUserList /> </Link>
      <Link to='/' onClick={logOut} > <FiLogOut/> </Link>
    </nav>
  )
}

export default Nav