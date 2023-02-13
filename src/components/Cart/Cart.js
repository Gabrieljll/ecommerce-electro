import {  useCartContext } from "../../context/CartContext"
import { FaTrashAlt } from "react-icons/fa"
import { Link } from "react-router-dom"
import "./Cart.css"
const Cart = () => {
    const {cart, emptyCart, totalCart, removeItem} = useCartContext()

    if (cart.length === 0){
        return (
            <>
            <div className="container my-5 cart-body">
                <h2>Tu carrito está vacío</h2>
                <hr />
                <Link to="/productos" className="btn btn-primary">Volver</Link>
            </div>
            </> 
        )
    }

    return (
            <div className="container my-5 cart-body">
                <h2>Tu compra</h2>
                <hr />
                {
                    cart.map(item => (
                        <div key={item.id}>
                            <h4>{item.name}</h4>
                            <p>Cantidad: {item.cantidad}</p>
                            <p>Precio: ${item.price * item.cantidad}</p>
                            <button onClick={() => removeItem(item.id)} className="btn btn-outline-danger"><FaTrashAlt /></button>
                            <hr/>
                        </div>
                    ))
                }
                <h4>Total: ${totalCart()}</h4>
                <button className="btn btn-danger emptyCart" onClick={emptyCart}>Vaciar Carrito</button>
                <Link className="btn btn-success mx-2" to="/checkout">Terminar compra</Link>
            </div>
    )
}

export default Cart
