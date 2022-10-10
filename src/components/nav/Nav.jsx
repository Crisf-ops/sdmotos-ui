import React, { useState } from 'react'
import {CgUserList} from 'react-icons/cg'
import {AiOutlineHome} from 'react-icons/ai'
import { Link } from "react-router-dom";
import './nav.css'

const Nav = () => {

  const [activeNav, setActiveNav] = useState('/')

  return (
    <nav id='menu'>
      <Link to='/' onClick={() => setActiveNav('/')} className={activeNav === '/' ? 'active' : ''}> <AiOutlineHome /> </Link>
      <Link to='/listUser' onClick={() => setActiveNav('/listUser')} className={activeNav === '/listUser' ? 'active' : ''}> <CgUserList /> </Link>
    </nav>
  )
}

export default Nav