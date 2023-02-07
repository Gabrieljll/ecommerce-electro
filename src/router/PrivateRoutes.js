import Contacto from '../components/Contacto/Contacto';
import Cart from '../components/Cart/Cart';
import { Navbar } from '../components/NavBar/NavBar';
import {ItemListContainer} from '../components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import { Routes, Route, Navigate} from "react-router-dom";
export const PrivateRoutes = () => {
    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={ <ItemListContainer greeting="Bienvenidos"/> }/>
                <Route path="/contacto" element={ <Contacto/> }/>
                <Route path="/productos/:categoryId" element={ <ItemListContainer greeting="Bienvenidos"/> }/>
                <Route path="/detail/:itemId" element={ <ItemDetailContainer /> }/>
                <Route path="/cart" element={ <Cart /> }/>
                <Route path="*" element={ <Navigate to={"/"}/> }/>
            </Routes>
        </div>
    )
}