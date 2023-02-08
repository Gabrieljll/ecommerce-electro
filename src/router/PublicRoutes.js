import { Routes, Route } from "react-router-dom";
import LoginScreen from '../components/LoginScreen/LoginScreen';
import { RegisterScreen } from "../components/RegisterScreen/RegisterScreen"
export const PublicRoutes = () => {
    return (
        <Routes>
            <Route path="/login" element={ <LoginScreen /> }/>
            <Route path="/register" element={ <RegisterScreen /> }/>
        </Routes>
    )
}