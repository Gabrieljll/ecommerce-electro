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
import { AdminStockView } from '../components/AdminStockView/AdminStockView';
import { AdminEditProduct } from '../components/AdminEditProduct/AdminEditProduct';
import { AdminAddProduct } from '../components/AdminAddProduct/AdminAddProduct';
import { ProtectedRoutes } from '../components/ProtectedRoutes/ProtectedRoutes';
import Finish from '../components/Finish/Finish';
import { useAuth } from '../hooks/useAuth'; // Importa el hook

export const PublicRoutes = () => {
    const { user } = useAuth(); // Usa el hook para obtener el estado de autenticación

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
                    <Route path="/finish" element={ <Finish /> }/>
                    <Route element={<ProtectedRoutes user={user}/> }>
                            <Route path="/admin" element={ <AdminStockView /> } />                            
                            <Route path="/adminEditProduct/:id" element={ <AdminEditProduct /> }/>
                            <Route path="/adminAddProduct" element={ <AdminAddProduct /> }/>
                    </Route>
                    <Route path="/register" element={ <RegisterScreen /> }/>
                    
                    <Route path="*" element={<Navigate to="/home" replace />}/>
            </Routes>
            <Sidebar />
            <Footer />
        </div>
    )
}