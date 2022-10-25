import { BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/home/Home'
import EditUser from './pages/editUser/EditUser'
import User from './pages/user/User'
import NoFoundPage from './components/notFoundPage/NoFoundPage'
import Login from './pages/login/Login'
import PrivateRouter from './components/PrivateRouter'
import { paths } from './setting/paths'
import NewUser from './pages/createdNewUser/NewUser'
import AddVehicle from './pages/addVehicleUser/AddVehicle'

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route element={<PrivateRouter />} >
          <Route path='/home' element={<Home />} />
          <Route path='/listUser' element={<EditUser />} />
          <Route path='/newUser' element={<NewUser />} />
          <Route path='/user/:id' element={<User />} />
          <Route path='/addVehicle/:id' element={<AddVehicle />} />
        </Route>
        <Route path='*' element={<NoFoundPage />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
