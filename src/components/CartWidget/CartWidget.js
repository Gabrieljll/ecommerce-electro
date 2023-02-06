import { AiOutlineShoppingCart } from 'react-icons/ai'
import './CartWidget.css'
import { Link } from 'react-router-dom'

export const CartWidget = ({cartCounter}) => {

  return (
    <Link to="/cart">
    <button className="cartWidgetBtn">
      <AiOutlineShoppingCart className="cartWidget"/><p className="cartCounter">{cartCounter}</p>
    </button>
    </Link>
  )
}