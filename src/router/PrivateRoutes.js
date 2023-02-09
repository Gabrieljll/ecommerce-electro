import Contacto from '../components/Contacto/Contacto';
import Cart from '../components/Cart/Cart';
import { Navbar } from '../components/NavBar/NavBar';
import {ItemListContainer} from '../components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import { Routes, Route } from "react-router-dom";
import { Checkout } from '../components/Checkout/Checkout';
export const PrivateRoutes = () => {
    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={ <ItemListContainer /> }/>
                <Route path="/contacto" element={ <Contacto/> }/>
                <Route path="/productos/:categoryId" element={ <ItemListContainer /> }/>
                <Route path="/detail/:itemId" element={ <ItemDetailContainer /> }/>
                <Route path="/cart" element={ <Cart /> }/>
                <Route path="/checkout" element={ <Checkout /> }/>
                <Route path="/*" element={ <ItemListContainer /> }/>
            </Routes>
        </div>
    )
}