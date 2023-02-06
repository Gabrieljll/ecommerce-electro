import { FaShoppingCart } from 'react-icons/fa'
import './CartWidget.css'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'

export const CartWidget = () => {

    const { totalCantidad } = useCartContext()
    return (
        <Link to="/cart" className="cartWidgetBtn">
            <FaShoppingCart className="cartWidget"/>
            <span>{totalCantidad()}</span>
        </Link>
    )
}