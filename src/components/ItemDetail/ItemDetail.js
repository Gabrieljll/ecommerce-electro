import { useNavigate } from "react-router-dom"
import  ItemCount  from "../ItemCount/ItemCount"
import { useState } from "react"
import { useCartContext } from "../../context/CartContext"
import { Link } from 'react-router-dom'

const ItemDetail = ( {id, name, description, image, price, stock, category}) => {

    const { agregarAlCarrito, isInCart } = useCartContext()

    const [cantidad, setCantidad] = useState(1)

    const navigate = useNavigate()
    const handleVolver = () =>{
        navigate(-1)
    }

    const handleAgregar = () => {
        const item = {id, name, description, image, price, stock, category, cantidad}
        agregarAlCarrito(item)
    }
    return ( 
        <div>
            <h2>{name}</h2>
            <img src={image} alt={image} />
            <br/>
            <small>Categoría: {category}</small>
            <p>{description}</p>
            <p>Precio: ${price}</p>


            {
                !isInCart(id)
                    ? <ItemCount cantidad={cantidad} setCantidad={setCantidad} max={stock}  handleAgregar={handleAgregar}/>
                    : <Link to="/cart" className="btn btn-success">Terminar mi compra</Link>
            }
            <hr/>
            <button className="btn btn-primary" onClick={handleVolver}>Volver</button>
        </div>
    )
}

export default ItemDetail