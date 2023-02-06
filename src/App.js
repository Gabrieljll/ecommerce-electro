import { Navbar } from './components/NavBar/NavBar';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Contacto from './components/Contacto/Contacto';
import { CartContext } from './context/CartContext';
import { useState } from 'react';
import Cart from './components/Cart/Cart';

function App() {
    const [cart, setCart] = useState([])

    const agregarAlCarrito = (item) => {
        setCart([...cart, item])
    }

    const removeItem = (id) => {
        setCart(cart.filter(item => item.id !== id) )
    }

    const isInCart = (id) => {
        return cart.some(item => item.id === id)
    }

    const emptyCart = () =>{
        setCart([])
    }

    const totalCart = () =>{
        return cart.reduce((acc, item) => acc + item.price * item.cantidad, 0)
    }
	return (
        <CartContext.Provider value={  { cart, agregarAlCarrito, isInCart, emptyCart, totalCart, removeItem} }>
        <BrowserRouter>
            <div className="App">
                <Navbar cartCounter={cart.length} />
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
        </CartContext.Provider>
	);
}

export default App;
