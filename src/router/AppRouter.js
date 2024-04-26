import { BrowserRouter } from "react-router-dom";
import React, { lazy, Suspense } from 'react';
import { PublicRoutes } from "./PublicRoutes";
import { useAuth } from "../hooks/useAuth";
import { Loader } from "../components/Loader/Loader";

const LazyPublicRoutes = lazy(() => import("./PublicRoutes"));
export const AppRouter = () => {
    const { user, logout } = useAuth();

    return (
        <BrowserRouter>
            <Suspense fallback={<Loader />}>
                    <LazyPublicRoutes user={user} />
            </Suspense>  
        </BrowserRouter>
    )
}