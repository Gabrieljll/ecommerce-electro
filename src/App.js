

import './styles/App.css';
import './styles/estilos.css';
import { LoginProvider } from './context/LoginContext'
import { CartProvider } from './context/CartContext'
import { AppRouter } from './router/AppRouter'


function App() {
    return (
        <LoginProvider>
            <CartProvider>
                <AppRouter />
            </CartProvider>
        </LoginProvider>
	);
}

export default App;
