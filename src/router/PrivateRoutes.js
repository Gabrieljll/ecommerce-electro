import Contacto from '../components/Contacto/Contacto';

import { Navbar } from '../components/NavBar/NavBar';
import {ItemListContainer} from '../components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
/* import { Checkout } from '../components/Checkout/Checkout'; */
import { HomeScreen } from '../components/HomeScreen/HomeScreen';
import { ErrorScreen } from '../components/ErrorScreen/ErrorScreen';
import { Footer } from '../components/Footer/Footer';
import { FormularioMail } from '../components/FormularioMail/FormularioMail';
import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar/Sidebar';
import ItemDetail from '../components/ItemDetail/ItemDetail';
import CartView from '../components/CartView/CartView';

export const PrivateRoutes = () => {
    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/home" element={ <HomeScreen /> }/>
                <Route path="/productos" element={ <ItemListContainer /> }/>
                <Route path="/contactenos" element={ <FormularioMail/> }/>
                <Route path="/productos/:categoryId" element={ <ItemListContainer /> }/>
                <Route path="/product/:id" element={ <ItemDetail /> }/>
                <Route path="/cart" element={ <CartView /> }/>
                {/* <Route path="/checkout" element={ <Checkout /> }/> */}
                <Route path="*" element={<Navigate to="/home" replace />}/>
            </Routes>
            <Sidebar />
            <Footer />
        </div>
    )
}