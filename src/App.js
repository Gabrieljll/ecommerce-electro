

import './styles/App.css';
import './styles/estilos.css';
import { LoginProvider } from './context/LoginContext'
import { CartProvider } from './context/CartContext'
import { AppRouter } from './router/AppRouter'
import  ProductProvider  from './context/ProductContext'
import SidebarProvider from './context/SidebarContext';

function App() {
    return (
        <LoginProvider>
            <SidebarProvider>
                <ProductProvider>
                    <CartProvider>
                        <AppRouter />
                    </CartProvider>
                </ProductProvider>
            </SidebarProvider>
        </LoginProvider>
	);
}

export default App;
