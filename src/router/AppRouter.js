import { BrowserRouter } from "react-router-dom";
import { useLoginContext } from '../context/LoginContext';
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";

export const AppRouter = () => {
    const { userAdmin } = useLoginContext()

    return (
        <BrowserRouter>
            
            <PublicRoutes />
            {userAdmin &&  <PrivateRoutes />}
                            
        </BrowserRouter>
    )
}