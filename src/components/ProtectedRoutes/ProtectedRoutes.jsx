import {Navigate, Outlet} from 'react-router-dom'

export const ProtectedRoutes = ({ user, children }) => {
    
    if(!user){
        console.log("falla en protectedRoutes")
        return <Navigate to="/login" />
    }
    return <Outlet/>

}