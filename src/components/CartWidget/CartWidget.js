import { FaShoppingCart } from 'react-icons/fa'
import './CartWidget.css'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'

export const CartWidget = () => {

    const { totalCantidad, cart} = useCartContext()
    return (
        <Link to="/cart" className={`cartWidgetBtn ${cart.length > 0 ? 'cartWidget-active' : ''}`}>
            <FaShoppingCart className="cartWidget"/>
            <span className="cartCounter">{totalCantidad()}</span>
        </Link>
    )
}