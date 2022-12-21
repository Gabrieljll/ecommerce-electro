import { AiOutlineShoppingCart } from 'react-icons/ai'
import './CartWidget.css'

export const CartWidget = ({cartCounter}) => {

  return (
    <button className="cartWidgetBtn">
      <AiOutlineShoppingCart className="cartWidget"/><p className="cartCounter">{cartCounter}</p>
    </button>
  )
}