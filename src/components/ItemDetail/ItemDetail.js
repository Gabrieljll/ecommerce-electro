import { useNavigate } from "react-router-dom"
import  ItemCount  from "../ItemCount/ItemCount"
import { useState } from "react"
import { useCartContext } from "../../context/CartContext"
import { Link } from 'react-router-dom'
import "./ItemDetail.css"

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
        <>
        <div className="divItem">
            <div className="divItemImage">
                <h2 className="cardItemText itemTitle">{name}</h2>
                <img src={image} alt={image} />
                <br/>
                <small className="cardItemText itemCategory">Categoría: {category}</small>
            </div>
            <div className="divItemDetails">
                <p className="cardItemText itemDescription">{description}</p>
                <hr />
                <div className="divPriceAndAdd">
                    <p className="cardItemText itemPrice">Precio: ${price}</p>
                    { stock <= 15 && 
                        <div>
                            <strong className="cardItemText lastest-unities">{stock === 1 ? 'Última unidad disponible!' : 'Ultimas '+stock+' unidades disponibles!'}</strong>
                        </div>
                    }
                    {
                        !isInCart(id)
                            ? <ItemCount cantidad={cantidad} setCantidad={setCantidad} max={stock}  handleAgregar={handleAgregar}/>
                            : <Link to="/cart" className={`cardItemText btn btn-success ${!isInCart(id) ? "disabled" : ""}`}>Terminar mi compra</Link>
                    }
                </div>
            </div>
        </div>
        <button className="btn-back cardItemText btn btn-primary" onClick={handleVolver}>Seguir viendo productos</button>
        </>
    )
}

export default ItemDetail