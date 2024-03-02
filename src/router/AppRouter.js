import { BrowserRouter } from "react-router-dom";

import { PublicRoutes } from "./PublicRoutes";
import { useAuth } from "../hooks/useAuth";
export const AppRouter = () => {
    const { user, logout } = useAuth();

    return (
        <BrowserRouter>
            <PublicRoutes user={user} />    
        </BrowserRouter>
    )
}