import {Navigate} from 'react-router-dom'

export const ProtectedRoutes = ({ userAdmin, children }) => {
    
    if(!userAdmin){
        return <Navigate to="/home" />
    }
    return children

}