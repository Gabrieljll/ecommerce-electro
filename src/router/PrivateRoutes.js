import Contacto from '../components/Contacto/Contacto';
import Cart from '../components/Cart/Cart';
import { Navbar } from '../components/NavBar/NavBar';
import {ItemListContainer} from '../components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import { Checkout } from '../components/Checkout/Checkout';
import { HomeScreen } from '../components/HomeScreen/HomeScreen';
import { ErrorScreen } from '../components/ErrorScreen/ErrorScreen';
import { Footer } from '../components/Footer/Footer';
import { FormularioMail } from '../components/FormularioMail/FormularioMail';
import { Routes, Route, Navigate } from 'react-router-dom';

export const PrivateRoutes = () => {
    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/home" element={ <HomeScreen /> }/>
                <Route path="/productos" element={ <ItemListContainer /> }/>
                <Route path="/contactenos" element={ <FormularioMail/> }/>
                <Route path="/productos/:categoryId" element={ <ItemListContainer /> }/>
                <Route path="/detail/:itemId" element={ <ItemDetailContainer /> }/>
                <Route path="/cart" element={ <Cart /> }/>
                <Route path="/checkout" element={ <Checkout /> }/>
                <Route path="*" element={<Navigate to="/home" replace />}/>
            </Routes>
            <Footer />
        </div>
    )
}