import {Navigate, Outlet} from 'react-router-dom'

export const ProtectedRoutes = ({ userAdmin, children }) => {
    
    if(!userAdmin){
        return <Navigate to="/login" />
    }
    return <Outlet/>

}