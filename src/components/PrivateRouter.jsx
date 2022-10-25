import { Navigate, Outlet } from "react-router-dom"
import { paths } from "../setting/paths"

const PrivateRouter = () => {

  const auth = window.localStorage.getItem("MY_AUTH")

  return (
    auth === "false" ? <Navigate to='/'/> : <Outlet/>
  )
}

export default PrivateRouter