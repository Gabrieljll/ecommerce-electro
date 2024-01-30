import { Navbar } from '../components/NavBar/NavBar';
import {ShopView} from '../components/ShopView/ShopView';
import { Checkout } from '../components/Checkout/Checkout';
import { HomeScreen } from '../components/HomeScreen/HomeScreen';
import { Footer } from '../components/Footer/Footer';
import { FormularioMail } from '../components/FormularioMail/FormularioMail';
import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar/Sidebar';
import ItemDetail from '../components/ItemDetail/ItemDetail';
import CartView from '../components/CartView/CartView';
import { CheckoutPayment } from '../components/CheckoutPayment/CheckoutPayment';
import LoginScreen from '../components/LoginScreen/LoginScreen';
import { RegisterScreen } from "../components/RegisterScreen/RegisterScreen"

export const PublicRoutes = () => {
    return (
        <div className="App">
            <Navbar />
            <Routes>
                    <Route path="/home" element={ <HomeScreen /> }/>
                    <Route path="/productos" element={ <ShopView /> }/>
                    <Route path="/contactenos" element={ <FormularioMail/> }/>
                    <Route path="/productos/:categoryId" element={ <ShopView /> }/>
                    <Route path="/product/:id" element={ <ItemDetail /> }/>
                    <Route path="/cart" element={ <CartView /> }/>
                    <Route path="/checkout" element={ <Checkout /> }/>
                    <Route path="/checkoutPayment" element={ <CheckoutPayment /> }/>
                    <Route path="/login" element={ <LoginScreen /> }/>
                    <Route path="/register" element={ <RegisterScreen /> }/>
                    <Route path="*" element={<Navigate to="/home" replace />}/>
            </Routes>
            <Sidebar />
            <Footer />
        </div>
    )
}