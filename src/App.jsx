import Nav from './components/nav/Nav'
import { Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/home/Home'
import EditUser from './pages/editUser/EditUser'
import User from './pages/user/User'
import NoFoundPage from './components/notFoundPage/NoFoundPage'
import Login from './pages/login/Login'

const App = () => {

  return (
    <>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/listUser' element={<EditUser/>}/>
      <Route path='/user/:id' element={<User/>}/>
      <Route path='*' element={<NoFoundPage/>}/>
    </Routes>
    <Nav/>
    </>
  )
}

export default App
