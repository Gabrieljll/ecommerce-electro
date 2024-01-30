import { Navbar } from '../components/NavBar/NavBar';
import { Footer } from '../components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../components/Sidebar/Sidebar';
import { ErrorScreen } from "../components/ErrorScreen/ErrorScreen";


export const PrivateRoutes = () => {
    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/admin" element={ <ErrorScreen error="Debe loguearse primero" logged={true}/> }/>
            </Routes>
            <Sidebar />
            <Footer />
        </div>
    )
}