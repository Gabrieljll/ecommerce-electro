import { Navbar } from '../components/NavBar/NavBar';
import { Footer } from '../components/Footer/Footer';
import { Routes } from 'react-router-dom';
import Sidebar from '../components/Sidebar/Sidebar';



export const PrivateRoutes = () => {
    return (
        <div className="App">
            <Navbar />
            <Routes>
                
            </Routes>
            <Sidebar />
            <Footer />
        </div>
    )
}