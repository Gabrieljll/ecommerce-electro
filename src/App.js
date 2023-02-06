import { Navbar } from './components/NavBar/NavBar';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Contacto from './components/Contacto/Contacto';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';

function App() {
    
	return (
        <CartProvider>
            <BrowserRouter>
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
            </BrowserRouter>
        </CartProvider>
	);
}

export default App;
