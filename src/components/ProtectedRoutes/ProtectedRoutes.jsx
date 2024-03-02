import {Navigate, Outlet} from 'react-router-dom'

export const ProtectedRoutes = ({ user, children }) => {
    
    if(!user){
        return <Navigate to="/login" />
    }
    return <Outlet/>

}