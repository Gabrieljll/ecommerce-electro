import { BrowserRouter } from "react-router-dom";

import { PublicRoutes } from "./PublicRoutes";

export const AppRouter = () => {
    

    return (
        <BrowserRouter>
            <PublicRoutes />    
        </BrowserRouter>
    )
}