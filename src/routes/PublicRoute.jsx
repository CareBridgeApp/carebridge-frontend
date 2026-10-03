import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { Navigate, Outlet } from "react-router-dom"
import LoadingSpinner from '../components/LoadingSpinner'

const PublicRoute = () => {
    const {user, isLoading}=useContext(AuthContext)
    if(isLoading){
        return(
            <div className='h-screen flex items-center justify-center'>
                <LoadingSpinner size='md'/>
            </div>
        )
    }
    if(user){
        return <Navigate to={user.role == 'doctor'?'/doctor-dashboard':'/patient-dashboard'}/>
    }
  return <Outlet/>
}

export default PublicRoute
