import { AiOutlineShoppingCart } from 'react-icons/ai'
import './CartWidget.css'

export const CartWidget = () => {

  return (
    <button className="cartWidgetBtn">
      <AiOutlineShoppingCart className="cartWidget"/><p className="cartCounter">1</p>
    </button>
  )
}