import { Routes, Route } from "react-router-dom";
import { ErrorScreen } from "../components/ErrorScreen/ErrorScreen";
import LoginScreen from '../components/LoginScreen/LoginScreen';
import { RegisterScreen } from "../components/RegisterScreen/RegisterScreen"
export const PublicRoutes = () => {
    return (
        <Routes>
            <Route path="/login" element={ <LoginScreen /> }/>
            <Route path="/register" element={ <RegisterScreen /> }/>
            <Route path="/*" element={ <ErrorScreen error="Debe loguearse primero" logged={false}/> }/>
        </Routes>
    )
}