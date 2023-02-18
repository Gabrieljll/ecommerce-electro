
import "./EditProduct.css"
import { useCartContext } from "../../context/CartContext"
import { useEffect } from "react"

export const EditProduct = ({itemEdit, setItemEdit, cantidad, setCantidad, max, setMax}) => {
    const { modificarCantidadItem } = useCartContext()

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
     }
   
    const handleSumar = () => {
        cantidad < max && setCantidad(cantidad + 1)
    }

    const handleAceptar = () => {
        if(!modificarCantidadItem(itemEdit, cantidad)){
            alert('Ocurrió un error')
        } else {
            setItemEdit(null)
        }      
    }

    const handleCancelar = () => {
        setItemEdit(null)
    }

    useEffect( () => {
    },[cantidad])

    return (
            <div id="modal">
                <div className="modalBody">
                    <div className="modalDiv">
                        <h3>{itemEdit.name}</h3>
                    </div>
                    <div className="modalDiv divCantidad">
                        <div>
                            <h5>Cantidad</h5>
                        </div>
                        <div>
                            <button onClick={handleRestar} className={`cardItemText btn btn-outline-${cantidad > 1 ? "primary" : "danger"}`} disabled={cantidad===1}>-</button>
                            <span className="cardItemText mx-3">{cantidad}</span>
                            <button onClick={handleSumar} className={`cardItemText btn btn-${cantidad===max ? "danger" : "primary"}`} disabled={cantidad===max}>+</button>
                        </div>
                    </div>
                    <div className="modalDiv">
                        <button onClick={handleAceptar} className="btn btn-primary">Aceptar</button>
                        <button onClick={handleCancelar} className="btn btn-danger">Cancelar</button>
                    </div>
                </div>
            </div> 
    )

}

