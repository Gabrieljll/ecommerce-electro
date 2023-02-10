import "./ItemCount.css"
const ItemCount = ({ cantidad, setCantidad, max, handleAgregar}) => {

  const handleRestar = () => {
     cantidad > 1 && setCantidad(cantidad - 1)
  }

  const handleSumar = () => {
    cantidad < max && setCantidad(cantidad + 1)
  }



  return (
    <div>
        <button onClick={handleRestar} className={`cardItemText btn btn-outline-${cantidad > 1 ? "primary" : "danger"}`} disabled={cantidad===1}>-</button>
        <span className="cardItemText mx-3">{cantidad}</span>
        <button onClick={handleSumar} className={`cardItemText btn btn-${cantidad===max ? "danger" : "primary"}`} disabled={cantidad===max}>+</button>
        <br />
        <button className="cardItemText btn btn-success my-3" onClick={handleAgregar}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount